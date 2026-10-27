export const headwearSubtypeOptions = ['BEANIE', 'BERET', 'CAP', 'HAT', 'SUN_HAT'] as const

export const defaultHeadwearSubtype = 'BEANIE' satisfies (typeof headwearSubtypeOptions)[number]
