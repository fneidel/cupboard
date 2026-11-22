export const headwearSubtypeOptions = [
  { label: 'Beanie', value: 'BEANIE' },
  { label: 'Beret', value: 'BERET' },
  { label: 'Cap', value: 'CAP' },
  { label: 'Hat', value: 'HAT' },
  { label: 'Sun hat', value: 'SUN_HAT' },
] as const

export const defaultHeadwearSubtype = 'BEANIE' satisfies (typeof headwearSubtypeOptions)[number]['value']
