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
    "Déclarer le sinistre dès les premiers impacts.",
    "Activer la cellule de crise et centraliser les informations.",
    "Documenter les faits et les coûts engagés.",
    "Valider toute décision sensible avec l’assureur.",
    "Informer les parties prenantes selon les obligations contractuelles.",
  ];

  const assistancePoints = [
    "Qualification du sinistre et analyse des impacts financiers",
    "Coordination des intervenants et assistance 24/7",
    "Aide juridique, conformité RGPD et notifications",
    "Plan de continuité d’activité et suivi de reprise",
    "Gestion du dossier d’indemnisation",
  ];

  const faqs = [
    {
      question: "L'assistance est-elle disponible 24/7 ?",
      answer: "Oui, une cellule de crise est mobilisable à tout moment.",
    },
    {
      question: "Qui coordonne les intervenants ?",
      answer: "L’assureur pilote la coordination avec vos parties prenantes.",
    },
    {
      question: "Que faire en cas d’extorsion ?",
      answer: "Déclarez immédiatement et suivez les consignes contractuelles.",
    },
    {
      question: "Combien de temps pour relancer l'activité ?",
      answer: "L’objectif est de limiter l’arrêt, selon les garanties souscrites.",
    },
    {
      question: "L'assistance inclut-elle la gestion RGPD ?",
      answer: "Oui, nous accompagnons les obligations légales et la communication.",
    },
    {
      question: "Puis-je faire une demande de couverture cyber avant un incident ?",
      answer: "Oui, la demande permet d’adapter les garanties.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b1531]">
      <SeoHead
        title="Assistance 24/7 en cas de sinistre cyber | Assurance Cyber Sécurité"
        description="Assistance 24/7 en cas de sinistre : gestion de crise, RGPD, continuité d’activité et indemnisation."
        canonical={`${baseSiteUrl}/assistance`}
        ogImage={`${baseSiteUrl}/og-image.png`}
      />
      <MainNavbar />

      <main className="pt-24">
        <section className="px-4 py-16 lg:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Assistance 24/7 : quoi faire en cas de sinistre ?
            </h1>
            <p className="mt-5 text-xl text-blue-100">
              Une réponse structurée pour limiter l’impact financier et relancer l’activité.
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
              Faire ma demande de couverture cyber
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
