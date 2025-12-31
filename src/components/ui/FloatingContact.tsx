import { useState, FormEvent } from "react";
import { sendLead } from "../../utils/sendLead";
import { trackAdsConversion, trackLeadSubmit } from "../../analytics/gtag";

type ConsentPrefs = {
  name: string;
  email: string;
  phone: string;
  size: string;
  sector: string;
  wants_advice: boolean;
};

const initialForm: ConsentPrefs = {
  name: "",
  email: "",
  phone: "",
  size: "1-5",
  sector: "services",
  wants_advice: false,
};

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState<ConsentPrefs>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const honeypotInput = (event.currentTarget.elements.namedItem("hp") as HTMLInputElement | null)?.value?.trim();
    if (honeypotInput) {
      setIsSubmitting(false);
      return;
    }

    const payload = {
      content: null,
      honeypot: honeypotInput,
      embeds: [
        {
          title: "📥 Nouvelle demande de couverture cyber (bouton flottant)",
          color: 5814783,
          fields: [
            { name: "Nom et prénom", value: formValues.name || "-", inline: true },
            { name: "Email", value: formValues.email || "-", inline: true },
            { name: "Téléphone", value: formValues.phone || "-", inline: true },
            { name: "Taille de l'entreprise", value: formValues.size || "-", inline: true },
            { name: "Secteur d'activité", value: formValues.sector || "-", inline: true },
            {
              name: "Souhaite conseils personnalisés",
              value: formValues.wants_advice ? "Oui" : "Non",
              inline: true,
            },
          ],
          footer: {
            text: "Source: bouton flottant",
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      await sendLead(payload);
      trackLeadSubmit({
        company_size: formValues.size,
        sector: formValues.sector,
        wants_advice: formValues.wants_advice,
      });
      trackAdsConversion();
      setHasSubmitted(true);
      setFormValues(initialForm);
    } catch (err) {
      console.error(err);
      setError("Une erreur est survenue lors de l'envoi. Vous pouvez réessayer dans un instant.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof ConsentPrefs, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-transform hover:scale-105"
      >
        🛡️ Diagnostic de couverture cyber gratuit
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => {
              setOpen(false);
              setHasSubmitted(false);
              setError(null);
            }}
          />

          <div className="relative w-full max-w-lg bg-[#0f1c3a] border border-blue-500/30 rounded-2xl shadow-2xl shadow-blue-900/40 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-blue-300/80">Demande rapide</p>
                <h3 className="text-2xl font-bold text-white">Faites votre demande de couverture cyber</h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setHasSubmitted(false);
                  setError(null);
                }}
                className="text-blue-100 hover:text-white text-lg"
                aria-label="Fermer"
              >
                ×
              </button>
            </div>

            {hasSubmitted ? (
              <div className="space-y-3 text-blue-50">
                <p className="text-lg font-semibold">Merci, votre demande est envoyée ✅</p>
                <p className="text-sm text-blue-200/90">
                  Un expert vous recontactera si des précisions sont nécessaires.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setHasSubmitted(false);
                    setOpen(false);
                  }}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-transform hover:scale-105"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    value={formValues.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="rounded-xl bg-slate-950/60 border border-blue-500/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
                    placeholder="Nom et prénom"
                  />
                  <input
                    required
                    type="email"
                    value={formValues.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="rounded-xl bg-slate-950/60 border border-blue-500/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
                    placeholder="Email professionnel"
                  />
                  <input
                    required
                    type="tel"
                    value={formValues.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="rounded-xl bg-slate-950/60 border border-blue-500/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
                    placeholder="Téléphone"
                  />
                  <select
                    value={formValues.size}
                    onChange={(e) => handleChange("size", e.target.value)}
                    className="rounded-xl bg-slate-950/60 border border-blue-500/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
                  >
                    <option value="1-5">1 à 5 personnes</option>
                    <option value="6-20">6 à 20 personnes</option>
                    <option value="21-50">21 à 50 personnes</option>
                    <option value="51-250">51 à 250 personnes</option>
                    <option value="251+">Plus de 250 personnes</option>
                  </select>
                  <select
                    value={formValues.sector}
                    onChange={(e) => handleChange("sector", e.target.value)}
                    className="rounded-xl bg-slate-950/60 border border-blue-500/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
                  >
                    <option value="services">Services / Conseil</option>
                    <option value="commerce">Commerce / E-commerce</option>
                    <option value="sante">Santé / Médical</option>
                    <option value="btp">BTP / Industrie</option>
                    <option value="tech">Tech / SaaS</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <label className="inline-flex items-start gap-3 text-xs text-blue-200/80">
                  <input
                    type="checkbox"
                    name="wants_advice"
                    checked={formValues.wants_advice}
                    onChange={(e) => handleChange("wants_advice", e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-blue-500/40 bg-slate-950/60 text-blue-500 focus:ring-blue-500"
                  />
                  Je souhaite recevoir des conseils personnalisés à l’issue de ma demande.
                </label>
                {/* Honeypot anti-bot */}
                <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" />

                {error && (
                  <div className="text-sm text-red-400 bg-red-950/40 border border-red-500/40 rounded-xl px-4 py-3">
                    {error}
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Envoi en cours…" : "Faire ma demande de couverture cyber"}
                  </button>
                  <p className="text-xs text-blue-200/80">
                    Demande traitée par des experts, sans obligation de souscription. Données strictement
                    confidentielles. Résultats sous 24h ouvrées.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
