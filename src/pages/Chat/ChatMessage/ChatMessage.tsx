import React, { FC } from 'react';
import './style.scss';
import classNames from 'classnames';
import Avatar from '../../../components/Avatar/Avatar';
import Attachment from './Attachment';
import Typing from '../Typing/Typing';

const ChatMessage: FC<{ right?: boolean; typing?: boolean }> = ({
  right = false,
  typing = false,
}) => {
  return (
    <section className="chatMessageWrapper">
      <div
        className={classNames('chatContent d-flex flex-wrap', {
          'flex-direction-row-reverse': right,
          chatContentLeft: !right,
          chatContentRight: right,
        })}
      >
        <div
          className={classNames('d-flex chatWrapper', {
            'flex-direction-row-reverse': right,
          })}
        >
          <Avatar right={right} />
          <div
            className={classNames('chatMessage', {
              chatMesageLeft: !right && !typing,
              chatMessageRight: right,
            })}
          >
            {!typing &&
              `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            impedit dicta expedita nostrum recusandae consectetur culpa
            quibusdam vitae voluptates assumenda rem necessitatibus nam
            doloribus illum, cupiditate itaque, accusamus, corrupti deserunt!`}
            {typing && <Typing />}
          </div>
        </div>
        {!right && !typing && <Attachment />}
      </div>
      <span
        className={classNames('time', {
          timeRight: right,
        })}
      >
        Вчера, в 12:31
      </span>
    </section>
  );
  0;
};

export default ChatMessage;
