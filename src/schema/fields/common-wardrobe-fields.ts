import { checkbox, relationship, select, text } from '@keystone-6/core/fields'
import { defaultMaterial, materialOptions } from '../enums/material'

type LookupReferences = {
  brand: string
  source: string
}

const requiredLookupReference = (ref: string, column: string) =>
  relationship({
    ref,
    db: {
      foreignKey: { map: column },
      extendPrismaSchema: field =>
        field
          .replace('? @relation', ' @relation')
          .replace('Id Int? @map', 'Id Int @default(1) @map'),
    },
  })

export const createCommonWardrobeFields = (references: LookupReferences) => ({
  name: text({ validation: { isRequired: true } }),
  brand: requiredLookupReference(references.brand, 'brand_id'),
  source: requiredLookupReference(references.source, 'source_id'),
  notes: text({
    ui: { displayMode: 'textarea' },
    defaultValue: null,
    db: { isNullable: true },
  }),
  imagePath: text({
    defaultValue: null,
    db: { isNullable: true, map: 'image_path' },
  }),
  material: select({
    options: materialOptions,
    type: 'enum',
    defaultValue: defaultMaterial,
    validation: { isRequired: true },
  }),
  requiresMaintenance: checkbox({
    defaultValue: false,
    db: { map: 'requires_maintenance' },
  }),
})
