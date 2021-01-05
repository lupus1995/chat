import React, { FC } from 'react';
import classNames from 'classnames';
import Avatar from '../../../../components/Avatar/Avatar';
import Time from '../../../../components/Time/Time';
import ReadMessage from '../ReadMessage/ReadMessage';
import SendMessage from '../SendMessage/SendMessage';
import UnreadMessage from '../UnreadMessage/UnreadMessage';
import DialogItemWrapper from '../../../../wrappers/ChatWrappers/DialogItemWrapper/DialogItemWrapper';
import DialogsInterface from '../../../../interfaces/dialogs/DialogsInterface';

const DialogItem: FC<{
  item: DialogsInterface;
  send?: boolean;
  read?: boolean;
  unreadMessage?: boolean;
}> = ({ send = false, read = false, unreadMessage = false, item }) => {
  return (
    <DialogItemWrapper dialog={item}>
      <div>
        <Avatar name={item.company.fullname} dialogItem />
      </div>
      <div>
        <p className="dialogItemName">{item.company.fullname}</p>
        <p
          className={classNames('dialogItemMessage', {
            dialogItemMessageUnreadMessage: unreadMessage || send || read,
          })}
        >
          {item.message}
        </p>
      </div>
      {read && <ReadMessage dialogItem />}
      {send && <SendMessage dialogItem />}
      {unreadMessage && <UnreadMessage />}
      <Time date={item.date} timeDialog />
    </DialogItemWrapper>
  );
};

export default DialogItem;
