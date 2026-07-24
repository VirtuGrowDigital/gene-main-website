import { ArrowRight } from "lucide-react";
import labImage from "../assets/images/manufacturing-room.png"; // Use your image

export default function ManufacturingHighlight() {
  return (
    <section className="bg-[#F7F8FA] py-24">
      <div className="mx-auto grid max-w-[1180px] items-center gap-14 px-5 lg:grid-cols-[540px_1fr]">

        {/* Left Image */}

        <div className="relative">

          <img
            src={labImage}
            alt=""
            className="h-[470px] w-full rounded-[36px] object-cover shadow-xl"
          />

          {/* Floating Card */}

          <div className="absolute -bottom-8 right-8 opacity-80 rounded-[24px] bg-white px-8 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">

            <h3 className="text-[54px] font-bold leading-none text-[#28BDF4]">
              99.9%
            </h3>

            <p className="mt-2 text-[14px] font-medium text-[#666]">
              Quality Accuracy
            </p>

          </div>

        </div>

        {/* Right */}

        <div>

          <h2 className="max-w-[520px] text-[54px] font-bold leading-[1.05] tracking-[-0.03em] text-[#202020]">
            Manufacturing
            <br />
            Excellence at
            <br />
            Global Scale
          </h2>

          <p className="mt-8 max-w-[520px] text-[16px] leading-8 text-[#666]">
            At GeneBio Healthcare, we don't just supply—we innovate.
            Our manufacturing facilities are engineered for consistent,
            large-scale production while maintaining the highest
            clinical precision and regulatory compliance.
          </p>

          {/* Two Columns */}

          <div className="mt-12 grid grid-cols-2 gap-8">

            <div>

              <h3 className="text-[34px] font-bold text-[#28BDF4]">
                ISO 13485
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-[#666]">
                Certified Quality Management Systems for medical devices.
              </p>

            </div>

            <div>

              <h3 className="text-[34px] font-bold text-[#28BDF4]">
                WHO-GMP
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-[#666]">
                Good Manufacturing Practices ensuring global compliance.
              </p>

            </div>

          </div>

          <button className="mt-10 flex items-center gap-2 font-semibold text-[#28BDF4] transition hover:gap-3">

            Learn about our process

            <ArrowRight size={18} />

          </button>

        </div>

      </div>
    </section>
  );
}