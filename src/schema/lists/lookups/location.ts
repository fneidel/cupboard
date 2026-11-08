import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { relationship, text } from '@keystone-6/core/fields'

export const Location = list({
  access: allowAll,
  ui: {
    listView: { initialColumns: ['name'] },
  },
  fields: {
    name: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
    }),
    clothingItems: relationship({ ref: 'Clothing.location', many: true }),
    footwearItems: relationship({ ref: 'Footwear.location', many: true }),
    hosieryItems: relationship({ ref: 'Hosiery.location', many: true }),
    jewelryItems: relationship({ ref: 'Jewelry.location', many: true }),
    bags: relationship({ ref: 'Bag.location', many: true }),
    accessories: relationship({ ref: 'Accessory.location', many: true }),
    headwearItems: relationship({ ref: 'Headwear.location', many: true }),
  },
})
