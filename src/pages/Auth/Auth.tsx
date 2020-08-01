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

const Auth = () => {
  return (
    <main className="d-flex flex-direction-column justify-content-center authContent">
      <Typography className="text-center" tag="h1">
        Войти в аккаунт
      </Typography>
      <Text className="subtitle text-center" tag="p">
        Пожалуйста, войдите в свой аккаунт
      </Text>
      <Form className="d-flex formWrapper flex-direction-column">
        <Input
          rules={{ lineLengthRules, requiredInputRules, emailRules }}
          placeholder="Email"
          type="text"
        />
        {/* <Input placeholder="Password" type="password" /> */}
      </Form>
    </main>
  );
};

export default Auth;
