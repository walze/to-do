import "reflect-metadata";
import { addResolversToSchema } from '@graphql-tools/schema'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'
import { } from 'graphql-tools'

import {Resolvers} from 'src/generated/graphql'

const addUser  = (a,b,c,d) => {

  return { id: Math.random() + '', name: 'lol' }
}

const resolvers: Resolvers = {
  Query: {
    addUser,
    hello: addUser
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
