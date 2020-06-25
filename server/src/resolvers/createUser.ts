import { createUser as createUserDB } from '../models/User'

import assert from 'assert'
import { QueryResolvers } from '../generated/graphql'
import { useConnection } from 'app/helpers/useConnection'

export const createUser: QueryResolvers['createUser'] = async (_, { data }) => {
  assert(data && data.name, 'no name provided')

  return useConnection(createUserDB)({ name: data.name })
}
