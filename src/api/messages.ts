import consts from '../resourse/consts';

export default async function getMessages({ signal }: { signal: AbortSignal }) {
  const request = await fetch(
    `${consts.path}/messages?_sort=createdAt_order=asc`,
    {
      method: 'GET',
      signal,
    },
  );

  const result = await request.json();
  return result;
}
