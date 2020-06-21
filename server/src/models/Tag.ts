import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import {Tag as U} from '../generated/graphql'

@Entity()
export class Tag extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: U['id'];

    @Column()
    value?: U['value'];

    @Column()
    label?: U['label'];
}