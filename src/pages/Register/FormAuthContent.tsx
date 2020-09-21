import React, { useContext } from 'react';
import Form, { KeyForm } from '../../styleGuide/Form/Form';
import LinkAuthWrapper from '../../wrappers/LinkAuthWrapper/LinkAuthWrapper';
import consts from '../../resourse/consts';
import Link from '../../styleGuide/CustomLink/CustomLink';
import Input from '../../styleGuide/Form/Input/Input';
import {
  requiredInputRules,
  emailRules,
  lineLengthRules,
  checkPassword,
} from '../../styleGuide/Form/rulesValidation/rules';
import { CreateUserFormInterface } from '../../interfaces/users/CreateUserFormInterface';
import { useDispatch, useSelector } from 'react-redux';
import { createUserRequest as createUserRequestFunc } from '../../redux/users/actions';
import { FetchCancelContext } from '../../wrappers/FetchCancel/FetchCancel';
import { RootReducerInterface } from '../../../root.reducer';
import classNames from 'classnames';
import FormWrapper from '../../styleGuide/Form/FormWrapper';

const defaultValue: KeyForm[] = [
  {
    email: {
      defaultValue: '',
      defaultError: true,
    },
  },
  {
    name: {
      defaultValue: '',
      defaultError: true,
    },
  },
  {
    password: {
      defaultValue: '',
      defaultError: true,
    },
  },
  {
    repeatPassword: {
      defaultValue: '',
      defaultError: true,
    },
  },
];

const FormAuthContent = () => {
  const dispatch = useDispatch();
  const { abortController } = useContext(FetchCancelContext);
  const { createUserRequest, errors } = useSelector(
    (state: RootReducerInterface) => ({
      createUserRequest: state.users.fetchData.createUserRequest,
      errors: state.users.errors,
    }),
  );

  return (
    <>
      <Form
        data={defaultValue}
        buttonText="зарегистрироваться"
        className={classNames('d-flex flex-direction-column', {
          disabled: createUserRequest,
        })}
        onSubmit={(fields: CreateUserFormInterface) => {
          if (
            !fields.email.error &&
            !fields.name.error &&
            !fields.password.error &&
            !fields.repeatPassword.error
          ) {
            dispatch(
              createUserRequestFunc({
                name: fields.name.value,
                email: fields.email.value,
                password: fields.password.value,
                signal: abortController.signal,
              }),
            );
          }
        }}
      >
        <FormWrapper errors={errors} form={defaultValue}>
          <Input
            rules={{ requiredInputRules, emailRules }}
            placeholder="Email"
            type="text"
          />
          <Input
            rules={{ requiredInputRules, lineLengthRules }}
            placeholder="Ваше имя"
            type="text"
          />
          <Input
            rules={{ requiredInputRules, lineLengthRules }}
            placeholder="Пароль"
            type="password"
          />
          <Input
            rules={{ requiredInputRules, lineLengthRules, checkPassword }}
            placeholder="Повторите пароль"
            type="password"
          />
        </FormWrapper>
      </Form>
      <LinkAuthWrapper>
        <Link to={consts.pages.auth}>Войти в аккаунт</Link>
      </LinkAuthWrapper>
    </>
  );
};

export default FormAuthContent;
