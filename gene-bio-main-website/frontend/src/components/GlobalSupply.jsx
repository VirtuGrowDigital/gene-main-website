import worldMap from "../assets/images/world.svg";

const countries = [
  "India",
  "UAE",
  "Saudi Arabia",
  "Nepal",
  "Bangladesh",
  "Kenya",
  "Nigeria",
  "South Africa",
];

export default function GlobalSupply() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-[1180px] px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-[#20C9EE]">
            Global Presence
          </p>

          <h2 className="mt-4 text-[44px] font-bold leading-tight text-[#111827]">
            Delivering Diagnostics
            <br />
            Across The World
          </h2>

          <p className="mx-auto mt-6 max-w-[680px] text-[16px] leading-8 text-[#6B7280]">
            GeneBio Healthcare partners with distributors, hospitals,
            laboratories and healthcare institutions across multiple
            countries, ensuring reliable access to high-quality diagnostic
            products.
          </p>

        </div>

        {/* World Map */}

        <div className="mt-16 overflow-hidden rounded-[32px] border border-[#E5E7EB] bg-[#F8FAFC] p-10">

          <img
            src={worldMap}
            alt="World Map"
            className="mx-auto w-full max-w-[980px]"
          />

        </div>

        {/* Countries */}

        <div className="mt-16 flex flex-wrap justify-center gap-4">

          {countries.map((country) => (
            <span
              key={country}
              className="rounded-full border border-[#D6EAF2] bg-[#F5FCFE] px-6 py-3 text-[14px] font-medium text-[#0F172A]"
            >
              {country}
            </span>
          ))}

        </div>

        {/* Stats */}

        <div className="mt-20 grid gap-10 text-center md:grid-cols-3">

          <div>
            <h3 className="text-[52px] font-bold text-[#20C9EE]">50+</h3>
            <p className="mt-2 text-[#6B7280]">Countries Served</p>
          </div>

          <div>
            <h3 className="text-[52px] font-bold text-[#20C9EE]">100+</h3>
            <p className="mt-2 text-[#6B7280]">Distribution Partners</p>
          </div>

          <div>
            <h3 className="text-[52px] font-bold text-[#20C9EE]">24/7</h3>
            <p className="mt-2 text-[#6B7280]">
              Customer & Technical Support
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}