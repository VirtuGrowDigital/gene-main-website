import { Link } from "react-router-dom";
import heroBg from "../assets/images/hero-bg.png";
import heroBgMobile from "../assets/images/home-bg-mobile.png";

export default function ManufacturingHero() {
  return (
    <section className="relative h-[100vh] min-h-[650px] max-h-[824px] overflow-hidden bg-[#00141d]">
      {/* Background */}
      <img
        src={heroBg}
        alt="Manufacturing"
        className="absolute inset-0 h-full w-full object-cover"
      />
       
       <img
  src={heroBgMobile}
  alt="Manufacturing"
  className="absolute inset-0 h-full w-full object-cover object-center lg:hidden"
/>


      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00131e]/85 via-[#00131e]/45 to-transparent lg:from-[#00131e]/60 lg:via-[#00131e]/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1180px] items-center px-5 md:px-6 lg:px-8">
        <div className="mt-16 max-w-[500px]">

          {/* Label */}
          <div className="mb-6 inline-flex rounded-full border border-[#18B7F2]/30 bg-[#032a35]/50 px-4 py-1.5">
            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#36D8F4]">
              Clinical Excellence
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[38px] font-bold leading-[1.15] tracking-[-0.02em] text-white md:text-[48px] lg:text-[54px]">
            The Future of
            <br />
            <span className="text-[#20C9EE]">
              Diagnostic Manufacturing
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[450px] text-[13px] leading-[1.8] text-white/70 md:text-[14px]">
            Precision-engineered diagnostics produced in world-class
            facilities. We bridge the gap between complex biotechnology
            and global healthcare accessibility.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-[7px] bg-[#20C9EE] px-7 py-3 text-[11px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#10B9DC]"
            >
              Explore Products
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-[7px] border border-[#20C9EE] bg-transparent px-7 py-3 text-[11px] font-semibold text-white transition-all duration-300 hover:bg-[#20C9EE]"
            >
              Compliance Reports
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}