import React, { FC } from 'react';
import avatar from './avatar.png';
import './style.scss';
import className from 'classnames';

const Avatar: FC<{ right?: boolean }> = ({ right = false }) => {
  return (
    <div
      className={className('avatar', {
        avatarLeft: !right,
        avatarRight: right,
      })}
    >
      <img className="avatarPhoto" src={avatar} alt="avatar" />
    </div>
  );
};

export default Avatar;
