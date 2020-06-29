import 'reflect-metadata'

import { addResolversToSchema } from '@graphql-tools/schema'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'

import { Resolvers } from './generated/graphql'

import { upsertTodo } from './resolvers/upsertTodo'
import { readTodo } from './resolvers/readTodo'
import { deleteTodo } from './resolvers/deleteTodo'

import { createUser } from './resolvers/createUser'

import { createTag } from './resolvers/createTag'

import { useConnection } from './helpers/useConnection'
import { tap } from 'ramda'

const resolvers: Resolvers = {
  Query: {
    // test end point
    hello: useConnection(p => () => p.user.findMany()),

    createTag,

    createUser,

    createTodo: upsertTodo,
    readTodo,
    updateTodo: upsertTodo,
    deleteTodo
  }
}

const app = express()

app.use(
  graphqlHTTP({
    schema: addResolversToSchema({ schema, resolvers }),
    graphiql: true,
    pretty: true,
    customFormatErrorFn: tap(console.error)
  })
)

app.listen(4000, () => {
  console.info('Server listening on http://localhost:4000')
})
