import React, { FC } from 'react';
import './style.scss';
import classNames from 'classnames';
import Avatar from '../../../../components/Avatar/Avatar';
import Attachment from './Attachment';
import Typing from '../Typing/Typing';
import AttachmentOneImage from './AttachmentOneImage';
import Time from '../../../../components/Time/Time';

const ChatMessage: FC<{
  right?: boolean;
  typing?: boolean;
  imgMessage?: boolean;
}> = ({ right = false, typing = false, imgMessage = false }) => {
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
              chatMesageLeft: !right && !typing && !imgMessage,
              chatMessageRight: right,
              chatMessagePadding: !imgMessage,
            })}
          >
            {!typing &&
              !imgMessage &&
              `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            impedit dicta expedita nostrum recusandae consectetur culpa
            quibusdam vitae voluptates assumenda rem necessitatibus nam
            doloribus illum, cupiditate itaque, accusamus, corrupti deserunt!`}
            {typing && <Typing />}
            {imgMessage && <AttachmentOneImage />}
          </div>
        </div>
        {!right && !typing && !imgMessage && <Attachment />}
      </div>
      <Time />
    </section>
  );
  0;
};

export default ChatMessage;
