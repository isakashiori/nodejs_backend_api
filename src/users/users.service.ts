import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = [];

  findAll(): CreateUserDto[] {
    return this.users;
  }

  create(user: CreateUserDto) {
    this.users.push(user)
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id)
  }

  delete(id: number) {
    return this.users =  this.users.filter(user => user.id !== id);
  }
}
