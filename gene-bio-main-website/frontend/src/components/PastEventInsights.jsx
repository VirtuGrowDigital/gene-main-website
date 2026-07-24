import { MapPin, FileText } from "lucide-react";

const events = [
  {
    month: "OCT",
    year: "2023",
    title: "World Health Summit",
    location: "Berlin, Germany",
    demos: "450+ Demos Held",
    papers: "12 Papers Published",
  },
  {
    month: "AUG",
    year: "2023",
    title: "BioTech Asia Pacific",
    location: "Sydney, Australia",
    demos: "320+ Key Contacts",
    papers: "Innovation Award Won",
  },
];

export default function PastEventInsights() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1180px] px-5">

        {/* Heading */}

        <h2 className="text-[42px] font-bold text-[#202020]">
          Past Event Insights{" "}
          <span className="font-normal text-[#666]">
            (2023)
          </span>
        </h2>

        <div className="mt-6 h-px bg-[#E7EDF2]" />

        {/* Cards */}

        <div className="mt-10 space-y-5">

          {events.map((event) => (

            <div
              key={event.title}
              className="flex flex-col items-start justify-between gap-8 rounded-[20px] border border-[#EEF2F5] bg-white px-8 py-7 shadow-[0_12px_35px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-xl lg:flex-row lg:items-center"
            >

              {/* Left */}

              <div className="flex items-center gap-8">

                <div className="w-[80px]">

                  <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#2CBDF5]">
                    {event.month}
                  </p>

                  <p className="mt-1 text-[13px] text-[#999]">
                    {event.year}
                  </p>

                </div>

                <div>

                  <h3 className="text-[24px] font-semibold text-[#222]">
                    {event.title}
                  </h3>

                  <p className="mt-2 text-[15px] text-[#666]">
                    {event.location}
                  </p>

                </div>

              </div>

              {/* Middle */}

              <div className="flex flex-wrap gap-10 text-[14px] text-[#555]">

                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  {event.demos}
                </div>

                <div className="flex items-center gap-2">
                  <FileText size={16} />
                  {event.papers}
                </div>

              </div>

              {/* Right */}

              <button className="text-[15px] font-semibold text-[#2CBDF5] transition hover:text-[#129ED7]">
                View Summary →
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}