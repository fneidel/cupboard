export const footwearSubtypeOptions = [
  { label: 'Sneakers', value: 'SNEAKERS' },
  { label: 'Sport shoes', value: 'SPORT_SHOES' },
  { label: 'Boots', value: 'BOOTS' },
  { label: 'Ankle boots', value: 'ANKLE_BOOTS' },
  { label: 'Sandals', value: 'SANDALS' },
  { label: 'Flats', value: 'FLATS' },
  { label: 'Heels', value: 'HEELS' },
  { label: 'Loafers', value: 'LOAFERS' },
] as const

export const defaultFootwearSubtype = 'SNEAKERS' satisfies (typeof footwearSubtypeOptions)[number]['value']
