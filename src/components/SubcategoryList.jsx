export default function SubcategoryList({ subcategories, activeSubcategory, onSubcategoryChange }) {
  return (
    <div className="flex flex-col">
      {subcategories?.map((sub, index) => (
        <button
          key={index}
          onClick={() => onSubcategoryChange(index)}
          className={`flex items-center gap-4 px-5 border-0 border-b border-abc-subtext cursor-pointer text-left transition-colors duration-200 w-[32rem] h-[5.8125rem] ${activeSubcategory === index ? "bg-abc-darker" : "bg-transparent"}`}
        >
          {sub.icon?.node?.sourceUrl && (
            <img
              src={sub.icon.node.sourceUrl}
              alt={sub.icon.node.altText || ""}
              className="w-[1.875rem] h-[1.875rem] object-contain shrink-0"
            />
          )}
          <span className={`font-euclid text-[1rem] font-bold tracking-[0.07em] uppercase transition-colors duration-200 ${activeSubcategory === index ? "text-abc-gold" : "text-white"}`}>
            {sub.title}
          </span>
        </button>
      ))}
    </div>
  );
}
