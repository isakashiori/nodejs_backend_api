import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private readonly users: CreateUserDto[] = [];

  findAll(): CreateUserDto[] {
    return this.users;
  }

  create(user: CreateUserDto) {
    this.users.push(user)
  }
}
