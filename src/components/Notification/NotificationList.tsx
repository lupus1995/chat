import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import './style.scss';
import NotificationInterface from './NotificationInterface';
import Notification from './Notification';

export const NotificationContext = createContext<{
  notifications: NotificationInterface[];
  setNotifications: Dispatch<SetStateAction<NotificationInterface[]>>;
}>({} as any);

const NotificationList: FC = ({ children }) => {
  const [notifications, setNotifications] = useState<NotificationInterface[]>(
    [],
  );

  return (
    <NotificationContext.Provider value={{ notifications, setNotifications }}>
      <div className="containerNotification">
        {notifications.slice(0, 5).map((item) => (
          <Notification key={item.id} message={item} />
        ))}
      </div>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationList;
