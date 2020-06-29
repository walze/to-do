/* eslint-disable camelcase */

import { CreateTodoInput, DeleteInput } from 'app/generated/graphql'

import { Prisma } from 'app/helpers/useConnection'

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
  async ({ id }: DeleteInput) => {
    const todo = await conn.user.delete({ where: { id } })

    return todo.id === id
  }
