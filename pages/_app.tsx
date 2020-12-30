import { AppProps } from 'next/app'
import './styles/styles.scss'
// import { ApolloProvider } from '@apollo/client'
// import { useApollo } from '../lib/apollo'

export default function App({ Component, pageProps }: AppProps) {
  // const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <Component {...pageProps} />
  )
}
