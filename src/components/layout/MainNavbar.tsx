import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { articlesMeta } from "../../data/articlesMeta";

export default function MainNavbar() {
  const [openArticles, setOpenArticles] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 80; // hauteur approx de la navbar
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-slate-950/85 via-slate-900/75 to-slate-950/85 backdrop-blur border-b border-white/10 shadow-lg shadow-blue-900/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / nom */}
        <Link to="/" className="text-sm sm:text-base font-semibold text-white tracking-tight">
          Assurance Cyber Sécurité
        </Link>

        {/* Navigation principale */}
        <nav className="flex items-center gap-3 sm:gap-5 text-xs sm:text-sm text-blue-100">
          {/* Accueil */}
          <Link
            to="/"
            className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-blue-400/60 hover:text-white transition-all"
          >
            Accueil
          </Link>

          {/* Nos articles : ouverture au clic + panel scrollable */}
          <div className="relative">
            <button
              type="button"
              className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-blue-400/60 hover:text-white transition-all"
              onClick={() => setOpenArticles((prev) => !prev)}
            >
              <span className="text-[12px]">📚</span>
              Nos articles
              <span className="text-[10px] mt-[1px] group-hover:translate-y-0.5 transition-transform">
                ▾
              </span>
            </button>

            {openArticles && (
              <div className="absolute right-0 mt-3 w-[320px] max-h-80 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-blue-900/40">
                <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-blue-300/80">
                      Nos articles
                    </p>
                    <p className="text-xs text-blue-100/80">Conseils et guides</p>
                  </div>
                  <Link
                    to="/articles"
                    className="text-[11px] font-semibold text-blue-200 hover:text-white underline underline-offset-4"
                    onClick={() => setOpenArticles(false)}
                  >
                    Voir tout →
                  </Link>
                </div>

                <div className="max-h-[220px] overflow-y-auto px-2 py-2 space-y-1">
                  {articlesMeta.map((a) => (
                    <Link
                      key={a.slug}
                      to={`/articles/${a.slug}`}
                      className="block rounded-xl px-3 py-2 text-sm text-blue-50 hover:bg-blue-600/30 hover:border-blue-400/50 border border-transparent transition-all"
                      onClick={() => setOpenArticles(false)}
                    >
                      {a.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Nous contacter */}
          {isHome ? (
            <button
              type="button"
              className="px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/50 text-blue-50 hover:bg-blue-500/30 transition-all"
              onClick={() => scrollToId("contact")}
            >
              Nous contacter
            </button>
          ) : (
            <a
              href="/#contact"
              className="px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/50 text-blue-50 hover:bg-blue-500/30 transition-all"
            >
              Nous contacter
            </a>
          )}

          {/* FAQ */}
          {isHome ? (
            <button
              type="button"
              className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-blue-400/60 hover:text-white transition-all"
              onClick={() => scrollToId("faq")}
            >
              FAQ
            </button>
          ) : (
            <a
              href="/#faq"
              className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-blue-400/60 hover:text-white transition-all"
            >
              FAQ
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
