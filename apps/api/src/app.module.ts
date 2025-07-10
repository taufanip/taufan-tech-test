import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AdminModule } from './admin/admin.module';
import { join } from 'path';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeLeaveModule } from './employeeLeave/employeeLeave.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
        synchronize: true
      }),
      inject: [ConfigService],
    }),

    AdminModule,
    EmployeeModule,
    EmployeeLeaveModule
  ],
  controllers: [AppController],
  providers: [AppService]
})



export class AppModule {}
