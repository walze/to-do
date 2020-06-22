import { Connection, createConnection } from 'typeorm';
import { pair } from 'ramda';

export const useConnection = async <T>(
  fn: (c: Connection) => Promise<T>,
  getConnection = createConnection,
) => getConnection()
    .then(c => Promise.all(pair(c, fn(c))))
    .then(([c, r]) => c.close().then(() => r))