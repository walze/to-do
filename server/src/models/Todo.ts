/* eslint-disable camelcase */

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn, OneToMany } from 'typeorm'

import { User } from './User'
import { Tag } from './Tag'

@Entity()
export class Todo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    content!: string;

    @OneToMany(() => Tag, tag => tag.id)
    tags!: Tag[];

    @Column()
    created_at!: Date;

    @Column()
    updated_at!: Date;

    @OneToOne(() => User)
    @JoinColumn()
    user!: User;
}
