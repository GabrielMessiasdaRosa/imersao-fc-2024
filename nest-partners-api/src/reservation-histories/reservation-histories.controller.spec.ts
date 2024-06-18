import { Test, TestingModule } from '@nestjs/testing';
import { ReservationHistoriesController } from './reservation-histories.controller';
import { ReservationHistoriesService } from './reservation-histories.service';

describe('ReservationHistoriesController', () => {
  let controller: ReservationHistoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservationHistoriesController],
      providers: [ReservationHistoriesService],
    }).compile();

    controller = module.get<ReservationHistoriesController>(ReservationHistoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
