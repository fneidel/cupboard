export const jewelrySubtypeOptions = [
  { label: 'Earrings', value: 'EARRINGS' },
  { label: 'Necklace', value: 'NECKLACE' },
  { label: 'Bracelet', value: 'BRACELET' },
  { label: 'Anklet', value: 'ANKLET' },
  { label: 'Ring', value: 'RING' },
  { label: 'Watch', value: 'WATCH' },
] as const

export const defaultJewelrySubtype = 'EARRINGS' satisfies (typeof jewelrySubtypeOptions)[number]['value']
