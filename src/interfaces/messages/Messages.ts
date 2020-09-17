export default interface MessagesInterface {
  _id: string;
  text: string;
  createdAt: string;
  user: {
    _id: string;
    name: string;
    avatar: null;
  };
  dialogId: string;
}
