import assert from 'assert'
import { QueryResolvers, Todo as TodoQL } from 'app/generated/graphql'

import { editTodo as editTodoDB } from '../models/Todo'
import { useConnection } from 'app/helpers/useConnection'

export const editTodo: QueryResolvers['editTodo'] = async (_, { data }) => {
  assert(data, 'no data provided')
  assert(data.content, 'no content provided')
  assert(data.id, 'no id provided')

  const r = await useConnection(editTodoDB)(data)
  console.warn(r)

  return r as unknown as TodoQL
}
