import { useState } from "react";

const tabs = [
  "All",
  "Manufacturing",
  "R&D",
  "QC",
  "Products",
  "Events",
  "Culture",
  "Global Presence",
];

export default function GalleryTabs() {
  const [active, setActive] = useState("All");

  return (
    <section className="border-b border-[#E8EDF2] bg-white">
      <div className="mx-auto flex max-w-[1180px] items-center justify-center gap-8 overflow-x-auto px-6 py-5 scrollbar-hide">

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`whitespace-nowrap rounded-full px-5 py-2 text-[12px] font-medium transition-all duration-300 ${
              active === tab
                ? "bg-[#21BDF4] text-white shadow-lg"
                : "text-[#6B7280] hover:text-[#21BDF4]"
            }`}
          >
            {tab}
          </button>
        ))}

      </div>
    </section>
  );
}