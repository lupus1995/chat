import React, { FC, useRef, MutableRefObject, useState } from 'react';
import './style.scss';
import consts from '../../consts';
import { RuleValidationInterface } from '../../rulesValidation/interfaces';

const Input: FC<{
  type: string;
  classNames?: string;
  placeholder: string;
  rules: {
    lineLengthRules?: ({
      string,
    }: {
      string: string;
    }) => RuleValidationInterface;
    requiredInputRules?: ({
      firstClickByInput,
    }: {
      firstClickByInput: boolean;
    }) => RuleValidationInterface;
    emailRules?: ({ string }: { string: string }) => RuleValidationInterface;
  };
}> = ({ type = 'text', classNames = '', placeholder, rules }) => {
  const typePassword = type === consts.typeInputPassword;
  const [readonly, setReadonly] = useState<boolean>(typePassword);
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const input: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const handleFocus = () => {
    if (typePassword && readonly) {
      setReadonly(false);
    }
  };
  const handleBlur = () => {
    const { requiredInputRules } = rules;
    if (typeof requiredInputRules === 'function') {
      const rule = requiredInputRules({
        firstClickByInput: Boolean(
          input.current && parseInt(input.current.value, 0) !== 0,
        ),
      });

      if (rule.rule) {
        setError(rule.rule);
        setMessage(rule.message);
        return;
      }
    }
  };
  return (
    <input
      ref={input}
      type={type}
      readOnly={readonly}
      onFocus={handleFocus}
      className={`input ${classNames}`}
      autoComplete="new-password"
      placeholder={placeholder}
      onBlur={handleBlur}
    />
  );
};

export default Input;
