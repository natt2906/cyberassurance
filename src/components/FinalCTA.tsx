import { Zap } from "lucide-react";
import { trackEvent } from "../analytics/gtag";

type FinalCTAProps = {
  onOpenDrawer?: () => void;
};

export default function FinalCTA({ onOpenDrawer }: FinalCTAProps) {
  // Scroll propre vers le formulaire
  const scrollToContact = () => {
    const el = document.getElementById("audit");
    if (!el) return;
    const offset = 80; // Décalage pour la navbar
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleClickAudit = () => {
    trackEvent("cta_click", {
      location: "final_cta",
      action: "obtenir_audit",
      label: "Obtenir mon audit cyber gratuit",
    });
    if (window.innerWidth < 768 && onOpenDrawer) {
      onOpenDrawer();
      return;
    }
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
                Obtenez votre{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  audit cyber gratuit.
                </span>
              </h2>

              <p className="text-2xl text-blue-100">
                Un diagnostic clair, sans engagement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleClickAudit}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-4 h-4" />
                  Obtenir mon audit cyber gratuit
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
            <svg aria-hidden="true" viewBox="0 0 24 24" className="w-10 h-10 fill-current">
              <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.25 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
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
            <svg aria-hidden="true" viewBox="0 0 24 24" className="w-10 h-10 fill-current">
              <path d="M15.5 3.1a4.6 4.6 0 0 0 .1 1.1c.3 1.5 1.4 2.6 2.8 2.9.4.1.7.1 1.1.1V9a6.5 6.5 0 0 1-3.9-1.3v6.4a5.76 5.76 0 1 1-5-5.7V10a3.76 3.76 0 1 0 2.7 3.6V3.1h2.3Z" />
            </svg>
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
