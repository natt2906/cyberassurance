import { useEffect } from "react";

const ADS_ID = "AW-11278008764";

export default function GoogleAdsTag() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Inject the gtag script only if not present
    if (!document.querySelector(`script[src*="${ADS_ID}"]`)) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`;
      document.head.appendChild(script);
    }

    // Init dataLayer / gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", ADS_ID);
  }, []);

  return null;
}
