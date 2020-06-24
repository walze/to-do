/* eslint-disable camelcase */

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  Connection,
  ManyToOne,
  ManyToMany,
  JoinTable
} from 'typeorm'

import { User, addUser } from './User'
import { Tag } from './Tag'
import { pipe, andThen } from 'ramda'
import { saveEntity } from 'app/helpers/saveEntity'
import { NewTodoInput, EditTodoInput, DeleteTodoInput } from 'app/generated/graphql'
import assert from 'assert'

@Entity()
export class Todo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    content!: string;

    @ManyToMany(() => Tag, (tag) => tag.id)
    @JoinTable()
    tags!: Tag[];

    @Column()
    created_at!: Date;

    @Column()
    updated_at!: Date;

    @ManyToOne(() => User)
    user!: User;
}

export const addTodo = (conn: Connection) => pipe(
  async ({ content, user: { name }, tags: tagsInput }: NewTodoInput) => {
    const ntodo = new Todo()
    const tags = tagsInput && await Tag.find({ where: tagsInput })
    const user = await User
      .findOne({ where: { name } }) ||
      await addUser(conn)({ name })

    ntodo.user = user
    ntodo.content = content
    ntodo.created_at = (new Date()).toISOString() as unknown as Date
    ntodo.updated_at = (new Date()).toISOString() as unknown as Date
    ntodo.tags = tags || []

    return ntodo
  },
  andThen(saveEntity(conn))
)

export const editTodo = (conn: Connection) => pipe(
  async ({ content, id, tags: tagsInput }: EditTodoInput) => {
    const todo = await Todo.findOne(id)
    assert(todo, 'todo not found')

    const tags = tagsInput && await Tag.find({ where: tagsInput })

    todo.content = content
    todo.updated_at = (new Date()).toISOString() as unknown as Date
    todo.tags = tags || []

    return todo
  },
  andThen(saveEntity(conn))
)

export const deleteTodo = (conn: Connection) => pipe(
  async ({ id }: DeleteTodoInput) => {
    const todo = await Todo.delete(id)

    return Number(todo.affected) > 0
  },
  andThen(saveEntity(conn))
)
