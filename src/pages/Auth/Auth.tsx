import React, { memo, useContext, useEffect } from 'react';
import './style.scss';
import { Typography, Text, CustomLink as Link } from 'styleguide-panfilov';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import {
  Form,
  FormWrapper,
  Input,
  KeyFormInterface,
  requiredInputRules,
  MessageErrorForm,
  lineLengthRules,
  emailRules,
} from 'form-panfilov';
import { useHistory } from 'react-router-dom';
import consts from '../../resourse/consts';
import MainAuthWrapper from '../../wrappers/MainAuthWrapper/MainAuthWrapper';
import LinkAuthWrapper from '../../wrappers/LinkAuthWrapper/LinkAuthWrapper';
import AuthFormContent from '../../wrappers/AuthFormContent/AuthFormContent';
import { RootReducerInterface } from '../../../root.reducer';
import { AuthUserFormInterface } from '../../interfaces/users/auth/AuthUserFormInterface';
import { authRequest as authRequestFunc } from '../../redux/users/actions';
import { FetchCancelContext } from '../../wrappers/FetchCancel/FetchCancel';
import useNotification from '../../components/Notification/useNotification';
import getRandomString from '../../helpers/getRandomString';

const defaultValue: KeyFormInterface[] = [
  {
    email: {
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
];

const Auth = memo(() => {
  const { addNotification } = useNotification();
  const dispatch = useDispatch();
  const history = useHistory();
  const { abortController } = useContext(FetchCancelContext);
  const { errors, authRequest, authError, authSuccess } = useSelector(
    (state: RootReducerInterface) => ({
      errors: state.users.errors,
      authRequest: state.users.fetchData.authRequest,
      authError: state.users.fetchData.authError,
      authSuccess: state.users.fetchData.authSuccess,
    }),
  );

  useEffect(() => {
    if (authSuccess) {
      history.push(consts.pages.chat);
    }
  }, [authSuccess]);

  return (
    <MainAuthWrapper>
      <Typography className="text-center" tag="h1">
        Войти в аккаунт
      </Typography>
      <Text className="subtitle-h1 text-center" tag="p">
        Пожалуйста, войдите в свой аккаунт
      </Text>
      <AuthFormContent>
        <Form
          data={defaultValue}
          onSubmit={(fields: AuthUserFormInterface) => {
            if (!fields.email.error && !fields.password.error) {
              dispatch(
                authRequestFunc({
                  email: fields.email.value,
                  password: fields.password.value,
                  signal: abortController.signal,
                }),
              );
            }
          }}
          className={classNames('d-flex flex-direction-column', {
            disabled: authRequest,
          })}
        >
          <FormWrapper errors={errors} form={defaultValue}>
            <Input
              rules={{ requiredInputRules, emailRules }}
              placeholder="Email"
              type="text"
            />
            <Input
              rules={{ requiredInputRules, lineLengthRules }}
              placeholder="Password"
              type="password"
            />
          </FormWrapper>
          {authError && <MessageErrorForm text="Email или пароль не валидны" />}
        </Form>
        <LinkAuthWrapper>
          <Link to={consts.pages.register}>Зарегистрироваться</Link>
        </LinkAuthWrapper>
      </AuthFormContent>

      <button
        type="button"
        onClick={() => {
          addNotification({
            type: consts.message.success,
            message: getRandomString(),
            id: getRandomString(),
            delete: false,
          });
        }}
      >
        add notification
      </button>
    </MainAuthWrapper>
  );
});

export default Auth;
