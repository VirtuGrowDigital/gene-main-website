import heroBg from "../assets/images/hero-bg.png";

export default function AboutHero() {
  return (
    <section className="relative h-[100vh] min-h-[650px] max-h-[824px] overflow-hidden bg-[#00141d]">
      {/* Background */}
      <img
        src={heroBg}
        alt="About Hero"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00131e]/60 via-[#00131e]/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1180px] items-center px-5 md:px-6 lg:px-8">
        <div className="mt-16 max-w-[500px]">

          {/* Label */}
          <div className="mb-6 inline-flex rounded-full border border-[#18B7F2]/30 bg-[#032a35]/50 px-4 py-1.5">
            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#36D8F4]">
              The Precision Standard
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[38px] font-bold leading-[1.15] tracking-[-0.02em] text-white md:text-[48px] lg:text-[54px]">
            Pioneering the Next
            <br />
            <span className="text-[#20C9EE]">
              Generation
            </span>{" "}
            of Diagnostics
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[450px] text-[13px] leading-[1.8] text-white/70 md:text-[14px]">
            At GeneBio, we bridge the gap between complex biotechnology and
            clinical accessibility, delivering molecular excellence at a
            global scale through innovation, precision, and scientific
            excellence.
          </p>

          {/* Button */}
          <div className="mt-7">
            <button className="inline-flex items-center justify-center rounded-[7px] bg-[#20C9EE] px-7 py-3 text-[11px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#10B9DC]">
              Explore Our Labs
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}