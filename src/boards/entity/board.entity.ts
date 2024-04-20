import { Timestamp } from 'src/global/base.entity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

@Entity()
export class Board extends Timestamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  title: string;

  @Column('text')
  description: string;

  @Column({
    type: 'enum',
    enum: BoardStatus,
    default: BoardStatus.PUBLIC,
  })
  status: BoardStatus;
}
