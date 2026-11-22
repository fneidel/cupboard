export const clothingSubtypeOptions = [
  { label: 'T-shirt', value: 'T_SHIRT' },
  { label: 'Shirt', value: 'SHIRT' },
  { label: 'Blouse', value: 'BLOUSE' },
  { label: 'Top', value: 'TOP' },
  { label: 'Pullover', value: 'PULLOVER' },
  { label: 'Cardigan', value: 'CARDIGAN' },
  { label: 'Jacket', value: 'JACKET' },
  { label: 'Coat', value: 'COAT' },
  { label: 'Trousers', value: 'TROUSERS' },
  { label: 'Jeans', value: 'JEANS' },
  { label: 'Leggings', value: 'LEGGINGS' },
  { label: 'Shorts', value: 'SHORTS' },
  { label: 'Skirt', value: 'SKIRT' },
  { label: 'Dress', value: 'DRESS' },
  { label: 'Swimsuit', value: 'SWIMSUIT' },
  { label: 'Bikini top', value: 'BIKINI_TOP' },
  { label: 'Bikini bottom', value: 'BIKINI_BOTTOM' },
] as const

export const defaultClothingSubtype = 'T_SHIRT' satisfies (typeof clothingSubtypeOptions)[number]['value']
