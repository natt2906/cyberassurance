import { FormEvent, useState } from 'react';
import { sendLead } from '../utils/sendLead';
import { trackAdsConversion, trackLeadSubmit } from '../analytics/gtag';

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
    const companySize = String(formData.get('size') || '').trim();
    const sector = String(formData.get('sector') || '').trim();
    const fullName = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const phone = String(formData.get('phone') || '').trim();

    const payload = {
      content: null,
      embeds: [
        {
          title: "📥 Nouvelle demande d'audit cyber",
          color: 5814783,
          fields: [
            { name: 'Nom et prénom', value: fullName || '-', inline: true },
            { name: 'Email', value: email || '-', inline: true },
            { name: 'Téléphone', value: phone || '-', inline: true },
            { name: "Taille de l'entreprise", value: companySize || '-', inline: true },
            { name: "Secteur d'activité", value: sector || '-', inline: true },
          ],
          footer: {
            text: "Source: formulaire principal",
          },
          timestamp: new Date().toISOString()
        }
      ]
    };

    // Honeypot anti-bot
    const honeypot = String(formData.get('hp') || '').trim();
    if (honeypot) {
      setIsSubmitting(false);
      return;
    }

    try {
      await sendLead(payload);
      trackLeadSubmit({ company_size: companySize, sector });
      trackAdsConversion();
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
      id="audit"
      className="relative px-4 py-16 lg:py-24 bg-[#0b1531] scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Recevez votre audit cyber gratuit
          </h2>
          <p className="text-blue-100/80 max-w-2xl mx-auto">
            4 questions rapides pour évaluer votre exposition. Réponse sous 24h ouvrées avec des
            recommandations claires et adaptées.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Sans engagement",
              "Réponse sous 24h ouvrées",
              "Données confidentielles",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-blue-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-[#0f1c3a] border border-blue-500/30 rounded-3xl p-6 lg:p-10 shadow-xl shadow-blue-900/40 backdrop-blur-xl">
          {hasSubmitted ? (
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                Merci, votre demande d&apos;audit a bien été envoyée ✅
              </h3>
              <p className="text-blue-100/80">
                Un expert vous recontactera si des précisions sont nécessaires.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6 rounded-2xl border border-blue-500/20 bg-white/5 px-5 py-4 text-left">
                <h3 className="text-sm font-semibold text-white">
                  Ce que vous recevez sous 24h
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-blue-100">
                  <li>• Évaluation rapide de votre exposition (score)</li>
                  <li>• Recommandations prioritaires (3 actions)</li>
                  <li>• Proposition d&apos;assurance adaptée (si pertinent)</li>
                </ul>
              </div>

              <form className="grid gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-medium text-blue-100" htmlFor="name">
                  Nom et prénom
                </label>
                <input
                  id="name"
                  name="name"
                  className="rounded-xl bg-slate-950/60 border border-blue-500/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
                  placeholder="Ex : Marie Dupont"
                />
              </div>
              <div className="md:col-span-1 flex flex-col gap-2">
                <label className="text-sm font-medium text-blue-100" htmlFor="size">
                  Taille de l&apos;entreprise
                </label>
                <select
                  id="size"
                  name="size"
                  required
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
                <select
                  id="sector"
                  name="sector"
                  required
                  className="rounded-xl bg-slate-950/60 border border-blue-500/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
                  defaultValue="services"
                >
                  <option value="services">Services / Conseil</option>
                  <option value="commerce">Commerce / E-commerce</option>
                  <option value="sante">Santé / Médical</option>
                  <option value="btp">BTP / Industrie</option>
                  <option value="tech">Tech / SaaS</option>
                  <option value="autre">Autre</option>
                </select>
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

              {/* Honeypot anti-bot */}
              <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" />

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
                  {isSubmitting ? 'Envoi en cours…' : 'Obtenir mon audit cyber gratuit'}
                </button>
                <div className="text-xs text-blue-200/80 space-y-1">
                  <p>Nous ne vendons pas vos données. Un conseiller vous rappelle uniquement si nécessaire.</p>
                  <p>
                    En soumettant ce formulaire, vous acceptez d&apos;être recontacté uniquement
                    dans le cadre de cet audit cyber. Données confidentielles.
                  </p>
                </div>
                <div className="grid gap-3 rounded-2xl border border-blue-500/20 bg-white/5 px-5 py-4 text-sm text-blue-100 md:grid-cols-2">
                  <div>
                    <p className="font-semibold text-white">Pour qui</p>
                    <ul className="mt-2 space-y-1">
                      <li>• PME / TPE dépendantes du numérique</li>
                      <li>• Entreprises avec données sensibles</li>
                      <li>• Équipes sans RSSI dédié</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Pas pour qui</p>
                    <ul className="mt-2 space-y-1">
                      <li>• Particuliers</li>
                      <li>• Simple curiosité sans projet professionnel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
