import assert from 'assert'
import { TagResolvers } from 'app/generated/graphql'

import { addTag as addTagDB } from 'app/models/Tag'
import { useConnection } from 'app/helpers/useConnection'

export const addTag: TagResolvers['addTag'] = async (_, { data }) => {
  assert(data, 'no data provided')
  assert(data.label, 'no label provided')
  assert(data.value, 'no value provided')

  return useConnection(addTagDB)(data)
}
