/** @jsxRuntime classic */
/** @jsx jsx */
import { useMemo } from 'react'
import { PageContainer } from '@keystone-6/core/admin-ui/components'
import { makeDataGetter } from '@keystone-6/core/admin-ui/utils'
import { gql, useQuery } from '@keystone-6/core/admin-ui/apollo'
import { useKeystone, useList } from '@keystone-6/core/admin-ui/context'
import { Link, type LinkProps } from '@keystone-6/core/admin-ui/router'
import { Center, Heading, VisuallyHidden, jsx, useTheme } from '@keystone-ui/core'
import { PlusIcon } from '@keystone-ui/icons/icons/PlusIcon'
import { LoadingDots } from '@keystone-ui/loading'
import welcomeImage from '../assets/cupboard_system_welcome_image.png'

function ListCard({
  listKey,
  count,
  hideCreate,
}: {
  listKey: string
  hideCreate: boolean
  count:
    | { type: 'success'; count: number }
    | { type: 'no-access' }
    | { type: 'error'; message: string }
    | { type: 'loading' }
}) {
  const { colors, palette, radii, spacing } = useTheme()
  const list = useList(listKey)

  return (
    <div css={{ position: 'relative' }}>
      <Link
        href={`/${list.path}${list.isSingleton ? '/1' : ''}`}
        css={{
          backgroundColor: colors.background,
          borderColor: colors.border,
          borderRadius: radii.medium,
          borderWidth: 1,
          boxSizing: 'border-box',
          display: 'block',
          padding: spacing.large,
          textDecoration: 'none',
          width: '100%',
          ':hover': { borderColor: palette.blue400 },
          ':hover h3': { textDecoration: 'underline' },
        }}
      >
        <h3 css={{ margin: `0 0 ${spacing.small}px 0` }}>{list.label}</h3>
        {list.isSingleton ? null : count.type === 'success' ? (
          <span css={{ color: colors.foreground, textDecoration: 'none' }}>
            {count.count} item{count.count !== 1 ? 's' : ''}
          </span>
        ) : count.type === 'error' ? (
          count.message
        ) : count.type === 'loading' ? (
          <LoadingDots label={`Loading count of ${list.plural}`} size="small" tone="passive" />
        ) : (
          'No access'
        )}
      </Link>
      {!hideCreate && !list.isSingleton && (
        <CreateButton title={`Create ${list.singular}`} href={`/${list.path}/create`}>
          <PlusIcon size="large" />
          <VisuallyHidden>Create {list.singular}</VisuallyHidden>
        </CreateButton>
      )}
    </div>
  )
}

function CreateButton(props: LinkProps) {
  const theme = useTheme()

  return (
    <Link
      css={{
        alignItems: 'center',
        backgroundColor: theme.palette.neutral400,
        border: 0,
        borderRadius: theme.radii.xsmall,
        color: 'white',
        cursor: 'pointer',
        display: 'flex',
        height: 32,
        justifyContent: 'center',
        outline: 0,
        position: 'absolute',
        right: theme.spacing.large,
        top: theme.spacing.large,
        transition: 'background-color 80ms linear',
        width: 32,
        '&:hover, &:focus': {
          color: 'white',
          backgroundColor: theme.tones.positive.fill[0],
        },
      }}
      {...props}
    />
  )
}

export default function WelcomePage() {
  const { spacing } = useTheme()
  const {
    adminMeta: { lists },
    visibleLists,
  } = useKeystone()
  const query = useMemo(
    () => gql`
      query {
        keystone {
          adminMeta {
            lists {
              key
              hideCreate
            }
          }
        }
        ${Object.values(lists)
          .filter(list => !list.isSingleton)
          .map(list => `${list.key}: ${list.gqlNames.listQueryCountName}`)
          .join('\n')}
      }
    `,
    [lists]
  )
  const { data, error } = useQuery(query, { errorPolicy: 'all' })
  const dataGetter = makeDataGetter(data, error?.graphQLErrors)

  return (
    <PageContainer header={<Heading type="h3">Welcome</Heading>}>
      <div css={{ marginLeft: -spacing.xlarge, marginRight: -spacing.xlarge }}>
        <img
          alt="A collection of cupboard items"
          css={{ display: 'block', width: '100%' }}
          src={welcomeImage.src}
        />
      </div>
      <Heading type="h2">Your cupboard</Heading>
      {visibleLists.state === 'loading' ? (
        <Center css={{ minHeight: 240 }}>
          <LoadingDots label="Loading lists" size="large" tone="passive" />
        </Center>
      ) : (
        <ul
          css={{
            display: 'grid',
            gap: spacing.large,
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            marginBottom: 0,
            padding: `${spacing.xlarge}px 0`,
          }}
        >
          {(() => {
            if (visibleLists.state === 'error') {
              return (
                <span css={{ color: 'red' }}>
                  {visibleLists.error instanceof Error
                    ? visibleLists.error.message
                    : visibleLists.error[0].message}
                </span>
              )
            }

            return Object.keys(lists).map(key => {
              if (!visibleLists.lists.has(key)) {
                return null
              }

              const result = dataGetter.get(key)
              return (
                <ListCard
                  count={
                    data
                      ? result.errors
                        ? { type: 'error', message: result.errors[0].message }
                        : { type: 'success', count: data[key] }
                      : { type: 'loading' }
                  }
                  hideCreate={
                    data?.keystone.adminMeta.lists.find((list: { key: string }) => list.key === key)
                      ?.hideCreate ?? false
                  }
                  key={key}
                  listKey={key}
                />
              )
            })
          })()}
        </ul>
      )}
    </PageContainer>
  )
}
