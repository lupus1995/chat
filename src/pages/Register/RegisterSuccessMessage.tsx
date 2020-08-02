import React from 'react';
import Typography from '../../styleGuide/Typography/Typography';
import Text from '../../styleGuide/Text/Text';
import icons from '../../resourse/icons';

const RegisterSuccessMessage = () => {
  return (
    <>
      <div className="text-center">
        <div style={{ marginBottom: 15 }}>{icons.successRegister}</div>
        <Typography tag="h2">Подтвердите свой аккаунт</Typography>
        <Text className="subtitle-h2">
          На Вашу почту отправлено письмо со сслыкой на подтвеждение акканута
        </Text>
      </div>
    </>
  );
};

export default RegisterSuccessMessage;
