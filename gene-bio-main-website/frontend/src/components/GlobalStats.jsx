import {
    Globe,
    Earth,
    Handshake,
  } from "lucide-react";
  
  const stats = [
    {
      icon: Globe,
      number: "50+",
      title: "Countries",
      description:
        "Comprehensive regulatory clearance and distribution pipelines spanning over fifty nations.",
    },
    {
      icon: Earth,
      number: "4",
      title: "Continents",
      description:
        "Strategic hubs located in key economic zones for rapid response and clinical excellence.",
    },
    {
      icon: Handshake,
      number: "100+",
      title: "Partners",
      description:
        "A verified network of clinical laboratories, hospitals, and specialized logistics providers.",
    },
  ];
  
  export default function GlobalStats() {
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1180px] px-6">
  
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  
            {stats.map((item) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={item.title}
                  className="relative rounded-[4px] border border-[#E8EEF2] bg-white px-11 py-10 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Top Accent */}
  
                  <div className="absolute left-0 top-0 h-full w-[4px] rounded-l-[4px] bg-[#21BDF4]" />
  
                  <Icon
                    size={26}
                    className="mb-7 text-[#21BDF4]"
                    strokeWidth={2}
                  />
  
                  <h3 className="text-[52px] font-bold leading-none text-[#21BDF4]">
                    {item.number}
                  </h3>
  
                  <p className="mt-3 text-[22px] font-medium text-[#222]">
                    {item.title}
                  </p>
  
                  <p className="mt-6 text-[15px] leading-8 text-[#666]">
                    {item.description}
                  </p>
                </div>
              );
            })}
  
          </div>
  
        </div>
      </section>
    );
  }