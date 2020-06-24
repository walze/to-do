import { addUser as addUserDB } from '../models/User'

import assert from 'assert'
import { QueryResolvers } from '../generated/graphql'
import { useConnection } from 'app/helpers/useConnection'

export const addUser: QueryResolvers['addUser'] = async (_, { data }) => {
  assert(data && data.name, 'no name provided')

  return useConnection(addUserDB)({ name: data.name })
}
