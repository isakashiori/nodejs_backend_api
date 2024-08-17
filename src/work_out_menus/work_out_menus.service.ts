import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { WorkOutMenu, Prisma } from '@prisma/client';

@Injectable()
export class WorkOutMenusService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<WorkOutMenu[]> {
    const posts = await this.prisma.workOutMenu.findMany();
    return posts;
  }

  async create(data: Prisma.WorkOutMenuCreateInput): Promise<WorkOutMenu> {
    return this.prisma.workOutMenu.create({
      data,
    });
  }

  async findOne(id: number): Promise<WorkOutMenu> {
    return await this.prisma.workOutMenu.findUnique({
      where: {
        id: id,
      },
    })
  }

  async update(
    id: number,
    data: Prisma.WorkOutMenuUpdateInput
  ): Promise<WorkOutMenu> {
    return this.prisma.workOutMenu.update({
      data,
      where: {
        id: id,
      },
    });
  }

  async delete(id: number): Promise<WorkOutMenu> {
    return await this.prisma.workOutMenu.delete({
      where: {
        id: id,
      },
    })
  }
}
