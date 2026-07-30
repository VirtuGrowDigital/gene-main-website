import heroBg from "../assets/images/hero-bg.png";
import heroBgMobile from "../assets/images/home-bg-mobile.png";
import productCatalogue from "../assets/images/GeneBio Healthcare Products_20240930_134047_0000.pdf";

export default function ProductHero() {
  return (
    <section className="relative h-[78vh] min-h-[720px] overflow-hidden bg-[#00141d] lg:h-[100vh] lg:min-h-[650px] lg:max-h-[824px]">
      {/* Background */}
      <img
        src={heroBg}
        alt="Products Hero"
        className="absolute inset-0 h-full w-full object-cover object-[72%_center] lg:object-center"
      />

<img
  src={heroBgMobile}
  alt="Products Hero"
  className="absolute inset-0 h-full w-full object-cover lg:hidden"
/>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00131e]/85 via-[#00131e]/45 to-transparent lg:from-[#00131e]/60 lg:via-[#00131e]/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1180px] items-center px-6 md:px-6 lg:px-8">
        <div className="mt-28 max-w-[340px] lg:mt-16 lg:max-w-[500px]">

          {/* Label */}
          <div className="mb-5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#20C9EE]">
              Future of Diagnostics
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[32px] font-bold leading-[1.1] tracking-[-0.03em] text-white md:text-[48px] lg:text-[54px]">
            Precision Diagnostic
            <br />
            <span className="text-[#20C9EE]">
              Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[320px] text-[16px] leading-8 text-white/70 lg:max-w-[450px] lg:text-[14px] lg:leading-[1.8]">
            Leveraging advanced bio-engineering and digital integration to
            deliver clinical confidence at the point of care through
            innovative diagnostic technologies trusted worldwide.
          </p>

          {/* Button */}
          <div className="mt-10">
          <a
  href={productCatalogue}
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-14 w-full items-center justify-center rounded-full bg-[#20C9EE] text-[16px] font-semibold text-[#00141d] transition hover:bg-[#14B8E5] lg:inline-flex lg:h-auto lg:w-auto lg:rounded-[7px] lg:px-7 lg:py-3 lg:text-[11px] lg:text-white"
>
  Explore Portfolio
</a>
          </div>

        </div>
      </div>
    </section>
  );
}