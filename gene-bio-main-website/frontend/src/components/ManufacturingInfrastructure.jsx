import { ArrowRight } from "lucide-react";
import mainImage from "../assets/images/manu1.png";

export default function ManufacturingInfrastructure() {
  return (
    <section className="bg-[#F8F9FB] py-16 lg:py-24">
      <div className="mx-auto max-w-[1180px] px-5 md:px-6">
        {/* Heading */}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[30px] font-semibold leading-tight text-[#18B7F2] md:text-[34px]">
              Manufacturing Infrastructure
            </p>

            <p className="mt-3 text-[15px] text-[#666]">
              Precision engineering at molecular scale.
            </p>
          </div>

          <button className="inline-flex items-center gap-2 text-[13px] font-medium text-[#18B7F2] transition-all hover:gap-3">
            Explore Units
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Grid */}

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[2fr_1fr] lg:gap-8">
          {/* Large Card */}

          <div className="overflow-hidden rounded-[22px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] lg:rounded-[28px]">
            <img
              src={mainImage}
              alt="Manufacturing Infrastructure"
              className="h-[240px] w-full object-cover sm:h-[300px] lg:h-[420px]"
            />

            <div className="p-6 lg:p-10">
              <h3 className="text-[26px] font-semibold leading-tight text-[#161616] lg:text-[34px]">
                Sterile Production Unit
              </h3>

              <p className="mt-4 max-w-[520px] text-[15px] leading-7 text-[#6B6B6B] lg:text-[16px] lg:leading-8">
                Class 10,000 clean rooms with automated assembly lines for
                rapid diagnostic production ensuring precision, scalability
                and regulatory compliance.
              </p>
            </div>
          </div>

          {/* Right Cards */}

          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Card 1 */}

            <div className="rounded-[22px] bg-[#ECEFF3] p-6 lg:rounded-[24px] lg:p-8">
              <div className="mb-6 h-12 w-12 rounded-xl bg-[#D9F3FF]" />

              <h4 className="text-[22px] font-semibold text-[#1D1D1D] lg:text-xl">
                ISO 13485 Certified
              </h4>

              <p className="mt-3 text-[15px] leading-7 text-[#6C6C6C]">
                Meeting the highest international standards for medical
                device manufacturing quality.
              </p>
            </div>

            {/* Card 2 */}

            <div className="rounded-[22px] bg-[#1FB9F1] p-6 text-white lg:rounded-[24px] lg:p-8">
              <div className="mb-6 h-12 w-12 rounded-xl bg-white/20" />

              <h4 className="text-[22px] font-semibold lg:text-xl">
                High-Throughput Lines
              </h4>

              <p className="mt-3 text-[15px] leading-7 text-white/90">
                Production infrastructure capable of supplying over
                100 million diagnostic kits annually.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}