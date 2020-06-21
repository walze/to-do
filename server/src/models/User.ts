import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import {User as U} from 'src/generated/graphql'

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: U['id'];

    @Column()
    name?: U['name'];
}