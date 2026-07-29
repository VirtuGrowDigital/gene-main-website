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
      <div
          className="
          mx-auto
          flex
          h-[64px]
          max-w-[1280px]
          items-center
          gap-6
          overflow-x-auto
          whitespace-nowrap
          px-4
      
          snap-x
          snap-mandatory
          scrollbar-hide
      
          sm:px-5
          md:h-[76px]
          md:justify-between
          md:gap-8
          md:px-10
          lg:px-12
        "
      >
        {trustItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={`${item.label}-${index}`}
              className="
              flex
              shrink-0
              snap-start
              items-center
              gap-2
              text-[#7A8588]
          
              md:gap-3
            "
            >
              <Icon
                size={18}
                strokeWidth={1.8}
                className="text-[#718083] md:h-5 md:w-5"
              />

              <span className="text-[9px] font-medium tracking-[0.04em] md:text-[11px]">
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