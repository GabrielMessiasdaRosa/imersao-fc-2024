import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Event } from './events/entities/event.entity';
import { EventsController } from './events/events.controller';
import { EventsModule } from './events/events.module';
import { EventsService } from './events/events.service';
import { SpotsModule } from './spots/spots.module';
import { ReservationHistoriesModule } from './reservation-histories/reservation-histories.module';
import { TicketsModule } from './tickets/tickets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // type of our database
      host: 'localhost', // database host
      port: 5432, // database host
      username: 'postgres', // username
      password: '54pg32', // user password
      database: 'nest-partners', // name of our database,
      autoLoadEntities: true, // models will be loaded automatically
      entities: [Event],
      synchronize: true, // your entities will be synced with the database(recommended: disable in prod)
    }),
    EventsModule,
    SpotsModule,
    ReservationHistoriesModule,
    TicketsModule,
  ],
  controllers: [AppController, EventsController],
  providers: [AppService, EventsService],
})
export class AppModule {}
