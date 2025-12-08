export default function SocialSection() {
  return (
    <section className="px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Suivez nos astuces cyber au quotidien
        </h2>
        <p className="text-blue-200 mb-8">
          Chaque jour, des conseils concrets pour protéger votre entreprise des cyberattaques.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <a
            href="https://www.instagram.com/astuce.cyber"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-blue-100 hover:bg-white/10 hover:text-white transition"
          >
            Instagram @astucecyber
          </a>
          <a
            href="https://www.tiktok.com/@astuce.cyber"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-blue-100 hover:bg-white/10 hover:text-white transition"
          >
            TikTok @astucecyber
          </a>
        </div>
      </div>
    </section>
  );
}
