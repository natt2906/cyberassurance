
import { Routes, Route } from "react-router-dom";

// Page liste des articles
import ArticlesIndex from "./components/pages/ArticlesIndex";
import HomePage from "./components/pages/HomePage";

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

// PAGE D'ACCUEIL (landing)


function App() {
  return (
    <Routes>
      {/* Landing */}
     <Route path="/" element={<HomePage />} />

      {/* Page liste articles */}
      <Route path="/articles" element={<ArticlesIndex />} />

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
        path="/articles/ransomware-que-faire"
        element={<ArticleRansomwareQueFaire />}
      />
      <Route
        path="/articles/securiser-messagerie-pro"
        element={<ArticleSecuriserMessageriePro />}
      />
      <Route
        path="/articles/reconnaitre-mail-phishing"
        element={<ArticlePhishingMail />}
      />
      <Route
        path="/articles/sauvegardes-strategie-pme"
        element={<ArticleSauvegardesPME />}
      />
      <Route
        path="/articles/assurance-cyber-vs-antivirus"
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
  );
}

export default App;
