import { Link } from "react-router-dom";

export default function GlobalNetworkCTA() {
  return (
    <section className="relative overflow-hidden bg-[#18A8E8] py-24">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full border border-white" />
        <div className="absolute right-20 top-20 h-64 w-64 rounded-full border border-white" />
        <div className="absolute -bottom-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full border border-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <p className="mb-5 text-sm font-semibold uppercase tracking-[4px] text-white/80">
          GLOBAL NETWORK
        </p>

        <h2 className="text-[42px] font-bold leading-tight text-white lg:text-[60px]">
          Trusted by Healthcare
          <br />
          Professionals Worldwide
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/85">
          From hospitals and diagnostic laboratories to distributors and
          research institutions, GeneBio Healthcare continues to expand its
          global presence through innovation, quality and trust.
        </p>

        {/* Buttons */}
        <div className="mt-14 flex flex-wrap justify-center gap-5">

          {/* Become Distributor */}
          <Link
            to="/partners/distributor"
            className="rounded-full bg-white px-8 py-4 font-semibold text-[#18A8E8] transition hover:scale-105"
          >
            Become a Distributor
          </Link>

          {/* Contact Us */}
          <Link
            to="/partners/bulk-pricing"
            className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#18A8E8]"
          >
            Contact Us
          </Link>

        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 lg:grid-cols-4">

          <div>
            <h3 className="text-5xl font-bold text-white">
              120+
            </h3>

            <p className="mt-3 text-white/80">
              Countries
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-white">
              500+
            </h3>

            <p className="mt-3 text-white/80">
              Distribution Partners
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-white">
              1M+
            </h3>

            <p className="mt-3 text-white/80">
              Diagnostic Tests
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-white">
              24×7
            </h3>

            <p className="mt-3 text-white/80">
              Technical Support
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}