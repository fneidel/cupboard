import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { checkbox, relationship, text, timestamp, select, integer, float, image } from '@keystone-6/core/fields'
import { document } from '@keystone-6/fields-document';
import type { Lists } from '.keystone/types'

export const lists = {
  Ingredient: list({
    access: allowAll,
    fields: {
      title: text({ validation: {isRequired: true}}),
      description: text(),
      unitAmount: integer({defaultValue: 100, validation: {isRequired: true}}),
      unitLabel: text({defaultValue: "g", validation: {isRequired: true}}),
      kcal: integer(),
      carbs: float(),
      sugar: float({ label: "davon Zucker" }),
      fat: float(),
      saturatedFat: float({ label: "davon gesättigte Fettsäuren" }),
      unsaturatedFat: float({ label: "davon ungesättigte Fettsäuren" }),
      protein: float(),
      salt: float(),
    }
  }),
  Amount: list({
    access: allowAll,
    ui: {
      label: "Menge"
    },
    fields: {
      title: text({
        validation: {isRequired: true},
        ui: {
          description: `Gibt dieser Menge einen erklärenden Namen.
z.B.: 1 TL Salz, 3 Äpfel, 200g Mehl`
        }
      }),
      ingredient: relationship({ ref: 'Ingredient', many: false }),
      amount: float({
        defaultValue: 1,
        validation: {isRequired: true},
        ui: {
          description: `Die Menge bezieht sich auf die in der Zutat angegebene Einheit (z.B. 100g).
Wenn beispielsweise 250g benötigt werden wäre die Menge: 2.5 (weil 2.5*100g)`
        }
      }),
    },
  }),
  Recipe: list({
    access: allowAll,
    fields: {
      title: text({ validation: {isRequired: true}}),
      ingredients: relationship({ ref: 'Amount', many: true }),
      image: image({ storage: "img_s3" }),
      description: document({
        formatting: true,
        links: true,
      }),
      servingSize: integer({defaultValue: 1, validation: {isRequired: true}}),
    }
  }),
} satisfies Lists
