import { CircleCheck } from "lucide-react";
import researchImage from "../assets/images/research-development.png";

const ResearchDevelopment = () => {
  const points = [
    "Proprietary Enzyme Engineering",
    "AI-Pathogen Prediction Modeling",
    "Sustainable Reagent Synthesis",
  ];

  return (
    <section className="w-full bg-[#F8FAFA] font-[Poppins]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-10 px-5 py-14 sm:px-6 md:flex-row md:gap-12 lg:gap-16 lg:px-8 lg:py-16">

        {/* LEFT - IMAGE */}
        <div className="w-full md:w-[46%]">
          <div className="overflow-hidden rounded-[24px]">
            <img
              src={researchImage}
              alt="GeneBio research and development scientist"
              className="h-[380px] w-full object-cover sm:h-[440px] md:h-[430px]"
            />
          </div>
        </div>

        {/* RIGHT - CONTENT */}
        <div className="w-full md:w-[54%]">

          {/* Small Label */}
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[#13BFF0] md:text-[12px]">
            Research & Development
          </p>

          {/* Heading */}
          <h2 className="max-w-[550px] text-[34px] font-bold leading-[1.12] text-[#17191A] sm:text-[40px] md:text-[44px] lg:text-[48px]">
            Where Biology Meets
            <br />
            Data Science.
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-[600px] text-[14px] font-normal leading-[1.7] text-[#4B5558] md:text-[15px]">
            Our R&amp;D centers in Geneva and Bangalore are redefining the
            boundaries of molecular diagnostics. By integrating AI-driven
            pathogen prediction with microfluidic hardware, we're building a
            future where disease detection happens at the speed of life.
          </p>

          {/* Feature Points */}
          <div className="mt-6 flex flex-col gap-3">
            {points.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3"
              >
                <CircleCheck
                  size={18}
                  strokeWidth={2.5}
                  className="shrink-0 text-[#13BFF0]"
                />

                <span className="text-[13px] font-semibold text-[#202426] md:text-[14px]">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Link */}
          <a
            href="#"
            className="mt-7 inline-block text-[12px] font-medium uppercase tracking-[0.05em] text-[#13BFF0] underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            Read Scientific White Papers
          </a>

        </div>
      </div>
    </section>
  );
};

export default ResearchDevelopment;