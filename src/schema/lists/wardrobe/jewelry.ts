import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { float, select } from '@keystone-6/core/fields'
import { defaultJewelrySubtype, jewelrySubtypeOptions } from '../../enums/subtypes/jewelry-subtype'
import { createCommonWardrobeFields } from '../../fields/common-wardrobe-fields'

export const Jewelry = list({
  access: allowAll,
  graphql: { plural: 'JewelryItems' },
  fields: {
    ...createCommonWardrobeFields({
      brand: 'Brand.jewelryItems',
      source: 'Source.jewelryItems',
    }),
    subType: select({
      options: jewelrySubtypeOptions,
      type: 'enum',
      defaultValue: defaultJewelrySubtype,
      validation: { isRequired: true },
      db: { map: 'sub_type' },
    }),
    lengthCm: float({
      db: { isNullable: true, map: 'length_cm' },
    }),
  },
})
