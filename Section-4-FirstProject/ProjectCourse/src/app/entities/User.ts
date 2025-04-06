import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', { nullable: false, length: 100 })
  name: string;

  @Column('varchar', { unique: true, nullable: false, length: 100 })
  email: string;

  @Column('varchar', { nullable: false, length: 100 })
  password: string;

  @Column('date', { nullable: false })
  birth_date: Date;

  @Column('boolean', { nullable: false, default: true })
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  upgraded_at: Date;
}

export default User;
