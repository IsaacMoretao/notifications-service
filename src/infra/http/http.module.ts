import { Module } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send.notification';
import { DatabaseModule } from '../database/prisma/database.module';

import { NotificationsController } from './controllers/notification.controller';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications';

import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification

  ],
})
export class HttpModule {}