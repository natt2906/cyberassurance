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
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/60 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / nom */}
        <Link to="/" className="text-sm sm:text-base font-semibold text-white">
          Assurance Cyber Sécurité
        </Link>

        {/* Navigation principale */}
        <nav className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-blue-100">
          {/* Accueil */}
          <Link to="/" className="hover:text-white transition-colors">
            Accueil
          </Link>

          {/* Nos articles : ouverture au clic + panel scrollable */}
          <div className="relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
              onClick={() => setOpenArticles((prev) => !prev)}
            >
              Nos articles
              <span className="text-[10px] mt-[1px]">▾</span>
            </button>

            {openArticles && (
              <div className="absolute right-0 mt-2 w-72 max-h-64 overflow-y-auto bg-slate-900 border border-white/10 rounded-xl shadow-xl">
                <Link
                  to="/articles"
                  className="block px-4 py-2 text-sm text-blue-200 hover:bg-blue-700/30 hover:text-white"
                  onClick={() => setOpenArticles(false)}
                >
                  Tous les articles →
                </Link>

                <div className="border-t border-white/10" />

                {articlesMeta.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/articles/${a.slug}`}
                    className="block px-4 py-2 text-sm text-blue-100 hover:bg-blue-700/30 hover:text-white"
                    onClick={() => setOpenArticles(false)}
                  >
                    {a.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Nous contacter */}
          {isHome ? (
            <button
              type="button"
              className="hover:text-white transition-colors"
              onClick={() => scrollToId("contact")}
            >
              Nous contacter
            </button>
          ) : (
            <a
              href="/#contact"
              className="hover:text-white transition-colors"
            >
              Nous contacter
            </a>
          )}

          {/* FAQ */}
          {isHome ? (
            <button
              type="button"
              className="hover:text-white transition-colors"
              onClick={() => scrollToId("faq")}
            >
              FAQ
            </button>
          ) : (
            <a href="/#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
