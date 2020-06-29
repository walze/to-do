/* eslint-disable camelcase */

import { CreateTodoInput, ReadTodoInput, CreateTagInput, IdInput } from 'app/generated/graphql'

import { Prisma } from 'app/helpers/useConnection'
import { DeepRequired } from 'app/types'

export const upsertTodo = (conn: Prisma) =>
  async ({ content, user: { name }, tags: tagsInput, title, id }: CreateTodoInput) => {
    const tagConnect = id
      ? tagsInput?.map(({ id }) => ({ id: id as number }))
      : undefined

    const include = {
      tags: true,
      user: true
    }

    return !id
      ? conn.todo
        .create({
          include,
          data: {
            title,
            content,
            user: { connect: { name } },
            tags: { connect: tagConnect }
          }
        })
      : conn.todo
        .update({
          include,
          where: { id },
          data: {
            title,
            content,
            tags: { connect: tagConnect },
            updated_at: new Date()
          }
        })
  }

export const deleteTodo = (conn: Prisma) =>
  async ({ id }: IdInput) => {
    const todo = await conn.user.delete({ where: { id } })

    return todo.id === id
  }

export const readTodo = (c: Prisma) =>
  ({ user, tags, search }: ReadTodoInput) => {
    const ts = tags?.filter(t => !!t.id) as DeepRequired<CreateTagInput>[] | undefined
    const contains = search || undefined

    return c
      .todo
      .findMany({
        include: {
          tags: true,
          user: true
        },
        where: {
          user: { id: user },
          OR: [
            { title: { contains } },
            { content: { contains } }
          ],
          tags: ts && { some: { OR: ts } }
        }
      })
  }
