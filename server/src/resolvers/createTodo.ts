import assert from 'assert'
import { QueryResolvers, Todo as TodoQL } from 'app/generated/graphql'

import { createTodo as createTodoDB } from '../models/Todo'
import { useConnection } from 'app/helpers/useConnection'

export const createTodo: QueryResolvers['createTodo'] = async (_, { data }) => {
  assert(data, 'no data provided')
  assert(data.content, 'no content provided')
  assert(data.user, 'no user provided')

  return useConnection(createTodoDB)(data) as unknown as TodoQL
}
