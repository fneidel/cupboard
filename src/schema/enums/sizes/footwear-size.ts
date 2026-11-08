export const footwearSizeOptions = [
  { label: 'Unknown', value: 'UNKNOWN' },
  { label: 'One size', value: 'ONE_SIZE' },
  { label: 'EU 35', value: 'EU_35' },
  { label: 'EU 36', value: 'EU_36' },
  { label: 'EU 37', value: 'EU_37' },
  { label: 'EU 38', value: 'EU_38' },
  { label: 'EU 39', value: 'EU_39' },
  { label: 'EU 40', value: 'EU_40' },
  { label: 'EU 41', value: 'EU_41' },
  { label: 'EU 42', value: 'EU_42' },
  { label: 'EU 43', value: 'EU_43' },
  { label: 'EU 44', value: 'EU_44' },
  { label: 'EU 45', value: 'EU_45' },
  { label: 'EU 46', value: 'EU_46' },
  { label: 'EU 47', value: 'EU_47' },
  { label: 'EU 48', value: 'EU_48' },
] as const

export const defaultFootwearSize = 'ONE_SIZE' satisfies (typeof footwearSizeOptions)[number]['value']
