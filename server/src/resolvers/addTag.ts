import { useConnection } from '../helpers/useConnection'

import assert from 'assert'
import { QueryResolvers } from 'app/generated/graphql'
import { Tag } from 'app/models/Tag'

export const addTag: QueryResolvers['addTag'] = (_, { data }) => useConnection(async (conn) => {
  assert(data, 'no data provided')
  assert(data.label, 'no label provided')
  assert(data.value, 'no value provided')

  const ntag = new Tag()
  ntag.label = data.label
  ntag.value = data.value

  return conn.manager.save(ntag)
})
