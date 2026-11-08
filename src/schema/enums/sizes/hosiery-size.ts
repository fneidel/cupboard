export const hosierySizeOptions = [
  { label: 'Unknown', value: 'UNKNOWN' },
  { label: 'One size', value: 'ONE_SIZE' },
  { label: 'XS', value: 'XS' },
  { label: 'S', value: 'S' },
  { label: 'M', value: 'M' },
  { label: 'L', value: 'L' },
  { label: 'XL', value: 'XL' },
  { label: 'XXL', value: 'XXL' },
] as const

export const defaultHosierySize = 'ONE_SIZE' satisfies (typeof hosierySizeOptions)[number]['value']
