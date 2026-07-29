import Navbar from "./Navbar";
import heroBg from "../assets/images/hero-bg.png";
import heroBgMobile from "../assets/images/home-bg-mobile.png";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Desktop Background */}

      <img
        src={heroBg}
        alt="Blog Hero"
        className="absolute inset-0 hidden h-full w-full object-cover lg:block"
      />

      {/* Mobile Background */}

      <img
        src={heroBgMobile}
        alt="Blog Hero"
        className="absolute inset-0 h-full w-full object-cover object-center lg:hidden"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#00131e]/90 via-[#00131e]/55 to-[#0AA9E6]/25 lg:from-[#00131e]/70 lg:via-[#00131e]/45 lg:to-transparent" />

      {/* Glow */}

      <div className="absolute -right-20 top-24 h-[280px] w-[280px] rounded-full bg-[#27BDF3]/20 blur-[120px] lg:right-0 lg:top-20 lg:h-[500px] lg:w-[500px] lg:blur-[170px]" />

      <div className="relative z-20">
        {/* Navbar */}

        <div className="pt-8">
          <Navbar />
        </div>

        {/* Hero */}

        <div className="mx-auto flex min-h-[700px] max-w-[1180px] flex-col justify-center px-5 pt-24 md:px-6 md:pt-28 lg:min-h-[700px] lg:px-8 lg:pt-0">
          {/* Badge */}

          <div className="inline-flex w-fit rounded-full bg-[#2CBDF5]/20 px-4 py-2 lg:px-5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7DD8FF] lg:text-[11px]">
              Perspectives &amp; Breakthroughs
            </span>
          </div>

          {/* Heading */}

          <h1 className="mt-6 max-w-[720px] text-[38px] font-bold leading-[1.1] tracking-[-0.03em] text-white md:text-[52px] lg:mt-8 lg:text-[66px]">
            Healthcare Insights
            <br />
            &amp; Industry Updates
          </h1>

          {/* Description */}

          <p className="mt-6 max-w-[560px] text-[15px] leading-7 text-white/80 md:text-[16px] lg:mt-8 lg:text-[18px] lg:leading-9">
            Exploring the intersection of molecular diagnostics,
            clinical innovation and the global transformation
            of precision medicine.
          </p>

          {/* Button */}

          <button className="mt-8 w-fit rounded-xl bg-[#2CBDF5] px-7 py-3 text-[15px] font-semibold text-white shadow-lg transition hover:bg-[#1BB4EC] lg:mt-10 lg:px-8 lg:py-4 lg:text-[16px]">
            Explore Latest News
          </button>
        </div>
      </div>
    </section>
  );
}