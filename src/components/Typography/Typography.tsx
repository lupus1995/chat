import React, { FC, createElement } from 'react';
import './style.scss';

const Typography: FC<{ tag?: string; className?: string }> = ({
  children,
  tag = 'span',
  className = '',
}) => createElement(tag, { className: `typography ${className}` }, children);

export default Typography;
