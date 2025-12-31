import MultiStepForm from "./MultiStepForm";

type ContactFormProps = {
  trackingSource?: string;
  onSubmitted?: () => void;
  sectionId?: string;
  layout?: "section" | "embedded";
  stickyCard?: boolean;
};

export default function ContactForm({
  trackingSource = "contact_default",
  onSubmitted,
  sectionId = "contact",
  layout = "section",
  stickyCard = true,
}: ContactFormProps) {
  const isEmbedded = layout === "embedded";

  return (
    <section
      id={sectionId}
      className={
        isEmbedded
          ? "w-full scroll-mt-24"
          : "relative px-4 py-16 lg:py-24 bg-[#0b1531] scroll-mt-24"
      }
    >
      <div className={isEmbedded ? "w-full" : "max-w-4xl mx-auto"}>
        <div className={isEmbedded ? "text-left mb-8 space-y-3" : "text-center mb-10 space-y-4"}>
          <h2
            className={
              isEmbedded
                ? "text-2xl lg:text-3xl font-bold text-white"
                : "text-3xl lg:text-4xl font-bold text-white"
            }
          >
            Faites votre demande de couverture cyber
          </h2>
          <p
            className={
              isEmbedded ? "text-blue-100/80" : "text-blue-100/80 max-w-2xl mx-auto"
            }
          >
            2 questions rapides pour évaluer votre exposition. Réponse sous 24h ouvrées avec des
            recommandations claires et adaptées.
          </p>
          <div
            className={
              isEmbedded ? "flex flex-wrap justify-start gap-3" : "flex flex-wrap justify-center gap-3"
            }
          >
            {[
              "Sans engagement",
              "Réponse sous 24h ouvrées",
              "Données confidentielles",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-blue-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <MultiStepForm
          trackingSource={trackingSource}
          onSubmitted={onSubmitted}
          stickyCard={stickyCard}
          variant="default"
        />
      </div>
    </section>
  );
}
