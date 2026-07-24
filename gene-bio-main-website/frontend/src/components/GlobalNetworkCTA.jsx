export default function GlobalNetworkCTA() {
    return (
      <section className="py-24 bg-[#18A8E8] overflow-hidden relative">
  
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full border border-white" />
          <div className="absolute top-20 right-20 h-64 w-64 rounded-full border border-white" />
          <div className="absolute -bottom-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full border border-white" />
        </div>
  
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
  
          <p className="uppercase tracking-[4px] text-white/80 font-semibold text-sm mb-5">
            GLOBAL NETWORK
          </p>
  
          <h2 className="text-white font-bold text-[42px] lg:text-[60px] leading-tight">
            Trusted by Healthcare
            <br />
            Professionals Worldwide
          </h2>
  
          <p className="text-white/85 text-lg leading-8 max-w-3xl mx-auto mt-8">
            From hospitals and diagnostic laboratories to distributors and
            research institutions, GeneBio Healthcare continues to expand its
            global presence through innovation, quality and trust.
          </p>
  
          <div className="mt-14 flex flex-wrap justify-center gap-5">
  
            <button className="bg-white text-[#18A8E8] px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
              Become a Distributor
            </button>
  
            <button className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#18A8E8] transition">
              Contact Us
            </button>
  
          </div>
  
          {/* Stats */}
  
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
  
            <div>
              <h3 className="text-white text-5xl font-bold">120+</h3>
              <p className="text-white/80 mt-3">
                Countries
              </p>
            </div>
  
            <div>
              <h3 className="text-white text-5xl font-bold">500+</h3>
              <p className="text-white/80 mt-3">
                Distribution Partners
              </p>
            </div>
  
            <div>
              <h3 className="text-white text-5xl font-bold">1M+</h3>
              <p className="text-white/80 mt-3">
                Diagnostic Tests
              </p>
            </div>
  
            <div>
              <h3 className="text-white text-5xl font-bold">24×7</h3>
              <p className="text-white/80 mt-3">
                Technical Support
              </p>
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
  }