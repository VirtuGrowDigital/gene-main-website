import manufacturing from "../assets/images/manu.png";
import countriesIcon from "../assets/icons/countries.png";
import certificationIcon from "../assets/icons/certification.png";

export default function ManufacturingSection() {
  return (
    <section className="bg-[#F5F7F7] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="uppercase tracking-[4px] text-[#178EF2] text-sm font-semibold mb-3">
            GLOBAL MANUFACTURING
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#1E1E1E] leading-tight">
            Manufacturing Excellence
            <br />
            Across Continents
          </h2>

          <p className="mt-6 text-[#6D6D6D] leading-8 text-lg">
            Our manufacturing ecosystem combines world-class infrastructure,
            regulatory compliance, and international distribution to deliver
            trusted diagnostic solutions worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Left Card */}
          <div className="bg-white rounded-[32px] overflow-hidden border-[#ECECEC]">

            <div className="h-[420px] overflow-hidden">
              <img
                src={manufacturing}
                alt="Manufacturing"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">

              <span className="inline-flex px-4 py-2 rounded-full bg-[#EAF5FF] text-[#178EF2] text-sm font-semibold">
                State-of-the-Art Facility
              </span>

              <h3 className="text-[30px] font-bold text-[#222] mt-6">
                Advanced Manufacturing
                <br />
                Infrastructure
              </h3>

              <p className="text-[#6B6B6B] mt-5 leading-8">
                GeneBio Healthcare operates modern manufacturing facilities
                equipped with automated production systems, advanced quality
                assurance laboratories, and globally compliant manufacturing
                practices.
              </p>

              <div className="grid grid-cols-3 gap-6 mt-10">

                <div>
                  <h4 className="text-[#178EF2] text-3xl font-bold">25K+</h4>
                  <p className="text-sm text-[#777] mt-2">
                    Units / Day
                  </p>
                </div>

                <div>
                  <h4 className="text-[#178EF2] text-3xl font-bold">100%</h4>
                  <p className="text-sm text-[#777] mt-2">
                    QC Tested
                  </p>
                </div>

                <div>
                  <h4 className="text-[#178EF2] text-3xl font-bold">24/7</h4>
                  <p className="text-sm text-[#777] mt-2">
                    Operations
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-8">
                        {/* Card 1 */}
                        <div className="bg-white rounded-[30px] p-8 shadow-sm border border-[#ECECEC] flex-1">

<div className="w-16 h-16 rounded-2xl bg-[#EAF5FF] flex items-center justify-center">
  <img
    src={countriesIcon}
    alt="Countries"
    className="w-9 h-9 object-contain"
  />
</div>

<h3 className="mt-8 text-5xl font-bold text-[#178EF2]">
  120+
</h3>

<h4 className="mt-3 text-2xl font-semibold text-[#222]">
  Countries Served
</h4>

<p className="mt-4 text-[#6C6C6C] leading-8">
  Delivering reliable diagnostic solutions across Asia,
  Europe, Africa, the Middle East and Latin America
  through a strong global distribution network.
</p>

</div>

{/* Card 2 */}
<div className="bg-white rounded-[30px] p-8 shadow-sm border border-[#ECECEC] flex-1">

<div className="w-16 h-16 rounded-2xl bg-[#EAF5FF] flex items-center justify-center">
  <img
    src={certificationIcon}
    alt="Certification"
    className="w-9 h-9 object-contain"
  />
</div>

<h3 className="mt-8 text-5xl font-bold text-[#178EF2]">
  CE-IVD
</h3>

<h4 className="mt-3 text-2xl font-semibold text-[#222]">
  International Compliance
</h4>

<p className="mt-4 text-[#6C6C6C] leading-8">
  Built with stringent quality standards and regulatory
  compliance to ensure consistent performance and
  dependable diagnostic accuracy worldwide.
</p>

<div className="mt-8 flex flex-wrap gap-3">

  <span className="px-4 py-2 rounded-full bg-[#F4F8FB] text-[#178EF2] font-medium">
    ISO 13485
  </span>

  <span className="px-4 py-2 rounded-full bg-[#F4F8FB] text-[#178EF2] font-medium">
    GMP
  </span>

  <span className="px-4 py-2 rounded-full bg-[#F4F8FB] text-[#178EF2] font-medium">
    CE-IVD
  </span>

</div>

</div>

</div>
</div>
</div>
</section>
);
}