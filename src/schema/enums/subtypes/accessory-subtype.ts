export const accessorySubtypeOptions = [
  { label: 'Belt', value: 'BELT' },
  { label: 'Scarf', value: 'SCARF' },
  { label: 'Gloves', value: 'GLOVES' },
  { label: 'Sunglasses', value: 'SUNGLASSES' },
  { label: 'Hair accessory', value: 'HAIR_ACCESSORY' },
] as const

export const defaultAccessorySubtype = 'BELT' satisfies (typeof accessorySubtypeOptions)[number]['value']
