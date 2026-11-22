export const materialOptions = [
  { label: 'Unknown', value: 'UNKNOWN' },
  { label: 'Cotton', value: 'COTTON' },
  { label: 'Cotton blend', value: 'COTTON_BLEND' },
  { label: 'Denim', value: 'DENIM' },
  { label: 'Leather', value: 'LEATHER' },
  { label: 'Faux leather', value: 'FAUX_LEATHER' },
  { label: 'Linen', value: 'LINEN' },
  { label: 'Linen blend', value: 'LINEN_BLEND' },
  { label: 'Metal', value: 'METAL' },
  { label: 'Nylon', value: 'NYLON' },
  { label: 'Plastic', value: 'PLASTIC' },
  { label: 'Polyester', value: 'POLYESTER' },
  { label: 'Silk', value: 'SILK' },
  { label: 'Silk blend', value: 'SILK_BLEND' },
  { label: 'Suede', value: 'SUEDE' },
  { label: 'Viscose', value: 'VISCOSE' },
  { label: 'Wool', value: 'WOOL' },
  { label: 'Wool blend', value: 'WOOL_BLEND' },
  { label: 'Other', value: 'OTHER' },
] as const

export const defaultMaterial = 'UNKNOWN' satisfies (typeof materialOptions)[number]['value']
