import React, { FC, useEffect } from 'react';
import './style.scss';
import className from 'classnames';

const Avatar: FC<{
  right?: boolean;
  dialogItem?: boolean;
  url?: string;
  name?: string;
}> = ({ right = false, dialogItem = false, url = '', name }) => {
  const generateAvatar = (userName: string) => {
    const [r, g, b] = userName
      .split('')
      .map((item) => (item.charCodeAt(0) > 255 ? 255 : item.charCodeAt(0)));
    return [r, g, b];
  };

  useEffect(() => {}, [name]);

  return (
    <div
      className={className('avatar', {
        avatarLeft: !right,
        avatarRight: right,
        avatarDialog: dialogItem,
      })}
    >
      {url && (
        <img className={className('avatarPhoto')} src={url} alt="avatar" />
      )}

      {!url && name && (
        <span
          className="avatarPhoto avatar"
          style={{ background: `rgb(${[...generateAvatar(name)]})` }}
        >
          {name[0]}
        </span>
      )}
    </div>
  );
};

export default Avatar;
