import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { checkbox, select } from '@keystone-6/core/fields'
import { defaultFootwearSize, footwearSizeOptions } from '../../enums/sizes/footwear-size'
import { defaultFootwearSubtype, footwearSubtypeOptions } from '../../enums/subtypes/footwear-subtype'
import { createCommonWardrobeFields } from '../../fields/common-wardrobe-fields'
import { createFitField, createOriginalSizeField, createWarmthLevelField } from '../../fields/family-fields'

export const Footwear = list({
  access: allowAll,
  graphql: { plural: 'FootwearItems' },
  fields: {
    ...createCommonWardrobeFields({
      brand: 'Brand.footwearItems',
      source: 'Source.footwearItems',
    }),
    subType: select({
      options: footwearSubtypeOptions,
      type: 'enum',
      defaultValue: defaultFootwearSubtype,
      validation: { isRequired: true },
      db: { map: 'sub_type' },
    }),
    size: select({
      options: footwearSizeOptions,
      type: 'enum',
      defaultValue: defaultFootwearSize,
      validation: { isRequired: true },
    }),
    fit: createFitField(),
    warmthLevel: createWarmthLevelField(),
    isSlipResistant: checkbox({
      defaultValue: false,
      db: { map: 'is_slip_resistant' },
    }),
    originalSize: createOriginalSizeField(),
  },
})
