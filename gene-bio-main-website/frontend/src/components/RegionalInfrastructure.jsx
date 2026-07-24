import { useState } from "react";
import {
  ShieldCheck,
  Plane,
  Activity,
  Building2,
} from "lucide-react";

import hubImage from "../assets/images/regional-infrastructure.png";

export default function RegionalInfrastructure() {
  const [tab, setTab] = useState("metrics");

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-[1180px] px-5">

        {/* Heading */}

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div>

            <h2 className="text-[54px] font-bold leading-tight text-[#222]">
              Regional Infrastructure
            </h2>

            <p className="mt-5 max-w-[620px] text-[16px] leading-8 text-[#666]">
              Our logistics framework is built for localized precision with
              global oversight. Each hub operates as a nexus of compliance,
              rapid distribution and regional excellence.
            </p>

          </div>

          {/* Toggle */}

          <div className="flex rounded-full bg-[#F2F2F2] p-1">

            <button
              onClick={() => setTab("metrics")}
              className={`rounded-full px-7 py-2 text-sm transition ${
                tab === "metrics"
                  ? "bg-white shadow text-[#222]"
                  : "text-[#777]"
              }`}
            >
              Metrics
            </button>

            <button
              onClick={() => setTab("hub")}
              className={`rounded-full px-7 py-2 text-sm transition ${
                tab === "hub"
                  ? "bg-white shadow text-[#222]"
                  : "text-[#777]"
              }`}
            >
              Hub Data
            </button>

          </div>

        </div>

        {/* Grid */}

        <div className="mt-12 grid grid-cols-1 items-start gap-6 lg:grid-cols-[734px_260px]">
          {/* Image Card */}

          <div className="relative h-[598px] overflow-hidden rounded-[24px] shadow-xl">

          <img
    src={hubImage}
    alt=""
    className="absolute inset-0 h-full w-full object-cover"
/>

<div className="absolute inset-0 bg-gradient-to-t from-[#000]/85 via-[#000]/20 to-transparent" />

<div className="absolute bottom-7 left-7 right-7">

    <p className="text-[9px] font-semibold uppercase tracking-[3px] text-[#2CC7F4]">
        PRIMARY GROWTH ENGINE
    </p>

    <h3 className="mt-2 max-w-[430px] text-[24px] font-semibold leading-tight text-white">
        APAC Logistics &amp; R&amp;D Hub
    </h3>

    <div className="mt-7 flex w-full items-start justify-between border-t border-white/15 pt-5">

  <div className="flex flex-col">
    <p className="text-[9px] uppercase tracking-[2px] text-white/60">
      EFFICIENCY
    </p>

    <p className="mt-2 text-[16px] font-semibold text-white">
      99.8%
    </p>
  </div>

  <div className="flex flex-col">
    <p className="text-[9px] uppercase tracking-[2px] text-white/60">
      COVERAGE
    </p>

    <p className="mt-2 text-[16px] font-semibold text-white">
      18 Nations
    </p>
  </div>

  <div className="flex flex-col">
    <p className="text-[9px] uppercase tracking-[2px] text-white/60">
      CENTERS
    </p>

    <p className="mt-2 text-[16px] font-semibold text-white">
      12 Core Labs
    </p>
  </div>

</div>

</div>

           

          </div>

          {/* Right Side */}

          <div className="flex h-[598px] flex-col justify-between">

            <div className="rounded-[24px]
h-[286px]
p-7 bg-[#24BDF3] text-white">

              <Building2
                className="mb-6"
                size={26}
              />

              <h3 className="text-[22px]
leading-[1.25] font-semibold ">
                EMEA
                <br />
                Operations
              </h3>

              <p className="mt-5 text-[14px] leading-7 text-white/90">
                Regulatory compliance at the heart of Europe.
                Standardizing diagnostics for 22 regional partners.
              </p>

              <div className="mt-8 flex items-center gap-2 text-[14px] font-medium">

                <ShieldCheck size={18} />

                GDPR & IVDR Compliant

              </div>

            </div>

            <div className="rounded-[24px]
h-[286px]
p-7 bg-[#24BDF3] text-white">

              <Plane
                className="mb-6"
                size={26}
              />

              <h3 className="text-[22px]
leading-[1.25] font-semibold ">
                Americas
                <br />
                Access
              </h3>

              <p className="mt-5 text-[14px] leading-7 text-white/90">
                Full-scale distribution network across North and South America
                with specialized cold-chain capability.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <span className="rounded-full bg-white/20 px-4 py-2 text-[12px]">
                  Cold Chain
                </span>

                <span className="rounded-full bg-white/20 px-4 py-2 text-[12px]">
                  Next Day Air
                </span>

                <span className="rounded-full bg-white/20 px-4 py-2 text-[12px]">
                  24/7 Monitoring
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}