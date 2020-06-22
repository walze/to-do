import { useConnection } from '../helpers/useConnection'

import assert from 'assert'
import { QueryResolvers, Todo as TodoQL } from 'app/generated/graphql'
import { Todo } from 'app/models/Todo'
import { User } from 'app/models/User'

export const addTodo: QueryResolvers['addTodo'] = (_, { data }) => useConnection(async (conn) => {
  assert(data, 'no data provided')
  assert(data.content, 'no content provided')
  assert(data.user, 'no user provided')

  const ntodo = new Todo()
  ntodo.content = data.content
  ntodo.user = data.user as User
  ntodo.created_at = new Date()
  ntodo.updated_at = new Date()

  return conn.manager.save(ntodo) as unknown as TodoQL
})
