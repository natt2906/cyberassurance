import { ClipboardList, Zap, CheckCircle } from 'lucide-react';
import { trackEvent } from "../analytics/gtag";

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      icon: ClipboardList,
      title: 'Répondez à quelques questions',
      description: 'Activité, taille, outils critiques - en 30 secondes'
    },
    {
      number: '2',
      icon: Zap,
      title: 'Recevez votre tarif instantané',
      description: 'Adapté précisément à votre entreprise'
    },
    {
      number: '3',
      icon: CheckCircle,
      title: "Soyez protégé dès aujourd'hui",
      description: "Contre les attaques et l'arrêt d'activité"
    }
  ];

  const scrollToContact = () => {
    const el = document.getElementById("audit");
    if (!el) return;
    const offset = 80;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleClickAudit = () => {
    trackEvent("cta_click", {
      location: "how_it_works",
      action: "obtenir_audit",
      label: "Obtenir mon audit cyber gratuit",
    });
    scrollToContact();
  };

  return (
    <section className="relative px-4 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Une protection en{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              3 étapes simples.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 transform -translate-y-1/2 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full blur-2xl opacity-50"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full flex items-center justify-center">
                    <step.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-slate-900">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-blue-200 text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button onClick={handleClickAudit}
            
            className="bg-gradient-to-r from-blue-500 to-violet-500 text-white px-8 py-3 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
          >
            Obtenir mon audit cyber gratuit
          </button>
        </div>

      </div>
    </section>
  );
}
