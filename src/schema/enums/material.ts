export const materialOptions = [
  'UNKNOWN',
  'COTTON',
  'COTTON_BLEND',
  'DENIM',
  'LEATHER',
  'FAUX_LEATHER',
  'LINEN',
  'LINEN_BLEND',
  'METAL',
  'NYLON',
  'PLASTIC',
  'POLYESTER',
  'SILK',
  'SILK_BLEND',
  'SUEDE',
  'VISCOSE',
  'WOOL',
  'WOOL_BLEND',
  'OTHER',
] as const

export const defaultMaterial = 'UNKNOWN' satisfies (typeof materialOptions)[number]
