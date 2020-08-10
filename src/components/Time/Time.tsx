import React, { FC } from 'react';
import './style.scss';
import classNames from 'classnames';

const Time: FC<{ right?: boolean; timeDialog?: boolean }> = ({
  right = false,
  timeDialog = false,
}) => {
  return (
    <span
      className={classNames('time', {
        timeRight: right,
        timeDialog,
      })}
    >
      Вчера, в 12:31
    </span>
  );
};

export default Time;
