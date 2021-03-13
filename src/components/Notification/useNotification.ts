import { useContext } from 'react';
import NotificationInterface from './NotificationInterface';
import { NotificationContext } from './NotificationList';

export default function useNotification(): {
  notifications: NotificationInterface[];
  addNotification: (notification: NotificationInterface) => void;
  deleteNotification: (notificationId: string) => void;
} {
  const { setNotifications, notifications } = useContext(NotificationContext);

  const deleteNotification = (notificationId: string) => {
    const newNotifications = notifications.filter((item) => {
      return item.id !== notificationId;
    });

    // console.log('newNotifications', newNotifications);

    setNotifications(newNotifications);
  };

  const addNotification = (notification: NotificationInterface) => {
    setNotifications([...notifications, notification]);
  };

  return { addNotification, deleteNotification, notifications };
}
