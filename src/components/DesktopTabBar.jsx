import { useState, useRef, useEffect } from "react";

const ACTIVE_ICON_FILTER = "brightness(0) invert(70%) sepia(18%) saturate(666%) hue-rotate(22deg) brightness(91%) contrast(87%)";

export default function DesktopTabBar({ tabs, activeTab, onTabChange }) {
  const pillContainerRef = useRef(null);
  const tabRefs = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const indicatorInitialized = useRef(false);

  useEffect(() => {
    const calculate = (animate) => {
      const container = pillContainerRef.current;
      const activeBtn = tabRefs.current[activeTab];
      if (!container || !activeBtn) return;
      const containerRect = container.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      const left = btnRect.left - containerRect.left + btnRect.width / 2 - 130.5 / 2;
      setIndicatorStyle({
        left: `${left}px`,
        transition: animate ? "left 0.4s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
      });
    };

    calculate(indicatorInitialized.current);
    indicatorInitialized.current = true;

    const handleResize = () => calculate(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeTab]);

  return (
    <div className="tab-bar-desktop flex justify-center px-5 pt-[5.8125rem]">
      <div ref={pillContainerRef} className="relative flex flex-wrap justify-center items-center bg-abc-dark border border-abc-border rounded-full p-1.5 w-[31rem] h-[3.8125rem]">
        <span
          className="absolute bottom-0 w-[130.5px] h-0.5 bg-abc-gold rounded-[1px]"
          style={indicatorStyle}
          aria-hidden="true"
        />
        {tabs?.map((tab, index) => (
          <button
            key={index}
            ref={(el) => (tabRefs.current[index] = el)}
            onClick={() => onTabChange(index)}
            className={`relative z-[1] flex items-center gap-2 py-2.5 px-[22px] rounded-full border-0 cursor-pointer font-euclid text-[0.9375rem] leading-[1.3125rem] font-normal tracking-[0.05em] uppercase transition-colors duration-200 ${activeTab === index ? "text-abc-gold" : "text-white"}`}
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
    </div>
  );
}
