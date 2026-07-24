import {
    Microscope,
    ShieldCheck,
    Gauge,
    Cross,
    Droplets,
    Globe2,
  } from "lucide-react";
  
  import diagnosticLab from "../assets/images/diagnostic-lab.png";
  
  const advantages = [
    {
      title: "Advanced Tech",
      description:
        "Proprietary nanoparticle-based detection platforms for unmatched sensitivity.",
      icon: Microscope,
    },
    {
      title: "Robust Quality",
      description:
        "Multi-stage QC protocols exceeding global regulatory benchmarks.",
      icon: ShieldCheck,
    },
    {
      title: "Timely Detection",
      description:
        "Rapid results within minutes, empowering immediate clinical action.",
      icon: Gauge,
    },
    {
      title: "Better Outcomes",
      description:
        "Reliable diagnostics leading to precise patient care pathways.",
      icon: Cross,
    },
  ];
  
  const GeneBioAdvantage = () => {
    return (
      <section className="bg-white py-14 md:py-20">
       <div className="mx-auto w-full max-w-[1180px] px-5 md:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#18BFEA]">
              The GeneBio Advantage
            </p>
  
            <h2 className="mt-3 text-[28px] font-bold tracking-[-0.03em] text-black md:text-[36px]">
              Pioneering Diagnostic Precision
            </h2>
          </div>
  
          {/* Advantage Cards */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={item.title}
                  className="
                    min-h-[210px] rounded-[18px]
                    border border-[#E8EDEE]
                    bg-white p-7
                  "
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#E4F5F7]">
                    <Icon
                      size={24}
                      strokeWidth={2}
                      className="text-[#12BFEA]"
                    />
                  </div>
  
                  <h3 className="mt-6 text-[16px] font-medium text-[#151515]">
                    {item.title}
                  </h3>
  
                  <p className="mt-3 text-[12px] leading-[1.55] text-[#454B4D]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
  
         {/* Bento Grid */}
<div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12">

{/* Rapid Diagnostic + Lab Image Combined Card */}
<div
  className="
    overflow-hidden rounded-[28px]
    bg-[#F0F2F2]
    lg:col-span-8
  "
>
  <div className="grid h-full grid-cols-1 md:grid-cols-2">

    {/* Rapid Diagnostic Content */}
    <div className="flex min-h-[300px] flex-col justify-center p-8 lg:p-10">
      <h3 className="text-[31px] font-bold leading-[1.05] tracking-[-0.03em] text-black">
        Rapid
        <br />
        Diagnostic
        <br />
        Solutions
      </h3>

      <p className="mt-4 max-w-[250px] text-[12px] leading-[1.6] text-[#454B4D]">
        Full range of Point-of-Care tests for infectious diseases
        with laboratory-grade precision.
      </p>

      <a
        href="#products"
        className="
          mt-5 inline-flex w-fit
          rounded-[6px] bg-[#16BEEA]
          px-5 py-2.5
          text-[10px] font-semibold text-white
          transition hover:bg-[#0BAFD8]
        "
      >
        View Collection
      </a>
    </div>

    {/* Lab Image */}
    <div className="min-h-[300px] overflow-hidden">
      <img
        src={diagnosticLab}
        alt="GeneBio diagnostic laboratory"
        className="
          h-full w-full
          object-cover
          transition-transform duration-500
          hover:scale-105
        "
      />
    </div>

  </div>
</div>


{/* Serology & Immunology */}
<div
  className="
    flex min-h-[300px] flex-col justify-center
    rounded-[28px]
    bg-[#13BCEB]
    px-10 py-8 text-white
    lg:col-span-4
  "
>
  <h3 className="text-[24px] font-semibold leading-[1.2]">
    Serology &<br />
    Immunology
  </h3>

  <p className="mt-5 max-w-[230px] text-[12px] leading-[1.6] text-white/80">
    Advanced antibody detection for public health monitoring.
  </p>

  <div className="mt-12 flex gap-2">
    <span className="rounded-full bg-white/20 px-3 py-1 text-[9px]">
      POCT
    </span>

    <span className="rounded-full bg-white/20 px-3 py-1 text-[9px]">
      ENZYME
    </span>
  </div>
</div>


{/* Metabolic Profiling */}
<div
  className="
    flex min-h-[170px] flex-col justify-center
    rounded-[28px]
    bg-[#CDE9E9]
    px-8 py-6
    lg:col-span-4
  "
>
  <Droplets
    size={24}
    strokeWidth={1.8}
    className="text-[#365E63]"
  />

  <h3 className="mt-4 text-[20px] font-medium text-[#222]">
    Metabolic Profiling
  </h3>

  <p className="mt-3 max-w-[280px] text-[12px] leading-[1.5] text-[#536467]">
    Comprehensive diagnostic panels for chronic disease management.
  </p>
</div>


{/* Global Reach */}
<div
  className="
    flex min-h-[170px]
    items-center justify-between
    overflow-hidden
    rounded-[28px]
    bg-[#E5E8E8]
    px-18 py-6
    lg:col-span-8
  "
>
  {/* Text */}
  <div className="flex flex-col justify-center">
    <h3
      className="
        text-[34px] font-bold
        leading-[1.05]
        tracking-[-0.04em]
        text-black
        lg:text-[38px]
      "
    >
      Global Reach
    </h3>

    <p className="mt-4 text-[12px] leading-[1.5] text-[#555F61]">
      Supplying over 500+ hospital networks worldwide.
    </p>
  </div>

  {/* Globe */}
  <div
    className="
      mr-2 flex
      h-[125px] w-[125px]
      shrink-0 items-center justify-center
      rounded-full
      border-[9px] border-white
      bg-[#C5E7E8]
    "
  >
    <Globe2
      size={30}
      strokeWidth={2}
      className="text-[#13BCEB]"
    />
  </div>
</div>

</div>
        </div>
      </section>
    );
  };
  
  export default GeneBioAdvantage;