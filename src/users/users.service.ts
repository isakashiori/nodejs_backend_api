import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll(): string {
    return 'ユーザーの一覧情報です';
  }
}
