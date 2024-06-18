import { Test, TestingModule } from '@nestjs/testing';
import { ReservationHistoriesService } from './reservation-histories.service';

describe('ReservationHistoriesService', () => {
  let service: ReservationHistoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservationHistoriesService],
    }).compile();

    service = module.get<ReservationHistoriesService>(ReservationHistoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
