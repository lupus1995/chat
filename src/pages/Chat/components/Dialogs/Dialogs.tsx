import React from 'react';
import './style.scss';
import DialogItem from './DialogItem';

const Dialogs = () => {
  return (
    <section className="dialogWrapper">
      <ul>
        <DialogItem />
        <DialogItem unreadMessage />
        <DialogItem read />
        <DialogItem send />
      </ul>
    </section>
  );
};

export default Dialogs;
