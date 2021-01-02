export default interface DialogsInterface {
  company: {
    fullname: string;
    dialogId: string;
  };
  message: string;
  date: number;
  senderId: string;
  recipientId: string;
}
