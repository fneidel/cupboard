import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { select } from '@keystone-6/core/fields'
import { defaultHosierySize, hosierySizeOptions } from '../../enums/sizes/hosiery-size'
import { defaultHosierySubtype, hosierySubtypeOptions } from '../../enums/subtypes/hosiery-subtype'
import { createCommonWardrobeFields } from '../../fields/common-wardrobe-fields'
import { createOriginalSizeField, createWarmthLevelField } from '../../fields/family-fields'

export const Hosiery = list({
  access: allowAll,
  graphql: { plural: 'HosieryItems' },
  fields: {
    ...createCommonWardrobeFields({
      brand: 'Brand.hosieryItems',
      source: 'Source.hosieryItems',
    }),
    subType: select({
      options: hosierySubtypeOptions,
      type: 'enum',
      defaultValue: defaultHosierySubtype,
      validation: { isRequired: true },
      db: { map: 'sub_type' },
    }),
    size: select({
      options: hosierySizeOptions,
      type: 'enum',
      defaultValue: defaultHosierySize,
      validation: { isRequired: true },
    }),
    warmthLevel: createWarmthLevelField(),
    originalSize: createOriginalSizeField(),
  },
})
