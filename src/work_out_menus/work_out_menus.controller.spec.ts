import { Test, TestingModule } from '@nestjs/testing';
import { WorkOutMenusController } from './work_out_menus.controller';

describe('WorkOutMenusController', () => {
  let controller: WorkOutMenusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkOutMenusController],
    }).compile();

    controller = module.get<WorkOutMenusController>(WorkOutMenusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
