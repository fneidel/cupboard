export const accessorySubtypeOptions = [
  'BELT',
  'SCARF',
  'GLOVES',
  'SUNGLASSES',
  'HAIR_ACCESSORY',
] as const

export const defaultAccessorySubtype = 'BELT' satisfies (typeof accessorySubtypeOptions)[number]
