import React, { FC, useState } from 'react';
import './style.scss';
import className from 'classnames';
import getRandomString from '../../helpers/getRandomString';

const Avatar: FC<{
  right?: boolean;
  dialogItem?: boolean;
  url?: string;
}> = ({ right = false, dialogItem = false, url = '' }) => {
  const [avatar] = useState<string>(getRandomString());
  const generateAvatar = () => {
    const [r, g, b] = avatar
      .split('')
      .map((item) => (item.charCodeAt(0) > 255 ? 255 : item.charCodeAt(0)));
    return [r, g, b];
  };

  return (
    <div
      className={className('avatar avatarOnline', {
        avatarLeft: !right,
        avatarRight: right,
        avatarDialog: dialogItem,
      })}
    >
      {url && (
        <img className={className('avatarPhoto')} src={url} alt="avatar" />
      )}

      {!url && (
        <span
          className="avatarPhoto avatar"
          style={{ background: `rgb(${[...generateAvatar()]})` }}
        >
          {avatar[0]}
        </span>
      )}
    </div>
  );
};

export default Avatar;
