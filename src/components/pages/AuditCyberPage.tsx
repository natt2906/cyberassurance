import { useEffect, useState } from "react";
import MainNavbar from "../layout/MainNavbar";
import ContactForm from "../ContactForm";
import SeoHead from "../seo/SeoHead";
import { baseSiteUrl } from "../../data/articlesSeo";
import { pushDataLayerEvent, trackEvent } from "../../analytics/gtag";
import BottomSheet from "../ui/BottomSheet";
import StickyBar from "../ui/StickyBar";
import MultiStepForm from "../MultiStepForm";

export default function AuditCyberPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    trackEvent("view_audit_page");
  }, []);

  const openDrawer = () => {
    setDrawerOpen(true);
    pushDataLayerEvent("lead_form_open", { source: "sticky_bar", page: "audit" });
  };

  const closeDrawer = () => setDrawerOpen(false);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (!el) return;
    const offset = 80;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleCtaClick = () => {
    trackEvent("cta_audit_click", { location: "hero" });
    if (window.innerWidth < 768) {
      openDrawer();
      return;
    }
    scrollToContact();
  };

  const benefits = [
    "Audit rapide orienté risques concrets",
    "Recommandations actionnables adaptées à votre secteur",
    "Éclairage sur l'impact financier potentiel",
  ];

  const valueCards = [
    {
      title: "Score d'exposition",
      description: "Une synthèse claire des vulnérabilités les plus critiques.",
    },
    {
      title: "3 priorités d'action",
      description: "Les gestes à fort impact à mettre en place rapidement.",
    },
    {
      title: "Projection financière",
      description: "Une estimation réaliste des pertes possibles en cas d'incident.",
    },
    {
      title: "Orientation assurance",
      description: "Si pertinent, une proposition adaptée à votre profil.",
    },
  ];

  const audiences = [
    "PME et TPE avec outils numériques",
    "Artisans et indépendants exposés aux emails et données clients",
    "E-commerce et cabinets de conseil",
    "Entreprises sans RSSI dédié",
    "Structures avec données sensibles",
  ];

  const steps = [
    {
      title: "Répondez au formulaire",
      description: "2 questions pour comprendre votre contexte.",
    },
    {
      title: "Analyse rapide",
      description: "Nos experts évaluent vos principaux risques.",
    },
    {
      title: "Retour sous 24h",
      description: "Synthèse claire + recommandations prioritaires.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b1531]">
      <SeoHead
        title="Audit cyber gratuit pour PME | Assurance Cyber Sécurité"
        description="Recevez un audit cyber gratuit en 2 minutes. Évaluation des risques, recommandations prioritaires et estimation de votre exposition financière."
        canonical={`${baseSiteUrl}/audit-cyber`}
        ogImage={`${baseSiteUrl}/og-image.png`}
      />
      <MainNavbar />

      <main className="pt-24 pb-20 md:pb-0">
        <section className="relative px-4 py-16 lg:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-violet-600/10 to-transparent"></div>
          <div className="relative max-w-5xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Audit cyber gratuit pour sécuriser votre activité
            </h1>
            <p className="mt-5 text-xl text-blue-100">
              Identifiez vos risques critiques et recevez des priorités d'action concrètes en moins de 24h.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex flex-wrap justify-center gap-3">
                {benefits.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-blue-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <button
                onClick={handleCtaClick}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-transform hover:scale-105"
              >
                Obtenir mon audit cyber gratuit
              </button>
            </div>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-10">
              Ce que vous obtenez
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {valueCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-blue-100"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                  <p className="text-sm">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-12 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-8">
              Pour qui ?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {audiences.map((item) => (
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
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-10">
              Comment ça se passe ?
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-blue-100"
                >
                  <p className="text-sm text-blue-300 mb-2">Étape {index + 1}</p>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="hidden md:block">
          <ContactForm trackingSource="audit_page" sectionId="contact" />
        </div>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto rounded-3xl border border-blue-400/30 bg-[#0f1c3a] px-6 py-8 text-center">
            <h3 className="text-2xl font-semibold text-white mb-3">Réassurance</h3>
            <p className="text-sm text-blue-100">
              RGPD &amp; confidentialité, pas de spam, réponse sous 24h ouvrées.
            </p>
          </div>
        </section>
      </main>
      <StickyBar label="Obtenir mon audit gratuit (2 min)" onClick={openDrawer} />
      <BottomSheet open={drawerOpen} onClose={closeDrawer} title="Audit cyber gratuit">
        <MultiStepForm
          trackingSource="audit_drawer"
          onSubmitted={closeDrawer}
          autoFocus={drawerOpen}
          variant="drawer"
        />
      </BottomSheet>
    </div>
  );
}
