import React, { FC } from 'react';
import avatar from './avatar.png';
import './style.scss';
import className from 'classnames';

const Avatar: FC<{ right?: boolean; dialogItem?: boolean }> = ({
  right = false,
  dialogItem = false,
}) => {
  return (
    <div
      className={className('avatar avatarOnline', {
        avatarLeft: !right,
        avatarRight: right,
        avatarDialog: dialogItem,
      })}
    >
      <img className={className('avatarPhoto')} src={avatar} alt="avatar" />
    </div>
  );
};

export default Avatar;
