export const bagSubtypeOptions = [
  { label: 'Handbag', value: 'HANDBAG' },
  { label: 'Crossbody', value: 'CROSSBODY' },
  { label: 'Shoulder bag', value: 'SHOULDER_BAG' },
  { label: 'Tote', value: 'TOTE' },
  { label: 'Backpack', value: 'BACKPACK' },
  { label: 'Clutch', value: 'CLUTCH' },
  { label: 'Belt bag', value: 'BELT_BAG' },
] as const

export const defaultBagSubtype = 'HANDBAG' satisfies (typeof bagSubtypeOptions)[number]['value']
