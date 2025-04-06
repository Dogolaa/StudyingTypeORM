import { MigrationInterface } from 'typeorm';
import { AppDataSource } from '../dataSource';
import User from '../../app/entities/User';
import userSeed from '../seeders/UserSeed';

export class CreateSeedUsersTable1743900107666 implements MigrationInterface {
  public async up(): Promise<void> {
    const usersRepository = AppDataSource.getRepository(User);
    await usersRepository.save(userSeed);
  }

  public async down(): Promise<void> {}
}
