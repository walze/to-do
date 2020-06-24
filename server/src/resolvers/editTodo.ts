import assert from 'assert'
import { QueryResolvers, Todo as TodoQL } from 'app/generated/graphql'

import { editTodo as editTodoDB } from '../models/Todo'
import { useConnection } from 'app/helpers/useConnection'

export const editTodo: QueryResolvers['editTodo'] = async (_, { data }) => {
  assert(data, 'no data provided')
  assert(data.content, 'no content provided')
  assert(data.id, 'no id provided')

  return useConnection(editTodoDB)(data) as unknown as TodoQL
}
