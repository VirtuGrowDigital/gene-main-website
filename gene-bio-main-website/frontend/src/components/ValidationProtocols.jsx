import {
    ArrowUpRight,
    ScanSearch,
    Snowflake,
    Globe2,
  } from "lucide-react";
  
  import labImage from "../assets/images/Lab Testing.png";
  
  export default function ValidationProtocols() {
    return (
      <section className="bg-[#F4F6F6] py-28">
        <div className="mx-auto max-w-[1180px] px-6">
  
          {/* Heading */}
  
          <div className="text-center">
            <h2 className="text-[54px] font-bold text-[#20C9EE]">
              Rigorous Validation Protocols
            </h2>
  
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#666]">
              Every GeneBio diagnostic solution undergoes a comprehensive
              multi-stage validation process before reaching laboratories
              and healthcare facilities worldwide.
            </p>
          </div>
  
          {/* Grid */}
  
          <div className="mt-20 grid grid-cols-12 gap-7">
  
            {/* Large Card */}
  
            <div className="col-span-12 lg:col-span-8 rounded-[30px] bg-white p-8 shadow-sm">
  
              <div className="mb-6 flex items-center justify-between">
  
                <span className="rounded-full bg-[#EAF9FE] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#20C9EE]">
                  Phase 01
                </span>
  
                <ArrowUpRight className="text-[#20C9EE]" size={18} />
              </div>
  
              <h3 className="max-w-md text-[36px] font-bold leading-tight text-[#2D2D2D]">
                Microbiological
                <br />
                Efficacy Testing
              </h3>
  
              <p className="mt-4 max-w-lg text-[15px] leading-7 text-[#666]">
                Independent laboratory verification confirms sensitivity,
                specificity and repeatability across multiple environmental
                conditions before commercial release.
              </p>
  
              <img
                src={labImage}
                alt=""
                className="mt-8 h-[320px] w-full rounded-[24px] object-cover"
              />
  
            </div>
  
            {/* Blue Card */}
  
            <div className="col-span-12 lg:col-span-4 rounded-[30px] bg-[#1FC4F6] p-8 text-white">
  
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
                <ScanSearch size={28} />
              </div>
  
              <h3 className="mt-10 text-[32px] font-bold leading-tight">
                Real-time
                <br />
                Batch Tracking
              </h3>
  
              <p className="mt-5 text-[15px] leading-7 text-white/85">
                AI-driven production monitoring ensures complete traceability
                throughout manufacturing and packaging.
              </p>
  
            </div>
  
            {/* White Card */}
  
            <div className="col-span-12 lg:col-span-6 rounded-[30px] bg-white p-8 shadow-sm">
  
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECF9FF]">
                <Snowflake
                  className="text-[#20C9EE]"
                  size={26}
                />
              </div>
  
              <h3 className="mt-8 text-[30px] font-bold text-[#2D2D2D]">
                Cold Chain
                <br />
                Validation
              </h3>
  
              <p className="mt-4 text-[15px] leading-7 text-[#666]">
                Temperature stability studies validate storage and transport
                integrity under diverse climatic conditions.
              </p>
  
            </div>
  
            {/* Mint Card */}
  
            <div className="col-span-12 lg:col-span-6 rounded-[30px] bg-[#DDF4F2] p-8">
  
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
                <Globe2
                  className="text-[#20C9EE]"
                  size={26}
                />
              </div>
  
              <h3 className="mt-8 text-[30px] font-bold text-[#2D2D2D]">
                Global Pharmacopoeia
                <br />
                Compliance
              </h3>
  
              <p className="mt-4 text-[15px] leading-7 text-[#555]">
                Every formulation is benchmarked against internationally
                accepted pharmacopoeial standards before approval.
              </p>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }