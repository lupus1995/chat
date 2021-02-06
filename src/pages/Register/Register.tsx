import React, { memo } from 'react';
import { Typography, Text } from 'styleguide-panfilov';
import MainAuthWrapper from '../../wrappers/MainAuthWrapper/MainAuthWrapper';
import FormAuthContent from './FormAuthContent';
import AuthFormContent from '../../wrappers/AuthFormContent/AuthFormContent';

const Register = memo(() => {
  return (
    <MainAuthWrapper>
      <Typography className="text-center" tag="h1">
        Регистрация
      </Typography>
      <Text className="subtitle-h1 text-center" tag="p">
        Для входа в чат вам нужно зарегистрироваться
      </Text>
      <AuthFormContent>
        <FormAuthContent />
      </AuthFormContent>
    </MainAuthWrapper>
  );
});

export default Register;
