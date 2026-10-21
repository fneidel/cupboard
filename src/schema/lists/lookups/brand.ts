import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { relationship, text } from '@keystone-6/core/fields'

export const Brand = list({
  access: allowAll,
  fields: {
    name: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
    }),
    clothingItems: relationship({ ref: 'Clothing.brand', many: true }),
    footwearItems: relationship({ ref: 'Footwear.brand', many: true }),
    hosieryItems: relationship({ ref: 'Hosiery.brand', many: true }),
    jewelryItems: relationship({ ref: 'Jewelry.brand', many: true }),
    bags: relationship({ ref: 'Bag.brand', many: true }),
    accessories: relationship({ ref: 'Accessory.brand', many: true }),
    headwearItems: relationship({ ref: 'Headwear.brand', many: true }),
  },
})
