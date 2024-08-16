import { Test, TestingModule } from '@nestjs/testing';
import { WorkOutMenusService } from './work_out_menus.service';

describe('WorkOutMenusService', () => {
  let service: WorkOutMenusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkOutMenusService],
    }).compile();

    service = module.get<WorkOutMenusService>(WorkOutMenusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
