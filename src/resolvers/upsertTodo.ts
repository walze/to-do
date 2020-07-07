import assert from 'assert'
import { QueryResolvers, Todo as TodoQL } from 'app/generated/graphql'

import { upsertTodo as upsertTodoDB } from '../models/Todo'
import { useConnection } from 'app/helpers/useConnection'

export const upsertTodo: QueryResolvers['createTodo'] = async (_, { data }) => {
  assert(data, 'no data provided')
  assert(data.content, 'no content provided')
  assert(data.user, 'no user provided')

  return useConnection(upsertTodoDB)(data) as unknown as TodoQL
}
