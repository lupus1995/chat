import React, { FC } from 'react';
import Avatar from '../../../../components/Avatar/Avatar';
import Time from '../../../../components/Time/Time';
import ReadMessage from '../ReadMessage/ReadMessage';
import SendMessage from '../SendMessage/SendMessage';
import UnreadMessage from '../UnreadMessage/UnreadMessage';
import classNames from 'classnames';
import DialogItemWrapper from '../../../../wrappers/ChatWrappers/DialogItemWrapper/DialogItemWrapper';
import Dialogs from '../../../../interfaces/dialogs/Dialogs';

const DialogItem: FC<{
  item: Dialogs;
  send?: boolean;
  read?: boolean;
  unreadMessage?: boolean;
}> = ({ send = false, read = false, unreadMessage = false, item }) => {
  return (
    <DialogItemWrapper>
      <div>
        <Avatar name={item.user.name} dialogItem />
      </div>
      <div>
        <p className="dialogItemName">{item.user.name}</p>
        <p
          className={classNames('dialogItemMessage', {
            dialogItemMessageUnreadMessage: unreadMessage || send || read,
          })}
        >
          {item.messages[0].text}
        </p>
      </div>
      {read && <ReadMessage dialogItem />}
      {send && <SendMessage dialogItem />}
      {unreadMessage && <UnreadMessage />}
      <Time date={item.messages[0].createdAt} timeDialog />
    </DialogItemWrapper>
  );
};

export default DialogItem;
