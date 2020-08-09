import React from 'react';
import './style.scss';
import Text from '../../styleGuide/Text/Text';
import Form from '../../styleGuide/Form/Form';
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

const Auth = () => {
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
          data={[
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
          ]}
          className="d-flex flex-direction-column"
        >
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
        </Form>
        <LinkAuthWrapper>
          <Link to={consts.pages.register}>Зарегистрироваться</Link>
        </LinkAuthWrapper>
      </AuthFormContent>
    </MainAuthWrapper>
  );
};

export default Auth;
