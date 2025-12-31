import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Qu'est-ce qui déclenche un sinistre garanti ?",
      answer:
        "Le déclencheur dépend du contrat : incident affectant la disponibilité, violation de données, réclamation d’un tiers, ou frais de gestion de crise. L’important est d’identifier le fait générateur et les garanties associées."
    },
    {
      question: "Quelles garanties sont les plus utiles pour une TPE/PME/ETI ?",
      answer:
        "Perte d’exploitation, frais de gestion de crise, responsabilité civile, frais juridiques/RGPD et assistance 24/7. Ce socle protège la trésorerie et la continuité d’activité."
    },
    {
      question: 'Combien coûte une assurance cyber ?',
      answer:
        "Le tarif dépend du secteur, de la taille, du chiffre d’affaires, des garanties choisies, franchises et plafonds. Le coût est souvent faible au regard des pertes d’exploitation potentielles."
    },
    {
      question: "Quelles sont les exclusions et franchises typiques ?",
      answer:
        "Chaque contrat prévoit des exclusions (ex. actes intentionnels, non‑respect des obligations déclaratives) et une franchise. Nous vous aidons à les comprendre avant souscription."
    },
    {
      question: "Y a-t-il des conditions d’éligibilité ?",
      answer:
        "Oui, certains prérequis peuvent être demandés pour souscrire. Ils sont présentés clairement afin d’éviter les mauvaises surprises en cas de sinistre."
    }
  ];

  return (
    <>

      <section id="faq" className="relative px-4 py-20 lg:py-32 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Questions fréquentes
            </h2>
            <p className="text-xl text-blue-200">
              Tout ce que vous devez savoir sur l’assurance cyber
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className="text-xl font-semibold text-white pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-8 pb-6">
                    <p className="text-lg text-blue-200 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
