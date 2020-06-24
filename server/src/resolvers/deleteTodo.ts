import assert from 'assert'
import { TodoResolvers } from 'app/generated/graphql'

import { deleteTodo as deleteTodoDB } from '../models/Todo'
import { useConnection } from 'app/helpers/useConnection'

export const deleteTodo: TodoResolvers['deleteTodo'] = async (_, { data }) => {
  assert(data.id, 'no id provided')

  return useConnection(deleteTodoDB)(data)
}
