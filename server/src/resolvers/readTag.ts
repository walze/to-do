import assert from 'assert'
import { QueryResolvers } from 'app/generated/graphql'

import { readTag as readTagDB } from 'app/models/Tag'
import { useConnection } from 'app/helpers/useConnection'

export const readTag: QueryResolvers['readTag'] = async (_, { data }) => {
  assert(data.search, 'no search provided')

  return useConnection(readTagDB)(data)
}
