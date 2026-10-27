import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { select } from '@keystone-6/core/fields'
import { defaultHeadwearSize, headwearSizeOptions } from '../../enums/sizes/headwear-size'
import { defaultHeadwearSubtype, headwearSubtypeOptions } from '../../enums/subtypes/headwear-subtype'
import { createCommonWardrobeFields } from '../../fields/common-wardrobe-fields'
import { createFitField, createOriginalSizeField, createWarmthLevelField } from '../../fields/family-fields'

export const Headwear = list({
  access: allowAll,
  graphql: { plural: 'HeadwearItems' },
  fields: {
    ...createCommonWardrobeFields({
      brand: 'Brand.headwearItems',
      source: 'Source.headwearItems',
    }),
    subType: select({
      options: headwearSubtypeOptions,
      type: 'enum',
      defaultValue: defaultHeadwearSubtype,
      validation: { isRequired: true },
      db: { map: 'sub_type' },
    }),
    size: select({
      options: headwearSizeOptions,
      type: 'enum',
      defaultValue: defaultHeadwearSize,
      validation: { isRequired: true },
    }),
    fit: createFitField(),
    warmthLevel: createWarmthLevelField(),
    originalSize: createOriginalSizeField(),
  },
})
