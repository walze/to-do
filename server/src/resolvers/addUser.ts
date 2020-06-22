import {addUser as addUserDB} from '../models/User';

import assert from 'assert';
import {QueryResolvers} from '../generated/graphql';

export const addUser: QueryResolvers['addUser'] = (_, {data}) => {
  assert(data && data.name, 'no name provided');

  return addUserDB({name: data.name});
};
