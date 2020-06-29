import assert from 'assert'
import { QueryResolvers, Todo as TodoQL, TagInput } from 'app/generated/graphql'

// import { readTodo as readTodoDB } from '../models/Todo'
import { useConnection } from 'app/helpers/useConnection'

type DeepRequired<T, U extends object | undefined = undefined> =
  T extends object
  ? { [P in keyof T]-?: NonNullable<T[P]> extends NonNullable<U | Function | ClassDecorator> ? NonNullable<T[P]> : DeepRequired<NonNullable<T[P]>, U>; }
  : T;

export const readTodo: QueryResolvers['readTodo'] = async (_, { data }) => {
  assert(data, 'no data provided')

  const { user, tags, search } = data

  const ts = tags?.filter(t => !!t.id) as DeepRequired<TagInput>[] | undefined

  return useConnection(c => () => c
    .todo
    .findMany({
      include: {
        tags: true,
        user: true
      },
      where: {
        user: { id: user },
        OR: [
          { title: { contains: search || undefined } },
          { content: { contains: search || undefined } }
        ],
        tags: ts && { some: { OR: ts } }
      }
    })
  )(data) as unknown as TodoQL[]
}
