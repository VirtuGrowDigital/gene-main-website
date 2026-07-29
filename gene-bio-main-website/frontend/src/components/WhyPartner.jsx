import {
  Truck,
  FlaskConical,
  Megaphone,
  Microscope,
} from "lucide-react";

import partnerImage from "../assets/images/distributor-lab.png";

export default function WhyPartner() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1180px] px-5 md:px-6">
        {/* Heading */}

        <div className="text-center">
          <h2 className="text-[34px] font-bold leading-tight text-[#191919] md:text-[44px] lg:text-[54px]">
            Why Partner with Us?
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-7 text-[#27BDF3] md:text-[16px] lg:text-[17px] lg:leading-8">
            Access a comprehensive ecosystem designed to accelerate your
            growth and patient outcomes.
          </p>
        </div>

        {/* Bento Grid */}

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-12">
          {/* Card 1 */}

          <div className="rounded-[22px] bg-[#F3F4F6] p-6 lg:col-span-4 lg:rounded-[26px] lg:p-8">
            <Truck size={24} className="text-[#27BDF3]" />

            <h3 className="mt-8 text-[28px] font-semibold leading-tight text-[#222] lg:mt-10 lg:text-[36px]">
              Tier-1 Priority Logistics
            </h3>

            <p className="mt-5 text-[15px] leading-7 text-[#666] lg:text-[16px] lg:leading-8">
              Our partners receive priority allocation in our global supply
              chain, ensuring critical diagnostics reach providers without
              delay.
            </p>
          </div>

          {/* Image */}

          <div className="overflow-hidden rounded-[22px] md:h-[380px] lg:col-span-4 lg:h-auto lg:rounded-[26px]">
            <img
              src={partnerImage}
              alt="Partner Laboratory"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Card 2 */}

          <div className="rounded-[22px] bg-[#24BDF3] p-6 text-white lg:col-span-4 lg:rounded-[26px] lg:p-8">
            <Microscope size={24} />

            <h3 className="mt-8 text-[28px] font-semibold leading-tight lg:mt-10 lg:text-[34px]">
              Expert
              <br />
              Integration
            </h3>

            <p className="mt-5 text-[15px] leading-7 text-white/85 lg:text-[16px] lg:leading-8">
              Direct access to our clinical scientists and technical
              integration team 24/7.
            </p>
          </div>

          {/* Card 3 */}

          <div className="rounded-[22px] bg-[#24BDF3] p-6 text-white lg:col-span-4 lg:rounded-[26px] lg:p-8">
            <Megaphone size={24} />

            <h3 className="mt-8 text-[28px] font-semibold leading-tight lg:mt-10 lg:text-[34px]">
              Co-Marketing
            </h3>

            <p className="mt-5 text-[15px] leading-7 text-white/85 lg:text-[16px] lg:leading-8">
              White-label collateral, global summit access, and dedicated
              regional marketing budgets.
            </p>
          </div>

          {/* Card 4 */}

          <div className="flex flex-col gap-8 rounded-[22px] bg-[#2D2D2D] p-6 text-white md:flex-row md:items-center md:justify-between lg:col-span-8 lg:rounded-[26px] lg:p-10">
            <div>
              <h3 className="text-[30px] font-semibold lg:text-[40px]">
                Early Access R&amp;D
              </h3>

              <p className="mt-5 max-w-[520px] text-[15px] leading-7 text-white/70 lg:text-[16px] lg:leading-8">
                Be the first to market with our next-generation diagnostic
                modules before they hit general availability.
              </p>
            </div>

            <FlaskConical
              size={56}
              className="shrink-0 text-[#1E708C] lg:h-[60px] lg:w-[60px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}