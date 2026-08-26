import React from 'react'

import { ListNavItems, NavigationContainer, NavItem } from '@keystone-6/core/admin-ui/components'

import type { NavigationProps } from '@keystone-6/core/admin-ui/components'

export function CustomNavigation ({ lists, authenticatedItem }: NavigationProps) {
 // lists.filter( ({key}) => !["Amount"].includes(key) )
  return (
    <NavigationContainer authenticatedItem={authenticatedItem}>
      <NavItem href="/welcome">Welcome</NavItem>
      <ListNavItems lists={lists} />
    </NavigationContainer>
  )
}
