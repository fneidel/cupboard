export const footwearSubtypeOptions = [
  'SNEAKERS',
  'SPORT_SHOES',
  'BOOTS',
  'ANKLE_BOOTS',
  'SANDALS',
  'FLATS',
  'HEELS',
  'LOAFERS',
] as const

export const defaultFootwearSubtype = 'SNEAKERS' satisfies (typeof footwearSubtypeOptions)[number]
