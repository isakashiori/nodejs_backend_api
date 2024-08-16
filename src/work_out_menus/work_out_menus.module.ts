import { Module } from '@nestjs/common';
import { WorkOutMenusService } from './work_out_menus.service';

@Module({
  providers: [WorkOutMenusService]
})
export class WorkOutMenusModule {}
