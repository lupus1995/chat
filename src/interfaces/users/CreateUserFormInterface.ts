import { FieldInterface } from 'form-panfilov';

export interface CreateUserFormInterface {
  email: FieldInterface;
  name: FieldInterface;
  password: FieldInterface;
  repeatPassword: FieldInterface;
}
