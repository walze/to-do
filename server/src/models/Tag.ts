
import { CreateTagInput, IdInput } from 'app/generated/graphql'
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

export const deleteTag = (p: Prisma) =>
  ({ id }: IdInput) => p
    .tag
    .delete({
      where: { id }
    })
