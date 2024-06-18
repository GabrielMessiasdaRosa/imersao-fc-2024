import { PartialType } from '@nestjs/mapped-types';
import { CreateReservationHistoryDto } from './create-reservation-history.dto';

export class UpdateReservationHistoryDto extends PartialType(CreateReservationHistoryDto) {}
