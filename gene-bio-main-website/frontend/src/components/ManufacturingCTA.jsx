import { Link } from "react-router-dom";

export default function ManufacturingCTA() {
  return (
    <section className="relative overflow-hidden bg-[#18B7F2] py-24">

      {/* Background Circles */}

      <div className="absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-white/10" />

      <div className="absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full border border-white/10" />

      <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full border border-white/10" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        <p className="mb-5 text-sm font-semibold uppercase tracking-[4px] text-white/80">
          PARTNER WITH GENEBIO
        </p>

        <h2 className="text-5xl font-bold leading-tight text-white lg:text-6xl">
          Ready to Scale Your
          <br />
          Diagnostic Business?
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/90">
          Partner with GeneBio Healthcare for internationally certified
          diagnostic products backed by modern manufacturing, scientific
          innovation and a dependable global supply chain.
        </p>

        {/* Buttons */}

        <div className="mt-14 flex flex-wrap justify-center gap-5">

          {/* Become a Distributor */}

          <Link
            to="/partners/distributor"
            className="rounded-full bg-white px-8 py-4 font-semibold text-[#18B7F2] transition hover:scale-105"
          >
            Request Manufacturing Details
          </Link>

          {/* Products */}

          <Link
            to="/products"
            className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#18B7F2]"
          >
            Explore Products
          </Link>

        </div>

        {/* Stats */}

        <div className="mt-20 grid grid-cols-2 gap-10 lg:grid-cols-4">

          <div>
            <h3 className="text-5xl font-bold text-white">120+</h3>
            <p className="mt-3 text-white/80">
              Countries Served
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-white">25K+</h3>
            <p className="mt-3 text-white/80">
              Orders Delivered
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-white">99.9%</h3>
            <p className="mt-3 text-white/80">
              Quality Assurance
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-white">24×7</h3>
            <p className="mt-3 text-white/80">
              Technical Support
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}