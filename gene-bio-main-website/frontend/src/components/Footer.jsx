import { Globe, Mail } from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

import logo from "../assets/images/genebio-logo.png";
import dnaBg from "../assets/images/DNA logo background.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0A2020] lg:bg-[#454545] text-white">

      {/* DNA Background */}
{/* Desktop DNA Background */}
<div
  className="pointer-events-none absolute inset-0 hidden opacity-[0.09] lg:block"
  style={{
    backgroundImage: `url(${dnaBg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  }}
/>

      <div className="relative z-10 max-w-[1280px] mx-auto">

        <div className="grid lg:grid-cols-[1.6fr_1fr_1fr] gap-24 px-16 pt-14 pb-10">

          {/* Left */}

          <div>

            <img
              src={logo}
              alt="GeneBio"
              className="h-[62px] object-contain"
            />

            <p className="mt-8 max-w-[430px] font-extralight text-[17px] leading-8 text-[#E1E1E1]">
              Reg. Off.:Sec-F, E-635 LDA Colony, Kanpur Road, Lucknow-226012
              <br/>
              Production Unit: A-6/1A/2,
              Industrial Area, Kursi Road, Distt: Barabanki(U.P)225302
             
              <br/>
              sp@genebiohealthcare.com
              <br/>
              +91 9236392922
            </p>

            <div className="mt-8 flex gap-3">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 hover:border-[#24B8F4] hover:bg-[#24B8F4] duration-300"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 hover:border-[#24B8F4] hover:bg-[#24B8F4] duration-300"
              >
                <Globe size={15} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 hover:border-[#24B8F4] hover:bg-[#24B8F4] duration-300"
              >
                <FaLinkedinIn size={14} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 hover:border-[#24B8F4] hover:bg-[#24B8F4] duration-300"
              >
                <Mail size={15} />
              </a>

            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="font-semibold text-[#24B8F4]">
              Product Ecosystem
            </h3>

            <div className="mt-8 space-y-5">

              <a href="#" className="block text-[#E4E4E4] hover:text-white">
                Product Catalog
              </a>

              <a href="#" className="block text-[#E4E4E4] hover:text-white">
                Manufacturing Standards
              </a>

              <a href="#" className="block text-[#E4E4E4] hover:text-white">
                Global Distribution
              </a>

            </div>

          </div>

          {/* Governance */}

          <div>

            <h3 className="font-semibold text-[#24B8F4]">
              Governance
            </h3>

            <div className="mt-8 space-y-5">

              <a href="#" className="block text-[#E4E4E4] hover:text-white">
                Certifications
              </a>

              <a href="#" className="block text-[#E4E4E4] hover:text-white">
                Privacy Policy
              </a>

              <a href="#" className="block text-[#E4E4E4] hover:text-white">
                Terms of Service
              </a>

            </div>

          </div>

        </div>
                {/* Bottom Bar */}

                <div className="border-t border-white/10">
          <div className="mx-auto flex h-[52px] max-w-[1280px] items-center justify-center px-6">

            <p className="text-[13px] tracking-wide text-[#B6B6B6]">
              © 2024 GeneBio Healthcare. Precision Biotechnology & Clinical
              Innovation.
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
}