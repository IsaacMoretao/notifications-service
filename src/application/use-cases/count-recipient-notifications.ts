import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface contRecipientNotificationsRequest {
  recipientId: string;
}

interface contRecipientNotificationsResponse {
  count: number;
}; 


@Injectable()
export class CountRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: contRecipientNotificationsRequest
    ): Promise<contRecipientNotificationsResponse> {
    const { recipientId } = request;

    const count = await this.notificationsRepository.countManyByRecipientId(recipientId)

    return {count};
  }
}
