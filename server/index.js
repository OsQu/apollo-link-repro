const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    test: String
  }
`

const resolvers = {
    Query: {
        test: () => "This is a test value"
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen(4000).then(({url}) => {
    console.log(`Server started at ${url} `)
})
