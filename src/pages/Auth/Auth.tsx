import React from 'react';
import './style.scss';
import Text from '../../styleGuide/Text/Text';
import Form from '../../styleGuide/Form/Form';
import Input from '../../styleGuide/Input/Input';
import {
  lineLengthRules,
  requiredInputRules,
  emailRules,
} from '../../rulesValidation/rules';
import Link from '../../styleGuide/CustomLink/CustomLink';
import consts from '../../resourse/consts';
import MainAuthWrapper from '../../wrappers/MainAuthWrapper/MainAuthWrapper';
import FormAuthWrapper from '../../wrappers/FormAuthWrapper/FormAuthWrapper';
import LinkAuthWrapper from '../../wrappers/LinkAuthWrapper/LinkAuthWrapper';
import Typography from '../../styleGuide/Typography/Typography';

const Auth = () => {
  return (
    <MainAuthWrapper>
      <Typography className="text-center" tag="h1">
        Войти в аккаунт
      </Typography>
      <Text className="subtitle-h1 text-center" tag="p">
        Пожалуйста, войдите в свой аккаунт
      </Text>
      <FormAuthWrapper>
        <Form className="d-flex flex-direction-column">
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
      </FormAuthWrapper>
    </MainAuthWrapper>
  );
};

export default Auth;
