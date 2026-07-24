import {
    BadgeDollarSign,
    Globe2,
    Headphones,
    Truck,
  } from "lucide-react";
  
  const benefits = [
    {
      icon: BadgeDollarSign,
      title: "Direct\nManufacturer\nPricing",
      description:
        "Maximize your ROI by eliminating middlemen and accessing tier-one pricing directly from our facilities.",
    },
    {
      icon: Globe2,
      title: "Global Supply\nNetwork",
      description:
        "Uninterrupted supply chains spanning 6 continents ensure your operations never face downtime or shortages.",
    },
    {
      icon: Headphones,
      title: "Dedicated\nSupport",
      description:
        "Receive priority attention from a dedicated account manager tailored to your regional requirements.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Optimized logistics and hub distribution reduce lead times to the absolute market minimum.",
    },
  ];
  
  export default function BenefitsGrid() {
    return (
      <section className="bg-[#F7F8FA] py-20">
        <div className="mx-auto max-w-[1180px] px-5">
  
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
  
            {benefits.map((item, index) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={index}
                  className="h-[390px] rounded-[22px] border border-[#D9F0FD] bg-white px-7 pt-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Icon */}
  
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DDF5FF]">
  
                    <Icon
                      size={18}
                      className="text-[#2CBDF5]"
                    />
  
                  </div>
  
                  {/* Title */}
  
                  <h3 className="mt-8 whitespace-pre-line text-[22px] font-semibold leading-[1.3] text-[#202020]">
                    {item.title}
                  </h3>
  
                  {/* Description */}
  
                  <p className="mt-5 text-[15px] leading-8 text-[#555]">
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