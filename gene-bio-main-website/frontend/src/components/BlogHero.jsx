import Navbar from "./Navbar";
import heroBg from "../assets/images/hero-bg.png";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}

      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 " />

      {/* Glow */}

      <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-[#27BDF3]/20 blur-[170px]" />

      <div className="relative z-20">

        <div className="pt-8">
          <Navbar />
        </div>

        <div className="mx-auto flex min-h-[700px] max-w-[1180px] flex-col justify-center px-5">

          <div className="inline-flex w-fit rounded-full bg-[#2CBDF5]/20 px-5 py-2">

            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7DD8FF]">
              Perspectives & Breakthroughs
            </span>

          </div>

          <h1 className="mt-8 max-w-[720px] text-[66px] font-bold leading-[1.05] tracking-[-0.03em] text-white">
            Healthcare Insights
            <br />
            & Industry Updates
          </h1>

          <p className="mt-8 max-w-[560px] text-[18px] leading-9 text-white/80">
            Exploring the intersection of molecular diagnostics,
            clinical innovation and the global transformation
            of precision medicine.
          </p>

          <button className="mt-10 w-fit rounded-xl bg-[#2CBDF5] px-8 py-4 font-semibold text-white shadow-lg">
            Explore Latest News
          </button>

        </div>

      </div>

    </section>
  );
}