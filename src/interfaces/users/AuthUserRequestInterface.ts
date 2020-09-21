import { Signal } from './../reducer/AbortSignal';
export interface AuthUserRequestInterface extends Signal {
  email: string;
  password: string;
}
