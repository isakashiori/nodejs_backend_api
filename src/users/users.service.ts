import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User, Prisma } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  // private users: CreateUserDto[] = [];

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async findOne(id: number): Promise<User> {
    return await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    })
  }

  async update(
    id: number,
    data: Prisma.UserUpdateInput
  ): Promise<User> {
    return this.prisma.user.update({
      data,
      where: {
        id: id,
      },
    });
  }

  async delete(id: number): Promise<User> {
    return await this.prisma.user.delete({
      where: {
        id: id,
      },
    })
  }
}
