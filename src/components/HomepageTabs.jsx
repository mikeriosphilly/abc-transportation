import { useState } from "react";

export default function HomepageTabs({ tabs, getAQuoteUrl, bookOnlineUrl }) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubcategory, setActiveSubcategory] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(0);

  const currentTab = tabs?.[activeTab];
  const currentSubcategory = currentTab?.subcategories?.[activeSubcategory];

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
    <section
      className="abc-component"
      style={{ backgroundColor: "#000000", width: "100%", padding: "0" }}
    >
      {/* Tab Bar — Desktop */}
      <div
        className="tab-bar-desktop"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "24px 20px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0",
            backgroundColor: "#0a0a0a",
            border: "1px solid #424242",
            borderRadius: "999px",
            padding: "6px",
          }}
        >
          {tabs?.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(index)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 22px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                backgroundColor:
                  activeTab === index ? "#1a1a1a" : "transparent",
                color: activeTab === index ? "#a7a86e" : "#ffffff",
                fontFamily: "'EuclidCircularB', sans-serif",
                fontSize: "0.75rem",
                fontWeight: "400",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "all 0.2s ease",
                position: "relative",
              }}
            >
              {tab.tabIcon?.node?.sourceUrl && (
                <img
                  src={tab.tabIcon.node.sourceUrl}
                  alt={tab.tabIcon.node.altText || ""}
                  style={{
                    width: "18px",
                    height: "18px",
                    objectFit: "contain",
                    filter:
                      activeTab === index
                        ? "invert(72%) sepia(35%) saturate(400%) hue-rotate(18deg) brightness(115%)"
                        : "none",
                  }}
                />
              )}
              {tab.tabLabel}
              {activeTab === index && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "4px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "30px",
                    height: "2px",
                    backgroundColor: "#a7a86e",
                    borderRadius: "1px",
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Bar — Mobile */}
      <div
        className="tab-bar-mobile"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          padding: "24px 20px 0",
        }}
      >
        {tabs?.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabChange(index)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "999px",
              border: "1px solid #424242",
              cursor: "pointer",
              backgroundColor: activeTab === index ? "#1a1a1a" : "#0a0a0a",
              color: activeTab === index ? "#a7a86e" : "#ffffff",
              fontFamily: "'EuclidCircularB', sans-serif",
              fontSize: "0.75rem",
              fontWeight: "400",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "all 0.2s ease",
            }}
          >
            {tab.tabIcon?.node?.sourceUrl && (
              <img
                src={tab.tabIcon.node.sourceUrl}
                alt={tab.tabIcon.node.altText || ""}
                style={{
                  width: "18px",
                  height: "18px",
                  objectFit: "contain",
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

      {/* Desktop Layout */}
      <div
        className="desktop-layout"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "60px 60px 80px",
        }}
      >
        {/* Left Column */}
        <div style={{ paddingRight: "60px" }}>
          {/* Heading */}
          <div style={{ marginBottom: "32px" }}>
            <h1
              style={{
                fontFamily: "'LibreBaskerville', serif",
                fontWeight: "400",
                fontSize: "clamp(3rem, 6vw, 5.625rem)",
                lineHeight: "1",
                color: "#ffffff",
                textTransform: "uppercase",
                margin: "0",
                letterSpacing: "0",
              }}
            >
              {heading.top}
            </h1>
            <h1
              style={{
                fontFamily: "'LibreBaskerville', serif",
                fontWeight: "400",
                fontStyle: "italic",
                fontSize: "clamp(2rem, 4vw, 3.75rem)",
                lineHeight: "1.15",
                color: "#a7a86e",
                margin: "0",
                letterSpacing: "0",
              }}
            >
              {heading.middle}
            </h1>
            <h1
              style={{
                fontFamily: "'LibreBaskerville', serif",
                fontWeight: "400",
                fontSize: "clamp(3rem, 6vw, 5.625rem)",
                lineHeight: "1",
                color: "#ffffff",
                textTransform: "uppercase",
                margin: "0",
                letterSpacing: "0",
              }}
            >
              {heading.bottom}
            </h1>
          </div>

          {/* Body Text */}
          <p
            style={{
              fontFamily: "'EuclidCircularB', sans-serif",
              fontSize: "0.9375rem",
              fontWeight: "400",
              lineHeight: "1.4",
              color: "#c6c6c6",
              marginBottom: "40px",
              maxWidth: "480px",
            }}
          >
            {currentTab?.tabBodyText}
          </p>

          {/* Subcategory List */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {currentTab?.subcategories?.map((sub, index) => (
              <button
                key={index}
                onClick={() => handleSubcategoryChange(index)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px 20px",
                  backgroundColor:
                    activeSubcategory === index ? "#111111" : "transparent",
                  border: "none",
                  borderBottom: "1px solid #242424",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background-color 0.2s ease",
                  width: "100%",
                }}
              >
                {sub.icon?.node?.sourceUrl && (
                  <img
                    src={sub.icon.node.sourceUrl}
                    alt={sub.icon.node.altText || ""}
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "contain",
                      flexShrink: "0",
                      opacity: activeSubcategory === index ? 1 : 0.6,
                    }}
                  />
                )}
                <span
                  style={{
                    fontFamily: "'EuclidCircularB', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: "400",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: activeSubcategory === index ? "#a7a86e" : "#ffffff",
                    transition: "color 0.2s ease",
                  }}
                >
                  {sub.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {currentSubcategory?.image?.node?.sourceUrl && (
            <img
              src={currentSubcategory.image.node.sourceUrl}
              alt={currentSubcategory.image.node.altText || ""}
              style={{
                width: "100%",
                height: "360px",
                objectFit: "cover",
                display: "block",
                marginBottom: "32px",
              }}
            />
          )}
          <h2
            style={{
              fontFamily: "'LibreBaskerville', serif",
              fontWeight: "400",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              lineHeight: "1.1",
              color: "#ffffff",
              marginBottom: "20px",
              margin: "0 0 20px 0",
            }}
          >
            {currentSubcategory?.title}
          </h2>
          <p
            style={{
              fontFamily: "'EuclidCircularB', sans-serif",
              fontSize: "0.9375rem",
              fontWeight: "400",
              lineHeight: "1.5",
              color: "#c6c6c6",
              marginBottom: "32px",
              margin: "0 0 32px 0",
            }}
          >
            {currentSubcategory?.bodyText}
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href={getAQuoteUrl}
              style={{
                display: "inline-block",
                padding: "16px 32px",
                backgroundColor: "#a7a86e",
                color: "#000000",
                fontFamily: "'EuclidCircularB', sans-serif",
                fontSize: "0.9375rem",
                fontWeight: "400",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "999px",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              Get a Quote
            </a>
            <a
              href={bookOnlineUrl}
              style={{
                display: "inline-block",
                padding: "16px 32px",
                backgroundColor: "#ffffff",
                color: "#000000",
                fontFamily: "'EuclidCircularB', sans-serif",
                fontSize: "0.9375rem",
                fontWeight: "400",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "999px",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              Book Online
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="mobile-layout" style={{ padding: "24px 20px 60px" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <h1
            style={{
              fontFamily: "'LibreBaskerville', serif",
              fontWeight: "400",
              fontSize: "clamp(2.5rem, 10vw, 4rem)",
              lineHeight: "1",
              color: "#ffffff",
              textTransform: "uppercase",
              margin: "0",
            }}
          >
            {heading.top}
          </h1>
          <h1
            style={{
              fontFamily: "'LibreBaskerville', serif",
              fontWeight: "400",
              fontStyle: "italic",
              fontSize: "clamp(1.5rem, 6vw, 2.5rem)",
              lineHeight: "1.15",
              color: "#a7a86e",
              margin: "0",
            }}
          >
            {heading.middle}
          </h1>
          <h1
            style={{
              fontFamily: "'LibreBaskerville', serif",
              fontWeight: "400",
              fontSize: "clamp(2.5rem, 10vw, 4rem)",
              lineHeight: "1",
              color: "#ffffff",
              textTransform: "uppercase",
              margin: "0",
            }}
          >
            {heading.bottom}
          </h1>
          <p
            style={{
              fontFamily: "'EuclidCircularB', sans-serif",
              fontSize: "0.9375rem",
              color: "#c6c6c6",
              lineHeight: "1.5",
              marginTop: "16px",
              textAlign: "center",
            }}
          >
            {currentTab?.tabBodyText}
          </p>
        </div>

        {/* First subcategory — expanded by default */}
        {/* Accordions — all subcategories */}
        {currentTab?.subcategories?.map((sub, index) => {
          const isOpen = openAccordion === index;

          return (
            <div
              key={index}
              style={{
                borderBottom: "1px solid #242424",
                backgroundColor: isOpen ? "#111111" : "transparent",
                padding: isOpen ? "0 16px" : "0",
              }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "16px 0",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                {sub.icon?.node?.sourceUrl && (
                  <img
                    src={sub.icon.node.sourceUrl}
                    alt={sub.icon.node.altText || ""}
                    style={{
                      width: "24px",
                      height: "24px",
                      objectFit: "contain",
                      opacity: isOpen ? 1 : 0.7,
                    }}
                  />
                )}
                <span
                  style={{
                    fontFamily: "'EuclidCircularB', sans-serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: isOpen ? "#a7a86e" : "#ffffff",
                    fontWeight: "400",
                    flex: 1,
                  }}
                >
                  {sub.title}
                </span>
              </button>

              {isOpen && (
                <div style={{ paddingBottom: "24px" }}>
                  {sub.image?.node?.sourceUrl && (
                    <img
                      src={sub.image.node.sourceUrl}
                      alt={sub.image.node.altText || ""}
                      style={{
                        width: "100%",
                        height: "240px",
                        objectFit: "cover",
                        display: "block",
                        marginBottom: "20px",
                      }}
                    />
                  )}
                  <h2
                    style={{
                      fontFamily: "'LibreBaskerville', serif",
                      fontWeight: "400",
                      fontSize: "1.75rem",
                      color: "#ffffff",
                      margin: "0 0 12px 0",
                    }}
                  >
                    {sub.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "'EuclidCircularB', sans-serif",
                      fontSize: "0.9375rem",
                      color: "#c6c6c6",
                      lineHeight: "1.5",
                      margin: "0 0 24px 0",
                    }}
                  >
                    {sub.bodyText}
                  </p>
                  <div
                    style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
                  >
                    <a
                      href={getAQuoteUrl}
                      style={{
                        padding: "14px 28px",
                        backgroundColor: "#a7a86e",
                        color: "#000000",
                        fontFamily: "'EuclidCircularB', sans-serif",
                        fontSize: "0.875rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        borderRadius: "999px",
                      }}
                    >
                      Get a Quote
                    </a>
                    <a
                      href={bookOnlineUrl}
                      style={{
                        padding: "14px 28px",
                        backgroundColor: "#ffffff",
                        color: "#000000",
                        fontFamily: "'EuclidCircularB', sans-serif",
                        fontSize: "0.875rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        borderRadius: "999px",
                      }}
                    >
                      Book Online
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        .desktop-layout { display: grid !important; }
        .mobile-layout { display: none !important; }
        .tab-bar-desktop { display: flex !important; }
        .tab-bar-mobile { display: none !important; }

        @media (max-width: 768px) {
          .desktop-layout { display: none !important; }
          .mobile-layout { display: block !important; }
          .tab-bar-desktop { display: none !important; }
          .tab-bar-mobile { display: flex !important; }
        }
      `}</style>
    </section>
  );
}
