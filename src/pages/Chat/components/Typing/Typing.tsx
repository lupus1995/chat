import React, { memo } from 'react';
import './style.scss';

const Typing = memo(() => {
  return (
    <div className="typing-indicator">
      <span />
      <span />
      <span />
    </div>
  );
});

export default Typing;
