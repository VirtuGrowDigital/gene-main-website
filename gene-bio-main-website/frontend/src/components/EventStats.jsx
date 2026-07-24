export default function EventStats() {
    const stats = [
      {
        number: "50+",
        label: "GLOBAL EVENTS ANNUALLY",
      },
      {
        number: "120+",
        label: "COUNTRIES REACHED",
      },
      {
        number: "10k+",
        label: "PARTNERS ENGAGED",
      },
    ];
  
    return (
      <section className="bg-[#2EBDF3] py-14">
        <div className="mx-auto max-w-[1180px] px-5">
          <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label}>
                <h2 className="text-[56px] font-bold leading-none text-white">
                  {item.number}
                </h2>
  
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/75">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }