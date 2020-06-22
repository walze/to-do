import 'reflect-metadata'

import { addResolversToSchema } from '@graphql-tools/schema'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'

import { Resolvers } from './generated/graphql'
import { addUser } from './resolvers/addUser'

const resolvers: Resolvers = {
  Query: {
    addUser
  }
}

const app = express()

app.use(
  graphqlHTTP({
    schema: addResolversToSchema({ schema, resolvers }),
    graphiql: true
  })
)

app.listen(4000, () => {
  console.info('Server listening on http://localhost:4000')
})
