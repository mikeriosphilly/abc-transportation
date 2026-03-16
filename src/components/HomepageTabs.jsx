import { useState, useEffect } from "react";
import DesktopTabBar from "./DesktopTabBar";
import SectionHeading from "./SectionHeading";
import SubcategoryList from "./SubcategoryList";
import FeaturePanel from "./FeaturePanel";
import MobileTabBar from "./MobileTabBar";
import AccordionList from "./AccordionList";

export default function HomepageTabs({ tabs, getAQuoteUrl, bookOnlineUrl, headingLine1, headingLine2, headingLine3, introBodyText }) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubcategory, setActiveSubcategory] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(0);

  const currentTab = tabs?.[activeTab];

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
    <section className="bg-abc-black w-full p-0">
      <DesktopTabBar tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Desktop Layout */}
      <div className="desktop-layout grid grid-cols-2 gap-0 max-w-[1720px] mx-auto px-[60px] pt-[45px] pb-20">
        <div className="py-[1.6625rem] px-[4.875rem] [container-type:inline-size]">
          <SectionHeading
            headingLine1={headingLine1}
            headingLine2={headingLine2}
            headingLine3={headingLine3}
            introBodyText={introBodyText}
          />
          <SubcategoryList
            subcategories={currentTab?.subcategories}
            activeSubcategory={activeSubcategory}
            onSubcategoryChange={handleSubcategoryChange}
          />
        </div>
        <div className="flex flex-col">
          <FeaturePanel
            subcategories={currentTab?.subcategories}
            activeTab={activeTab}
            activeSubcategory={activeSubcategory}
            getAQuoteUrl={getAQuoteUrl}
            bookOnlineUrl={bookOnlineUrl}
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="mobile-layout pt-[5.8125rem] px-5 pb-[60px]">
        <SectionHeading
          headingLine1={headingLine1}
          headingLine2={headingLine2}
          headingLine3={headingLine3}
          introBodyText={introBodyText}
          mobile
        />
        <MobileTabBar
          key={`pills-${activeTab}`}
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        <AccordionList
          subcategories={currentTab?.subcategories}
          openAccordion={openAccordion}
          onToggleAccordion={toggleAccordion}
          getAQuoteUrl={getAQuoteUrl}
          bookOnlineUrl={bookOnlineUrl}
        />
      </div>
    </section>
  );
}
