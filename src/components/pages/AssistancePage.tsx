import { useEffect } from "react";
import { Link } from "react-router-dom";
import MainNavbar from "../layout/MainNavbar";
import SeoHead from "../seo/SeoHead";
import { baseSiteUrl } from "../../data/articlesSeo";
import { trackEvent } from "../../analytics/gtag";

export default function AssistancePage() {
  useEffect(() => {
    trackEvent("view_assistance_page");
  }, []);

  const handleCtaClick = () => {
    trackEvent("cta_assistance_to_audit_click", { location: "page" });
  };

  const checklist = [
    "Isoler les postes touchés et couper les accès suspects.",
    "Prévenir les équipes internes pour limiter la propagation.",
    "Conserver les preuves (logs, emails, captures).",
    "Ne pas payer de rançon sans avis expert.",
    "Activer vos sauvegardes si disponibles.",
  ];

  const assistancePoints = [
    "Analyse rapide de l'incident et des impacts",
    "Coordination avec les experts techniques 24/7",
    "Aide juridique et conformité RGPD",
    "Plan de reprise d'activité priorisé",
    "Suivi et recommandations post-incident",
  ];

  const faqs = [
    {
      question: "L'assistance est-elle disponible 24/7 ?",
      answer: "Oui, nos experts sont mobilisables à tout moment en cas d'urgence.",
    },
    {
      question: "Dois-je avoir un prestataire informatique ?",
      answer: "Non, nous travaillons avec ou sans prestataire existant.",
    },
    {
      question: "Que faire en cas de ransomware ?",
      answer: "Isoler les machines, conserver les preuves et contacter l'assistance immédiatement.",
    },
    {
      question: "Combien de temps pour relancer l'activité ?",
      answer: "Cela dépend du contexte, mais l'objectif est de réduire l'arrêt au minimum.",
    },
    {
      question: "L'assistance inclut-elle la gestion RGPD ?",
      answer: "Oui, nous vous accompagnons sur les obligations légales et la communication.",
    },
    {
      question: "Puis-je faire un audit avant un incident ?",
      answer: "Oui, l'audit gratuit permet d'anticiper et réduire les risques.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b1531]">
      <SeoHead
        title="Assistance cyber 24/7 en cas d'attaque | Assurance Cyber Sécurité"
        description="Assistance cyber en cas d'attaque : actions immédiates, experts 24/7, gestion RGPD et plan de reprise d'activité."
        canonical={`${baseSiteUrl}/assistance`}
        ogImage={`${baseSiteUrl}/og-image.png`}
      />
      <MainNavbar />

      <main className="pt-24">
        <section className="px-4 py-16 lg:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Assistance cyber : quoi faire en cas d'attaque ?
            </h1>
            <p className="mt-5 text-xl text-blue-100">
              Une réponse structurée pour limiter l'impact, relancer l'activité et protéger vos données.
            </p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">0–60 minutes : checklist</h2>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-blue-100">
              <ul className="space-y-3 text-sm">
                {checklist.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Ce que fait l'assistance</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {assistancePoints.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-blue-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-8">FAQ</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-blue-100"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              to="/audit-cyber#contact"
              onClick={handleCtaClick}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-transform hover:scale-105"
            >
              Demander un audit cyber gratuit
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
