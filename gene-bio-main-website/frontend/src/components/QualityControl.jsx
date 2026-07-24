import qcMain from "../assets/images/research-development.png";
import qc1 from "../assets/images/research-development.png";
import qc2 from "../assets/images/research-development.png";

export default function QualityControl() {
  return (
    <section className="bg-[#F8FAFB] py-24">
      <div className="mx-auto max-w-[1180px] px-6">

        {/* Heading */}

        <div className="mb-14 text-center">

          <p className="text-[14px] font-semibold uppercase tracking-[0.28em] text-[#20C9EE]">
            Quality & Integrity
          </p>

          <h2 className="mt-4 text-[42px] font-bold leading-tight text-[#111827]">
            Every Batch.
            <br />
            Every Test.
            <br />
            Every Time.
          </h2>

        </div>

        {/* Layout */}

        <div className="grid gap-6 lg:grid-cols-12">

          {/* Left */}

          <div className="flex flex-col gap-6 lg:col-span-5">

            <div className="group relative overflow-hidden rounded-[28px]">

              <img
                src={qc1}
                alt=""
                className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-6 left-6">

                <p className="text-[11px] uppercase tracking-[3px] text-white/70">
                  Inspection
                </p>

                <h3 className="mt-2 text-[22px] font-semibold text-white">
                  Automated Vision Systems
                </h3>

              </div>

            </div>

            <div className="group relative overflow-hidden rounded-[28px]">

              <img
                src={qc2}
                alt=""
                className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-6 left-6">

                <p className="text-[11px] uppercase tracking-[3px] text-white/70">
                  Validation
                </p>

                <h3 className="mt-2 text-[22px] font-semibold text-white">
                  Multi-Level Quality Checks
                </h3>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="group relative overflow-hidden rounded-[30px] lg:col-span-7">

            <img
              src={qcMain}
              alt=""
              className="h-[520px] w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-10 left-10 max-w-[420px]">

              <p className="text-[12px] uppercase tracking-[3px] text-white/70">
                Quality Control
              </p>

              <h3 className="mt-3 text-[34px] font-semibold text-white">
                Clinical Accuracy Through Precision
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-white/85">
                Every diagnostic kit passes through multiple validation
                checkpoints before reaching healthcare professionals
                worldwide.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}