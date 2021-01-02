export default function disableBody(): void {
  const body = document.querySelector('body') as HTMLBodyElement;
  body.style.overflow = 'hidden';
}
