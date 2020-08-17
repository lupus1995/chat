import React from 'react';
import './style.scss';
import DialogItem from './DialogItem';
import DialogWrapper from '../../wrappers/DialogWrapper/DialogWrapper';

const Dialogs = () => {
  return (
    <DialogWrapper>
      <DialogItem />
      <DialogItem unreadMessage />
      <DialogItem read />
      <DialogItem send />
    </DialogWrapper>
  );
};

export default Dialogs;
