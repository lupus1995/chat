import React, { FormEvent, useRef, MutableRefObject } from 'react';
import './style.scss';
import icons from '../../../../../resourse/icons';

const ChatTextarea = () => {
  const ref: MutableRefObject<null | HTMLTextAreaElement> = useRef(null);
  return (
    <section className="chatMessageinputContet">
      <button className="chatIcons">{icons.smile}</button>
      <form
        className="chatMessageForm"
        onSubmit={(e: any) => {
          e.preventDefault();
          return false;
        }}
      >
        <textarea
          ref={ref}
          onInput={(e: FormEvent<HTMLTextAreaElement>) => {
            const element = e.target as HTMLElement;
            if (ref.current) {
              ref.current.style.height = `${element.scrollHeight}px`;
            }
          }}
          autoComplete="off"
          placeholder="Введите текст сообщения…"
          className="chatMessageInput"
          name="message"
        />
      </form>
      <button className="chatIcons">{icons.camera}</button>
      <button className="chatIcons">{icons.microphone}</button>
      <button className="chatIcons">{icons.telegramm}</button>
    </section>
  );
};

export default ChatTextarea;
