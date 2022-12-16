import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications.repository';
import { NotificationNotFound } from './errors/notification-not fu=ound-erro';
import { UnreadNotification } from './unread-notification'

describe('cancel notification', () => {
  it('shoud be able to unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const unreadNotification = new UnreadNotification(notificationsRepository);

    const notification = makeNotification()

    await notificationsRepository.create(notification);

    await unreadNotification.execute({
      notificationId: notification.id,
    })

    expect(notificationsRepository.notifications[0].cancelAt).toEqual(expect.any(Date));
  });

  it('shoud not be able to cancel a notification when it does not exist', async() => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const unreadNotification = new UnreadNotification(notificationsRepository);

    expect(() => {
      return unreadNotification.execute({
        notificationId: 'fake-notification-id',
      })
    }).rejects.toThrow(NotificationNotFound);

  })
});