import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn, OneToMany} from "typeorm";
import {Todo as U} from '../generated/graphql'

import { User } from './User';
import { Tag } from './Tag';

@Entity()
export class Todo extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: U['id'];

    @Column()
    content?: U['content'];

    @OneToMany(() => Tag, tag => tag.id)
    tags?: Tag[];

    @Column()
    timestamp?: Date;

    @OneToOne(() => User)
    @JoinColumn()
    user?: User;
}