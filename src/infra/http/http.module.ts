import { Module } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send.notification';
import { DatabaseModule } from '../database/prisma/database.module';
import { NotificationsController } from './controllers/notification.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}