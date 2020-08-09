import React from 'react';
import Form from '../../styleGuide/Form/Form';
import LinkAuthWrapper from '../../wrappers/LinkAuthWrapper/LinkAuthWrapper';
import consts from '../../resourse/consts';
import Link from '../../styleGuide/CustomLink/CustomLink';
import Input from '../../styleGuide/Form/Input/Input';
import {
  requiredInputRules,
  emailRules,
  lineLengthRules,
  checkPassword,
} from '../../styleGuide/Form/rulesValidation/rules';

const FormAuthContent = () => {
  return (
    <>
      <Form
        data={[
          {
            email: {
              defaultValue: '',
              defaultError: true,
            },
          },
          {
            name: {
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
          {
            repeatPassword: {
              defaultValue: '',
              defaultError: true,
            },
          },
        ]}
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
          rules={{ requiredInputRules, lineLengthRules, checkPassword }}
          placeholder="Повторите пароль"
          type="password"
        />
      </Form>
      <LinkAuthWrapper>
        <Link to={consts.pages.auth}>Войти в аккаунт</Link>
      </LinkAuthWrapper>
    </>
  );
};

export default FormAuthContent;
