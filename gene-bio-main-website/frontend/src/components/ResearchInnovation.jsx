import researchImage from "../assets/images/manu3.png";

export default function ResearchInnovation() {
  return (
    <section className="bg-[#F2F4F4] py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* ================= IMAGE ================= */}

          <div className="relative lg:col-span-5">

            <div className="group relative overflow-hidden rounded-[28px]">

              <img
                src={researchImage}
                alt="Research and molecular development laboratory"
                className="
                  h-[480px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                  lg:h-[560px]
                "
              />

            </div>

            {/* Active Research Badge */}

            <div
              className="
              opacity-75
                absolute
                right-5
                top-5
                flex
                items-center
                gap-2
                rounded-[14px]
                bg-white
                px-4
                py-3
                shadow-lg
                lg:right-6
                lg:top-6
              "
            >

              <div className="flex h-7 w-7 items-center   justify-center rounded-full bg-[#E8F9FD]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 text-[#20C9EE]"
                >
                  <path
                    d="M8 3v5l-3 5a5 5 0 0 0 4.3 7.5h1.4A5 5 0 0 0 15 13l-3-5V3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 3h4M7 14h7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#20C9EE]">
                Active Research
              </span>

            </div>

          </div>


          {/* ================= CONTENT ================= */}

          <div className="lg:col-span-7">

            {/* Eyebrow */}

            <p className="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#20C9EE]">
              Next-Gen Innovation
            </p>


            {/* Heading */}

            <h2 className="mt-4 max-w-[650px] text-[38px] font-bold leading-[1.08] text-[#21CAFF] sm:text-[44px] lg:text-[48px]">
              Research & Molecular
              <br />
              Development
            </h2>


            {/* Description */}

            <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-[#3F464D]">
              Our innovation centers are the heartbeat of GeneBio. We house
              state-of-the-art sequencing labs, molecular biology suites, and
              AI-driven diagnostic optimization systems.
            </p>


            {/* Information Cards */}

            <div className="mt-8 grid max-w-[620px] gap-4 sm:grid-cols-2">

              {/* Scientists */}

              <div
                className="
                  flex
                  items-start
                  gap-3
                  rounded-[14px]
                  bg-white
                  px-5
                  py-4
                  shadow-sm
                "
              >

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8F9FD]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4 text-[#20C9EE]"
                  >
                    <path
                      d="M9 3v4l-3 5a5 5 0 0 0 4.3 7.5h3.4A5 5 0 0 0 18 12l-3-5V3"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 3h7M7 13h10"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-[13px] font-semibold text-[#111827]">
                    50+ Scientists
                  </p>

                  <p className="mt-1 text-[11px] leading-4 text-[#7A8288]">
                  Elite molecular biologists
                    <br />
                    and engineers.
                  </p>
                </div>

              </div>


              {/* AI Diagnostics */}

              <div
                className="
                  flex
                  items-start
                  gap-3
                  rounded-[14px]
                  bg-white
                  px-5
                  py-4
                  shadow-sm
                "
              >

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8F9FD]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4 text-[#20C9EE]"
                  >
                    <path
                      d="M12 3v18M3 12h18"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="8"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-[13px] font-semibold text-[#111827]">
                    AI Diagnostics
                  </p>

                  <p className="mt-1 text-[11px] leading-4 text-[#7A8288]">
                    Proprietary algorithms for
                    <br />
                    result accuracy.
                  </p>
                </div>

              </div>

            </div>


            {/* CTA */}

            <button
              type="button"
              className="
                mt-8
                rounded-full
                border-2
                border-[#20C9EE]
                bg-[#20C9EE]
                px-7
                py-3
                text-[13px]
                font-semibold
                text-white
                shadow-[0_8px_20px_rgba(32,201,238,0.22)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#10B9DD]
                hover:shadow-[0_12px_25px_rgba(32,201,238,0.3)]
              "
            >
              Explore Innovation Center
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}