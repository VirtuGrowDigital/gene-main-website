import { useState } from "react";
import {
  ShieldCheck,
  Plane,
  Building2,
} from "lucide-react";

import hubImage from "../assets/images/regional-infrastructure.png";

export default function RegionalInfrastructure() {
  const [tab, setTab] = useState("metrics");

  return (
    <section className="bg-white py-16 lg:py-28">
      <div className="mx-auto max-w-[1180px] px-5 md:px-6">
        {/* Heading */}

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-[34px] font-bold leading-tight text-[#222] md:text-[44px] lg:text-[54px]">
              Regional Infrastructure
            </h2>

            <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-[#666] lg:text-[16px] lg:leading-8">
              Our logistics framework is built for localized precision with
              global oversight. Each hub operates as a nexus of compliance,
              rapid distribution and regional excellence.
            </p>
          </div>

          {/* Toggle */}

          <div className="flex w-full rounded-full bg-[#F2F2F2] p-1 lg:w-auto">
            <button
              onClick={() => setTab("metrics")}
              className={`flex-1 rounded-full px-5 py-2.5 text-sm transition lg:px-7 ${
                tab === "metrics"
                  ? "bg-white text-[#222] shadow"
                  : "text-[#777]"
              }`}
            >
              Metrics
            </button>

            <button
              onClick={() => setTab("hub")}
              className={`flex-1 rounded-full px-5 py-2.5 text-sm transition lg:px-7 ${
                tab === "hub"
                  ? "bg-white text-[#222] shadow"
                  : "text-[#777]"
              }`}
            >
              Hub Data
            </button>
          </div>
        </div>

        {/* Grid */}

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[734px_360px]">
          {/* Image Card */}

          <div className="relative overflow-hidden rounded-[24px] shadow-xl h-[420px] sm:h-[520px] lg:h-[598px]">
            <img
              src={hubImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#000]/85 via-[#000]/20 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 lg:bottom-7 lg:left-7 lg:right-7">
              <p className="text-[9px] font-semibold uppercase tracking-[3px] text-[#2CC7F4]">
                PRIMARY GROWTH ENGINE
              </p>

              <h3 className="mt-2 max-w-[430px] text-[22px] font-semibold leading-tight text-white lg:text-[24px]">
                APAC Logistics &amp; R&amp;D Hub
              </h3>

              <div className="mt-6 flex flex-wrap gap-6 border-t border-white/15 pt-5 lg:mt-7 lg:flex-nowrap lg:justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[2px] text-white/60">
                    EFFICIENCY
                  </p>

                  <p className="mt-2 text-[16px] font-semibold text-white">
                    99.8%
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[2px] text-white/60">
                    COVERAGE
                  </p>

                  <p className="mt-2 text-[16px] font-semibold text-white">
                    18 Nations
                  </p>
                </div>

                <div>
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

          {/* Right Cards */}

          <div className="flex flex-col gap-6 lg:h-[598px] lg:justify-between">
            {/* Card 1 */}

            <div className="rounded-[24px] bg-[#24BDF3] p-6 text-white lg:h-[286px] lg:p-7">
              <Building2 className="mb-6" size={26} />

              <h3 className="text-[22px] font-semibold leading-[1.25]">
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
                GDPR &amp; IVDR Compliant
              </div>
            </div>

            {/* Card 2 */}

            <div className="rounded-[24px] bg-[#24BDF3] p-6 text-white lg:h-[286px] lg:p-7">
              <Plane className="mb-6" size={26} />

              <h3 className="text-[22px] font-semibold leading-[1.25]">
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