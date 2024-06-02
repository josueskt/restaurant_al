import { Test, TestingModule } from '@nestjs/testing';
import { MetodosController } from './metodos.controller';

describe('MetodosController', () => {
  let controller: MetodosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetodosController],
    }).compile();

    controller = module.get<MetodosController>(MetodosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
