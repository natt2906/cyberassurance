const coverageItems = [
  "Perte d’exploitation et marge brute",
  "Frais de gestion de crise et assistance 24/7",
  "Responsabilité civile vis‑à‑vis des tiers",
  "Frais juridiques, notifications et RGPD",
  "Rançon encadrée selon conditions contractuelles",
];

const exclusionItems = [
  "Actes intentionnels ou frauduleux",
  "Non‑respect des obligations de l’assuré",
  "Événements antérieurs à la souscription",
  "Pénalités contractuelles non assurables",
  "Dommages sans lien avec le fait générateur couvert",
];

const timelineSteps = [
  {
    title: "1. Déclaration",
    description: "Signalement du sinistre et ouverture du dossier.",
  },
  {
    title: "2. Assistance 24/7",
    description: "Coordination de la gestion de crise et premiers conseils.",
  },
  {
    title: "3. Évaluation",
    description: "Chiffrage des pertes, des frais et des responsabilités.",
  },
  {
    title: "4. Indemnisation",
    description: "Application des garanties, franchises et plafonds.",
  },
  {
    title: "5. Reprise",
    description: "Suivi du retour à la normale et clôture du sinistre.",
  },
];

export default function InsuranceCoverage() {
  return (
    <section className="relative px-4 py-20 lg:py-32 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Ce que l’assurance couvre / ne couvre pas
          </h2>
          <p className="text-blue-200">
            Une vision claire des garanties, exclusions et limites pour éviter les surprises.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mb-16">
          <div className="rounded-3xl border border-blue-500/30 bg-[#0f1c3a] p-6 shadow-xl shadow-blue-900/40">
            <h3 className="text-xl font-semibold text-white mb-4">Couvre</h3>
            <ul className="space-y-3 text-blue-100">
              {coverageItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Ne couvre pas</h3>
            <ul className="space-y-3 text-blue-100">
              {exclusionItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-400"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Comment se déroule un sinistre
          </h2>
          <p className="text-blue-200">
            Une timeline simple pour comprendre les étapes et les délais.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {timelineSteps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-blue-100"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
