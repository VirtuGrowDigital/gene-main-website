import Navbar from "./Navbar";
import heroVideo from "../assets/videos/hero-video.mov";
import mobileHeroBg from "../assets/images/home-bg-mobile.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#00141d] lg:h-[100vh] lg:min-h-[650px] lg:max-h-[824px]">
      {/* ========================= */}
      {/* Desktop Background Video */}
      {/* ========================= */}
      <video
        className="absolute inset-0 hidden h-full w-full object-cover lg:block"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* ========================= */}
      {/* Mobile Background Image */}
      {/* ========================= */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
        style={{
          backgroundImage: `url(${mobileHeroBg})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#00131e]/80 via-[#00131e]/45 to-[#00131e]/20 lg:bg-gradient-to-r lg:from-[#00131e]/60 lg:via-[#00131e]/20 lg:to-transparent" />

      {/* Navbar */}
      <Navbar />

      {/* ========================= */}
      {/* Hero Content */}
      {/* ========================= */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1180px] items-start px-6 pt-48 pb-12 md:px-8 lg:h-full lg:items-center lg:px-8 lg:pt-0 lg:pb-0">
        <div className="w-full max-w-[520px]">
          {/* Label */}
          <div className="mb-5 inline-flex rounded-full border border-[#10c8e8]/30 bg-[#032a35]/60 px-4 py-2 backdrop-blur-md">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#36d8f4]">
              Next-Gen Diagnostics
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[42px] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[46px] md:text-[50px] lg:text-[54px]">
            Innovating Health
            <br />
            Solutions,
            <br />
            <span className="text-[#20c9ee]">
              Transforming
              <br className="lg:hidden" /> Lives.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[420px] text-[14px] leading-7 text-white/75 md:text-[15px] lg:max-w-[450px] lg:text-[14px] lg:leading-[1.8]">
            Precision biotechnology meets clinical excellence. We engineer
            the world's most reliable rapid diagnostic solutions.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:flex-row">
            <a
              href="#products"
              className="flex h-[54px] w-full items-center justify-center rounded-full bg-[#20c9ee] text-[14px] font-semibold text-[#00141d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#10b9dc] lg:h-auto lg:w-auto lg:rounded-[8px] lg:px-7 lg:py-3 lg:text-[11px] lg:text-white"
            >
              Explore Solutions
            </a>

            <a
              href="#certifications"
              className="flex h-[54px] w-full items-center justify-center rounded-full border border-white/40 bg-transparent text-[14px] font-semibold text-white transition-all duration-300 hover:border-[#20c9ee] hover:bg-[#20c9ee] lg:h-auto lg:w-auto lg:rounded-[8px] lg:border-[#20c9ee] lg:px-7 lg:py-3 lg:text-[11px]"
            >
              Our Certifications
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#00141d] to-transparent lg:hidden" />
    </section>
  );
};

export default HeroSection;