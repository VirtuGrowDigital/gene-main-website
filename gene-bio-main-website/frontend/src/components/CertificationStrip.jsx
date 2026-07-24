import {
    BadgeCheck,
    ShieldCheck,
    Globe,
    FileBadge,
  } from "lucide-react";
  
  const certifications = [
    {
      icon: BadgeCheck,
      title: "ISO CERTIFIED",
    },
    {
      icon: ShieldCheck,
      title: "WHO-GMP",
    },
    {
      icon: FileBadge,
      title: "CE MARK",
    },
    {
      icon: Globe,
      title: "EXIM LICENSED",
    },
  ];
  
  export default function CertificationStrip() {
    return (
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1180px] px-5 text-center">
  
          <h2 className="text-[44px] font-bold text-[#4A4A4A]">
            Globally Certified & Trusted
          </h2>
  
          <div className="mt-14 flex flex-wrap justify-center gap-16">
  
            {certifications.map((item) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
  
                    <Icon
                      size={22}
                      className="text-[#2CBDF5]"
                    />
  
                  </div>
  
                  <p className="mt-4 text-[11px] font-semibold tracking-[0.18em] text-[#777]">
                    {item.title}
                  </p>
  
                </div>
              );
            })}
  
          </div>
  
        </div>
      </section>
    );
  }