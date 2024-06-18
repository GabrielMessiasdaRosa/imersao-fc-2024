import { Module } from '@nestjs/common';
import { ReservationHistoriesService } from './reservation-histories.service';
import { ReservationHistoriesController } from './reservation-histories.controller';

@Module({
  controllers: [ReservationHistoriesController],
  providers: [ReservationHistoriesService],
})
export class ReservationHistoriesModule {}
