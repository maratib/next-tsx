import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export interface Context {
  models: {};
}

type ResolverFn = (parent: any, args: any, ctx: Context) => any;
// interface ResolverMap {
//   [field: string]: ResolverFn;
// }

// interface Resolvers {
//   Query: ResolverMap

// }

const resolvers = {
  Query: {
    async users(res: ResolverFn) {

      const allUsers = await prisma.user.findMany({
        include: {
          props: true
        }
      });
      console.log(allUsers);
      console.log(process.env.NEXT_PUBLIC_HELLO);

      return allUsers;
    },
  }, //Query ends
}

export default resolvers;