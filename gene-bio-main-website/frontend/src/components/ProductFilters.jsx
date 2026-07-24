import { Download, Filter, Search } from "lucide-react";

export default function ProductFilters({
  search,
  setSearch,
  category,
  setCategory,
}) {
  return (
    <section className="bg-white pt-12 pb-8">
      <div className="mx-auto flex max-w-[1180px] justify-center px-6">
        <div className="flex flex-wrap items-center justify-center gap-4 rounded-full bg-white px-5 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.12)]">

          {/* Category Filter */}

          <div className="relative">
            <Filter
              size={15}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#0C95A5]"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-10 w-[170px] cursor-pointer appearance-none rounded-full border border-[#21B7F5] bg-white pl-10 pr-5 text-sm font-medium text-[#0C95A5] outline-none"
            >
              <option>All</option>
              <option>VTM</option>
              <option>Typhoid</option>
              <option>Pregnancy</option>
            </select>
          </div>

          {/* Search */}

          <div className="relative">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search Products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-10 w-[320px] rounded-full border border-gray-200 pl-10 pr-5 text-sm outline-none transition focus:border-[#22B8F4]"
            />
          </div>

          {/* Download */}

          <button
            className="flex h-10 items-center gap-2 rounded-full bg-[#22B8F4] px-6 text-sm font-semibold text-white transition hover:bg-[#179ED8]"
            onClick={() => alert("Catalogue download will be connected later.")}
          >
            <Download size={15} />
            Download Full Catalogue
          </button>

        </div>
      </div>
    </section>
  );
}