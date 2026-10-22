export const hosierySizeOptions = [
  'UNKNOWN',
  'ONE_SIZE',
  'XS',
  'S',
  'M',
  'L',
  'XL',
  'XXL',
] as const

export const defaultHosierySize = 'ONE_SIZE' satisfies (typeof hosierySizeOptions)[number]
