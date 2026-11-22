import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import { ListNavItems, NavigationContainer, NavItem } from '@keystone-6/core/admin-ui/components'

import type { NavigationProps } from '@keystone-6/core/admin-ui/components'

function RedirectAfterCreate() {
  const router = useRouter()

  useEffect(() => {
    const createPath = router.asPath.split(/[?#]/)[0]
    const match = /^\/([^/]+)\/create$/.exec(createPath)

    if (!match) {
      return
    }

    const listPath = match[1]
    const originalPush = router.push

    router.push = (url, as, options) => {
      const targetPath = typeof url === 'string' ? url : url.pathname ?? ''
      const itemPath = new RegExp(`^/${listPath}/[^/?#]+(?:[?#]|$)`)

      if (itemPath.test(targetPath)) {
        window.location.assign(createPath)
        return Promise.resolve(true)
      }

      return originalPush(url, as, options)
    }

    return () => {
      router.push = originalPush
    }
  }, [router, router.asPath])

  return null
}

export function CustomNavigation ({ lists, authenticatedItem }: NavigationProps) {
  return (
    <>
      <style>{`
        label:has(+ div input[readonly]) {
          display: none;
        }

        label:has(+ div input[readonly]) + div {
          display: none;
        }
      `}</style>
      <RedirectAfterCreate />
      <NavigationContainer authenticatedItem={authenticatedItem}>
        <NavItem href="/welcome">Welcome</NavItem>
        <ListNavItems lists={lists} />
      </NavigationContainer>
    </>
  )
}
