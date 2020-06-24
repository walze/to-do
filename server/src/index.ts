import 'reflect-metadata'

import { addResolversToSchema } from '@graphql-tools/schema'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'

import { Resolvers } from './generated/graphql'

import { addUser } from './resolvers/addUser'
import { addTodo } from './resolvers/addTodo'
import { editTodo } from './resolvers/editTodo'
import { deleteTodo } from './resolvers/deleteTodo'
import { addTag } from './resolvers/addTag'
import { User } from './models/User'
import { useConnection } from './helpers/useConnection'

const resolvers: Resolvers = {
  Query: {
    // test end point
    hello: useConnection(() => () => User.find())
  },

  Tag: {
    addTag
  },

  User: {
    addUser
  },

  Todo: {
    addTodo,
    editTodo,
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
