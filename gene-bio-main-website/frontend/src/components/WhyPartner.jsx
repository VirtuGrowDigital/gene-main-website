import {
    Truck,
    FlaskConical,
    Megaphone,
    Microscope,
  } from "lucide-react";
  
  import partnerImage from "../assets/images/distributor-lab.png";
  
  export default function WhyPartner() {
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1180px] px-5">
  
          {/* Heading */}
  
          <div className="text-center">
  
            <h2 className="text-[54px] font-bold leading-tight text-[#191919]">
              Why Partner with Us?
            </h2>
  
            <p className="mx-auto mt-5 max-w-[620px] text-[17px] leading-8 text-[#27BDF3]">
              Access a comprehensive ecosystem designed to accelerate your
              growth and patient outcomes.
            </p>
  
          </div>
  
          {/* Bento Grid */}
  
          <div className="mt-16 grid grid-cols-12 gap-5">
  
            {/* Card 1 */}
  
            <div className="col-span-4 rounded-[26px] bg-[#F3F4F6] p-8">
  
              <Truck
                size={24}
                className="text-[#27BDF3]"
              />
  
              <h3 className="mt-10 text-[36px] font-semibold leading-tight text-[#222]">
                Tier-1 Priority Logistics
              </h3>
  
              <p className="mt-5 text-[16px] leading-8 text-[#666]">
                Our partners receive priority allocation in our global supply
                chain, ensuring critical diagnostics reach providers without
                delay.
              </p>
  
            </div>
  
            {/* Center Image */}
  
            <div className="col-span-4 overflow-hidden rounded-[26px]">
  
              <img
                src={partnerImage}
                alt=""
                className="h-full w-full object-cover"
              />
  
            </div>
  
            {/* Card 2 */}
  
            <div className="col-span-4 rounded-[26px] bg-[#24BDF3] p-8 text-white">
  
              <Microscope size={24} />
  
              <h3 className="mt-10 text-[34px] font-semibold leading-tight">
                Expert
                <br />
                Integration
              </h3>
  
              <p className="mt-5 text-[16px] leading-8 text-white/85">
                Direct access to our clinical scientists and technical
                integration team 24/7.
              </p>
  
            </div>
  
            {/* Card 3 */}
  
            <div className="col-span-4 rounded-[26px] bg-[#24BDF3] p-8 text-white">
  
              <Megaphone size={24} />
  
              <h3 className="mt-10 text-[34px] font-semibold leading-tight">
                Co-Marketing
              </h3>
  
              <p className="mt-5 text-[16px] leading-8 text-white/85">
                White-label collateral, global summit access, and dedicated
                regional marketing budgets.
              </p>
  
            </div>
  
            {/* Card 4 */}
  
            <div className="col-span-8 flex items-center justify-between rounded-[26px] bg-[#2D2D2D] p-10">
  
              <div>
  
                <h3 className="text-[40px] font-semibold text-white">
                  Early Access R&D
                </h3>
  
                <p className="mt-5 max-w-[520px] text-[16px] leading-8 text-white/70">
                  Be the first to market with our next-generation diagnostic
                  modules before they hit general availability.
                </p>
  
              </div>
  
              <FlaskConical
                size={60}
                className="text-[#1E708C]"
              />
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }