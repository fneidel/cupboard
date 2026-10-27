export const jewelrySubtypeOptions = [
  'EARRINGS',
  'NECKLACE',
  'BRACELET',
  'ANKLET',
  'RING',
  'WATCH',
] as const

export const defaultJewelrySubtype = 'EARRINGS' satisfies (typeof jewelrySubtypeOptions)[number]
