import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from 'typeorm';

import {pipe} from 'ramda';
import {saveEntity} from 'app/helpers/saveEntity';
import {UserInput} from 'app/generated/graphql';
@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({unique: true})
    name!: string;
}

export const addUser = pipe(
    ({name}: UserInput) => {
      const nuser = new User();
      nuser.name = name;

      return nuser;
    },
    saveEntity,
);
