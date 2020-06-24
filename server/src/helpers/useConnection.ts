import { createConnection, Connection } from 'typeorm'

import { pair } from 'ramda'
import { snd, mapLeft } from './pairBifunctor'

export const useConnection = <A, B>(
  f: (conn: Connection) => (a: A) => Promise<B>,
  getConnection = createConnection
) => async (a: A): Promise<B> => {
    const conn = getConnection()

    return conn
      .then((c) => pair(c, f(c)(a)))
      .then((p) => Promise.all(p))
      .then((p) => mapLeft(p, (c) => c.close()))
      .then(snd)
      .catch(async (error) => {
        (await conn).close()

        throw error
      })
  }
