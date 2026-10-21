export const clothingSizeOptions = [
  'UNKNOWN',
  'ONE_SIZE',
  'XXS',
  'XS',
  'S',
  'M',
  'L',
  'XL',
  'XXL',
  'XXXL',
] as const

export const defaultClothingSize = 'ONE_SIZE' satisfies (typeof clothingSizeOptions)[number]
