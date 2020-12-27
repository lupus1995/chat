import CreateRequestDialogInterface from './CreateRequestDialogInterface';

export default interface DialogInterface extends CreateRequestDialogInterface {
  createdAt: number;
  updatedAt: number;
}
