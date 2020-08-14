import React, { FC } from 'react';
import Avatar from '../../../../components/Avatar/Avatar';
import Time from '../../../../components/Time/Time';
import ReadMessage from '../ReadMessage/ReadMessage';
import SendMessage from '../SendMessage/SendMessage';
import UnreadMessage from '../UnreadMessage/UnreadMessage';
import classNames from 'classnames';

const DialogItem: FC<{
  send?: boolean;
  read?: boolean;
  unreadMessage?: boolean;
}> = ({ send = false, read = false, unreadMessage = false }) => {
  return (
    <li className="d-flex align-items-center position-relative dialogItemWrapper">
      <div>
        <Avatar dialogItem />
      </div>
      <div>
        <p className="dialogItemName">Ян Борисович Кум</p>
        <p
          className={classNames('dialogItemMessage', {
            dialogItemMessageUnreadMessage: unreadMessage || send || read,
          })}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          odio, maxime provident nihil quas impedit nam voluptatem aspernatur
          necessitatibus possimus rem cupiditate, suscipit sint, aut eaque
          officia ab illo optio!
        </p>
      </div>
      {read && <ReadMessage dialogItem />}
      {send && <SendMessage dialogItem />}
      {unreadMessage && <UnreadMessage />}
      <Time timeDialog />
    </li>
  );
};

export default DialogItem;
