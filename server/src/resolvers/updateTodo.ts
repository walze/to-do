import assert from 'assert'
import { QueryResolvers, Todo as TodoQL } from 'app/generated/graphql'

import { updateTodo as updateTodoDB } from '../models/Todo'
import { useConnection } from 'app/helpers/useConnection'

export const updateTodo: QueryResolvers['updateTodo'] = async (_, { data }) => {
  assert(data, 'no data provided')
  assert(data.content, 'no content provided')
  assert(data.id, 'no id provided')

  const r = await useConnection(updateTodoDB)(data)

  return r as unknown as TodoQL
}
