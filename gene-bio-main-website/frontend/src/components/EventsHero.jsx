import Navbar from "./Navbar";

import heroBg from "../assets/images/hero-bg.png"; // DNA hero image

export default function EventsHero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}

      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#03141E]/95 via-[#06374A]/75 to-transparent" />

      {/* Glow */}

      <div className="absolute right-10 top-10 h-[500px] w-[500px] rounded-full bg-[#2CC8FF]/15 blur-[170px]" />

      <div className="relative z-20">

        <div className="pt-8">
          <Navbar />
        </div>

        <div className="mx-auto flex min-h-[720px] max-w-[1180px] items-center px-5">

          <div className="max-w-[520px]">

            <h1 className="text-[62px] font-bold leading-[1.05] tracking-[-0.03em] text-white">
              Meet GeneBio
              <br />
              <span className="text-[#2CC8FF]">
                Around the World
              </span>
            </h1>

            <p className="mt-8 text-[17px] leading-8 text-white/75">
              Witness the convergence of medical precision and
              technological innovation. Join us at the world's
              leading healthcare conferences, exhibitions and
              scientific summits.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="rounded-xl bg-[#2CC8FF] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:bg-[#18B5EA]">
                Explore 2026 Schedule
              </button>

              <button className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15">
                Explore Gallery
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}