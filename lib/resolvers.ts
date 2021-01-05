const resolvers = {
  Query: {
    users(_: any, args: any, context: any) {
      return [{ id: 1, firstName: 'Next 1', lastName: 'Khan 1' }]
    },
  },
}

export default resolvers;