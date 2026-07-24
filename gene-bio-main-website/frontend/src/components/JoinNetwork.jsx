export default function JoinNetwork() {
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1180px] px-5">
  
          <div className="relative overflow-hidden rounded-[34px] bg-gradient-to-r from-[#2E3131] via-[#2F3132] to-[#305866] px-[58px] py-[64px]">
  
            {/* Background Decoration */}
  
            <div className="absolute -right-12 -top-12 h-[260px] w-[260px] rounded-full border border-white/5" />
            <div className="absolute -right-20 bottom-0 h-[320px] w-[320px] rounded-full border border-white/5" />
  
            <div className="relative flex items-center justify-between">
  
              {/* Left */}
  
              <div className="max-w-[420px]">
  
                <h2 className="text-[56px] font-medium leading-[1.05] tracking-[-0.03em] text-white">
                  Join Our Global
                  <br />
                  Network
                </h2>
  
                <p className="mt-7 text-[18px] leading-8 text-white/75">
                  Become a certified GeneBio Healthcare partner and
                  help us deliver the next generation of clinical
                  excellence to your region.
                </p>
  
              </div>
  
              {/* Right */}
  
              <div className="flex items-center gap-5">
  
                <button className="h-[60px] rounded-full bg-[#22BDF4] px-10 text-[16px] font-medium text-white transition duration-300 hover:scale-[1.02]">
                  Apply for Partnership
                </button>
  
                <button className="h-[60px] rounded-full border border-white/40 px-10 text-[16px] font-medium text-white transition duration-300 hover:bg-white hover:text-[#2F3132]">
                  Download Prospectus
                </button>
  
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }