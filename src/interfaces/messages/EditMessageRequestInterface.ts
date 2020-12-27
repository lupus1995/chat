import CreateMessageRequestInterface from './CreateMessageRequestInterface';

export default interface EditMessageRequestInterface
  extends CreateMessageRequestInterface {
  _id: string;
}
