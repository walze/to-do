import 'reflect-metadata'

import { addResolversToSchema } from '@graphql-tools/schema'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'

import { Resolvers } from './generated/graphql'

import { addUser } from './resolvers/addUser'
import { addTodo } from './resolvers/addTodo'
import { addTag } from './resolvers/addTag'
import { User } from './models/User'
import { useConnection } from './helpers/useConnection'

const resolvers: Resolvers = {
  Query: {
    addUser,
    addTodo,
    addTag,
    hello: () => useConnection(() => User
      .findOne({ where: { name: 'wivaer' } })
      .then(r => { console.log(r); return r })) as any
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
