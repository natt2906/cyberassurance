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
            className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-blue-100 hover:bg-white/10 hover:text-white transition inline-flex items-center gap-2"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.25 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
            </svg>
            Instagram @astucecyber
          </a>
          <a
            href="https://www.tiktok.com/@astuce.cyber"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-blue-100 hover:bg-white/10 hover:text-white transition inline-flex items-center gap-2"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M15.5 3.1a4.6 4.6 0 0 0 .1 1.1c.3 1.5 1.4 2.6 2.8 2.9.4.1.7.1 1.1.1V9a6.5 6.5 0 0 1-3.9-1.3v6.4a5.76 5.76 0 1 1-5-5.7V10a3.76 3.76 0 1 0 2.7 3.6V3.1h2.3Z" />
            </svg>
            TikTok @astucecyber
          </a>
        </div>
      </div>
    </section>
  );
}
