import { addResolversToSchema } from '@graphql-tools/schema'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'
import { } from 'graphql-tools'

const hello = (...args) => {
  console.log({ ...args })

  return 'nice'
}
// Write some resolvers
const resolvers = {
  Query: {
    hello
  }
}

const app = express()

app.use(
  graphqlHTTP({
    // Add resolvers to the schema
    schema: addResolversToSchema({ schema, resolvers }),
    graphiql: true
  })
)

app.listen(4000, () => {
  console.info('Server listening on http://localhost:4000')
})
