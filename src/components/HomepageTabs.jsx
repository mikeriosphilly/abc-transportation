import { useState, useRef, useEffect } from "react";

export default function HomepageTabs({ tabs, getAQuoteUrl, bookOnlineUrl, headingLine1, headingLine2, headingLine3, introBodyText }) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubcategory, setActiveSubcategory] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(0);

  const currentTab = tabs?.[activeTab];

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
        transition: animate ? 'left 0.4s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
      });
    };

    calculate(indicatorInitialized.current);
    indicatorInitialized.current = true;

    const handleResize = () => calculate(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeTab]);

  useEffect(() => {
    if (currentTab?.tabLabel) {
      document.title = `ABC Transportation | ${currentTab.tabLabel}`;
    }
  }, [activeTab]);

  const handleTabChange = (index) => {
    setActiveTab(index);
    setActiveSubcategory(0);
    setOpenAccordion(0);
  };

  const handleSubcategoryChange = (index) => {
    setActiveSubcategory(index);
  };

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section className="abc-component ht-section">
      {/* Tab Bar — Desktop */}
      <div className="tab-bar-desktop ht-tab-bar-desktop-wrap">
        <div ref={pillContainerRef} className="ht-tab-pill-group">
          <span className="ht-tab-indicator" style={indicatorStyle} aria-hidden="true" />
          {tabs?.map((tab, index) => (
            <button
              key={index}
              ref={(el) => (tabRefs.current[index] = el)}
              onClick={() => handleTabChange(index)}
              className={`ht-tab-btn ${activeTab === index ? "ht-tab-btn--active" : "ht-tab-btn--inactive"}`}
            >
              {tab.tabIcon?.node?.sourceUrl && (
                <img
                  src={tab.tabIcon.node.sourceUrl}
                  alt={tab.tabIcon.node.altText || ""}
                  className="ht-tab-icon"
                  style={{
                    filter:
                      activeTab === index
                        ? "brightness(0) invert(70%) sepia(18%) saturate(666%) hue-rotate(22deg) brightness(91%) contrast(87%)"
                        : "none",
                  }}
                />
              )}
              {tab.tabLabel}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="desktop-layout ht-desktop-grid">
        {/* Left Column */}
        <div className="ht-left-col">
          {/* Heading */}
          <div className="ht-heading-block">
            <p className="ht-heading-main">{headingLine1}</p>
            <p className="ht-heading-sub">{headingLine2}</p>
            <h1 className="ht-heading-main">{headingLine3}</h1>
          </div>

          {/* Body Text */}
          <p className="ht-body-text">{introBodyText}</p>

          {/* Subcategory List */}
          <div className="ht-subcat-list">
            {currentTab?.subcategories?.map((sub, index) => (
              <button
                key={index}
                onClick={() => handleSubcategoryChange(index)}
                className={`ht-subcat-btn ${activeSubcategory === index ? "ht-subcat-btn--active" : "ht-subcat-btn--inactive"}`}
              >
                {sub.icon?.node?.sourceUrl && (
                  <img
                    src={sub.icon.node.sourceUrl}
                    alt={sub.icon.node.altText || ""}
                    className="ht-subcat-icon"
                  />
                )}
                <span className={`ht-subcat-label ${activeSubcategory === index ? "ht-subcat-label--active" : "ht-subcat-label--inactive"}`}>
                  {sub.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="ht-right-col">
          <div className="ht-subcat-panel-container">
            {currentTab?.subcategories?.map((sub, index) => {
              const isActive = activeSubcategory === index;
              return (
                <div
                  key={`panel-${activeTab}-${index}`}
                  className={`ht-subcat-panel ${isActive ? "ht-subcat-panel--active" : "ht-subcat-panel--hidden"}`}
                  aria-hidden={!isActive}
                >
                  {sub.image?.node?.sourceUrl && (
                    <div className="ht-feature-image-wrap">
                      <img
                        src={sub.image.node.sourceUrl}
                        alt={sub.image.node.altText || ""}
                        className="ht-feature-image"
                      />
                    </div>
                  )}
                  <h2 className="ht-feature-title">{sub.title}</h2>
                  <p className="ht-feature-body">{sub.bodyText}</p>
                  <div className="ht-cta-group">
                    <a href={getAQuoteUrl} className="ht-cta-gold">Get a Quote</a>
                    <a href={bookOnlineUrl} className="ht-cta-white">Book Online</a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="mobile-layout ht-mobile-wrap">
        {/* Heading */}
        <div className="ht-mobile-heading-block">
          <p className="ht-mobile-heading-main">{headingLine1}</p>
          <p className="ht-mobile-heading-sub">{headingLine2}</p>
          <h1 className="ht-mobile-heading-main">{headingLine3}</h1>
          <p className="ht-mobile-body-text">{introBodyText}</p>
        </div>

        {/* Tab Bar — Mobile */}
        <div key={`pills-${activeTab}`} className="ht-tab-bar-mobile-wrap ht-animate-in">
          {tabs?.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(index)}
              className={`ht-mobile-tab-btn ${activeTab === index ? "ht-mobile-tab-btn--active" : "ht-mobile-tab-btn--inactive"}`}
            >
              {tab.tabIcon?.node?.sourceUrl && (
                <img
                  src={tab.tabIcon.node.sourceUrl}
                  alt={tab.tabIcon.node.altText || ""}
                  className="ht-tab-icon"
                  style={{
                    filter:
                      activeTab === index
                        ? "brightness(0) invert(70%) sepia(18%) saturate(666%) hue-rotate(22deg) brightness(91%) contrast(87%)"
                        : "none",
                  }}
                />
              )}
              {tab.tabLabel}
            </button>
          ))}
        </div>

        {/* Accordions — all subcategories */}
        {currentTab?.subcategories?.map((sub, index) => {
          const isOpen = openAccordion === index;

          return (
            <div
              key={index}
              className={`ht-accordion-item ${isOpen ? "ht-accordion-item--open" : "ht-accordion-item--closed"}`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="ht-accordion-btn"
              >
                {sub.icon?.node?.sourceUrl && (
                  <img
                    src={sub.icon.node.sourceUrl}
                    alt={sub.icon.node.altText || ""}
                    className={`ht-accordion-icon ${isOpen ? "ht-accordion-icon--open" : "ht-accordion-icon--closed"}`}
                  />
                )}
                <span className={`ht-accordion-label ${isOpen ? "ht-accordion-label--open" : "ht-accordion-label--closed"}`}>
                  {sub.title}
                </span>
              </button>

              <div className={`ht-accordion-body-wrap ${isOpen ? "ht-accordion-body-wrap--open" : ""}`}>
                <div className="ht-accordion-body-inner">
                  <div className="ht-accordion-content">
                    {sub.image?.node?.sourceUrl && (
                      <img
                        src={sub.image.node.sourceUrl}
                        alt={sub.image.node.altText || ""}
                        className="ht-accordion-image"
                      />
                    )}
                    <h2 className="ht-accordion-title font-euclid">{sub.title}</h2>
                    <p className="ht-accordion-body">{sub.bodyText}</p>
                    <div className="ht-accordion-cta-group">
                      <a href={getAQuoteUrl} className="ht-cta-gold-sm">Get a Quote</a>
                      <a href={bookOnlineUrl} className="ht-cta-white-sm">Book Online</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .desktop-layout { display: grid !important; }
        .mobile-layout { display: none !important; }
        .tab-bar-desktop { display: flex !important; }

        @media (max-width: 1110px) {
          .desktop-layout { display: none !important; }
          .mobile-layout { display: block !important; }
          .tab-bar-desktop { display: none !important; }
        }
      `}</style>
    </section>
  );
}
