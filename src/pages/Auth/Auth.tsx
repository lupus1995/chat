import React, { useContext } from 'react';
import './style.scss';
import Text from '../../styleGuide/Text/Text';
import Form, { KeyForm } from '../../styleGuide/Form/Form';
import Input from '../../styleGuide/Form/Input/Input';
import {
  lineLengthRules,
  requiredInputRules,
  emailRules,
} from '../../styleGuide/Form/rulesValidation/rules';
import Link from '../../styleGuide/CustomLink/CustomLink';
import consts from '../../resourse/consts';
import MainAuthWrapper from '../../wrappers/MainAuthWrapper/MainAuthWrapper';
import LinkAuthWrapper from '../../wrappers/LinkAuthWrapper/LinkAuthWrapper';
import Typography from '../../styleGuide/Typography/Typography';
import AuthFormContent from '../../wrappers/AuthFormContent/AuthFormContent';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerInterface } from '../../../root.reducer';
import classNames from 'classnames';
import { AuthUserFormInterface } from '../../interfaces/users/AuthUserFormInterface';
import { authRequest as authRequestFunc } from '../../redux/users/actions';
import { FetchCancelContext } from '../../wrappers/FetchCancel/FetchCancel';
import MessageError from '../../components/MessageError/MessageError';
import FormWrapper from '../../styleGuide/Form/FormWrapper';

const defaultValue: KeyForm[] = [
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

const Auth = () => {
  const dispatch = useDispatch();
  const { abortController } = useContext(FetchCancelContext);
  const { errors, authRequest, authError } = useSelector(
    (state: RootReducerInterface) => ({
      errors: state.users.errors,
      authRequest: state.users.fetchData.authRequest,
      authError: state.users.fetchData.authError,
    }),
  );
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

          {authError && <MessageError text={'Email или пароль не валидны'} />}
        </Form>
        <LinkAuthWrapper>
          <Link to={consts.pages.register}>Зарегистрироваться</Link>
        </LinkAuthWrapper>
      </AuthFormContent>
    </MainAuthWrapper>
  );
};

export default Auth;
