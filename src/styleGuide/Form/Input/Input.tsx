import React, {
  FC,
  useRef,
  MutableRefObject,
  useState,
  useContext,
  useEffect,
} from 'react';
import './style.scss';
import consts from '../../../resourse/consts';
import { RulesValidationInterface } from '../rulesValidation/interfaces';
import { validation } from './helpers';
import MessageError from '../../../components/MessageError/MessageError';
import { FormContext } from '../Form';
let debounceTimeoutId: number = 0;
const Input: FC<{
  type: string;
  classNames?: string;
  placeholder: string;
  rules: RulesValidationInterface;
  name?: string;
  defaultValue?: string;
}> = ({
  type = 'text',
  classNames = '',
  placeholder,
  rules,
  name = '',
  defaultValue = '',
}) => {
  const { fields, setFields, submit } = useContext(FormContext);
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
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const resultValidation = validation({
      value: e.target.value,
      setError,
      setMessage,
      rules,
      fields,
    });
    setFields({ name, value: e.target.value, error: resultValidation.error });
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    clearTimeout(debounceTimeoutId);
    debounceTimeoutId = window.setTimeout(() => {
      e.target.value = e.target.value.substring(0, 255);
      const resultValidation = validation({
        value: e.target.value,
        setError,
        setMessage,
        rules,
        fields,
      });
      setFields({ name, value: e.target.value, error: resultValidation.error });
    }, 100);
  };

  useEffect(() => {
    if (submit && input.current) {
      validation({
        value: input.current.value,
        setError,
        setMessage,
        rules,
        fields,
      });
    }
  }, [submit]);

  return (
    <>
      <div className="inputConteiner">
        <input
          defaultValue={defaultValue}
          name={name}
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