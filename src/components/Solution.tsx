import { Shield, Wrench, Mail, Search, FileText } from 'lucide-react';

export default function Solution() {
  const benefits = [
    {
      icon: Shield,
      title: 'Protection financière complète',
      description: "Perte d'exploitation, dommages, rançon encadrée"
    },
    {
      icon: Wrench,
      title: 'Remise en route rapide',
      description: 'Experts cyber disponibles 24/7 pour restaurer votre activité'
    },
    {
      icon: Mail,
      title: 'Assistance mails & pièges',
      description: 'Analyse des risques et protection contre le phishing'
    },
    {
      icon: Search,
      title: 'Audit de sécurité inclus',
      description: 'Évaluation complète de vos vulnérabilités'
    },
    {
      icon: FileText,
      title: 'Couverture simple et lisible',
      description: 'Pas de jargon technique, tout est clair'
    }
  ];

  return (
    <section className="relative px-4 py-20 lg:py-32 bg-gradient-to-b from-transparent via-blue-900/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            La protection complète dont votre entreprise{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              a vraiment besoin.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 group"
            >
              <div className="inline-flex p-3 bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-blue-200">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-500 to-violet-500 text-white px-8 py-3 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
            Voir nos garanties
            <span className="text-2xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
