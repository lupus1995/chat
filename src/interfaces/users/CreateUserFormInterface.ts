import { FieldInterface } from '../../styleGuide/Form/interfaces/FieldInterface';

export interface CreateUserFormInterface {
  email: FieldInterface;
  name: FieldInterface;
  password: FieldInterface;
  repeatPassword: FieldInterface;
}
