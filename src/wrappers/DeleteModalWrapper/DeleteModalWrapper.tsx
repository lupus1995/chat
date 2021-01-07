import React, { FC, memo } from 'react';
import AuthFormContent from '../AuthFormContent/AuthFormContent';

const DeleteModalWrapper: FC<{ text: string }> = memo(({ text }) => {
  return (
    <AuthFormContent>
      <p>{text}</p>
    </AuthFormContent>
  );
});

export default DeleteModalWrapper;
