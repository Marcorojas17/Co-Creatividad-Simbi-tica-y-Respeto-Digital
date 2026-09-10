export const checkout = async (tier: string) => {
  const r = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tier })
  });
  const data = await r.json();
  if (data.url) window.location.href = data.url;
  else alert('Error checkout: ' + data.error);
};
