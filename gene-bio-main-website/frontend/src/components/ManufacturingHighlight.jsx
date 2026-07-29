import { ArrowRight } from "lucide-react";
import labImage from "../assets/images/manufacturing-room.png";

export default function ManufacturingHighlight() {
  return (
    <section className="bg-[#F7F8FA] py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-5 md:px-6 lg:grid-cols-[540px_1fr] lg:gap-14">
        {/* Left Image */}

        <div className="relative">
          <img
            src={labImage}
            alt="Manufacturing Facility"
            className="h-[320px] w-full rounded-[24px] object-cover shadow-xl sm:h-[420px] lg:h-[470px] lg:rounded-[36px]"
          />

          {/* Floating Card */}

          <div className="absolute bottom-4 right-4 rounded-[18px] bg-white px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.18)] lg:-bottom-8 lg:right-8 lg:rounded-[24px] lg:px-8 lg:py-6">
            <h3 className="text-[36px] font-bold leading-none text-[#28BDF4] lg:text-[54px]">
              99.9%
            </h3>

            <p className="mt-2 text-[13px] font-medium text-[#666] lg:text-[14px]">
              Quality Accuracy
            </p>
          </div>
        </div>

        {/* Right */}

        <div>
          <h2 className="max-w-[520px] text-[36px] font-bold leading-[1.08] tracking-[-0.03em] text-[#202020] md:text-[46px] lg:text-[54px]">
            Manufacturing
            <br />
            Excellence at
            <br />
            Global Scale
          </h2>

          <p className="mt-6 max-w-[520px] text-[15px] leading-7 text-[#666] lg:mt-8 lg:text-[16px] lg:leading-8">
            At GeneBio Healthcare, we don't just supply—we innovate.
            Our manufacturing facilities are engineered for consistent,
            large-scale production while maintaining the highest
            clinical precision and regulatory compliance.
          </p>

          {/* Two Columns */}

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-12">
            <div>
              <h3 className="text-[28px] font-bold text-[#28BDF4] lg:text-[34px]">
                ISO 13485
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-[#666]">
                Certified Quality Management Systems for medical devices.
              </p>
            </div>

            <div>
              <h3 className="text-[28px] font-bold text-[#28BDF4] lg:text-[34px]">
                WHO-GMP
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-[#666]">
                Good Manufacturing Practices ensuring global compliance.
              </p>
            </div>
          </div>

          <button className="mt-10 inline-flex items-center gap-2 font-semibold text-[#28BDF4] transition-all hover:gap-3">
            Learn about our process
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}