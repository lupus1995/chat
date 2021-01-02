export default function enabledBody(): void {
  const body = document.querySelector('body') as HTMLBodyElement;
  body.style.overflow = 'auto';
}
