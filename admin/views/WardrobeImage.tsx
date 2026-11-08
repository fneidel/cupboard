/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@keystone-ui/core'

export { CardValue, controller, Field } from '@keystone-6/core/fields/types/image/views'

type ImageCellProps = {
  field: { path: string }
  item: Record<string, { url: string } | null>
}

export const Cell = ({ item, field }: ImageCellProps) => {
  const image = item[field.path]

  if (!image) {
    return null
  }

  return (
    <img
      alt=""
      css={{
        display: 'block',
        objectFit: 'contain',
        height: 160,
        width: 160
      }}
      src={image.url}
    />
  )
}
