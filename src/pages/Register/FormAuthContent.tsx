import React, { useContext } from 'react';
import { CustomLink } from 'styleguide-panfilov';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import {
  KeyFormInterface,
  Form,
  FormWrapper,
  Input,
  requiredInputRules,
  emailRules,
  lineLengthRules,
  checkPassword,
} from 'form-panfilov';
import LinkAuthWrapper from '../../wrappers/LinkAuthWrapper/LinkAuthWrapper';
import consts from '../../resourse/consts';
import { CreateUserFormInterface } from '../../interfaces/users/CreateUserFormInterface';
import { createUserRequest as createUserRequestFunc } from '../../redux/users/actions';
import { FetchCancelContext } from '../../wrappers/FetchCancel/FetchCancel';
import { RootReducerInterface } from '../../../root.reducer';

const defaultValue: KeyFormInterface[] = [
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
        <CustomLink to={consts.pages.auth}>Войти в аккаунт</CustomLink>
      </LinkAuthWrapper>
    </>
  );
};

export default FormAuthContent;
