export const warmthLevelOptions = [
  { label: 'Very light', value: 'VERY_LIGHT' },
  { label: 'Light', value: 'LIGHT' },
  { label: 'Normal', value: 'NORMAL' },
  { label: 'Warm', value: 'WARM' },
  { label: 'Very warm', value: 'VERY_WARM' },
] as const

export const defaultWarmthLevel = 'NORMAL' satisfies (typeof warmthLevelOptions)[number]['value']
