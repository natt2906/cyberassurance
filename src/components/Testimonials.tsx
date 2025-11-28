import { Star, Building2 } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Directrice, Cabinet Comptable',
      company: 'Compta Expert',
      content: "Suite à une tentative de ransomware, l'équipe a réagi en moins de 2 heures. Nos données ont été sauvées et nous avons pu reprendre notre activité le jour même.",
      rating: 5
    },
    {
      name: 'Thomas Martin',
      role: 'CEO, Agence Marketing',
      company: 'Digital Boost',
      content: "Avant, je pensais que ça n'arrivait qu'aux autres. Après l'attaque, l'assurance a tout pris en charge : experts, frais légaux, perte de CA. Un soulagement total.",
      rating: 5
    },
    {
      name: 'Sophie Laurent',
      role: 'Gérante, E-commerce',
      company: 'Mode & Style',
      content: "Notre site a été piraté pendant les soldes. Grâce à la couverture, nous avons été indemnisés pour la perte de chiffre d'affaires. Impossible de s'en passer maintenant.",
      rating: 5
    }
  ];

  return (
    <section className="relative px-4 py-20 lg:py-32 bg-gradient-to-b from-transparent via-violet-900/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ils nous font confiance.
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-xl text-blue-200">Note moyenne : 4.9/5 sur +1200 avis</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-blue-300">{testimonial.role}</div>
                  <div className="text-sm text-blue-400">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 opacity-50">
          <div className="text-white text-2xl font-bold">ACME Corp</div>
          <div className="text-white text-2xl font-bold">TechStart</div>
          <div className="text-white text-2xl font-bold">BizPro</div>
          <div className="text-white text-2xl font-bold">Solutions+</div>
          <div className="text-white text-2xl font-bold">DigiFlow</div>
        </div>
      </div>
    </section>
  );
}
