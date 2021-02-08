const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    test: String
  }
`

const resolvers = {
    Query: {
        test: () => new Promise(resolve => {
          setTimeout(() => resolve("This is a test value"), randomNumber(5) * 1000)
        })
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen(4000).then(({url}) => {
    console.log(`Server started at ${url} `)
})

/**
 * Returns random number between 0 and max
 */
function randomNumber(max) {
  return Math.floor(Math.random() * max)
}