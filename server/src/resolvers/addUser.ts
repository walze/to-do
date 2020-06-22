import { User } from '../models/User'
import { useConnection } from '../helpers/useConnection'

import assert from 'assert'
import { QueryResolvers } from '../generated/graphql'

export const addUser: QueryResolvers['addUser'] = (_, { data }) => useConnection(async (conn) => {
  assert(data && data.name, 'no name provided')

  const nuser = new User()
  nuser.name = data.name

  return conn.manager.save(nuser)
})
