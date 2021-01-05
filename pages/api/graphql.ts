import { ApolloServer, gql } from 'apollo-server-micro'
import typeDefs from '../../lib/typeDefs.gql'
import resolvers from '../../lib/resolvers'


const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
