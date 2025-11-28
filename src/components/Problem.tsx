import { AlertTriangle, Lock, DollarSign } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Arrêt total d'activité",
      description: 'Facturation, emails, logiciel métier indisponibles',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Lock,
      title: 'Données volées ou bloquées',
      description: 'Rançongiciel, chiffrage, fuite de données',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: DollarSign,
      title: 'Coûts explosifs',
      description: 'Experts informatiques, perte de CA, notification RGPD',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section className="relative px-4 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Une attaque suffit pour tout bloquer.
          </h2>
          <p className="text-xl lg:text-2xl text-blue-200">
            Et ce n&apos;est plus une question de <span className="text-red-400 font-bold">SI</span>, mais de{' '}
            <span className="text-red-400 font-bold">QUAND</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity rounded-2xl blur-xl"
                   style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300">
                <div className={`inline-flex p-4 bg-gradient-to-br ${problem.color} rounded-xl mb-6`}>
                  <problem.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{problem.title}</h3>
                <p className="text-blue-200 text-lg">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-3xl"></div>
          <div className="relative bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-xl border-2 border-red-500/30 rounded-2xl p-8 lg:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <p className="text-2xl lg:text-4xl font-bold text-white">
              1 TPE/PME sur 5 ferme dans les 6 mois suivant une cyberattaque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
