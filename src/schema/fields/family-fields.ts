import { select, text } from '@keystone-6/core/fields'
import { defaultFit, fitOptions } from '../enums/fit'
import { defaultWarmthLevel, warmthLevelOptions } from '../enums/warmth-level'

export const createFitField = () =>
  select({
    options: fitOptions,
    type: 'enum',
    defaultValue: defaultFit,
    validation: { isRequired: true },
  })

export const createWarmthLevelField = (isNullable = false) =>
  select({
    options: warmthLevelOptions,
    type: 'enum',
    defaultValue: isNullable ? undefined : defaultWarmthLevel,
    validation: { isRequired: !isNullable },
    db: { isNullable, map: 'warmth_level' },
  })

export const createOriginalSizeField = () =>
  text({
    defaultValue: null,
    db: { isNullable: true, map: 'original_size' },
  })
