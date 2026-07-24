import React from "react";
import { Download } from "lucide-react";

const certifications = [
  {
    short: "GMP",
    title: "GMP Certified",
    description: "Good Manufacturing Practices",
  },
  {
    short: "ISO",
    title: "ISO 13485",
    description: "Quality Medical Devices",
  },
  {
    short: "IVD",
    title: "IVD Compliance",
    description: "EU Safety Standards",
  },
  {
    short: "ICMR",
    title: "Licensed Manufacturer",
    description: "Central Drugs Standard Control",
  },
];

const TrustCompliance = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-[28px] font-bold leading-tight text-[#191C1D] sm:text-[34px] lg:text-[40px]">
              Trust &amp; Compliance
            </h2>

            <p className="mt-2 text-[12px] text-[#5D6668] sm:text-[13px]">
              Validated by the world's most rigorous medical authorities.
            </p>
          </div>

          <button
            type="button"
            className="flex w-fit items-center gap-2 rounded-full bg-[#E9ECEC] px-5 py-3 text-[10px] font-semibold uppercase tracking-wide text-[#191C1D] transition hover:bg-[#DDE2E2]"
          >
            Download Certificates
            <Download size={14} strokeWidth={1.8} />
          </button>
        </div>

        {/* Certifications */}
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:mt-14">
          {certifications.map((item) => (
            <div
              key={item.short}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#F0F3F3]">
                <span className="text-[11px] font-semibold text-[#21CAFF]">
                  {item.short}
                </span>
              </div>

              <h3 className="mt-5 text-[13px] font-semibold text-[#191C1D]">
                {item.title}
              </h3>

              <p className="mt-2 text-[10px] leading-[1.5] text-[#5D6668]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustCompliance;