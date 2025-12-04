import { Link } from "react-router-dom";

export default function BackToArticles() {
  return (
    <div className="ml-3 pb-8">
      <Link
        to="/articles"
        className="inline-flex items-center text-sm font-semibold text-blue-300 hover:text-white hover:underline underline-offset-2 transition-colors"
      >
        ← Retour à la liste des articles
      </Link>
    </div>
  );
}
