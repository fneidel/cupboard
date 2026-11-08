export const hosierySubtypeOptions = [
  { label: 'Socks', value: 'SOCKS' },
  { label: 'Knee-high socks', value: 'KNEE_HIGH_SOCKS' },
  { label: 'Tights', value: 'TIGHTS' },
  { label: 'Stockings', value: 'STOCKINGS' },
  { label: 'Leg warmers', value: 'LEG_WARMERS' },
] as const

export const defaultHosierySubtype = 'SOCKS' satisfies (typeof hosierySubtypeOptions)[number]['value']
