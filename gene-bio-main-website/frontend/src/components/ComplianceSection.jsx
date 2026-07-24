import {
    BadgeCheck,
    ShieldCheck,
    Award,
    FileCheck,
  } from "lucide-react";
  
  export default function ComplianceSection() {
    const certifications = [
      "ISO 13485",
      "CE-IVD",
      "GMP Certified",
      "FDA Compliant",
      "WHO Standards",
      "RoHS",
    ];
  
    return (
      <section className="bg-[#F5F7F7] py-24">
        <div className="max-w-7xl mx-auto px-6">
  
          <div className="grid lg:grid-cols-2 gap-16 items-center">
  
            {/* Left */}
  
            <div>
  
              <p className="uppercase tracking-[4px] text-[#18B7F2] text-sm font-semibold mb-5">
                QUALITY & COMPLIANCE
              </p>
  
              <h2 className="text-[48px] font-bold leading-tight text-[#222]">
                Certified.
                <br />
                Trusted.
                <br />
                Globally Recognized.
              </h2>
  
              <p className="mt-8 text-[#666] text-lg leading-8">
                Every GeneBio manufacturing facility follows internationally
                accepted quality systems and regulatory standards to ensure
                every diagnostic product performs consistently across global
                healthcare markets.
              </p>
  
              {/* Certifications */}
  
              <div className="flex flex-wrap gap-4 mt-10">
                {certifications.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white border border-[#DDE8EC] px-5 py-3 text-[#18B7F2] font-semibold shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
  
            </div>
  
            {/* Right */}
  
            <div className="grid gap-6">
  
              <div className="bg-white rounded-[28px] p-8 shadow-sm border border-[#ECECEC]">
  
                <div className="w-16 h-16 rounded-2xl bg-[#EAF7FD] flex items-center justify-center mb-6">
                  <BadgeCheck className="text-[#18B7F2]" size={30} />
                </div>
  
                <h3 className="text-2xl font-bold text-[#222]">
                  ISO 13485 Certified
                </h3>
  
                <p className="mt-4 text-[#666] leading-8">
                  Quality management systems designed specifically for medical
                  device manufacturing.
                </p>
  
              </div>
  
              <div className="grid md:grid-cols-2 gap-6">
  
                <div className="bg-white rounded-[28px] p-8 shadow-sm border border-[#ECECEC]">
  
                  <div className="w-14 h-14 rounded-2xl bg-[#EAF7FD] flex items-center justify-center mb-5">
                    <ShieldCheck
                      className="text-[#18B7F2]"
                      size={28}
                    />
                  </div>
  
                  <h4 className="text-xl font-bold text-[#222]">
                    GMP
                  </h4>
  
                  <p className="mt-3 text-[#666] leading-7">
                    Pharmaceutical manufacturing compliance.
                  </p>
  
                </div>
  
                <div className="bg-white rounded-[28px] p-8 shadow-sm border border-[#ECECEC]">
  
                  <div className="w-14 h-14 rounded-2xl bg-[#EAF7FD] flex items-center justify-center mb-5">
                    <Award
                      className="text-[#18B7F2]"
                      size={28}
                    />
                  </div>
  
                  <h4 className="text-xl font-bold text-[#222]">
                    CE-IVD
                  </h4>
  
                  <p className="mt-3 text-[#666] leading-7">
                    European diagnostic compliance.
                  </p>
  
                </div>
  
              </div>
  
              <div className="bg-white rounded-[28px] p-8 shadow-sm border border-[#ECECEC]">
  
                <div className="w-16 h-16 rounded-2xl bg-[#EAF7FD] flex items-center justify-center mb-6">
                  <FileCheck className="text-[#18B7F2]" size={30} />
                </div>
  
                <h3 className="text-2xl font-bold text-[#222]">
                  Full Documentation
                </h3>
  
                <p className="mt-4 text-[#666] leading-8">
                  Every production batch is completely traceable with
                  manufacturing records, QC reports and validation
                  documentation.
                </p>
  
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }