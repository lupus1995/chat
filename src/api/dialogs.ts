const path = 'http://localhost:3004';

export async function getDialogs(signal: AbortSignal) {
  const request = await fetch(`${path}/dialogs`, {
    method: 'GET',
    signal,
  });

  return await request.json();
}
