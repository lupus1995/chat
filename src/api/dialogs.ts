import { UsersInterface } from '../interfaces/users/Users';
import IdAndSignal from '../interfaces/commons/IdAndSignal';
import Dialog from '../interfaces/dialogs/Dialog';
import Dialogs from '../interfaces/dialogs/DialogsInterface';
import CreateRequestDialogInterface from '../interfaces/dialogs/CreateRequestDialogInterface';
import SignalInterface from '../interfaces/reducer/Signal';
import consts from '../resourse/consts';
import EditRequestDialogInterface from '../interfaces/dialogs/EditRequestDialogInterface';

export async function getDialogs({
  signal,
  id,
}: IdAndSignal): Promise<Dialogs[]> {
  const request = await fetch(`${consts.path}/dialogs/${id}`, {
    method: 'GET',
    signal,
  });

  const result = await request.json();
  return result;
}

export async function createDialog({
  type,
  members,
  signal,
}: CreateRequestDialogInterface & SignalInterface): Promise<Dialog> {
  const request = await fetch(`${consts.path}/dialogs`, {
    method: 'POST',
    signal,
    body: JSON.stringify({ type, members }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  const result = await request.json();
  return result;
}

export async function editDialog({
  type,
  members,
  signal,
  _id,
}: EditRequestDialogInterface & SignalInterface): Promise<Dialog> {
  const request = await fetch(`${consts.path}/dialogs/${_id}`, {
    method: 'PUT',
    signal,
    body: JSON.stringify({ type, members }),
    ...consts.headers,
  });

  const result = await request.json();
  return result;
}

export async function deleteDialog({
  id,
  signal,
}: IdAndSignal): Promise<Dialog> {
  const request = await fetch(`${consts.path}/dialogs/${id}`, {
    method: 'DELETE',
    signal,
  });

  const result = await request.json();
  return result;
}

export async function getTypes(signal: AbortSignal): Promise<string[]> {
  const request = await fetch(`${consts.path}/types`, {
    method: 'GET',
    signal,
  });

  const result = await request.json();
  return result;
}

export async function getMembers({
  id,
  signal,
}: IdAndSignal): Promise<UsersInterface[]> {
  const request = await fetch(`${consts.path}/dialogs/members/${id}`, {
    method: 'GET',
    signal,
  });

  const result = await request.json();
  return result;
}
