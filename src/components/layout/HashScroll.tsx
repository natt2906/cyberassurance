import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const OFFSET = 80; // hauteur approx de la navbar

export default function HashScroll() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [hash]);

  return null;
}
