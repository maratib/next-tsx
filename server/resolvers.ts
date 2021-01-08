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
      return allUsers;

      // return [
      //   { id: 1, firstName: 'Maratib Ali', lastName: 'Khan' },
      //   { id: 2, firstName: 'Shahroz Ali', lastName: 'Khan' },
      //   { id: 3, firstName: 'Waleed Ali', lastName: 'Khan' },
      //   { id: 4, firstName: 'Musa', lastName: 'Khan' },
      // ]
    },
  }, //Query ends
}

export default resolvers;