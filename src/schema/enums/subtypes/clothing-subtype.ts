export const clothingSubtypeOptions = [
  'T_SHIRT',
  'SHIRT',
  'BLOUSE',
  'TOP',
  'PULLOVER',
  'CARDIGAN',
  'JACKET',
  'COAT',
  'TROUSERS',
  'JEANS',
  'LEGGINGS',
  'SHORTS',
  'SKIRT',
  'DRESS',
  'SWIMSUIT',
  'BIKINI_TOP',
  'BIKINI_BOTTOM',
] as const

export const defaultClothingSubtype = 'T_SHIRT' satisfies (typeof clothingSubtypeOptions)[number]
