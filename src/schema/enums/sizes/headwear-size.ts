export const headwearSizeOptions = [
  'UNKNOWN',
  'ONE_SIZE',
  'XS',
  'S',
  'M',
  'L',
  'XL',
] as const

export const defaultHeadwearSize = 'ONE_SIZE' satisfies (typeof headwearSizeOptions)[number]
