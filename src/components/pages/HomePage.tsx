import { useState } from "react";
import MainNavbar from "../../components/layout/MainNavbar";

// Tes sections
import Hero from "../../components/Hero";
import Problem from "../../components/Problem";
import Solution from "../../components/Solution";
import HowItWorks from "../../components/HowItWorks";
import Testimonials from "../../components/Testimonials";
import Comparison from "../../components/Comparison";
import InsuranceCoverage from "../../components/InsuranceCoverage";
import HomeArticlesHighlights from "../../components/HomeArticlesHighlights";
import FAQ from "../../components/FAQ";
import FinalCTA from "../../components/FinalCTA";
import SocialSection from "../../components/SocialSection";
import SeoHead from "../../components/seo/SeoHead";
import { baseSiteUrl } from "../../data/articlesSeo";
import HomeServiceJsonLd from "../../components/seo/HomeServiceJsonLd";
import BottomSheet from "../../components/ui/BottomSheet";
import StickyBar from "../../components/ui/StickyBar";
import MultiStepForm from "../../components/MultiStepForm";
import { pushDataLayerEvent } from "../../analytics/gtag";



export default function HomePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
    pushDataLayerEvent("lead_form_open", { source: "sticky_bar", page: "home" });
  };

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div className="min-h-screen bg-[#0b1531]">
      <SeoHead
        title="Assurance cyber pour PME, artisans et indépendants | Assurance Cyber Sécurité"
        description="Assurance cyber pour professionnels : couverture financière, pertes d’exploitation, assistance 24/7, responsabilité civile, frais juridiques/RGPD. Devis rapide."
        canonical={baseSiteUrl}
        ogImage={`${baseSiteUrl}/og-image.png`}
      />
      <HomeServiceJsonLd />
      {/* Navbar fixe */}
      <MainNavbar />

      {/* Contenu */}
      <main className="pt-20 pb-20 md:pb-0">
        <Hero onOpenDrawer={openDrawer} />
        <Problem />
        <Solution />
        <HowItWorks />
        <Testimonials />
        <Comparison />
        <InsuranceCoverage />
        <HomeArticlesHighlights />
        <SocialSection />  
        <FAQ />
        <FinalCTA onOpenDrawer={openDrawer} />
      </main>
      <StickyBar label="Faire ma demande de couverture cyber (2 min)" onClick={openDrawer} />
      <BottomSheet open={drawerOpen} onClose={closeDrawer} title="Diagnostic de couverture cyber gratuit">
        <MultiStepForm
          trackingSource="home_drawer"
          onSubmitted={closeDrawer}
          autoFocus={drawerOpen}
          variant="drawer"
        />
      </BottomSheet>
    </div>
  );
}
