import CreateMessageRequestInterface from './CreateMessageRequestInterface';

export default interface MessagesInterface
  extends CreateMessageRequestInterface {
  _id: string;
  read: boolean;
  createdAt: number;
  updatedAt: number;
}
