import assert from 'assert'
import { QueryResolvers } from 'app/generated/graphql'

import { createTag as createTagDB } from 'app/models/Tag'
import { useConnection } from 'app/helpers/useConnection'

export const createTag: QueryResolvers['createTag'] = async (_, { data }) => {
  assert(data, 'no data provided')
  assert(data.label, 'no label provided')
  assert(data.value, 'no value provided')

  return useConnection(createTagDB)(data)
}
