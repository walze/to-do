import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  Connection
} from 'typeorm'
import { pipe } from 'ramda'

import { TagInput } from 'app/generated/graphql'
import { saveEntity } from 'app/helpers/saveEntity'

@Entity()
export class Tag extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    value!: string;

    @Column()
    label!: string;
}

export const createTag = (conn: Connection) => pipe(
  ({ label, value }: TagInput) => {
    const ntag = new Tag()
    ntag.label = label
    ntag.value = value

    return ntag
  },
  saveEntity(conn)
)
