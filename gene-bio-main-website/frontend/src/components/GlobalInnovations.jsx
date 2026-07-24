import { ArrowRight } from "lucide-react";

const innovations = [
  {
    title: "Next-Generation Diagnostics",
    category: "Innovation",
    description:
      "Developing cutting-edge rapid diagnostic technologies that improve accessibility and clinical confidence worldwide.",
  },
  {
    title: "Global Manufacturing Excellence",
    category: "Infrastructure",
    description:
      "World-class production facilities with scalable manufacturing capabilities supporting healthcare partners across the globe.",
  },
  {
    title: "Trusted Worldwide",
    category: "Global Reach",
    description:
      "Serving hospitals, laboratories and healthcare providers with internationally certified diagnostic solutions.",
  },
];

export default function GlobalInnovations() {
  return (
    <section className="bg-[#111827] py-28">
      <div className="mx-auto max-w-[1180px] px-6">

        {/* Heading */}

        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">

          <div>

            <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-[#20C9EE]">
              Global Health Innovation
            </p>

            <h2 className="mt-4 text-[44px] font-bold leading-tight text-white">
              Driving Healthcare
              <br />
              Through Innovation
            </h2>

          </div>

          <button className="flex items-center gap-2 text-sm font-medium text-[#20C9EE] transition hover:gap-3">
            View More
            <ArrowRight size={18} />
          </button>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {innovations.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#20C9EE]/40"
            >
              <span className="inline-block rounded-full bg-[#20C9EE]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#20C9EE]">
                {item.category}
              </span>

              <h3 className="mt-8 text-[28px] font-semibold leading-tight text-white">
                {item.title}
              </h3>

              <p className="mt-6 text-[15px] leading-8 text-white/70">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}