import { Link } from "react-router-dom";

export default function TrendingSidebar() {
  const items = [
    {
      tag: "Diagnostics",
      title: "How GeneBio is redefining the sub-15 minute PCR benchmark.",
    },
    {
      tag: "Bioethics",
      title:
        "The panel discussion on CRISPR and human lineage at GENECON '24.",
    },
    {
      tag: "SupplyChain",
      title:
        "Resilient manufacturing: Protecting our global reagents pipeline.",
    },
    {
      tag: "Dengue",
      title: "Delhi Dengue Cases Rise in October: Why Early Testing Matters",
      slug: "delhi-dengue-cases-rise-october-early-testing",
    },
  ];

  return (
    <div className="rounded-[20px] border border-[#EEF2F5] bg-white p-6 sm:p-7">
      <h3 className="text-[26px] font-semibold text-[#17242B] sm:text-[28px]">
        Trending Now
      </h3>

      <div className="mt-7 space-y-7">
        {items.map((item, index) => {
          if (item.slug) {
            return (
              <Link
                key={index}
                to={`/resources/blogs/${item.slug}`}
                className="group block border-b border-[#EEF2F5] pb-7 last:border-0 last:pb-0"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#999]">
                  #{item.tag}
                </p>

                <p className="mt-2 text-[15px] font-medium leading-6 text-[#222] transition-colors duration-300 group-hover:text-[#20BDEB]">
                  {item.title}
                </p>
              </Link>
            );
          }

          return (
            <div
              key={index}
              className="border-b border-[#EEF2F5] pb-7 last:border-0 last:pb-0"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#999]">
                #{item.tag}
              </p>

              <p className="mt-2 text-[15px] font-medium leading-6 text-[#222]">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}