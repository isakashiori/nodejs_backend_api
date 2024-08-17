import { Module } from '@nestjs/common';
import { WorkOutMenusService } from './work_out_menus.service';
import { WorkOutMenusController } from './work_out_menus.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [WorkOutMenusController],
  providers: [WorkOutMenusService, PrismaService]
})
export class WorkOutMenusModule {}
