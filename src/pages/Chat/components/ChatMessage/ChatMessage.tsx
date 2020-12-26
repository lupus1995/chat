import React, { FC } from 'react';
import './style.scss';
import classNames from 'classnames';
import Avatar from '../../../../components/Avatar/Avatar';
import Attachment from './Attachment';
import Typing from '../Typing/Typing';
import AttachmentOneImage from './AttachmentOneImage';
import Time from '../../../../components/Time/Time';
import AudioMessage from '../AudioMessage/AudioMessage';
import FileMessage from '../FileMessage/FileMessage';

const ChatMessage: FC<{
  right?: boolean;
  typing?: boolean;
  imgMessage?: boolean;
  audioMessage?: boolean;
  fileMessage?: boolean;
}> = ({
  right = false,
  typing = false,
  imgMessage = false,
  audioMessage = false,
  fileMessage = false,
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
          className={classNames('d-flex chatItemWrapper', {
            'flex-direction-row-reverse': right,
          })}
        >
          <Avatar right={right} />
          {!audioMessage && !fileMessage && (
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
          )}
        </div>
        {!right && !typing && !imgMessage && !audioMessage && !fileMessage && (
          <Attachment />
        )}
        {audioMessage && <AudioMessage />}
        {fileMessage && <FileMessage />}
      </div>
      <Time />
    </section>
  );
};

export default ChatMessage;
