export default function JoinNetwork() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1180px] px-5 md:px-6">
        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-r from-[#2E3131] via-[#2F3132] to-[#305866] px-6 py-10 lg:rounded-[34px] lg:px-[58px] lg:py-[64px]">
          {/* Background Decoration */}

          <div className="absolute -right-12 -top-12 h-[180px] w-[180px] rounded-full border border-white/5 lg:h-[260px] lg:w-[260px]" />

          <div className="absolute -right-20 bottom-0 h-[220px] w-[220px] rounded-full border border-white/5 lg:h-[320px] lg:w-[320px]" />

          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            {/* Left */}

            <div className="max-w-[420px]">
              <h2 className="text-[36px] font-medium leading-[1.1] tracking-[-0.03em] text-white md:text-[46px] lg:text-[56px]">
                Join Our Global
                <br />
                Network
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-white/75 lg:mt-7 lg:text-[18px] lg:leading-8">
                Become a certified GeneBio Healthcare partner and help us
                deliver the next generation of clinical excellence to your
                region.
              </p>
            </div>

            {/* Right */}

            <div className="flex w-full flex-col gap-4 lg:w-auto lg:flex-row lg:items-center lg:gap-5">
              <button className="h-[54px] w-full rounded-full bg-[#22BDF4] px-8 text-[15px] font-medium text-white transition duration-300 hover:scale-[1.02] lg:h-[60px] lg:w-auto lg:px-10 lg:text-[16px]">
                Apply for Partnership
              </button>

              <button className="h-[54px] w-full rounded-full border border-white/40 px-8 text-[15px] font-medium text-white transition duration-300 hover:bg-white hover:text-[#2F3132] lg:h-[60px] lg:w-auto lg:px-10 lg:text-[16px]">
                Download Prospectus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}