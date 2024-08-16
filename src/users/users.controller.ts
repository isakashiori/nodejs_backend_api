import { Controller, Get, Post, Delete, Body, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto'


@Controller('users')
export class UsersController {

  // このコントローラー内でUsersServiseクラスのインスタンスを使うために必要、
  // この記述がなければusersServiceを使うときにエラーになる
  constructor(private readonly usersService: UsersService) {}

  // ユーザー一覧
  @Get()
  findAll(): CreateUserDto[] {
    return this.usersService.findAll();
  }

  //　ユーザー登録
  @Post()
  create(@Body() user: CreateUserDto) {
    this.usersService.create(user);
  }

  // ユーザー詳細
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(Number(id));
  }

  // ユーザー更新
  // @Put(':id')
  // update(@Param('id') id: string, @Body() user: CreateUserDto) {
  //   return this.usersService.update(Number(id), user);
  // }

  // ユーザー削除
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(Number(id));
  }
}
