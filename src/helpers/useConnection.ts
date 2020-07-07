
import { tap } from 'ramda'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export type Prisma = typeof prisma

export const useConnection = <A, B>(
  f: (conn: typeof prisma) => (a: A) => Promise<B>
) => async (a: A): Promise<B> =>
    prisma
      .connect()
      .then(() => f(prisma)(a))
      .then(tap(() => prisma.disconnect()))
      .catch(async (error) => {
        prisma.disconnect()

        throw error
      })
