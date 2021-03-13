import classNames from 'classnames';
import React, { FC, memo, MutableRefObject, useEffect, useRef } from 'react';
import consts from '../../resourse/consts';
import icons from '../../resourse/icons';
import NotificationInterface from './NotificationInterface';
import useNotification from './useNotification';

const Notification: FC<{ message: NotificationInterface }> = memo(
  ({ message }) => {
    const ref: MutableRefObject<HTMLButtonElement | null> = useRef(null);
    const { deleteNotification } = useNotification();
    const handleClick = () => deleteNotification(message.id);

    useEffect(() => {
      setTimeout(() => {
        if (ref.current) {
          ref.current.click();
        }
      }, 5000);
    }, []);

    return (
      <div
        className={classNames('wrapperNotification', {
          wrapperNotificationDanger: message.type === consts.message.danger,
          wrapperNotificationSuccess: message.type === consts.message.success,
        })}
      >
        <span>{message.message}</span>
        <button
          ref={ref}
          onClick={handleClick}
          className="closeNotification"
          type="button"
        >
          {icons.closeIcon}
        </button>
      </div>
    );
  },
);

export default Notification;
