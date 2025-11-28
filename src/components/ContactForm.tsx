import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      content: null,
      embeds: [
        {
          title: '📥 Nouvelle demande de devis cyber',
          color: 5814783,
          fields: [
            { name: 'Nom et prénom', value: String(formData.get('name') || '-'), inline: true },
            { name: "Entreprise", value: String(formData.get('company') || '-'), inline: true },
            { name: 'Email', value: String(formData.get('email') || '-'), inline: true },
            { name: 'Téléphone', value: String(formData.get('phone') || '-'), inline: true },
            { name: "Taille de l'entreprise", value: String(formData.get('size') || '-'), inline: true },
            { name: "Secteur d'activité", value: String(formData.get('sector') || '-'), inline: true },
            {
              name: 'Contexte / question',
              value: String(formData.get('message') || 'Aucun message renseigné.').slice(0, 1024)
            }
          ],
          timestamp: new Date().toISOString()
        }
      ]
    };

    try {
      const response = await fetch('/api/discord-webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Erreur API interne: ${response.status} ${response.statusText}`);
      }

      setHasSubmitted(true);
      form.reset();
    } catch (err) {
      console.error(err);
      setError(
        "Une erreur est survenue lors de l'envoi de votre demande. Vous pouvez réessayer dans un instant."
      );
    } finally {
      setIsSubmitting(false);
    }

  };

  return (
    <section
      id="devis"
      className="relative px-4 py-20 lg:py-32 bg-slate-950/60 border-t border-blue-500/20"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Obtenez votre tarif cyber en moins d&apos;une minute
          </h2>
          <p className="text-blue-100/80 max-w-2xl mx-auto">
            Laissez-nous quelques informations sur votre entreprise. Un expert vous recontactera
            rapidement avec une estimation personnalisée et des pistes concrètes pour renforcer
            votre protection.
          </p>
        </div>

        <div className="bg-slate-900/80 border border-blue-500/30 rounded-3xl p-6 lg:p-10 shadow-xl shadow-blue-900/40 backdrop-blur-xl">
          {hasSubmitted ? (
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                Merci, votre demande a bien été envoyée ✅
              </h3>
              <p className="text-blue-100/80">
                Un expert vous contactera prochainement sur les coordonnées indiquées pour parler
                de votre protection cyber.
              </p>
            </div>
          ) : (
            <form className="grid gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
              <div className="md:col-span-1 flex flex-col gap-2">
                <label className="text-sm font-medium text-blue-100" htmlFor="name">
                  Nom et prénom
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="rounded-xl bg-slate-950/60 border border-blue-500/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
                  placeholder="Ex : Marie Dupont"
                />
              </div>

              <div className="md:col-span-1 flex flex-col gap-2">
                <label className="text-sm font-medium text-blue-100" htmlFor="company">
                  Nom de l&apos;entreprise
                </label>
                <input
                  id="company"
                  name="company"
                  required
                  className="rounded-xl bg-slate-950/60 border border-blue-500/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
                  placeholder="Ex : Cabinet ABC, Agence XYZ…"
                />
              </div>

              <div className="md:col-span-1 flex flex-col gap-2">
                <label className="text-sm font-medium text-blue-100" htmlFor="email">
                  Email professionnel
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-xl bg-slate-950/60 border border-blue-500/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
                  placeholder="vous@entreprise.fr"
                />
              </div>

              <div className="md:col-span-1 flex flex-col gap-2">
                <label className="text-sm font-medium text-blue-100" htmlFor="phone">
                  Téléphone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="rounded-xl bg-slate-950/60 border border-blue-500/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
                  placeholder="06 12 34 56 78"
                />
              </div>

              <div className="md:col-span-1 flex flex-col gap-2">
                <label className="text-sm font-medium text-blue-100" htmlFor="size">
                  Taille de l&apos;entreprise
                </label>
                <select
                  id="size"
                  name="size"
                  className="rounded-xl bg-slate-950/60 border border-blue-500/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
                  defaultValue="1-5"
                >
                  <option value="1-5">1 à 5 personnes</option>
                  <option value="6-20">6 à 20 personnes</option>
                  <option value="21-50">21 à 50 personnes</option>
                  <option value="51-250">51 à 250 personnes</option>
                  <option value="251+">Plus de 250 personnes</option>
                </select>
              </div>

              <div className="md:col-span-1 flex flex-col gap-2">
                <label className="text-sm font-medium text-blue-100" htmlFor="sector">
                  Secteur d&apos;activité
                </label>
                <input
                  id="sector"
                  name="sector"
                  className="rounded-xl bg-slate-950/60 border border-blue-500/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
                  placeholder="Ex : Santé, BTP, conseil, e-commerce…"
                />
              </div>

              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-medium text-blue-100" htmlFor="message">
                  Votre contexte ou question principale
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="rounded-xl bg-slate-950/60 border border-blue-500/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 resize-none"
                  placeholder="Dites-nous en quelques mots comment votre activité dépend de vos outils (facturation, logiciel, mails…) et ce qui vous inquiète le plus."
                ></textarea>
              </div>

              {error && (
                <div className="md:col-span-2 text-sm text-red-400 bg-red-950/40 border border-red-500/40 rounded-xl px-4 py-3">
                  {error}
                </div>
              )}

              <div className="md:col-span-2 flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours…' : 'Envoyer ma demande de tarif'}
                </button>
                <p className="text-xs text-blue-200/70">
                  En envoyant ce formulaire, vous acceptez d&apos;être recontacté(e) par un expert
                  pour échanger sur votre protection cyber. Aucune donnée ne sera partagée avec des
                  tiers sans votre accord.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
