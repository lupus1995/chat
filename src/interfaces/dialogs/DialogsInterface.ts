export default interface DialogsInterface {
  company: {
    fullname: string;
    dialogId: string;
    dialogCreatedDate: number;
  };
  message?: string;
  date?: number;
  senderId?: string;
  recipientId?: string;
}
