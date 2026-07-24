import { ArrowRight } from "lucide-react";

import mainImage from "../assets/images/manu.png";

export default function ManufacturingInfrastructure() {
  return (
    <section className="bg-[#F8F9FB] py-24">
      <div className="mx-auto max-w-[1180px] px-6">

        {/* Heading */}

        <div className="flex items-end justify-between">

          <div>

            <p className="text-[34px] font-semibold text-[#18B7F2]">
              Manufacturing Infrastructure
            </p>

            <p className="mt-3 text-[15px] text-[#666]">
              Precision engineering at molecular scale.
            </p>

          </div>

          <button className="flex items-center gap-2 text-[13px] font-medium text-[#18B7F2] transition hover:gap-3">
            Explore Units

            <ArrowRight size={16} />

          </button>

        </div>

        {/* Grid */}

        <div className="mt-12 grid grid-cols-[2fr_1fr] gap-8">

          {/* Large Card */}

          <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

            <img
              src={mainImage}
              alt=""
              className="h-[420px] w-full object-cover"
            />

            <div className="p-10">

              <h3 className="text-[34px] font-semibold text-[#161616]">
                Sterile Production Unit
              </h3>

              <p className="mt-4 max-w-[520px] text-[16px] leading-8 text-[#6B6B6B]">
                Class 10,000 clean rooms with automated assembly lines for
                rapid diagnostic production ensuring precision, scalability
                and regulatory compliance.
              </p>

            </div>

          </div>

          {/* Right Cards */}

          <div className="flex flex-col gap-8">

            <div className="rounded-[24px] bg-[#ECEFF3] p-8">

              <div className="mb-6 h-12 w-12 rounded-xl bg-[#D9F3FF]" />

              <h4 className="text-xl font-semibold text-[#1D1D1D]">
                ISO 13485 Certified
              </h4>

              <p className="mt-3 text-[15px] leading-7 text-[#6C6C6C]">
                Meeting the highest international standards for medical
                device manufacturing quality.
              </p>

            </div>

            <div className="rounded-[24px] bg-[#1FB9F1] p-8 text-white">

              <div className="mb-6 h-12 w-12 rounded-xl bg-white/20" />

              <h4 className="text-xl font-semibold">
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