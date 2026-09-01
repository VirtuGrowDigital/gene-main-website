import React from "react";

const DistributorCTA = () => {
  return (
    <section className="w-full bg-[#21CAFF] px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-[850px] rounded-[32px] border border-white/20 bg-white/10 px-6 py-10 text-center sm:px-10 sm:py-12">

        <p className="text-[10px] font-medium text-white/70">
          Empower Your Facility.
        </p>

        <h2 className="mx-auto mt-4 max-w-[600px] text-[18px] font-medium leading-[1.5] text-white sm:text-[22px]">
          Join our global distribution network and bring world-class
          diagnostics to your community.
        </h2>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

          <button
            type="button"
            className="min-w-[170px] rounded-[10px] bg-white px-6 py-3 text-[11px] font-semibold text-[#191C1D] transition hover:bg-[#F2F4F4]"
          >
            Become a Distributor
          </button>

      

        </div>
      </div>
    </section>
  );
};

export default DistributorCTA;