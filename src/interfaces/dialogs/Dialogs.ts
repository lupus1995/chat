export default interface DialogsInterface {
  _id: string;
  name: string;
  user: {
    name: string;
    avatar: null;
  };
  messages: {
    _id: string;
    text: string;
    createdAt: string;
  }[];
}
