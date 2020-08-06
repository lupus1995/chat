import React from 'react';
import MainAuthWrapper from '../../wrappers/MainAuthWrapper/MainAuthWrapper';
import Typography from '../../styleGuide/Typography/Typography';
import Text from '../../styleGuide/Text/Text';
import FormAuthContent from './FormAuthContent';
import RegisterSuccessMessage from './RegisterSuccessMessage';
import AuthFormContent from '../../wrappers/AuthFormContent/AuthFormContent';

const Register = () => {
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
        {/* <RegisterSuccessMessage /> */}
      </AuthFormContent>
    </MainAuthWrapper>
  );
};

export default Register;
