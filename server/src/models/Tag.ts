
import { TagInput, DeleteInput } from 'app/generated/graphql'
import { Prisma } from 'app/helpers/useConnection'

export const createTag = (p: Prisma) =>
  ({ label, value }: TagInput) => p
    .tag
    .create({
      data: {
        label,
        value
      }
    })

export const deleteTag = (p: Prisma) =>
  ({ id }: DeleteInput) => p
    .tag
    .delete({
      where: { id }
    })
