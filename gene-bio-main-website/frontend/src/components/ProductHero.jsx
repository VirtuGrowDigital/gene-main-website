import heroBg from "../assets/images/hero-bg.png";

export default function ProductHero() {
  return (
    <section className="relative h-[100vh] min-h-[650px] max-h-[824px] overflow-hidden bg-[#00141d]">
      {/* Background */}
      <img
        src={heroBg}
        alt="Products Hero"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00131e]/60 via-[#00131e]/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1180px] items-center px-5 md:px-6 lg:px-8">
        <div className="mt-16 max-w-[500px]">

          {/* Label */}
          <div className="mb-6 inline-flex rounded-full border border-[#20C9EE]/30 bg-[#032a35]/50 px-4 py-1.5">
            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#36D8F4]">
              Future of Diagnostics
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[38px] font-bold leading-[1.15] tracking-[-0.02em] text-white md:text-[48px] lg:text-[54px]">
            Precision Diagnostic
            <br />
            <span className="text-[#20C9EE]">
              Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[450px] text-[13px] leading-[1.8] text-white/70 md:text-[14px]">
            Leveraging advanced bio-engineering and digital integration to
            deliver clinical confidence at the point of care through
            innovative diagnostic technologies trusted worldwide.
          </p>

          {/* Button */}
          <div className="mt-7">
            <button className="inline-flex items-center justify-center rounded-[7px] bg-[#20C9EE] px-7 py-3 text-[11px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#10B9DC]">
              Explore Portfolio
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}