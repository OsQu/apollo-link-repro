import { ApolloClient, InMemoryCache, gql, ApolloLink, HttpLink } from '@apollo/client'

const reportErrors = (errorCallback) => new ApolloLink((operation, forward) => {
    const observable = forward(operation)
    observable.subscribe({ error: errorCallback })

    return observable;
})

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([
        reportErrors(console.error),
        new HttpLink({ uri: 'http://localhost:4000'})
    ])
})

client.query({
    query: gql`query { test }`
}).then(result => console.log(result))