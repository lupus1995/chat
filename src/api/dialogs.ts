import consts from '../resourse/consts';

export async function getDialogs(signal: AbortSignal) {
  const request = await fetch(`${consts.path}/dialogs`, {
    method: 'GET',
    signal,
  });

  return await request.json();
}
