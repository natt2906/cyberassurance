import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { articlesMeta } from "../../data/articlesMeta";

export default function MainNavbar() {
  const [openArticles, setOpenArticles] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAudit = location.pathname === "/audit-cyber";
  const isAssistance = location.pathname === "/assistance";
  const activeHash = location.hash;

  const navBaseClass =
    "px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-blue-400/60 hover:text-white transition-all";
  const navActiveClass = "border-blue-400/70 text-white bg-white/10";
  const navInactiveClass = "text-blue-100";

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
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-[10px]"
        >
          Assurance Cyber Sécurité
        </Link>

        {/* Navigation principale */}
        <nav className="hidden md:flex items-center gap-3 sm:gap-5 text-xs sm:text-sm text-blue-100">
          {/* Accueil */}
          <Link
            to="/"
            className={`${navBaseClass} ${isHome ? navActiveClass : navInactiveClass}`}
          >
            Accueil
          </Link>

          <Link
            to="/audit-cyber"
            className={`${navBaseClass} ${isAudit ? navActiveClass : navInactiveClass}`}
          >
            Demande de couverture
          </Link>

          <Link
            to="/assistance"
            className={`${navBaseClass} ${isAssistance ? navActiveClass : navInactiveClass}`}
          >
            Assistance
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
              className={`${navBaseClass} ${
                activeHash === "#audit" ? navActiveClass : navInactiveClass
              }`}
              onClick={() => scrollToId("audit")}
            >
              Nous contacter
            </button>
          ) : (
            <Link
              to="/#audit"
              className={navBaseClass}
            >
              Nous contacter
            </Link>
          )}

          {/* FAQ */}
          {isHome ? (
            <button
              type="button"
              className={`${navBaseClass} ${
                activeHash === "#faq" ? navActiveClass : navInactiveClass
              }`}
              onClick={() => scrollToId("faq")}
            >
              FAQ
            </button>
          ) : (
            <Link
              to="/#faq"
              className={navBaseClass}
            >
              FAQ
            </Link>
          )}
        </nav>

        {/* Burger menu (mobile) */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white hover:border-blue-400/60 transition-all"
          aria-label={openMenu ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <span className="text-lg">{openMenu ? "✕" : "☰"}</span>
        </button>
      </div>

      {openMenu && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur">
          <div className="px-4 py-4 flex flex-col gap-3 text-sm text-blue-100">
            <Link
              to="/"
              onClick={() => setOpenMenu(false)}
              className={`${navBaseClass} ${isHome ? navActiveClass : navInactiveClass}`}
            >
              Accueil
            </Link>
            <Link
              to="/audit-cyber"
              onClick={() => setOpenMenu(false)}
              className={`${navBaseClass} ${isAudit ? navActiveClass : navInactiveClass}`}
            >
              Demande de couverture
            </Link>
            <Link
              to="/assistance"
              onClick={() => setOpenMenu(false)}
              className={`${navBaseClass} ${isAssistance ? navActiveClass : navInactiveClass}`}
            >
              Assistance
            </Link>
            <Link
              to="/articles"
              onClick={() => setOpenMenu(false)}
              className={navBaseClass}
            >
              Tous les articles
            </Link>
            {isHome ? (
              <button
                type="button"
                onClick={() => {
                  scrollToId("audit");
                  setOpenMenu(false);
                }}
                className={`${navBaseClass} ${
                  activeHash === "#audit" ? navActiveClass : navInactiveClass
                }`}
              >
                Nous contacter
              </button>
            ) : (
              <Link
                to="/#audit"
                onClick={() => setOpenMenu(false)}
                className={navBaseClass}
              >
                Nous contacter
              </Link>
            )}
            {isHome ? (
              <button
                type="button"
                onClick={() => {
                  scrollToId("faq");
                  setOpenMenu(false);
                }}
                className={`${navBaseClass} ${
                  activeHash === "#faq" ? navActiveClass : navInactiveClass
                }`}
              >
                FAQ
              </button>
            ) : (
              <Link
                to="/#faq"
                onClick={() => setOpenMenu(false)}
                className={navBaseClass}
              >
                FAQ
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
