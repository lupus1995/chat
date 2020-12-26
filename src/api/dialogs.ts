import IdAndSignal from '../interfaces/commons/IdAndSignal';
import consts from '../resourse/consts';

export default async function getDialogs({ signal, id }: IdAndSignal) {
  const request = await fetch(`${consts.path}/dialogs/${id}`, {
    method: 'GET',
    signal,
  });

  const result = await request.json();
  return result;
}
