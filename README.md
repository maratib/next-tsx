
## Prisma notes
```bash
yarn add -D @prisma/cli
yarn add @prisma/client

npx prisma init

npx prisma migrate dev --name init --preview-feature

prisma generate
```

## .env notes
```bash
# Local Variables accessable at the server only
DATABASE_URL="mysql://temp:temp@localhost:3306/boma"


# Public Variables accessable at the clientside as well
NEXT_PUBLIC_HELLO="Greetings from server"
```