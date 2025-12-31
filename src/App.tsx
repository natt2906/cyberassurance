import { Routes, Route, Navigate } from "react-router-dom";
import PageViewTracker from "./analytics/PageViewTracker";
import SiteJsonLd from "./components/seo/SiteJsonLd";
import CookieBanner from "./components/ui/CookieBanner";
import HashScroll from "./components/layout/HashScroll";
import ScrollToTop from "./components/layout/ScrollToTop";
import FloatingContact from "./components/ui/FloatingContact";
import GoogleAdsTag from "./components/seo/GoogleAdsTag";
// Page liste des articles
import ArticlesIndex from "./components/pages/ArticlesIndex";
import HomePage from "./components/pages/HomePage";
import AuditCyberPage from "./components/pages/AuditCyberPage";
import AssistancePage from "./components/pages/AssistancePage";

// 20 pages articles
import ArticleAssuranceCyberCestQuoi from "./components/pages/ArticleAssuranceCyberCestQuoi";
import ArticlePourquoiPMECibles from "./components/pages/ArticlePourquoiPMECibles";
import ArticleCoutCyberattaque from "./components/pages/ArticleCoutCyberattaque";
import ArticleCoutAssuranceCyber from "./components/pages/ArticleCoutAssuranceCyber";
import ArticleErreursCourantes from "./components/pages/ArticleErreursCourantes";
import ArticleRansomwareQueFaire from "./components/pages/ArticleRansomwareQueFaire";
import ArticleSecuriserMessageriePro from "./components/pages/ArticleSecuriserMessageriePro";
import ArticlePhishingMail from "./components/pages/ArticlePhishingMail";
import ArticleSauvegardesPME from "./components/pages/ArticleSauvegardesPME";
import ArticleCyberVsAntivirus from "./components/pages/ArticleCyberVsAntivirus";
import ArticleFormerEquipes from "./components/pages/ArticleFormerEquipes";
import ArticleFreelancesIndependants from "./components/pages/ArticleFreelancesIndependants";
import ArticleArtisansBTP from "./components/pages/ArticleArtisansBTP";
import ArticleEcommerce from "./components/pages/ArticleEcommerce";
import ArticleCloudResponsabilite from "./components/pages/ArticleCloudResponsabilite";
import ArticleCyberRGPD from "./components/pages/ArticleCyberRGPD";
import ArticleChecklistPME from "./components/pages/ArticleChecklistPME";
import ArticleChoisirAssurance from "./components/pages/ArticleChoisirAssurance";
import ArticleCasReelPME from "./components/pages/ArticleCasReelPME";
import ArticleFAQAssuranceCyber from "./components/pages/ArticleFAQAssuranceCyber";

function App() {
  return (
    <>
      <PageViewTracker />
      <SiteJsonLd />
      <CookieBanner />
      <HashScroll />
      <ScrollToTop />
      <FloatingContact />
      <GoogleAdsTag />
      <Routes>
        {/* Landing */}
        <Route path="/" element={<HomePage />} />
        <Route path="/audit-cyber" element={<AuditCyberPage />} />
        <Route path="/assistance" element={<AssistancePage />} />

        {/* Page liste articles */}
        <Route path="/articles" element={<ArticlesIndex />} />

        {/* Redirections anciennes URL */}
        <Route
          path="/articles/ransomware-que-faire"
          element={<Navigate to="/articles/extorsion-cyber-activite-bloquee" replace />}
        />
        <Route
          path="/articles/reconnaitre-mail-phishing"
          element={<Navigate to="/articles/fraude-email-usurpation" replace />}
        />
        <Route
          path="/articles/sauvegardes-strategie-pme"
          element={<Navigate to="/articles/continuité-activite-restauration" replace />}
        />
        <Route
          path="/articles/assurance-cyber-vs-antivirus"
          element={<Navigate to="/articles/assurance-cyber-vs-prevention" replace />}
        />

        {/* Pages articles individuelles */}
        <Route
          path="/articles/assurance-cyber-cest-quoi"
          element={<ArticleAssuranceCyberCestQuoi />}
        />
        <Route
          path="/articles/pourquoi-pme-cibles-cyberattaques"
          element={<ArticlePourquoiPMECibles />}
        />
        <Route
          path="/articles/combien-coute-une-cyberattaque"
          element={<ArticleCoutCyberattaque />}
        />
        <Route
          path="/articles/combien-coute-une-assurance-cyber"
          element={<ArticleCoutAssuranceCyber />}
        />
        <Route
          path="/articles/erreurs-courantes-cyber-petites-entreprises"
          element={<ArticleErreursCourantes />}
        />
        <Route
          path="/articles/extorsion-cyber-activite-bloquee"
          element={<ArticleRansomwareQueFaire />}
        />
        <Route
          path="/articles/securiser-messagerie-pro"
          element={<ArticleSecuriserMessageriePro />}
        />
        <Route
          path="/articles/fraude-email-usurpation"
          element={<ArticlePhishingMail />}
        />
        <Route
          path="/articles/continuité-activite-restauration"
          element={<ArticleSauvegardesPME />}
        />
        <Route
          path="/articles/assurance-cyber-vs-prevention"
          element={<ArticleCyberVsAntivirus />}
        />
        <Route
          path="/articles/former-equipes-risque-cyber"
          element={<ArticleFormerEquipes />}
        />
        <Route
          path="/articles/freelances-independants-cyber-risques"
          element={<ArticleFreelancesIndependants />}
        />
        <Route
          path="/articles/artisans-btp-assurance-cyber"
          element={<ArticleArtisansBTP />}
        />
        <Route
          path="/articles/ecommerce-vol-donnees"
          element={<ArticleEcommerce />}
        />
        <Route
          path="/articles/cloud-et-responsabilite"
          element={<ArticleCloudResponsabilite />}
        />
        <Route
          path="/articles/cyber-et-rgpd"
          element={<ArticleCyberRGPD />}
        />
        <Route
          path="/articles/checklist-cyber-pme"
          element={<ArticleChecklistPME />}
        />
        <Route
          path="/articles/comment-choisir-assurance-cyber"
          element={<ArticleChoisirAssurance />}
        />
        <Route
          path="/articles/cas-reel-pme-attaque"
          element={<ArticleCasReelPME />}
        />
        <Route
          path="/articles/faq-assurance-cyber-complet"
          element={<ArticleFAQAssuranceCyber />}
        />
      </Routes>
    </>
  );
}

export default App;
