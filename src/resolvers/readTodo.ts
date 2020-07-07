import assert from 'assert'
import { QueryResolvers, Todo as TodoQL } from 'app/generated/graphql'

import { readTodo as readTodoDB } from '../models/Todo'
import { useConnection } from 'app/helpers/useConnection'

export const readTodo: QueryResolvers['readTodo'] = async (_, { data }) => {
  assert(data, 'no data provided')

  return useConnection(readTodoDB)(data) as unknown as TodoQL[]
}
