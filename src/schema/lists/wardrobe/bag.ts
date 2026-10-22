import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { select } from '@keystone-6/core/fields'
import { bagSubtypeOptions, defaultBagSubtype } from '../../enums/subtypes/bag-subtype'
import { createCommonWardrobeFields } from '../../fields/common-wardrobe-fields'

export const Bag = list({
  access: allowAll,
  fields: {
    ...createCommonWardrobeFields({
      brand: 'Brand.bags',
      source: 'Source.bags',
    }),
    subType: select({
      options: bagSubtypeOptions,
      type: 'enum',
      defaultValue: defaultBagSubtype,
      validation: { isRequired: true },
      db: { map: 'sub_type' },
    }),
  },
})
