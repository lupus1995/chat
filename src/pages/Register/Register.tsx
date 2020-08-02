import React from 'react';
import MainAuthWrapper from '../../wrappers/MainAuthWrapper/MainAuthWrapper';
import Typography from '../../components/Typography/Typography';
import Text from '../../components/Text/Text';
import FormAuthWrapper from '../../wrappers/FormAuthWrapper/FormAuthWrapper';
import FormAuthContent from './FormAuthContent';
import RegisterSuccessMessage from './RegisterSuccessMessage';

const Register = () => {
  return (
    <MainAuthWrapper>
      <Typography className="text-center" tag="h1">
        Регистрация
      </Typography>
      <Text className="subtitle-h1 text-center" tag="p">
        Для входа в чат вам нужно зарегистрироваться
      </Text>
      <FormAuthWrapper>
        {/* <FormAuthContent /> */}
        <RegisterSuccessMessage />
      </FormAuthWrapper>
    </MainAuthWrapper>
  );
};

export default Register;
