
## Prisma notes
```bash
yarn add -D @prisma/cli
yarn add @prisma/client

Prisma is a modern DB toolkit to query, migrate and model your database (https://prisma.io)
Usage
  $ prisma [command]
Commands
            init   Setup Prisma for your app
      introspect   Get the datamodel of your database
        generate   Generate artifacts (e.g. Prisma Client)
          studio   Open Prisma Studio
          format   Format your schema
         migrate   Migrate your database (Preview)
              db   Manage your database schema and lifecycle (Preview)
Flags
     --preview-feature   Run Preview Prisma commands
Examples
  Setup a new Prisma project
  $ prisma init
  Introspect an existing database
  $ prisma introspect
  Generate artifacts (e.g. Prisma Client)
  $ prisma generate
  Browse your data
  $ prisma studio
  Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
  $ prisma migrate dev --preview-feature
  Push the Prisma schema state to the database
  $ prisma db push --preview-feature

```

## .env notes
```bash
# Local Variables accessible at the server only
DATABASE_URL="mysql://temp:temp@localhost:3306/test"


# Public Variables accessible at the clientside as well
NEXT_PUBLIC_HELLO="Greetings from server"
```