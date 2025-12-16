// src/analytics/gtag.ts
const GA_MEASUREMENT_ID = "G-CDM3EPYZNQ"; // ton ID
const ADS_CONVERSION_ID = "AW-11278008764/Rjq1CLaa8doYELyD44Eq";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const sendPageView = (path: string) => {
  if (!window.gtag) return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: path,
  });
};

export const trackEvent = (
  eventName: string,
  params?: Record<string, any>
) => {
  if (!window.gtag) return;
  window.gtag("event", eventName, params);
};

export const trackAdsConversion = () => {
  if (!window.gtag) return;
  window.gtag("event", "conversion", { send_to: ADS_CONVERSION_ID });
};
