

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
    users(res: ResolverFn) {
      return [
        { id: 1, firstName: 'Maratib Ali', lastName: 'Khan' },
        { id: 2, firstName: 'Shahroz Ali', lastName: 'Khan' },
        { id: 3, firstName: 'Waleed Ali', lastName: 'Khan' },
        { id: 4, firstName: 'Musa', lastName: 'Khan' },
      ]
    },
  }, //Query ends
}

export default resolvers;