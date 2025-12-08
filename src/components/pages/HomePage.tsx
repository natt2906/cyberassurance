import MainNavbar from "../../components/layout/MainNavbar";

// Tes sections
import Hero from "../../components/Hero";
import Problem from "../../components/Problem";
import Solution from "../../components/Solution";
import HowItWorks from "../../components/HowItWorks";
import Testimonials from "../../components/Testimonials";
import Comparison from "../../components/Comparison";
import FAQ from "../../components/FAQ";
import ContactForm from "../../components/ContactForm";
import FinalCTA from "../../components/FinalCTA";
import SocialSection from "../../components/SocialSection";



export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
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
        <SocialSection />  
        <FAQ />
        <ContactForm />
        <FinalCTA />
      </main>
    </div>
  );
}
