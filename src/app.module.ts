import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';
import { WorkOutMenusController } from './work_out_menus/work_out_menus.controller';
import { WorkOutMenusModule } from './work_out_menus/work_out_menus.module';

@Module({
  imports: [UsersModule, WorkOutMenusModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
