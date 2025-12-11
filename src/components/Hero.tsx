import { Shield, TrendingUp, Users } from "lucide-react";
import { trackEvent } from "../analytics/gtag";

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (!el) return;
    const offset = 80;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleClickTarif = () => {
    trackEvent("cta_click", {
      location: "hero",
      action: "obtenir_tarif",
      label: "Obtenir un tarif en 30 secondes",
    });
    scrollToContact();
  };

  const handleClickExpert = () => {
    trackEvent("cta_click", {
      location: "hero",
      action: "parler_expert",
      label: "Parler à un expert cyber",
    });
    scrollToContact();
  };

  return (
    <section className="relative overflow-hidden px-4 py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-violet-600/10 to-transparent"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* TEXTE */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Votre entreprise pourrait{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                s&apos;arrêter demain.
              </span>{" "}
              Protégez-la maintenant.
            </h1>

            <p className="text-xl lg:text-2xl text-blue-100">
              L&apos;assurance cyber qui couvre vos pertes financières, votre arrêt
              d&apos;activité et vos données.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button
                onClick={handleClickTarif}
                className="w-full bg-gradient-to-r from-blue-500/80 to-violet-500/80 text-white px-10 py-4 rounded-full text-[20px] font-semibold shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-blue-400 hover:to-violet-400 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Obtenir un tarif
              </button>

              <button
                onClick={handleClickExpert}
                className="w-full bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-full text-[20px] font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center"
              >
                Parler à un expert cyber
              </button>
            </div>

            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Users className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">+1200</div>
                  <div className="text-sm text-blue-200">entreprises protégées</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-violet-500/20 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-violet-300" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-sm text-blue-200">satisfaction client</div>
                </div>
              </div>
            </div>
          </div>

          {/* ILLUSTRATION / IMAGE */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-blue-500/20 to-violet-500/20 backdrop-blur-xl border border-white/20 rounded-3xl p-4 lg:p-8 flex items-center justify-center">
              <img
                loading="lazy"
                width="1200"
                height="630"
                src="/og-image.png"  // <= fichier placé dans public/
                alt="Illustration cyber sécurité et assurance pour PME"
                className="rounded-2xl shadow-2xl max-h-[420px] w-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
