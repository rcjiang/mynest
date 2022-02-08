import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

export enum Gender {
  MALE = 0,
  FEMALE = 1,
  UNKNOWN = 2
}

@Entity()
export class Author extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column('date')
  birthday: number

  @Column('date')
  deathday: number

  @Column({
    type: 'enum',
    enum: Gender,
    default: Gender.MALE
  })
  gender: Gender
}