export const bagSubtypeOptions = [
  'HANDBAG',
  'CROSSBODY',
  'SHOULDER_BAG',
  'TOTE',
  'BACKPACK',
  'CLUTCH',
  'BELT_BAG',
] as const

export const defaultBagSubtype = 'HANDBAG' satisfies (typeof bagSubtypeOptions)[number]
