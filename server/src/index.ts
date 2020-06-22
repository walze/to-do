import "reflect-metadata";

import { addResolversToSchema } from '@graphql-tools/schema'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'

import { Resolvers, User as UserQL } from './generated/graphql'
import { User } from './models/User';


const resolvers: Resolvers = {
  Query: {
    addUser: (_, { user }) => {
      const nuser = new User()
      nuser.name = user?.name
      nuser.save()

      return nuser as unknown as UserQL
    },
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
