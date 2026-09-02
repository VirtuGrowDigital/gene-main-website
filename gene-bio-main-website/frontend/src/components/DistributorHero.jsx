import Navbar from "./Navbar";
import heroBg from "../assets/images/hero-bg.png";
import heroBgMobile from "../assets/images/home-bg-mobile.png";

export default function DistributorHero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}
      <img
        src={heroBg}
        alt="Hero Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Background */}
<img
  src={heroBgMobile}
  alt="Hero Background"
  className="absolute inset-0 h-full w-full object-cover"
/>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00131e]/90 via-[#00131e]/55 to-[#0AA9E6]/25 lg:from-[#00131e]/70 lg:via-[#00131e]/45 lg:to-[#0AA9E6]/20" />

      {/* Glow Effects */}
      <div className="absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-[#00BFFF]/20 blur-[140px]" />
      <div className="absolute right-0 top-0 hidden h-full w-[45%] bg-gradient-to-l from-[#2CC5F5]/20 to-transparent lg:block" />

      {/* Content */}
      <div className="relative z-20">

        {/* Navbar */}
        <div className="pt-8">
          <Navbar />
        </div>

        {/* Hero */}
        <div className="mx-auto flex min-h-[760px] max-w-[1180px] flex-col items-center justify-center px-5 pt-20 text-center md:pt-24 lg:pt-28">

          {/* Badge */}
          <div className="rounded-full border border-white/20 bg-white/10 px-6 py-2 mt-16 text-[12px] font-medium uppercase tracking-[0.25em] text-[#7BD9FF] backdrop-blur-md">
            Global Partnership Program
          </div>

          {/* Heading */}
          <h1 className="mt-8 max-w-[920px] text-[42px] font-bold leading-[1.15] tracking-[-0.02em] text-white md:text-[56px] lg:text-[68px]">
            Become a GeneBio
            <br />
            <span className="text-[#28C2F6]">
              Distribution Partner
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-[760px] text-[17px] leading-8 text-white/80">
            Join our growing network of healthcare distributors and deliver
            world-class diagnostic solutions across your region with trusted
            manufacturing, regulatory support, and reliable supply.
          </p>

          {/* Buttons */}
          {/* <div className="mt-10 flex flex-wrap justify-center gap-5">

            <button className="rounded-xl bg-[#28C2F6] px-8 py-4 text-[16px] font-semibold text-white transition hover:bg-[#13AFE6]">
              Apply Now
            </button>

            <button className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-[16px] font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
              Contact Team
            </button>

          </div> */}

          {/* Stats */}
          <div className="mt-20 grid w-full max-w-[980px] grid-cols-2 gap-8 border-t border-white/15 pt-10 md:grid-cols-4">

            <div>
              <h3 className="text-[34px] font-bold text-white">45+</h3>
              <p className="mt-2 text-[13px] uppercase tracking-[0.12em] text-white/60">
                Countries Served
              </p>
            </div>

            <div>
              <h3 className="text-[34px] font-bold text-white">99.8%</h3>
              <p className="mt-2 text-[13px] uppercase tracking-[0.12em] text-white/60">
                Supply Accuracy
              </p>
            </div>

            <div>
              <h3 className="text-[34px] font-bold text-white">ISO</h3>
              <p className="mt-2 text-[13px] uppercase tracking-[0.12em] text-white/60">
                Certified Quality
              </p>
            </div>

            <div>
              <h3 className="text-[34px] font-bold text-white">24/7</h3>
              <p className="mt-2 text-[13px] uppercase tracking-[0.12em] text-white/60">
                Partner Support
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}