import React, { memo } from 'react';
import { Typography, Text } from 'styleguide-panfilov';
import icons from '../../resourse/icons';

const RegisterSuccessMessage = memo(
  (): JSX.Element => {
    return (
      <div className="text-center">
        <div style={{ marginBottom: 15 }}>{icons.successRegister}</div>
        <Typography tag="h2">Подтвердите свой аккаунт</Typography>
        <Text className="subtitle-h2">
          На Вашу почту отправлено письмо со сслыкой на подтвеждение акканута
        </Text>
      </div>
    );
  },
);

export default RegisterSuccessMessage;
