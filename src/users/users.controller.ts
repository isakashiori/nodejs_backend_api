import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto'


@Controller('users')
export class UsersController {

  // このコントローラー内でUsersServiseクラスのインスタンスを使うために必要、
  // この記述がなければusersServiceを使うときにエラーになる
  constructor(private readonly usersService: UsersService) {}

  // ユーザー一覧
  @Get()
  findAll(): string {
    return this.usersService.findAll();
  }

  //　ユーザー登録
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return 'This action adds a new cat';
  }
  

  // ユーザー詳細
  // @Get(':id')

  // ユーザー更新
  // @Put(':id')

  // ユーザー削除
  // @Delete(':id')
}
