import React, { FC } from 'react';
import './style.scss';
import classNames from 'classnames';

const SendMessage: FC<{ dialogItem?: boolean }> = ({ dialogItem = false }) => {
  return (
    <span
      className={classNames({
        sendMessageDialogItem: dialogItem,
      })}
    >
      <svg
        width="11"
        height="9"
        viewBox="0 0 11 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.2103 0.156208L3.66648 7.71651L0.789354 4.41763C0.608904 4.20936 0.315787 4.20936 0.135337 4.41763C-0.0451125 4.62591 -0.0451125 4.9631 0.135337 5.17084L3.34084 8.84579C3.51946 9.0514 3.8167 9.0514 3.99532 8.84579L10.8643 0.909415C11.0452 0.701671 11.0452 0.363952 10.8643 0.156208C10.6839 -0.0520693 10.3908 -0.0520693 10.2103 0.156208Z"
          fill="#0C8FE4"
        />
      </svg>
    </span>
  );
};

export default SendMessage;
