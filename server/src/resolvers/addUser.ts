import { addUser as addUserDB } from '../models/User'

import assert from 'assert'
import { UserResolvers } from '../generated/graphql'
import { useConnection } from 'app/helpers/useConnection'

export const addUser: UserResolvers['addUser'] = async (_, { data }) => {
  assert(data && data.name, 'no name provided')

  return useConnection(addUserDB)({ name: data.name })
}
