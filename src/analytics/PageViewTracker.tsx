// src/analytics/PageViewTracker.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { sendPageView } from "./gtag";

export default function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.search;
    sendPageView(path);
  }, [location]);

  return null;
}
