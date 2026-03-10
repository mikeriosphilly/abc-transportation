import { useState, useRef, useEffect } from "react";

export default function HomepageTabs({ tabs, getAQuoteUrl, bookOnlineUrl }) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubcategory, setActiveSubcategory] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(0);

  const currentTab = tabs?.[activeTab];
  const currentSubcategory = currentTab?.subcategories?.[activeSubcategory];

  const pillContainerRef = useRef(null);
  const tabRefs = useRef([]);
  const [sliderStyle, setSliderStyle] = useState(null);

  useEffect(() => {
    const container = pillContainerRef.current;
    const activeBtn = tabRefs.current[activeTab];
    if (!container || !activeBtn) return;
    const containerRect = container.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();
    setSliderStyle({
      width: `${btnRect.width}px`,
      height: `${btnRect.height}px`,
      transform: `translate(${btnRect.left - containerRect.left}px, ${btnRect.top - containerRect.top}px)`,
    });
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

  const headingWords = {
    Experience: {
      top: "THE ABC",
      middle: "Transportation",
      bottom: "EXPERIENCE",
    },
    "We Care": { top: "THE ABC", middle: "Transportation", bottom: "WE CARE" },
    Safety: { top: "THE ABC", middle: "Transportation", bottom: "SAFETY" },
  };

  const heading =
    headingWords[currentTab?.tabLabel] || headingWords["Experience"];

  return (
    <section className="abc-component ht-section">
      {/* Tab Bar — Desktop */}
      <div className="tab-bar-desktop ht-tab-bar-desktop-wrap">
        <div ref={pillContainerRef} className="ht-tab-pill-group">
          {sliderStyle && <div className="ht-tab-slider" style={sliderStyle} aria-hidden="true" />}
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
                        ? "invert(72%) sepia(35%) saturate(400%) hue-rotate(18deg) brightness(115%)"
                        : "none",
                  }}
                />
              )}
              {tab.tabLabel}
              {activeTab === index && <span className="ht-tab-indicator" />}
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
            <p className="ht-heading-main">{heading.top}</p>
            <p className="ht-heading-sub">{heading.middle}</p>
            <h1 key={activeTab} className="ht-heading-main ht-heading-enter">{heading.bottom}</h1>
          </div>

          {/* Body Text */}
          <p key={activeTab} className="ht-body-text ht-content-fade">{currentTab?.tabBodyText}</p>

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
                    className={`ht-subcat-icon ${activeSubcategory === index ? "ht-subcat-icon--active" : "ht-subcat-icon--inactive"}`}
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
                      {sub.image.node.caption && (
                        <div className="ht-feature-caption">
                          <p className="ht-feature-caption-text" dangerouslySetInnerHTML={{ __html: sub.image.node.caption }} />
                        </div>
                      )}
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
        <div key={activeTab} className="ht-mobile-heading-block ht-animate-in">
          <p className="ht-mobile-heading-main">{heading.top}</p>
          <p className="ht-mobile-heading-sub">{heading.middle}</p>
          <h1 className="ht-mobile-heading-main">{heading.bottom}</h1>
          <p className="ht-mobile-body-text">{currentTab?.tabBodyText}</p>
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
                        ? "invert(72%) sepia(35%) saturate(400%) hue-rotate(18deg) brightness(115%)"
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
                    <h2 className="ht-accordion-title">{sub.title}</h2>
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
