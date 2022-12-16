import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications.repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipients notifications', () => {
  it('shoud be able to cont recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const ContRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
      );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' })
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' })
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' })
    );

    const { count } = await ContRecipientNotifications.execute({
      recipientId: 'recipient-1'
    })

    expect(count).toEqual(2);
  });

});