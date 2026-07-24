import {
    BriefcaseBusiness,
    Building2,
    BadgeCheck,
    ShieldCheck,
    ClipboardCheck,
    ArrowUpRight,
  } from "lucide-react";
  
  const credentials = [
    {
      icon: BriefcaseBusiness,
      title: "ISO 13485:2016",
      description:
        "Medical Devices Quality Management Systems - Requirements for Regulatory Purposes.",
    },
    {
      icon: Building2,
      title: "ICMR Validated",
      description:
        "Meets the quality and performance standards recommended by the Indian Council of Medical Research.",
    },
    {
      icon: ClipboardCheck,
      title: "GMP Certified",
      description:
        "Current Good Manufacturing Practice (cGMP) regulations enforced by global authorities.",
    },
    {
      icon: ShieldCheck,
      title: "CDSCO Licensed",
      description:
        "Central Drugs Standard Control Organization license for drug and device manufacturing.",
    },
    {
      icon: BadgeCheck,
      title: "NABCB Accredited",
      description:
        "National Accreditation Board for Certification Bodies compliance for global standards.",
    },
  ];
  
  export default function QualityCredentials() {
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1180px] px-6">
  
          {/* Heading */}
  
          <div className="text-center">
            <h2 className="text-[54px] font-bold text-[#20C9EE]">
              Quality Credentials
            </h2>
  
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#555]">
              Access our primary manufacturing and distribution credentials
              recognized by global health authorities.
            </p>
          </div>
  
          {/* Cards */}
  
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
  
            {credentials.map((item, index) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={index}
                  className="group rounded-[22px] border border-[#DCEFF8] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#20C9EE] hover:shadow-xl"
                >
                  {/* Icon */}
  
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#ECF9FF]">
                    <Icon
                      className="text-[#20C9EE]"
                      size={24}
                      strokeWidth={2}
                    />
                  </div>
  
                  {/* Title */}
  
                  <h3 className="mt-8 text-[36px] font-bold leading-tight text-[#303030]">
                    {item.title}
                  </h3>
  
                  {/* Description */}
  
                  <p className="mt-4 text-[15px] leading-7 text-[#666]">
                    {item.description}
                  </p>
  
                  {/* Link */}
  
                  <button className="mt-8 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#20C9EE]">
                    View Certificate
  
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              );
            })}
  
            {/* Dark Card */}
  
            <div className="rounded-[22px] bg-[#2F3133] p-8 text-white">
  
              <h3 className="text-[38px] font-bold leading-tight">
                Request Custom
                <br />
                Audits
              </h3>
  
              <p className="mt-5 text-[15px] leading-7 text-white/75">
                Government bodies can request direct on-site audits or
                detailed validation protocols.
              </p>
  
              <button className="mt-10 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#20C9EE]">
                Contact Compliance Office
  
                <ArrowUpRight size={14} />
              </button>
  
            </div>
  
          </div>
        </div>
      </section>
    );
  }