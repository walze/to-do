import assert from 'assert'
import { QueryResolvers } from 'app/generated/graphql'

import { deleteTodo as deleteTodoDB } from '../models/Todo'
import { useConnection } from 'app/helpers/useConnection'

export const deleteTodo: QueryResolvers['deleteTodo'] = async (_, { data }) => {
  assert(data.id, 'no id provided')

  return useConnection(deleteTodoDB)(data)
}
