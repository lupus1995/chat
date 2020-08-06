import React, { FC } from 'react';
import './style.scss';
import classNames from 'classnames';
import Avatar from '../../../components/Avatar/Avatar';
import Attachment from './Attachment';

const ChatMessageLeft: FC<{ right?: boolean }> = ({ right = false }) => {
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
              chatMesageLeft: !right,
              chatMessageRight: right,
            })}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            impedit dicta expedita nostrum recusandae consectetur culpa
            quibusdam vitae voluptates assumenda rem necessitatibus nam
            doloribus illum, cupiditate itaque, accusamus, corrupti deserunt!
          </div>
        </div>
        {!right && <Attachment />}
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

export default ChatMessageLeft;
