import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'board',
  synchronize: true,
  autoLoadEntities: true,
};
