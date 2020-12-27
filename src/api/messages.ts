import IdAndSignal from '../interfaces/commons/IdAndSignal';
import CreateMessageRequestInterface from '../interfaces/messages/CreateMessageRequestInterface';
import EditMessageRequestInterface from '../interfaces/messages/EditMessageRequestInterface';
import MessagesInterface from '../interfaces/messages/Messages';
import SignalInterface from '../interfaces/reducer/Signal';
import consts from '../resourse/consts';

export async function getMessages({
  signal,
  id,
}: IdAndSignal): Promise<MessagesInterface[]> {
  const request = await fetch(`${consts.path}/message/${id}`, {
    method: 'GET',
    signal,
  });

  const result = await request.json();
  return result;
}

export async function createMessage({
  dialogsId,
  senderId,
  recipient,
  message,
  signal,
}: CreateMessageRequestInterface &
  SignalInterface): Promise<MessagesInterface> {
  const request = await fetch(`${consts.path}/message`, {
    method: 'POST',
    ...consts.headers,
    signal,
    body: JSON.stringify({ dialogsId, senderId, recipient, message }),
  });

  const result = await request.json();
  return result;
}

export async function editMessage({
  dialogsId,
  senderId,
  recipient,
  message,
  signal,
  _id,
}: EditMessageRequestInterface & SignalInterface): Promise<MessagesInterface> {
  const request = await fetch(`${consts.path}/message/${_id}`, {
    method: 'PUT',
    ...consts.headers,
    signal,
    body: JSON.stringify({ dialogsId, senderId, recipient, message }),
  });

  const result = await request.json();
  return result;
}

export async function deleteMessage({
  id,
  signal,
}: IdAndSignal): Promise<MessagesInterface> {
  const request = await fetch(`${consts.path}/message/${id}`, {
    method: 'DELETE',
    signal,
  });

  const result = await request.json();
  return result;
}
