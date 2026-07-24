import Navbar from "./Navbar";
import heroVideo from "../assets/videos/hero-video.mov";

const HeroSection = () => {
  return (
    <section className="relative h-[100vh] min-h-[650px] max-h-[824px] overflow-hidden bg-[#00141d]">

      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#00131e]/60 via-[#00131e]/20 to-transparent" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1180px] items-center px-5 md:px-6 lg:px-8">
        <div className="mt-16 max-w-[500px]">

          {/* Small Label */}
          <div className="mb-6 inline-flex rounded-full border border-[#10c8e8]/30 bg-[#032a35]/50 px-4 py-1.5">
            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#36d8f4]">
              Next-Gen Diagnostics
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[38px] font-bold leading-[1.15] tracking-[-0.02em] text-white md:text-[48px] lg:text-[54px]">
            Innovating Health
            <br />
            Solutions,
            <br />

            <span className="text-[#20c9ee]">
              Transforming Lives.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[450px] text-[13px] leading-[1.8] text-white/70 md:text-[14px]">
            Precision biotechnology meets clinical excellence. We engineer
            the world's most reliable rapid diagnostic solutions for global
            health security.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-[7px] bg-[#20c9ee] px-7 py-3 text-[11px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#10b9dc]"
            >
              Explore Solutions
            </a>

            <a
              href="#certifications"
              className="inline-flex items-center justify-center rounded-[7px] border border-[#20c9ee] bg-transparent px-7 py-3 text-[11px] font-semibold text-white transition-all duration-300 hover:bg-[#20c9ee]"
            >
              Our Certifications
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;