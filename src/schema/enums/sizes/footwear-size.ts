export const footwearSizeOptions = [
  'UNKNOWN',
  'ONE_SIZE',
  'EU_35',
  'EU_36',
  'EU_37',
  'EU_38',
  'EU_39',
  'EU_40',
  'EU_41',
  'EU_42',
  'EU_43',
  'EU_44',
  'EU_45',
  'EU_46',
  'EU_47',
  'EU_48',
] as const

export const defaultFootwearSize = 'ONE_SIZE' satisfies (typeof footwearSizeOptions)[number]
