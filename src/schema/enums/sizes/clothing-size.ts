export const clothingSizeOptions = [
  { label: 'Unknown', value: 'UNKNOWN' },
  { label: 'One size', value: 'ONE_SIZE' },
  { label: 'XXS', value: 'XXS' },
  { label: 'XS', value: 'XS' },
  { label: 'S', value: 'S' },
  { label: 'M', value: 'M' },
  { label: 'L', value: 'L' },
  { label: 'XL', value: 'XL' },
  { label: 'XXL', value: 'XXL' },
  { label: 'XXXL', value: 'XXXL' },
] as const

export const defaultClothingSize = 'ONE_SIZE' satisfies (typeof clothingSizeOptions)[number]['value']
