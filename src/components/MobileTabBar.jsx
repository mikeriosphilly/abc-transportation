const ACTIVE_ICON_FILTER = "brightness(0) invert(70%) sepia(18%) saturate(666%) hue-rotate(22deg) brightness(91%) contrast(87%)";

export default function MobileTabBar({ tabs, activeTab, onTabChange }) {
  return (
    <div
      className="flex flex-wrap justify-center gap-2.5 mt-5 mb-12"
      style={{ animation: "ht-fade 0.5s cubic-bezier(0.4, 0, 0.2, 1) both" }}
    >
      {tabs?.map((tab, index) => (
        <button
          key={index}
          onClick={() => onTabChange(index)}
          className={`flex items-center justify-center gap-2 py-2.5 w-[9.920625rem] rounded-full border border-abc-border cursor-pointer font-euclid text-xs font-normal tracking-[0.08em] uppercase transition-all duration-200 ${activeTab === index ? "bg-abc-active text-abc-gold" : "bg-abc-dark text-white"}`}
        >
          {tab.tabIcon?.node?.sourceUrl && (
            <img
              src={tab.tabIcon.node.sourceUrl}
              alt={tab.tabIcon.node.altText || ""}
              className="w-[26px] h-[26px] object-contain"
              style={{ filter: activeTab === index ? ACTIVE_ICON_FILTER : "none" }}
            />
          )}
          {tab.tabLabel}
        </button>
      ))}
    </div>
  );
}
