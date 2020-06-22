import { createConnection, Connection } from 'typeorm'

import { pair } from 'ramda'

export const useConnection = async <T>(
  fn: (c: Connection) => Promise<T>,
  getConnection = createConnection
) => {
  const conn = getConnection()

  return conn
    .then(c => Promise.all(pair(c, fn(c))))
    .then(([c, r]) => c.close().then(() => r))
    .catch(() => conn.then(c => {
      c.close()

      return null
    }))
}
