import MainNavbar from "../../components/layout/MainNavbar";

// Tes sections
import Hero from "../../components/Hero";
import Problem from "../../components/Problem";
import Solution from "../../components/Solution";
import HowItWorks from "../../components/HowItWorks";
import Testimonials from "../../components/Testimonials";
import Comparison from "../../components/Comparison";
import HomeArticlesHighlights from "../../components/HomeArticlesHighlights";
import FAQ from "../../components/FAQ";
import ContactForm from "../../components/ContactForm";
import FinalCTA from "../../components/FinalCTA";
import SocialSection from "../../components/SocialSection";
import SeoHead from "../../components/seo/SeoHead";
import { baseSiteUrl } from "../../data/articlesSeo";
import HomeServiceJsonLd from "../../components/seo/HomeServiceJsonLd";



export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0b1531]">
      <SeoHead
        title="Assurance cyber pour PME, artisans et indépendants | Assurance Cyber Sécurité"
        description="Protégez votre entreprise contre les cyberattaques : couverture financière, assistance 24/7, messagerie sécurisée, sauvegardes et réponse à incident. Devis rapide pour TPE/PME."
        canonical={baseSiteUrl}
        ogImage={`${baseSiteUrl}/og-image.png`}
      />
      <HomeServiceJsonLd />
      {/* Navbar fixe */}
      <MainNavbar />

      {/* Contenu */}
      <main className="pt-20">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Testimonials />
        <Comparison />
        <HomeArticlesHighlights />
        <ContactForm />
        <SocialSection />  
        <FAQ />
        <FinalCTA />
      </main>
    </div>
  );
}
