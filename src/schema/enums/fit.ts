export const fitOptions = [
  'VERY_TIGHT',
  'TIGHT',
  'REGULAR',
  'LOOSE',
  'OVERSIZED',
] as const

export const defaultFit = 'REGULAR' satisfies (typeof fitOptions)[number]
