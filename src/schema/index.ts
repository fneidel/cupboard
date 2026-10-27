import type { Lists } from '../../.keystone/types'
import { Brand } from './lists/lookups/brand'
import { Source } from './lists/lookups/source'
import { Accessory } from './lists/wardrobe/accessory'
import { Bag } from './lists/wardrobe/bag'
import { Clothing } from './lists/wardrobe/clothing'
import { Footwear } from './lists/wardrobe/footwear'
import { Headwear } from './lists/wardrobe/headwear'
import { Hosiery } from './lists/wardrobe/hosiery'
import { Jewelry } from './lists/wardrobe/jewelry'

export const lists = {
  Brand,
  Source,
  Clothing,
  Footwear,
  Hosiery,
  Jewelry,
  Bag,
  Accessory,
  Headwear,
} satisfies Lists
