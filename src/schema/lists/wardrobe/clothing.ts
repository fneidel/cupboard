import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { select } from '@keystone-6/core/fields'
import { clothingSizeOptions, defaultClothingSize } from '../../enums/sizes/clothing-size'
import { clothingSubtypeOptions, defaultClothingSubtype } from '../../enums/subtypes/clothing-subtype'
import { usageContextOptions } from '../../enums/usage-context'
import { createCommonWardrobeFields } from '../../fields/common-wardrobe-fields'
import { createFitField, createOriginalSizeField, createWarmthLevelField } from '../../fields/family-fields'

export const Clothing = list({
  access: allowAll,
  graphql: { plural: 'ClothingItems' },
  fields: {
    ...createCommonWardrobeFields({
      brand: 'Brand.clothingItems',
      source: 'Source.clothingItems',
    }),
    subType: select({
      options: clothingSubtypeOptions,
      type: 'enum',
      defaultValue: defaultClothingSubtype,
      validation: { isRequired: true },
      db: { map: 'sub_type' },
    }),
    size: select({
      options: clothingSizeOptions,
      type: 'enum',
      defaultValue: defaultClothingSize,
      validation: { isRequired: true },
    }),
    fit: createFitField(),
    warmthLevel: createWarmthLevelField(),
    originalSize: createOriginalSizeField(),
    usageContext: select({
      options: usageContextOptions,
      type: 'enum',
      db: { isNullable: true, map: 'usage_context' },
    }),
  },
})
