import CtaGroup from "./CtaGroup";

export default function FeaturePanel({ subcategories, activeTab, activeSubcategory, getAQuoteUrl, bookOnlineUrl }) {
  return (
    <div className="grid grid-cols-1 grid-rows-1">
      {subcategories?.map((sub, index) => {
        const isActive = activeSubcategory === index;
        return (
          <div
            key={`panel-${activeTab}-${index}`}
            className={`[grid-area:1/1] flex flex-col ${isActive ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`}
            style={{ transition: "opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1)" }}
            aria-hidden={!isActive}
          >
            {sub.image?.node?.sourceUrl && (
              <div className="relative overflow-hidden mb-12">
                <img
                  src={sub.image.node.sourceUrl}
                  alt={sub.image.node.altText || ""}
                  className="w-full h-auto block"
                />
              </div>
            )}
            <h2 className="font-euclid font-light text-[3.5rem] leading-[3.75rem] tracking-[0.02em] text-white mb-5">{sub.title}</h2>
            <p className="font-euclid text-[0.9375rem] font-normal leading-[1.5] text-abc-body mb-8">{sub.bodyText}</p>
            <CtaGroup getAQuoteUrl={getAQuoteUrl} bookOnlineUrl={bookOnlineUrl} />
          </div>
        );
      })}
    </div>
  );
}
