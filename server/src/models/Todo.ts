/* eslint-disable camelcase */

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  Connection,
  ManyToOne
} from 'typeorm'

import { User, addUser } from './User'
import { Tag } from './Tag'
import { pipe, andThen } from 'ramda'
import { saveEntity } from 'app/helpers/saveEntity'
import { TodoInput } from 'app/generated/graphql'

@Entity()
export class Todo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    content!: string;

    @OneToMany(() => Tag, (tag) => tag.id)
    tags!: Array<Tag | null | undefined>;

    @Column()
    created_at!: Date;

    @Column()
    updated_at!: Date;

    @ManyToOne(() => User)
    user!: User;
}

export const addTodo = (conn: Connection) => pipe(
  async ({ content, user: { name }, tags }: TodoInput) => {
    const ntodo = new Todo()
    const user = await User
      .findOne({
        where: { name }
      }) || await addUser(conn)({ name })

    ntodo.user = user
    ntodo.content = content
    ntodo.created_at = (new Date()).toISOString() as unknown as Date
    ntodo.updated_at = (new Date()).toISOString() as unknown as Date
    ntodo.tags = (tags || []) as Tag[]

    return ntodo
  },
  andThen(saveEntity(conn))
)
