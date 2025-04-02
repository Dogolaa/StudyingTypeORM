import 'reflect-metadata';
import { DataSource } from 'typeorm'; // metodo das credencias do banco de dados
import { CreateUsersTable1743554063971 } from './migrations/1743554063971-CreateUsersTable';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  username: 'root',
  password: 'root',
  database: 'curso_typeorm',
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [CreateUsersTable1743554063971],
  subscribers: [],
});
