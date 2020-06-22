import { useConnection } from '../helpers/useConnection'

import assert from 'assert'
import { QueryResolvers, Todo as TodoQL } from 'app/generated/graphql'

import { Todo } from '../models/Todo'
import { User, addUser } from '../models/User'

export const addTodo: QueryResolvers['addTodo'] = (_, { data }) => useConnection(async (conn) => {
  assert(data, 'no data provided')
  assert(data.content, 'no content provided')
  assert(data.user, 'no user provided')

  const user = await User.findOne({ where: { name: data.user.name } }) || await addUser({ name: data.user.name })

  const ntodo = new Todo()
  ntodo.user = user
  ntodo.content = data.content
  ntodo.created_at = new Date()
  ntodo.updated_at = new Date()

  return conn.manager.save(ntodo) as unknown as TodoQL
})
