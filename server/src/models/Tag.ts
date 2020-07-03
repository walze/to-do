
import { CreateTagInput, IdInput, ReadTagInput } from 'app/generated/graphql'
import { Prisma } from 'app/helpers/useConnection'

export const createTag = (p: Prisma) =>
  ({ label, value }: CreateTagInput) => p
    .tag
    .create({
      data: {
        label,
        value
      }
    })

export const readTag = (p: Prisma) => ({ search }: ReadTagInput) => p
  .tag
  .findMany({
    orderBy: { label: 'asc' },
    where: {
      OR: [
        { label: { contains: search || undefined } },
        { value: { contains: search || undefined } }
      ]
    }
  })

export const deleteTag = (p: Prisma) =>
  ({ id }: IdInput) => p
    .tag
    .delete({
      where: { id }
    })
