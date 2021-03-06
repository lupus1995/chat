import React, { FC } from 'react';
import './style.scss';
import classNames from 'classnames';

const ReadMessage: FC<{ dialogItem?: boolean }> = ({ dialogItem = false }) => {
  return (
    <span
      className={classNames({
        readMessageDialogItem: dialogItem,
      })}
    >
      <svg
        width="15"
        height="10"
        viewBox="0 0 15 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.66648 7.71651L10.2103 0.156208C10.3908 -0.0520693 10.6839 -0.0520693 10.8643 0.156208C11.0452 0.363952 11.0452 0.701671 10.8643 0.909415L3.99532 8.84579C3.8167 9.0514 3.51946 9.0514 3.34084 8.84579L0.135337 5.17084C-0.0451125 4.9631 -0.0451125 4.62591 0.135337 4.41763C0.315787 4.20936 0.608904 4.20936 0.789354 4.41763L3.66648 7.71651ZM7.14111 7.93176L14.1548 0.156989C14.3479 -0.0523296 14.6616 -0.0523296 14.8548 0.156989C15.0484 0.365772 15.0484 0.705179 14.8548 0.913962L7.55877 9.13503C7.3676 9.34167 5.87166 8.49357 5.75484 8.37659C5.64238 8.26398 6.30121 7.6044 6.30121 7.6044C6.50611 7.71698 7.08691 7.99186 7.14111 7.93176Z"
          fill="#0C8FE4"
        />
      </svg>
    </span>
  );
};

export default ReadMessage;
