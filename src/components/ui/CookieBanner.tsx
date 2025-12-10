import { useEffect, useState } from "react";

const GA_ID = "G-CDM3EPYZNQ";
const STORAGE_KEY = "cookie-consent";

type ConsentPrefs = {
  necessary: true;
  performance: boolean;
  personalization: boolean;
  ads: boolean;
};

const defaultPrefs: ConsentPrefs = {
  necessary: true,
  performance: false,
  personalization: false,
  ads: false,
};

function applyAnalyticsPreference(performanceAllowed: boolean) {
  (window as any)[`ga-disable-${GA_ID}`] = !performanceAllowed;
}

export default function CookieBanner() {
  const [prefs, setPrefs] = useState<ConsentPrefs>(defaultPrefs);
  const [showSettings, setShowSettings] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as ConsentPrefs;
        setPrefs(parsed);
        applyAnalyticsPreference(parsed.performance);
        setConsentGiven(true);
        return;
      } catch {
        // ignore corrupted
      }
    }
    // Pas de consentement => blocage par défaut des cookies optionnels
    applyAnalyticsPreference(false);
  }, []);

  const savePrefs = (next: ConsentPrefs) => {
    setPrefs(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    applyAnalyticsPreference(next.performance);
    setConsentGiven(true);
  };

  const acceptAll = () =>
    savePrefs({
      necessary: true,
      performance: true,
      personalization: true,
      ads: true,
    });

  const refuseAll = () => savePrefs(defaultPrefs);

  const toggleSetting = (key: keyof ConsentPrefs) => {
    if (key === "necessary") return; // toujours vrai
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const saveSettings = () => {
    savePrefs(prefs);
    setShowSettings(false);
  };

  if (consentGiven) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-[99] px-4">
      <div className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-blue-900/40 px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex flex-col gap-3">
          <div className="text-sm text-blue-50">
            <p className="font-semibold text-white">Gestion des cookies</p>
            <p className="text-blue-200/90 mt-1">
              Ce site utilise des cookies. Certains sont strictement nécessaires au fonctionnement du site. D’autres sont optionnels :
              performance, personnalisation et publicité ciblée. L’absence d’interaction est considérée comme un refus.
            </p>
          </div>

          {showSettings && (
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-blue-50 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">Nécessaires</p>
                  <p className="text-blue-200/80 text-xs">Indispensables au fonctionnement du site.</p>
                </div>
                <span className="text-xs text-blue-300/80">Toujours activés</span>
              </div>
              <label className="flex items-center justify-between py-2 border-t border-white/10">
                <div>
                  <p className="font-semibold text-white">Performance</p>
                  <p className="text-blue-200/80 text-xs">Mesure d’audience et amélioration.</p>
                </div>
                <input
                  type="checkbox"
                  checked={(prefs ?? defaultPrefs).performance}
                  onChange={() => toggleSetting("performance")}
                  className="h-5 w-5 accent-blue-500"
                />
              </label>
              <label className="flex items-center justify-between py-2 border-t border-white/10">
                <div>
                  <p className="font-semibold text-white">Personnalisation</p>
                  <p className="text-blue-200/80 text-xs">Contenus adaptés à votre navigation.</p>
                </div>
                <input
                  type="checkbox"
                  checked={(prefs ?? defaultPrefs).personalization}
                  onChange={() => toggleSetting("personalization")}
                  className="h-5 w-5 accent-blue-500"
                />
              </label>
              <label className="flex items-center justify-between py-2 border-t border-white/10">
                <div>
                  <p className="font-semibold text-white">Publicité</p>
                  <p className="text-blue-200/80 text-xs">Publicité ciblée et retargeting.</p>
                </div>
                <input
                  type="checkbox"
                  checked={(prefs ?? defaultPrefs).ads}
                  onChange={() => toggleSetting("ads")}
                  className="h-5 w-5 accent-blue-500"
                />
              </label>
              <div className="flex flex-wrap gap-2 justify-end pt-2">
                <button
                  type="button"
                  onClick={refuseAll}
                  className="px-4 py-2 rounded-xl border border-white/20 text-sm text-blue-100 hover:border-blue-400/60 hover:text-white transition-colors"
                >
                  Refuser
                </button>
                <button
                  type="button"
                  onClick={saveSettings}
                  className="px-4 py-2 rounded-xl bg-blue-500 text-sm font-semibold text-white hover:bg-blue-400 transition-colors shadow shadow-blue-900/40"
                >
                  Enregistrer
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-end">
            <button
              type="button"
              onClick={() => setShowSettings((v) => !v)}
              className="px-4 py-2 rounded-xl border border-white/20 text-sm text-blue-100 hover:border-blue-400/60 hover:text-white transition-colors"
            >
              Paramètres des cookies
            </button>
            <button
              type="button"
              onClick={refuseAll}
              className="px-4 py-2 rounded-xl border border-white/20 text-sm text-blue-100 hover:border-blue-400/60 hover:text-white transition-colors"
            >
              Refuser
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="px-4 py-2 rounded-xl bg-blue-500 text-sm font-semibold text-white hover:bg-blue-400 transition-colors shadow shadow-blue-900/40"
            >
              Accepter les cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
