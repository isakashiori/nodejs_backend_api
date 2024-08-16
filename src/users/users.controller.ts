import { Controller, Get, Post, Body, Param } from '@nestjs/common';
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
  findOne(@Param('id') id: string): CreateUserDto {
    return this.usersService.findOne(Number(id));
  }

  // ユーザー更新
  // @Put(':id')

  // ユーザー削除
  // @Delete(':id')
}
