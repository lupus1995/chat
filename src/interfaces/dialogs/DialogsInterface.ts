export default interface DialogsInterface {
  company: {
    fullname: string;
    dialogId: string;
    dialogCreatedDate: number;
    typeDialog: string;
    memberId: string;
  };
  message?: string;
  date?: number;
  senderId?: string;
  recipientId?: string;
}
