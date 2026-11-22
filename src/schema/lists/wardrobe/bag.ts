import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { select } from '@keystone-6/core/fields'
import { bagSubtypeOptions, defaultBagSubtype } from '../../enums/subtypes/bag-subtype'
import { createCommonWardrobeFields } from '../../fields/common-wardrobe-fields'

export const Bag = list({
  access: allowAll,
  ui: { listView: { initialColumns: ['name', 'brand', 'image'] } },
  fields: {
    ...createCommonWardrobeFields({
      brand: 'Brand.bags',
      location: 'Location.bags',
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
