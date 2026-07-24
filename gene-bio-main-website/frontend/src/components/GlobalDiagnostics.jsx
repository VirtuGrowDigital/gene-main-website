import React from "react";
import worldMap from "../assets/images/world.svg";

const GlobalDiagnostics = () => {
  return (
    <section className="w-full bg-[#F2F4F4] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-6 lg:px-8">

        {/* ================= HEADING ================= */}
        <div className="mb-8 text-center">
          <h2 className="text-[28px] font-bold leading-tight text-[#191C1D] sm:text-[34px] lg:text-[40px]">
            Global Diagnostics Infrastructure
          </h2>

          <p className="mx-auto mt-3 max-w-[650px] text-[12px] leading-[1.6] text-[#3D4949] sm:text-[13px] lg:text-[14px]">
            We bridge borders to ensure equitable access to high-fidelity
            diagnostic tools across six continents.
          </p>
        </div>

        {/* ================= MAP CONTAINER ================= */}
        <div className="relative w-full overflow-hidden rounded-[24px] bg-white">

          {/* World Map Background */}
          <img
            src={worldMap}
            alt="Global Diagnostics Infrastructure"
            className="block h-auto min-h-[350px] w-full object-cover sm:min-h-[450px] lg:min-h-[520px]"
          />

          {/* ================= EMEA REGION ================= */}
          <div className="absolute right-[4%] top-[14%] rounded-[10px] bg-white px-3 py-2 shadow-md sm:px-4 sm:py-3">
            <div className="flex items-center gap-2">
              <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-green-500" />

              <span className="whitespace-nowrap text-[10px] font-semibold text-[#191C1D] sm:text-[11px] lg:text-[12px]">
                EMEA Region
              </span>
            </div>

            <p className="mt-1 whitespace-nowrap text-[8px] text-[#5D6668] sm:text-[9px] lg:text-[10px]">
              42 Logistical Hubs Active
            </p>
          </div>

          {/* ================= APAC REGION ================= */}
          <div className="absolute bottom-[14%] left-[4%] rounded-[10px] bg-white px-3 py-2 shadow-md sm:px-4 sm:py-3">
            <div className="flex items-center gap-2">
              <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-[#21CAFF]" />

              <span className="whitespace-nowrap text-[10px] font-semibold text-[#191C1D] sm:text-[11px] lg:text-[12px]">
                APAC Region
              </span>
            </div>

            <p className="mt-1 whitespace-nowrap text-[8px] text-[#5D6668] sm:text-[9px] lg:text-[10px]">
              Direct Supply Chain Established
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalDiagnostics;