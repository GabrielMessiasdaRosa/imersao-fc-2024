import { Injectable } from '@nestjs/common';
import { CreateReservationHistoryDto } from './dto/create-reservation-history.dto';
import { UpdateReservationHistoryDto } from './dto/update-reservation-history.dto';

@Injectable()
export class ReservationHistoriesService {
  create(createReservationHistoryDto: CreateReservationHistoryDto) {
    return 'This action adds a new reservationHistory';
  }

  findAll() {
    return `This action returns all reservationHistories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reservationHistory`;
  }

  update(id: number, updateReservationHistoryDto: UpdateReservationHistoryDto) {
    return `This action updates a #${id} reservationHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservationHistory`;
  }
}
