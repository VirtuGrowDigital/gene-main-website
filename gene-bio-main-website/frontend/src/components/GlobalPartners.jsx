import React from "react";

const GlobalPartners = () => {
  return (
    <section className="w-full bg-[#0A2020] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-5 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">

        {/* Left */}
        <div>
          <h2 className="text-[26px] font-medium text-white sm:text-[30px]">
            Global Health.
          </h2>

          <div className="mt-7 border-l-2 border-[#21CAFF] pl-5">
            <p className="max-w-[480px] text-[13px] italic leading-[1.8] text-white/75 sm:text-[14px]">
              "Bringing health and happiness to the world, one insightful diagnosis at a time-from Bangalore to Berlin."
            </p>

           
          </div>

          <p className="mt-10 max-w-[430px] text-[12px] italic leading-[1.7] text-white/30">
            The supply chain reliability of GeneBio has been a
            game-changer for our hospital network distribution across Asia.
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center">
          <div className="w-full rounded-[24px] border border-white/5 bg-black/20 px-8 py-12 text-center">
            <p className="text-[14px] font-semibold text-[#21CAFF]">
              98%
            </p>

            <p className="mt-2 text-[13px] font-medium text-white">
              Client Retention Rate
            </p>

            <div className="mx-auto mt-5 h-px w-[60px] bg-white/10" />

            <p className="mx-auto mt-5 max-w-[360px] text-[10px] leading-[1.6] text-white/45">
              Over 1,200 organizations trust GeneBio for critical clinical
              supply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPartners;