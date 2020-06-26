import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    fetch: (...args) => fetch(...args),
    link: new HttpLink({
        uri: 'https:/secret',

       
    }),
})

export { client }
