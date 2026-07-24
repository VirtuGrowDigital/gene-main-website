const stats = [
    {
      value: "50+",
      label: "COUNTRIES",
    },
    {
      value: "100+",
      label: "GLOBAL PARTNERS",
    },
    {
      value: "100Cr+",
      label: "KITS PRODUCED",
    },
    {
      value: "99.5%",
      label: "ACCURACY",
    },
  ];
  
  export default function GalleryStats() {
    return (
      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-y-10 md:grid-cols-4">
  
          {stats.map((item) => (
            <div
              key={item.label}
              className="border-r border-[#ECECEC] last:border-r-0 text-center"
            >
              <h2 className="text-[46px] font-light leading-none text-[#20C9EE]">
                {item.value}
              </h2>
  
              <p className="mt-4 text-[11px] font-semibold tracking-[3px] text-[#2B2B2B]">
                {item.label}
              </p>
            </div>
          ))}
  
        </div>
      </section>
    );
  }