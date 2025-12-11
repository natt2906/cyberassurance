const PUBLIC_WEBHOOK = import.meta.env.VITE_DISCORD_WEBHOOK_URL as string | undefined;

async function postJson(url: string, payload: unknown) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`${res.status} ${res.statusText} - ${txt}`);
  }
}

/**
 * Envoie le lead via l’API backend (/api/discord-webhook) et
 * bascule sur le webhook public (VITE_DISCORD_WEBHOOK_URL) en fallback
 * si l’API n’est pas disponible (ex : preview statique).
 */
export async function sendLead(payload: unknown) {
  try {
    await postJson("/api/discord-webhook", payload);
    return;
  } catch (err) {
    if (!PUBLIC_WEBHOOK) {
      throw err;
    }
    // Fallback direct webhook (utile en preview statique)
    await postJson(PUBLIC_WEBHOOK, payload);
  }
}
