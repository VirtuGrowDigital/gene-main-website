import Navbar from "./Navbar";
import heroBg from "../assets/images/hero-bg.png";
import heroBgMobile from "../assets/images/home-bg-mobile.png";

export default function EventsHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Desktop Background */}

      <img
        src={heroBg}
        alt="Events Hero"
        className="absolute inset-0 hidden h-full w-full object-cover lg:block"
      />

      {/* Mobile Background */}

      <img
        src={heroBgMobile}
        alt="Events Hero"
        className="absolute inset-0 h-full w-full object-cover object-center lg:hidden"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#03141E]/95 via-[#06374A]/75 to-transparent lg:from-[#03141E]/95 lg:via-[#06374A]/75 lg:to-transparent" />

      {/* Glow */}

      <div className="absolute -right-16 top-20 h-[280px] w-[280px] rounded-full bg-[#2CC8FF]/15 blur-[120px] lg:right-10 lg:top-10 lg:h-[500px] lg:w-[500px] lg:blur-[170px]" />

      <div className="relative z-20">
        {/* Navbar */}

        <div className="pt-8">
          <Navbar />
        </div>

        {/* Hero */}

        <div className="mx-auto flex min-h-[720px] max-w-[1180px] items-center px-5 pt-24 md:px-6 md:pt-28 lg:px-8 lg:pt-0">
          <div className="max-w-[520px]">
            {/* Heading */}

            <h1 className="text-[38px] font-bold leading-[1.1] tracking-[-0.03em] text-white md:text-[50px] lg:text-[62px]">
              Meet GeneBio
              <br />
              <span className="text-[#2CC8FF]">
                Around the World
              </span>
            </h1>

            {/* Description */}

            <p className="mt-6 text-[15px] leading-7 text-white/75 md:text-[16px] lg:mt-8 lg:text-[17px] lg:leading-8">
              Witness the convergence of medical precision and technological
              innovation. Join us at the world's leading healthcare
              conferences, exhibitions and scientific summits.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:mt-10">
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