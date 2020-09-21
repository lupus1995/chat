import { ErrorMessages } from './ErrorMessages';
export interface ErrorResponse {
  status: number;
  message: ErrorMessages[];
  error: string;
}
