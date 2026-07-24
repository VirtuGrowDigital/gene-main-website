import research1 from "../assets/images/Lab Testing.png";
import research2 from "../assets/images/Lab Testing.png";
import research3 from "../assets/images/Lab Testing.png";

export default function ResearchInnovation() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1180px] px-6">

        {/* Heading */}

        <div className="mb-14">

          <p className="text-[14px] font-semibold uppercase tracking-[0.28em] text-[#20C9EE]">
            Research & Innovation
          </p>

          <h2 className="mt-4 text-[42px] font-bold leading-tight text-[#111827]">
            Where Science
            <br />
            Meets Innovation
          </h2>

        </div>

        {/* Gallery */}

        <div className="grid gap-6 lg:grid-cols-12">

          {/* Large Image */}

          <div className="group relative overflow-hidden rounded-[28px] lg:col-span-7">

            <img
              src={research1}
              alt=""
              className="h-[520px] w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            <div className="absolute bottom-8 left-8">

              <p className="text-[12px] uppercase tracking-[3px] text-white/70">
                Molecular Research
              </p>

              <h3 className="mt-2 text-[32px] font-semibold text-white">
                Advanced R&D Laboratory
              </h3>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex flex-col gap-6 lg:col-span-5">

            <div className="group relative overflow-hidden rounded-[28px]">

              <img
                src={research2}
                alt=""
                className="h-[248px] w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-6 left-6">

                <h4 className="text-[22px] font-semibold text-white">
                  Product Testing
                </h4>

              </div>

            </div>

            <div className="group relative overflow-hidden rounded-[28px]">

              <img
                src={research3}
                alt=""
                className="h-[248px] w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-6 left-6">

                <h4 className="text-[22px] font-semibold text-white">
                  Scientific Collaboration
                </h4>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}