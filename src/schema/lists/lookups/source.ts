import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { relationship, text } from '@keystone-6/core/fields'

export const Source = list({
  access: allowAll,
  fields: {
    name: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
    }),
    clothingItems: relationship({ ref: 'Clothing.source', many: true }),
    footwearItems: relationship({ ref: 'Footwear.source', many: true }),
    hosieryItems: relationship({ ref: 'Hosiery.source', many: true }),
    jewelryItems: relationship({ ref: 'Jewelry.source', many: true }),
    bags: relationship({ ref: 'Bag.source', many: true }),
    accessories: relationship({ ref: 'Accessory.source', many: true }),
    headwearItems: relationship({ ref: 'Headwear.source', many: true }),
  },
})
