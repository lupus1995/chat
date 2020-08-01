import React from 'react';
import './style.scss';
import Typography from '../../components/Typography/Typography';
import Text from '../../components/Text/Text';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import {
  lineLengthRules,
  requiredInputRules,
  emailRules,
} from '../../rulesValidation/rules';
import Link from '../../components/CustomLink/CustomLink';
import { useHistory } from 'react-router-dom';
import consts from '../../consts';

const Auth = () => {
  const history = useHistory();
  return (
    <main className="d-flex flex-direction-column justify-content-center authContent">
      <Typography className="text-center" tag="h1">
        Войти в аккаунт
      </Typography>
      <Text className="subtitle text-center" tag="p">
        Пожалуйста, войдите в свой аккаунт
      </Text>
      <div className="formWrapper">
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
        <div className="text-center linkAuth">
          <Link to={consts.pages.register}>Зарегистрироваться</Link>
        </div>
      </div>
    </main>
  );
};

export default Auth;
