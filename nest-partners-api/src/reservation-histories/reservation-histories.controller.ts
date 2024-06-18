import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservationHistoriesService } from './reservation-histories.service';
import { CreateReservationHistoryDto } from './dto/create-reservation-history.dto';
import { UpdateReservationHistoryDto } from './dto/update-reservation-history.dto';

@Controller('reservation-histories')
export class ReservationHistoriesController {
  constructor(private readonly reservationHistoriesService: ReservationHistoriesService) {}

  @Post()
  create(@Body() createReservationHistoryDto: CreateReservationHistoryDto) {
    return this.reservationHistoriesService.create(createReservationHistoryDto);
  }

  @Get()
  findAll() {
    return this.reservationHistoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationHistoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservationHistoryDto: UpdateReservationHistoryDto) {
    return this.reservationHistoriesService.update(+id, updateReservationHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationHistoriesService.remove(+id);
  }
}
