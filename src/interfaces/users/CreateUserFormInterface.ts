import { FieldInterface } from 'form-panfilov';

export interface CreateUserFormInterface {
  email: FieldInterface;
  name: FieldInterface;
  login: FieldInterface;
  password: FieldInterface;
  repeatPassword: FieldInterface;
}
