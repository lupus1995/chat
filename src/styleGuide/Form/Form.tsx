import React, { FC, useRef, useState, createContext } from 'react';
import './style.scss';
import Button from '../Button/Button';
import FormWrapper from './FormWrapper';

// интерфейс для описания полей в форме
export interface KeyForm {
  [key: string]: {
    defaultValue: string | number;
    defaultError: boolean;
  };
}

export interface FormContextInterface {
  submit: boolean;
  fields: any;
  setFields: ({
    name,
    value,
    error,
  }: {
    name: string;
    value: string;
    error: boolean;
  }) => void;
}

const initFields = (data: KeyForm[]): object => {
  const fields: any = {};
  data.forEach((element) => {
    const name = Object.keys(element)[0];
    fields[name] = {
      value: '',
      error: true,
    };
    fields[name].value = element[name].defaultValue;
    fields[name].error = element[name].defaultError;
  });
  return fields;
};

export const FormContext = createContext({} as FormContextInterface);

const Form: FC<{
  className?: string;
  buttonText?: string;
  data: KeyForm[];
}> = ({ children, className = '', buttonText = 'ВОЙТИ В АККАУНТ', data }) => {
  const [fields, setFields] = useState<any>(initFields(data));
  const [submit, setSubmit] = useState<boolean>(false);
  const ref = useRef(null);
  return (
    <form
      onSubmit={(e: any) => {
        setSubmit(true);
        e.preventDefault();
        return false;
      }}
      ref={ref}
      className={className}
      action="#"
      autoComplete="off"
    >
      <FormContext.Provider
        value={{
          submit,
          fields,
          setFields: ({
            name,
            value,
            error,
          }: {
            name: string;
            value: string;
            error: boolean;
          }) => {
            fields[name] = {
              value,
              error,
            };
            console.log(fields);
            setFields(fields);
          },
        }}
      >
        <FormWrapper form={data}>{children}</FormWrapper>
      </FormContext.Provider>
      <Button type="submit" primary className="text-uppercase">
        {buttonText}
      </Button>
    </form>
  );
};

export default Form;
