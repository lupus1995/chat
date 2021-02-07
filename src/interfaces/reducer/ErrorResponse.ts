import ErrorsResponseMessage from '../commons/ErrorsResponse';

export interface ErrorResponse {
  status: number;
  message: ErrorsResponseMessage[];
  error: string;
}
