import assert from 'assert';
import {QueryResolvers, Todo as TodoQL} from 'app/generated/graphql';

import {addTodo as addTodoDB} from '../models/Todo';

export const addTodo: QueryResolvers['addTodo'] = (_, {data}) => {
  assert(data, 'no data provided');
  assert(data.content, 'no content provided');
  assert(data.user, 'no user provided');

  return addTodoDB(data) as unknown as TodoQL;
};
