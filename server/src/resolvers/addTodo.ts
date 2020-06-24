import assert from 'assert'
import { TodoResolvers, Todo as TodoQL } from 'app/generated/graphql'

import { addTodo as addTodoDB } from '../models/Todo'
import { useConnection } from 'app/helpers/useConnection'

export const addTodo: TodoResolvers['addTodo'] = async (_, { data }) => {
  assert(data, 'no data provided')
  assert(data.content, 'no content provided')
  assert(data.user, 'no user provided')

  return useConnection(addTodoDB)(data) as unknown as TodoQL
}
