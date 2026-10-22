export const warmthLevelOptions = [
  'VERY_LIGHT',
  'LIGHT',
  'NORMAL',
  'WARM',
  'VERY_WARM',
] as const

export const defaultWarmthLevel = 'NORMAL' satisfies (typeof warmthLevelOptions)[number]
