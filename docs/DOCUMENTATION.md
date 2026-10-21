# How Cupboard works

Cupboard is a personal wardrobe inventory. Its purpose is to record what an item is, where it came from, and the information needed to find or compare it later.

## The wardrobe story

An item belongs to one concrete family: clothing, footwear, hosiery, jewelry, a bag, an accessory, or headwear. This prevents meaningless information: jewelry has a length, but not a clothing fit or warmth level.

```mermaid
flowchart LR
    Item[Add an item] --> Family[Choose its family]
    Family --> Details[Enter only relevant details]
    Details --> Brand[Assign Brand]
    Details --> Source[Assign Source]
    Brand --> Saved[Save in its family table]
    Source --> Saved
```

Each family has its own database table. The table itself is the broad category, while `subType` describes the specific kind inside that family: for example, `Clothing → JEANS` or `Jewelry → EARRINGS`.

## Shared item information

All wardrobe families keep their own copy of the shared item information: name, brand, source, notes, image path, material, and whether maintenance is needed. Keeping these columns in each table makes every family usable on its own and avoids a large table full of irrelevant empty fields.

`Brand` and `Source` are lookup records, not enums. They are stored in the database because they can grow naturally as the wardrobe grows. The Admin UI can add a new brand or source without changing code.

Material, fit, warmth, size, and subtype are different: they are controlled application enums. Their allowed values live in `src/schema/enums/` so the application presents consistent choices and avoids spelling variants such as `blue jeans`, `Blue Jeans`, or `jeans` for the same kind of value.

## Unknown is a valid state

Not knowing a brand or source should not stop someone from recording an item. The first database migration creates these two permanent fallback records:

```text
Brand  id: 1, name: UNKNOWN
Source id: 1, name: UNKNOWN
```

Every wardrobe item defaults its `brand_id` and `source_id` to those records. Required enum fields also have sensible defaults: material is `UNKNOWN`, fit is `REGULAR`, warmth is `NORMAL`, and size is `ONE_SIZE`. Each family also has a valid initial subtype default.

## Database change and seed story

`src/schema/` is the model definition that developers edit. Keystone turns it into a Prisma schema, and a migration turns that schema change into versioned SQL. Migrations are the shared history of how every database reaches the same structure.

The initial migration owns the tables, defaults, foreign keys, and the two `UNKNOWN` records. It is intentionally not recreated by application startup.

`scripts/seed-lookups.ts` is for additional initial brands and sources only. It first checks that the migration-created `UNKNOWN` records exist, then adds configured lookups with upserts. An upsert means it can run again without duplicates. It does not seed enum values because enums are code, not database rows.

```mermaid
flowchart LR
    Schema[src/schema definitions] --> Migration[Versioned SQL migration]
    Migration --> Database[Tables + defaults + UNKNOWN]
    Database --> Seed[Seed additional lookup records]
    Seed --> Admin[Admin UI manages later brands and sources]
```

## Where to look

| Location | Why it exists |
| --- | --- |
| `src/schema/lists/` | Defines what each wardrobe family can store. |
| `src/schema/fields/` | Keeps common field rules consistent across families. |
| `src/schema/enums/` | Defines controlled choices and their defaults. |
| `migrations/` | Records permanent database structure changes. |
| `scripts/seed-lookups.ts` | Adds repeatable initial lookup data after migrations. |
| `storage/wardrobe-images/` | Holds local image files for V1. |
