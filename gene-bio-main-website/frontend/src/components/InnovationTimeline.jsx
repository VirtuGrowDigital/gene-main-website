export default function InnovationTimeline() {
    const milestones = [
      {
        year: "2018",
        title: "Company Founded",
        description:
          "GeneBio Healthcare was established with the vision of delivering innovative and reliable diagnostic solutions.",
      },
      {
        year: "2020",
        title: "Manufacturing Expansion",
        description:
          "Expanded production capabilities with advanced manufacturing infrastructure and quality assurance systems.",
      },
      {
        year: "2022",
        title: "Global Presence",
        description:
          "Successfully expanded our distribution network across multiple international markets.",
      },
      {
        year: "2024",
        title: "Innovation & Growth",
        description:
          "Continuing to invest in R&D, product innovation and strategic healthcare partnerships worldwide.",
      },
    ];
  
    return (
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
  
          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center mb-20">
  
            <p className="text-[#18B7F2] uppercase tracking-[3px] font-semibold text-sm mb-4">
              OUR JOURNEY
            </p>
  
            <h2 className="text-5xl font-bold text-[#222] leading-tight">
              Innovation Milestones
            </h2>
  
            <p className="text-[#666] text-lg leading-8 mt-6">
              Every milestone reflects our commitment to advancing diagnostic
              science and delivering healthcare solutions trusted worldwide.
            </p>
  
          </div>
  
          <div className="relative">
  
            {/* Center Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[#D9EEF8]" />
  
            <div className="space-y-16">
  
              {milestones.map((item, index) => (
                <div
                  key={item.year}
                  className={`grid lg:grid-cols-2 gap-10 items-center ${
                    index % 2 === 0 ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`${
                      index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
                    }`}
                  >
                    <div className="bg-[#F8FAFA] rounded-[28px] p-8 border border-[#ECECEC] shadow-sm">
  
                      <span className="inline-flex items-center justify-center rounded-full bg-[#18B7F2] text-white font-bold px-5 py-2 text-sm mb-6">
                        {item.year}
                      </span>
  
                      <h3 className="text-3xl font-bold text-[#222] mb-4">
                        {item.title}
                      </h3>
  
                      <p className="text-[#666] leading-8">
                        {item.description}
                      </p>
  
                    </div>
                  </div>
  
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex justify-center">
                    <div className="w-6 h-6 rounded-full bg-[#18B7F2] border-[6px] border-white shadow-lg" />
                  </div>
                </div>
              ))}
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }