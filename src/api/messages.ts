import consts from '../resourse/consts';
import get from 'local-storage';

export async function getMessages({ signal }: { signal: AbortSignal }) {
  const request = await fetch(
    `${consts.path}/messages?_sort=createdAt_order=asc`,
    {
      method: 'GET',
      signal,
    },
  );

  return await request.json();
}
