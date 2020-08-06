import React, { FC, useRef, MutableRefObject, useState } from 'react';
import './style.scss';
import consts from '../../resourse/consts';
import { RulesValidationInterface } from '../../rulesValidation/interfaces';
import { validation } from './helpers';
import MessageError from '../../components/MessageError/MessageError';
let debounceTimeoutId: number = 0;
const Input: FC<{
  type: string;
  classNames?: string;
  placeholder: string;
  rules: RulesValidationInterface;
  name?: string;
}> = ({ type = 'text', classNames = '', placeholder, rules, name }) => {
  console.log(name);
  const typePassword = type === consts.typeInputPassword;
  const [readonly, setReadonly] = useState<boolean>(typePassword);
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [blur, setBlur] = useState<boolean>(false);
  const input: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const handleFocus = () => {
    if (typePassword && readonly) {
      setReadonly(false);
    }
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    validation({
      val: e.target.value,
      setError,
      setMessage,
      rules,
    });
    setBlur(true);
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!blur) return;
    e.persist();
    clearTimeout(debounceTimeoutId);
    debounceTimeoutId = window.setTimeout(() => {
      e.target.value = e.target.value.substring(0, 255);
      validation({
        val: e.target.value,
        setError,
        setMessage,
        rules,
      });
    }, 100);
  };
  return (
    <>
      <div className="inputConteiner">
        <input
          ref={input}
          type={type}
          readOnly={readonly}
          onFocus={handleFocus}
          className={`input ${classNames}`}
          autoComplete="new-password"
          placeholder={placeholder}
          onBlur={handleBlur}
          onInput={handleInput}
        />
        {error && (
          <div className="errorContainer">
            <MessageError text={message} />
          </div>
        )}
      </div>
    </>
  );
};

export default Input;
