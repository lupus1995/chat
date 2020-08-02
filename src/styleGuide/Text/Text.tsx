import React, { FC, createElement } from 'react';
import './style.scss';

const Text: FC<{ tag?: string; className: string }> = ({
  tag = 'span',
  children,
  className,
}) => createElement(tag, { className }, children);

export default Text;
