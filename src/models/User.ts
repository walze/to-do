
import { UserInput } from 'app/generated/graphql'
import { Prisma } from 'app/helpers/useConnection'

export const createUser = (conn: Prisma) =>
  ({ name }: UserInput) => conn.user.create({
    data: { name }
  })
