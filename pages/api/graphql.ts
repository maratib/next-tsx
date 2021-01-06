import { ApolloServer } from 'apollo-server-micro'
import typeDefs from '../../server/typeDefs.gql'
import resolvers from '../../server/resolvers'


const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
