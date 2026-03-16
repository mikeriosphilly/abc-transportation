import CtaGroup from "./CtaGroup";

export default function AccordionList({ subcategories, openAccordion, onToggleAccordion, getAQuoteUrl, bookOnlineUrl }) {
  return (
    <>
      {subcategories?.map((sub, index) => {
        const isOpen = openAccordion === index;
        return (
          <div
            key={index}
            className={`border-b border-abc-subtext ${isOpen ? "bg-abc-darker" : "bg-transparent"}`}
          >
            <button
              onClick={() => onToggleAccordion(index)}
              className="flex items-center gap-3 py-[1.25rem] px-0 bg-transparent border-0 cursor-pointer w-full text-left"
            >
              {sub.icon?.node?.sourceUrl && (
                <img
                  src={sub.icon.node.sourceUrl}
                  alt={sub.icon.node.altText || ""}
                  className={`w-6 h-6 object-contain ${isOpen ? "opacity-100" : "opacity-70"}`}
                />
              )}
              <span className={`font-euclid text-xs tracking-[0.1em] uppercase font-normal flex-1 ${isOpen ? "text-abc-gold" : "text-white"}`}>
                {sub.title}
              </span>
            </button>

            <div style={{ display: "grid", gridTemplateRows: isOpen ? "1fr" : "0fr", transition: "grid-template-rows 0.3s ease" }}>
              <div className="overflow-hidden">
                <div
                  className="px-5 pt-4 pb-8"
                  style={{ animation: isOpen ? "ht-fade 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.1s both" : "none" }}
                >
                  {sub.image?.node?.sourceUrl && (
                    <img
                      src={sub.image.node.sourceUrl}
                      alt={sub.image.node.altText || ""}
                      className="w-full h-[240px] object-cover block mb-5"
                    />
                  )}
                  <h2 className="font-euclid font-normal text-[1.278rem] leading-[1.534rem] tracking-[0.02em] text-white mb-3">{sub.title}</h2>
                  <p className="font-euclid text-[0.818125rem] text-abc-body leading-[1.5] mb-6">{sub.bodyText}</p>
                  <CtaGroup getAQuoteUrl={getAQuoteUrl} bookOnlineUrl={bookOnlineUrl} mobile />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
