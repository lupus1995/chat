import React, { FC } from 'react';
import './style.scss';
import classNames from 'classnames';
import { fromUnixTime, format } from 'date-fns';

const Time: FC<{ right?: boolean; timeDialog?: boolean; date?: number }> = ({
  right = false,
  timeDialog = false,
  date,
}) => {
  return (
    <span
      className={classNames('time', {
        timeRight: right,
        timeDialog,
      })}
    >
      {date && format(fromUnixTime(date), 'dd.MM.Y')}
    </span>
  );
};

export default Time;
