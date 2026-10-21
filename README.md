# Cupboard

Cupboard is a Keystone 6 wardrobe inventory backed by SQLite.

## Initial setup

Install dependencies and create the local environment file:

```sh
pnpm install
cp .env.example .env
```

Create the database from the committed migrations, then run the lookup seed:

```sh
pnpm db:deploy
pnpm db:seed
```

## Start the application

After completing the initial setup, start Keystone:

```sh
pnpm dev
```

The Admin UI is available at `http://localhost:3000`.

## Database development

Change the TypeScript list definitions under `src/schema/`; do not edit generated `schema.prisma`, `schema.graphql`, or `.keystone` files.

Generate a development migration after changing the schema:

```sh
pnpm db:migrate -- --name describe_the_change
```

Apply committed migrations in a fresh or deployed environment with `pnpm db:deploy`. Run `pnpm db:seed` afterward to add configured lookup records safely.

Prisma 5.12, pinned by the installed Keystone version, reads its seed command from the `prisma.seed` property in `package.json`. This is the supported equivalent of the `prisma.config.ts` setup described by the V1 specification for newer Prisma versions.

Local wardrobe images belong in `storage/wardrobe-images/`.
