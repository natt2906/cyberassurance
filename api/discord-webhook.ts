// api/discord-webhook.ts

export default async function handler(req: any, res: any) {
  // Sécurise la méthode
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  // Lecture variable d'env
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    return res
      .status(500)
      .json({ error: "DISCORD_WEBHOOK_URL manquant côté serveur" });
  }

  try {
    const payload =
      typeof req.body === "string" && req.body.trim().length
        ? JSON.parse(req.body)
        : req.body || (await req.json?.());

    // Honeypot anti-bot : si rempli, on ne forward pas au webhook (réponse OK silencieuse)
    if (payload?.honeypot || payload?.hp) {
      return res.status(200).json({ ok: true, skipped: true });
    }

    // Appel Discord côté serveur => aucun problème CORS
    const discordRes = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!discordRes.ok) {
      const text = await discordRes.text();
      console.error("Erreur Discord:", discordRes.status, text);
      return res.status(500).json({ error: "Erreur retour Discord" });
    }

    // Succès
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Erreur interne API:", error);
    return res.status(500).json({ error: "Erreur interne API" });
  }
}
