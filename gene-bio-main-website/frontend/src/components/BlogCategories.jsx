import { useState } from "react";

const categories = [
  "All Articles",
  "Diagnostics",
  "Healthcare Technology",
  "Research",
  "Manufacturing",
  "Global Health",
  "Industry News",
];

export default function BlogCategories() {
  const [active, setActive] = useState("All Articles");

  return (
    <section className="bg-white pt-6 pb-14">
      <div className="mx-auto max-w-[1180px] px-5">

        <div className="flex flex-wrap items-center gap-4">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`rounded-full px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] transition ${
                active === category
                  ? "bg-[#2CBDF5] text-white shadow-lg"
                  : "text-[#222] hover:bg-[#F3F8FB]"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}