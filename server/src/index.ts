import 'reflect-metadata'

import { addResolversToSchema } from '@graphql-tools/schema'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'

import { Resolvers } from './generated/graphql'
import { User } from './models/User'
import { useConnection } from './helpers/useConnection'

import assert from 'assert'

const resolvers: Resolvers = {
  Query: {
    addUser: (_, { user }) => useConnection(async (conn) => {
      assert(user && user.name, 'no name provided')

      const nuser = new User()
      nuser.name = user.name

      return conn.manager.save(nuser)
    })
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
