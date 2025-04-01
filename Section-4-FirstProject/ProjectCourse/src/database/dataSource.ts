import 'reflect-metadata';
import { DataSource } from 'typeorm'; // metodo das credencias do banco de dados

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
  migrations: [],
  subscribers: [],
});
