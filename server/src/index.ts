import 'reflect-metadata'

import { addResolversToSchema } from '@graphql-tools/schema'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'

import { Resolvers } from './generated/graphql'

import { createUser } from './resolvers/createUser'
import { createTodo } from './resolvers/createTodo'
import { updateTodo } from './resolvers/updateTodo'
import { deleteTodo } from './resolvers/deleteTodo'
import { createTag } from './resolvers/createTag'
import { User } from './models/User'
import { useConnection } from './helpers/useConnection'

const resolvers: Resolvers = {
  Query: {
    // test end point
    hello: useConnection(() => () => User.find()),

    createTag,

    createUser,

    createTodo,
    updateTodo,
    deleteTodo
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
