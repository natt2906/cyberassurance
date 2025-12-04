import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Mon antivirus ne suffit-il pas ?',
      answer:
        "Non. L'antivirus protège contre les virus connus, mais pas contre les attaques ciblées, les erreurs humaines, les ransomwares modernes ou l'arrêt de votre activité. L'assurance cyber couvre les conséquences financières et vous aide à redémarrer rapidement."
    },
    {
      question: 'Je suis une petite entreprise, suis-je vraiment une cible ?',
      answer:
        'Oui, et même prioritaire ! Les pirates ciblent les TPE/PME car elles sont souvent moins protégées. 43% des cyberattaques visent les petites structures. Votre taille ne vous protège pas.'
    },
    {
      question: 'Combien coûte une assurance cyber ?',
      answer:
        "À partir de 30€/mois pour une TPE. Le tarif dépend de votre secteur, taille et niveau de risque. C’est jusqu’à 50 fois moins cher qu’une cyberattaque (60 000€ en moyenne pour une PME)."
    },
    {
      question: "Suis-je couvert en cas d'erreur humaine ?",
      answer:
        "Oui ! La majorité des incidents proviennent d'erreurs humaines (phishing, mauvaise manipulation). Notre assurance couvre ces situations ainsi que les formations pour éviter les récidives."
    },
    {
      question: 'Faut-il un prestataire informatique ?',
      answer:
        "Non, pas obligatoire. Mais nous pouvons vous mettre en relation avec des experts certifiés. En cas d'incident, nos spécialistes interviennent immédiatement, que vous ayez ou non un prestataire."
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
              Tout ce que vous devez savoir sur la cyber-assurance
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