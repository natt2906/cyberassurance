import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { CheckCircle2, Clock, Lock } from "lucide-react";
import { sendLead } from "../utils/sendLead";
import { pushDataLayerEvent, trackAdsConversion, trackLeadSubmit } from "../analytics/gtag";

type MultiStepFormProps = {
  trackingSource?: string;
  onSubmitted?: () => void;
  autoFocus?: boolean;
  stickyCard?: boolean;
  variant?: "default" | "drawer";
};

type FormValues = {
  name: string;
  phone: string;
  activityDomain: string;
  clientType: string;
};

const initialValues: FormValues = {
  name: "",
  phone: "",
  activityDomain: "",
  clientType: "",
};

const validatePhoneFR = (value: string) => {
  const digits = value.replace(/[^\d+]/g, "");
  if (/^\+33[1-9]\d{8}$/.test(digits)) return true;
  if (/^0[1-9]\d{8}$/.test(digits)) return true;
  return false;
};

export default function MultiStepForm({
  trackingSource = "contact_default",
  onSubmitted,
  autoFocus = false,
  stickyCard = false,
  variant = "default",
}: MultiStepFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!autoFocus) return;
    nameRef.current?.focus();
  }, [autoFocus]);

  const phoneValid = useMemo(() => validatePhoneFR(values.phone), [values.phone]);
  const errors = useMemo(
    () => ({
      name: values.name.trim() ? "" : "Champ obligatoire.",
      phone: values.phone.trim()
        ? phoneValid
          ? ""
          : "Numéro invalide. Format attendu : 06 12 34 56 78 ou +33 6 12 34 56 78."
        : "Champ obligatoire.",
      activityDomain: values.activityDomain.trim() ? "" : "Champ obligatoire.",
      clientType: values.clientType.trim() ? "" : "Champ obligatoire.",
    }),
    [values, phoneValid]
  );

  const markTouched = (fields: string[]) => {
    setTouched((prev) => ({
      ...prev,
      ...fields.reduce<Record<string, boolean>>((acc, key) => {
        acc[key] = true;
        return acc;
      }, {}),
    }));
  };

  const canSubmit =
    !errors.name && !errors.phone && !errors.activityDomain && !errors.clientType && phoneValid;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    markTouched(["name", "phone", "activityDomain", "clientType"]);
    if (!canSubmit) return;
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const honeypot = String(formData.get("hp") || "").trim();
    if (honeypot) {
      setIsSubmitting(false);
      return;
    }

    const payload = {
      content: null,
      embeds: [
        {
          title: "📥 Nouvelle demande de couverture cyber",
          color: 5814783,
          fields: [
            { name: "Nom et prénom", value: values.name || "-", inline: true },
            { name: "Téléphone", value: values.phone || "-", inline: true },
            { name: "Domaine d'activité", value: values.activityDomain || "-", inline: true },
            { name: "Type de client", value: values.clientType || "-", inline: true },
          ],
          footer: {
            text: "Source: formulaire principal",
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      await sendLead(payload);
      trackLeadSubmit({
        source: trackingSource,
        activity_domain: values.activityDomain,
        client_type: values.clientType,
      });
      trackAdsConversion();
      pushDataLayerEvent("lead_form_submit_success", { source: trackingSource });
      setHasSubmitted(true);
      setValues(initialValues);
      setTouched({});
      form.reset();
      onSubmitted?.();
    } catch (err) {
      console.error(err);
      pushDataLayerEvent("lead_form_submit_error", { source: trackingSource });
      setError(
        "Une erreur est survenue lors de l'envoi de votre demande. Vous pouvez réessayer dans un instant."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDrawer = variant === "drawer";

  return (
    <div className={stickyCard ? "lg:sticky lg:top-24" : undefined}>
      <div className="bg-[#0f1c3a] border border-blue-500/30 rounded-3xl p-6 lg:p-10 shadow-xl shadow-blue-900/40 backdrop-blur-xl">
        {hasSubmitted ? (
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              Merci, votre demande de couverture cyber a bien été envoyée ✅
            </h3>
            <p className="text-blue-100/80">
              Un expert vous recontactera si des précisions sont nécessaires.
            </p>
          </div>
        ) : (
          <>
            {isDrawer ? (
              <div className="mb-6 space-y-2">
                <h3 className="text-xl font-semibold text-white">Demande de couverture cyber en 2 minutes</h3>
                <p className="text-sm text-blue-100/80">
                  Répondez à 2 questions rapides pour recevoir votre réponse sous 24h ouvrées.
                </p>
              </div>
            ) : (
              <div className="mb-4 flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-blue-100">
                  Destiné aux TPE, PME et grandes entreprises avec outils numériques et données
                  critiques.
                </span>
              </div>
            )}

            {!isDrawer ? (
              <>
                <div className="mb-6 rounded-2xl border border-blue-500/20 bg-white/5 px-5 py-4 text-left">
                  <h3 className="text-sm font-semibold text-white">
                    Ce que vous obtenez en 2 minutes :
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-blue-100">
                    <li>• Évaluation claire de votre exposition financière</li>
                    <li>• Garanties prioritaires</li>
                    <li>• Estimation de vos pertes d’exploitation</li>
                  </ul>
                </div>

                <div className="mb-6 rounded-2xl border border-blue-500/20 bg-white/5 px-5 py-4 text-left">
                  <h3 className="text-sm font-semibold text-white">
                    Ce que vous recevez sous 24h
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-blue-100">
                    <li>• Synthèse claire de votre profil assurantiel</li>
                    <li>• Recommandations de garanties prioritaires</li>
                    <li>• Proposition d&apos;assurance adaptée (si pertinent)</li>
                  </ul>
                </div>
              </>
            ) : null}

            <form className="grid gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-medium text-blue-100" htmlFor="name">
                  Nom et prénom
                </label>
                <input
                  ref={nameRef}
                  id="name"
                  name="name"
                  required
                  value={values.name}
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, name: event.target.value }))
                  }
                  onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                  className="rounded-xl bg-slate-950/60 border border-blue-500/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
                  placeholder="Ex : Marie Dupont"
                  autoComplete="name"
                />
                {touched.name && errors.name ? (
                  <p className="text-xs text-red-400">{errors.name}</p>
                ) : null}
              </div>

              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-medium text-blue-100" htmlFor="phone">
                  Téléphone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  value={values.phone}
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, phone: event.target.value }))
                  }
                  onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
                  className="rounded-xl bg-slate-950/60 border border-blue-500/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
                  placeholder="06 12 34 56 78"
                />
                {touched.phone && errors.phone ? (
                  <p className="text-xs text-red-400">{errors.phone}</p>
                ) : (
                  <p className="text-xs text-blue-200/70">
                    Format attendu : 06 12 34 56 78 ou +33 6 12 34 56 78.
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-blue-100" htmlFor="clientType">
                  Vous êtes
                </label>
                <select
                  id="clientType"
                  name="clientType"
                  required
                  value={values.clientType}
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, clientType: event.target.value }))
                  }
                  onBlur={() => setTouched((prev) => ({ ...prev, clientType: true }))}
                  className="rounded-xl bg-slate-950/60 border border-blue-500/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
                >
                  <option value="">Sélectionner</option>
                  <option value="Professionnel">Professionnel</option>
                  <option value="Particulier">Particulier</option>
                </select>
                {touched.clientType && errors.clientType ? (
                  <p className="text-xs text-red-400">{errors.clientType}</p>
                ) : null}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-blue-100" htmlFor="activityDomain">
                  Domaine d'activité
                </label>
                <input
                  id="activityDomain"
                  name="activityDomain"
                  required
                  value={values.activityDomain}
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, activityDomain: event.target.value }))
                  }
                  onBlur={() => setTouched((prev) => ({ ...prev, activityDomain: true }))}
                  className="rounded-xl bg-slate-950/60 border border-blue-500/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
                  placeholder="Ex : e-commerce, santé, conseil"
                />
                {touched.activityDomain && errors.activityDomain ? (
                  <p className="text-xs text-red-400">{errors.activityDomain}</p>
                ) : null}
              </div>

              {/* Honeypot anti-bot */}
              <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" />

              {error ? (
                <div className="md:col-span-2 text-sm text-red-400 bg-red-950/40 border border-red-500/40 rounded-xl px-4 py-3">
                  {error}
                </div>
              ) : null}

              <div className="md:col-span-2 flex flex-col gap-4">
                <button
                  type="submit"
                  disabled={!canSubmit || isSubmitting}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Envoi en cours…" : "Faire ma demande de couverture cyber"}
                </button>

                <div className="flex flex-wrap items-center gap-4 text-xs text-blue-200/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>Sans engagement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-emerald-400" />
                    <span>Réponse sous 24h ouvrées</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-emerald-400" />
                    <span>Données confidentielles</span>
                  </div>
                </div>

                <div className="text-xs text-blue-200/80 space-y-1">
                  <p>
                    Nous ne vendons pas vos données. Un conseiller vous rappelle uniquement si
                    nécessaire.
                  </p>
                  <p>
                    En soumettant ce formulaire, vous acceptez d&apos;être recontacté uniquement
                    dans le cadre de cette demande de couverture cyber. Données confidentielles.
                  </p>
                  <p>
                    Demande traitée par des experts, sans obligation de souscription. Données
                    strictement confidentielles. Résultats sous 24h ouvrées.
                  </p>
                </div>

                {!isDrawer ? (
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
                ) : null}
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
