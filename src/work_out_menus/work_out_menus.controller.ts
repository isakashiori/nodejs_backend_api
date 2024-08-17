import { Controller, Get, Post, Delete, Body, Param, Put } from '@nestjs/common';
import { WorkOutMenusService } from './work_out_menus.service';
import { WorkOutMenu, Prisma } from '@prisma/client';
import { CreateWorkOutMenurDto } from './dto/create-work-out-menu.dto'

@Controller('work-out-menus')
export class WorkOutMenusController {

  constructor(private readonly womService:  WorkOutMenusService) {}

  // ユーザー一覧
  @Get()
  findAll(): Promise<WorkOutMenu[]> {
    return this.womService.findAll();
  }

  // ユーザー登録
  @Post()
  create(@Body() user: CreateWorkOutMenurDto): Promise<WorkOutMenu> {
    return this.womService.create(user);
  }

  // ユーザー詳細
  @Get(':id')
  findOne(@Param('id') id: string): Promise<WorkOutMenu> {
    return this.womService.findOne(Number(id));
  }

  ユーザー更新
  @Put(':id')
  update(@Param('id') id: string, @Body() user: CreateWorkOutMenurDto): Promise<WorkOutMenu> {
    return this.womService.update(Number(id), user);
  }

  // ユーザー削除
  @Delete(':id')
  delete(@Param('id') id: string): Promise<WorkOutMenu> {
    return this.womService.delete(Number(id));
  }
}
