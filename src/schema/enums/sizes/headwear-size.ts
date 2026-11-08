export const headwearSizeOptions = [
  { label: 'Unknown', value: 'UNKNOWN' },
  { label: 'One size', value: 'ONE_SIZE' },
  { label: 'XS', value: 'XS' },
  { label: 'S', value: 'S' },
  { label: 'M', value: 'M' },
  { label: 'L', value: 'L' },
  { label: 'XL', value: 'XL' },
] as const

export const defaultHeadwearSize = 'ONE_SIZE' satisfies (typeof headwearSizeOptions)[number]['value']
