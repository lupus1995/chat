import React, { FC } from 'react';
import { KeyForm } from './Form';

const FormWrapper: FC<{ form: KeyForm[] }> = ({ children, form }) => {
  const renderChild = () => {
    return React.Children.map(children, (child: any, index) => {
      const name = Object.keys(form[index])[0];
      return React.cloneElement(child, {
        defaultValue: form[index][name].defaultValue,
        defaultError: form[index][name].defaultError,
        name,
      });
    });
  };

  return <>{renderChild()}</>;
};

export default FormWrapper;
