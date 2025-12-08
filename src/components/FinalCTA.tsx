import { Zap, Phone } from "lucide-react";
import { trackEvent } from "../analytics/gtag";

export default function FinalCTA() {
  // Scroll propre vers le formulaire
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (!el) return;
    const offset = 80; // Décalage pour la navbar
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleClickDevis = () => {
    trackEvent("cta_click", {
      location: "final_cta",
      action: "obtenir_devis",
      label: "Obtenir un devis rapide",
    });
    scrollToContact();
  };

  const handleClickAppel = () => {
    trackEvent("cta_click", {
      location: "final_cta",
      action: "reserver_appel",
      label: "Réserver un appel gratuit",
    });
    scrollToContact();
  };

  return (
    <section className="relative px-4 py-20 lg:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-violet-500/30 blur-3xl"></div>

          <div className="relative bg-gradient-to-br from-blue-500/20 to-violet-500/20 backdrop-blur-xl border-2 border-blue-400/50 rounded-3xl p-12 lg:p-16">
            <div className="text-center space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Un piratage peut tout arrêter.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  Votre protection, non.
                </span>
              </h2>

              <p className="text-2xl text-blue-100">
                Obtenez votre tarif en moins d&apos;une minute.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleClickDevis}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-4 h-4" />
                  Obtenir un devis rapide
                </button>

                <button
                  onClick={handleClickAppel}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white/10 text-sm font-semibold text-blue-100 border border-blue-200/30 hover:bg-white/20 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Réserver un appel gratuit
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-blue-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Réponse immédiate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Protection en 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER + RÉSEAUX ASTUCE CYBER */}
        <footer className="mt-20 text-center text-blue-300/60 text-sm">
          <p>© 2024 Assurance Cyber. Protection professionnelle pour TPE/PME.</p>

          <div className="flex items-center justify-center gap-6 mt-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/astuce.cyber"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
              aria-label="Instagram Astuce Cyber"
            >
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm9 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h9zm-4.5 3A4.505 4.505 0 0 0 7 11.5C7 14.532 9.467 17 12.5 17S18 14.532 18 11.5 15.533 5 12.5 5zm0 2C14.43 7 16 8.57 16 10.5S14.43 14 12.5 14 9 12.43 9 10.5 10.57 7 12.5 7zm4.75-.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@astuce.cyber"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
              aria-label="TikTok Astuce Cyber"
            >
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 8.041A5.958 5.958 0 0 1 19 9c.35 0 .687-.024 1.016-.07V4.938A4.938 4.938 0 0 1 15.062 0H10v14.062A3.938 3.938 0 1 1 6.062 10H2.938A7.062 7.062 0 1 0 10 17.062V5h3.062A3.937 3.937 0 0 0 16 8.041z" />
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
