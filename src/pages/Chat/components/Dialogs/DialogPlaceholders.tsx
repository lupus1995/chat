import React from 'react';
import DialogItemPlaceholder from './DialogItemPlaceholder';

const length = 10;
const placeholders: JSX.Element[] = Array.from({ length }, (e, i) => (
  <DialogItemPlaceholder key={i} />
));
const DialogPlaceholders = (): JSX.Element => {
  return <>{placeholders.map((item) => item)}</>;
};

export default DialogPlaceholders;
