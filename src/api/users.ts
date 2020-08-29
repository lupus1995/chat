const path = 'http://localhost:3004';

export async function getUsers(signal: AbortSignal) {
  const request = await fetch(`${path}/users`, {
    method: 'GET',
  });

  return await request.json();
}
