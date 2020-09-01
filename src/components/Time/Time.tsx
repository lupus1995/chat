import React, { FC } from 'react';
import './style.scss';
import classNames from 'classnames';
import moment from 'moment';

const Time: FC<{ right?: boolean; timeDialog?: boolean; date?: string }> = ({
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
      {date &&
        moment(date).calendar(null, {
          sameDay: 'Сегодня, в HH:mm',
          lastDay: 'Вчера, в HH:mm',
          lastWeek: 'DD.MM.YYYY',
          sameElse: 'DD.MM.YYYY',
        })}
    </span>
  );
};

export default Time;
