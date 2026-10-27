import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { select } from '@keystone-6/core/fields'
import { accessorySubtypeOptions, defaultAccessorySubtype } from '../../enums/subtypes/accessory-subtype'
import { createCommonWardrobeFields } from '../../fields/common-wardrobe-fields'
import { createOriginalSizeField, createWarmthLevelField } from '../../fields/family-fields'

export const Accessory = list({
  access: allowAll,
  fields: {
    ...createCommonWardrobeFields({
      brand: 'Brand.accessories',
      source: 'Source.accessories',
    }),
    subType: select({
      options: accessorySubtypeOptions,
      type: 'enum',
      defaultValue: defaultAccessorySubtype,
      validation: { isRequired: true },
      db: { map: 'sub_type' },
    }),
    warmthLevel: createWarmthLevelField(true),
    originalSize: createOriginalSizeField(),
  },
})
