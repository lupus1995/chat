import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import MainAuthWrapper from '../../wrappers/MainAuthWrapper/MainAuthWrapper';
import Typography from '../../components/Typography/Typography';
import Text from '../../components/Text/Text';
import FormAuthWrapper from '../../wrappers/FormAuthWrapper/FormAuthWrapper';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import LinkAuthWrapper from '../../wrappers/LinkAuthWrapper/LinkAuthWrapper';
import consts from '../../consts';
import {
  lineLengthRules,
  requiredInputRules,
  emailRules,
} from '../../rulesValidation/rules';

const Register = () => {
  const history = useHistory();
  return (
    <MainAuthWrapper>
      <Typography className="text-center" tag="h1">
        Регистрация
      </Typography>
      <Text className="subtitle text-center" tag="p">
        Для входа в чат вам нужно зарегистрироваться
      </Text>
      <FormAuthWrapper>
        <Form
          buttonText="зарегистрироваться"
          className="d-flex flex-direction-column"
        >
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
            rules={{ requiredInputRules, lineLengthRules }}
            placeholder="Повторите пароль"
            type="password"
          />
        </Form>
        <LinkAuthWrapper>
          <Link to={consts.pages.auth}>Войти в аккаунт</Link>
        </LinkAuthWrapper>
      </FormAuthWrapper>
    </MainAuthWrapper>
  );
};

export default Register;
