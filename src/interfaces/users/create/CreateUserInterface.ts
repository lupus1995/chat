import { Signal } from '../../reducer/AbortSignal';

export interface CreateUserInterface extends Signal {
  name: string;
  email: string;
  login: string;
  password: string;
}
