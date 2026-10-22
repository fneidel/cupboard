export const hosierySubtypeOptions = [
  'SOCKS',
  'KNEE_HIGH_SOCKS',
  'TIGHTS',
  'STOCKINGS',
  'LEG_WARMERS',
] as const

export const defaultHosierySubtype = 'SOCKS' satisfies (typeof hosierySubtypeOptions)[number]
