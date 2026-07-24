import {
    BadgeCheck,
    CircleCheck,
    FileCheck2,
    PackageCheck,
  } from "lucide-react";
  
  const trustItems = [
    {
      label: "GMP CERTIFIED",
      icon: BadgeCheck,
    },
    {
      label: "ISO 13485",
      icon: CircleCheck,
    },
    {
      label: "CSIR-ICMR R&D PARTNER",
      icon: FileCheck2,
    },
    {
      label: "10Cr+ KITS DELIVERED",
      icon: PackageCheck,
    },
    {
      label: "GMP CERTIFIED",
      icon: BadgeCheck,
    },
    {
      label: "ISO 13485",
      icon: CircleCheck,
    },
  ];
  
  const TrustBar = () => {
    return (
      <section className="w-full bg-[#F1F3F3]">
        <div className="mx-auto flex min-h-[76px] max-w-[1280px] items-center justify-between gap-6 overflow-x-auto px-6 md:px-10 lg:px-12">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
  
            return (
              <div
                key={`${item.label}-${index}`}
                className="flex shrink-0 items-center gap-3 text-[#7A8588]"
              >
                <Icon
                  size={20}
                  strokeWidth={1.7}
                  className="text-[#718083]"
                />
  
                <span className="whitespace-nowrap text-[11px] font-medium tracking-[0.01em]">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    );
  };
  
  export default TrustBar;