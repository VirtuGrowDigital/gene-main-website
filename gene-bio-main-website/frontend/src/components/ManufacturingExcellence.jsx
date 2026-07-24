import manufacturingBg from "../assets/images/manufacturing-facility.png";
import manufacturingGradient from "../assets/images/manufacturing-gradient.png";

import automatedLinesIcon from "../assets/icons/automated-lines.png";
import sigmaQualityIcon from "../assets/icons/sigma-quality.png";
import ecoCertifiedIcon from "../assets/icons/eco-certified.png";

const features = [
  {
    icon: automatedLinesIcon,
    title: "Automated Lines",
    description:
      "Precision robotics ensuring zero-deviation assembly across all product tiers.",
  },
  {
    icon: sigmaQualityIcon,
    title: "6-Sigma Quality",
    description:
      "Exceeding standard clinical requirements with redundant quality checks.",
  },
  {
    icon: ecoCertifiedIcon,
    title: "Eco-Certified",
    description:
      "Sustainable manufacturing practices reducing clinical waste footprints.",
  },
];

const ManufacturingExcellence = () => {
  return (
    <section className="relative min-h-[620px] w-full overflow-hidden bg-black font-[Poppins]">
      {/* ========================================
          LAYER 1 - MANUFACTURING BACKGROUND IMAGE
      ======================================== */}
      <img
        src={manufacturingBg}
        alt="GeneBio manufacturing facility"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      {/* ========================================
          LAYER 2 - GRADIENT OVERLAY IMAGE
      ======================================== */}
      <img
        src={manufacturingGradient}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] h-full w-full object-cover"
      />

      {/* ========================================
          LAYER 3 - CONTENT
      ======================================== */}
      <div className="relative z-10 mx-auto flex min-h-[620px] w-full max-w-[1180px] flex-col px-5 py-12 sm:px-6 md:py-14 lg:px-8">
        {/* ========================================
            HEADING AREA
        ======================================== */}
        <div className="text-center">
          {/* Small Label */}
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[#16C7F3] sm:text-[12px] md:text-[13px]">
            Factory of the Future
          </p>

          {/* Main Heading */}
          <h2 className="text-[38px] font-bold leading-[1.05] text-white sm:text-[44px] md:text-[52px] lg:text-[58px]">
            Uncompromising
            <br />
            <span className="text-[#13C4F3]">Scalability.</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-[850px] text-[13px] font-normal leading-[1.7] text-white/80 sm:text-[14px] md:mt-7 md:text-[15px]">
            Our WHO GMP-certified manufacturing hubs utilize robotic automation
            and AI quality inspection to
            <br className="hidden md:block" />
            deliver 1,000,000+ tests daily without error.
          </p>
        </div>

        {/* ========================================
            FEATURE CARDS
        ======================================== */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[24px] bg-[#073C43]/90 px-7 py-8 backdrop-blur-[3px] md:px-8 md:py-9"
            >
              {/* Custom Figma Icon */}
              <img
                src={feature.icon}
                alt=""
                aria-hidden="true"
                className="mb-5 h-[32px] w-[32px] object-contain"
              />

              {/* Card Title */}
              <h3 className="mb-3 text-[19px] font-medium text-white md:text-[21px]">
                {feature.title}
              </h3>

              {/* Card Description */}
              <p className="max-w-[290px] text-[14px] font-normal leading-[1.6] text-white/75 md:text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingExcellence;