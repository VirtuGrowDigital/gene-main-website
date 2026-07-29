import { Download, Filter, Search } from "lucide-react";

export default function ProductFilters({
  search,
  setSearch,
  category,
  setCategory,
}) {
  return (
    <section className="bg-white pt-10 pb-8 lg:pt-12">
      <div className="mx-auto max-w-[1180px] px-5 md:px-6">
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[760px]
            flex-col
            gap-3
            rounded-[28px]
            bg-white
            p-4
            shadow-[0_15px_40px_rgba(0,0,0,0.12)]

            lg:max-w-fit
            lg:flex-row
            lg:items-center
            lg:justify-center
            lg:gap-4
            lg:rounded-full
            lg:px-5
            lg:py-4
          "
        >
          {/* Category */}
          <div className="relative w-full lg:w-auto">
            <Filter
              size={15}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#0C95A5]"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="
                h-11
                w-full
                appearance-none
                rounded-full
                border
                border-[#21B7F5]
                bg-white
                pl-10
                pr-5
                text-sm
                font-medium
                text-[#0C95A5]
                outline-none

                lg:h-10
                lg:w-[170px]
              "
            >
              <option>All</option>
              <option>VTM</option>
              <option>Typhoid</option>
              <option>Pregnancy</option>
            </select>
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-auto">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search Products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                h-11
                w-full
                rounded-full
                border
                border-gray-200
                pl-10
                pr-5
                text-sm
                outline-none
                transition
                focus:border-[#22B8F4]

                lg:h-10
                lg:w-[320px]
              "
            />
          </div>

          {/* Download */}
          <button
            onClick={() =>
              alert("Catalogue download will be connected later.")
            }
            className="
              flex
              h-11
              w-full
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#22B8F4]
              px-6
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-[#179ED8]

              lg:h-10
              lg:w-auto
            "
          >
            <Download size={15} />
            Download Full Catalogue
          </button>
        </div>
      </div>
    </section>
  );
}