import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export class Tag extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    value!: string;

    @Column()
    label!: string;
}
