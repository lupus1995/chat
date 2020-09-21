import { Signal } from '../reducer/AbortSignal';

export interface CreateUserInterface extends Signal {
  name: string;
  email: string;
  password: string;
}
