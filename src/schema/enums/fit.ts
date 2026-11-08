export const fitOptions = [
  { label: 'Very tight', value: 'VERY_TIGHT' },
  { label: 'Tight', value: 'TIGHT' },
  { label: 'Regular', value: 'REGULAR' },
  { label: 'Loose', value: 'LOOSE' },
  { label: 'Oversized', value: 'OVERSIZED' },
] as const

export const defaultFit = 'REGULAR' satisfies (typeof fitOptions)[number]['value']
