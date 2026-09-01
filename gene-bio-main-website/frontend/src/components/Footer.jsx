import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

import logo from "../assets/images/genebio-logo.png";
import dnaBg from "../assets/images/DNA logo background.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0A2020] text-white lg:bg-[#454545]">
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

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="grid gap-16 px-6 pb-10 pt-14 sm:px-10 lg:grid-cols-[1.6fr_1fr_1fr] lg:gap-24 lg:px-16">
          
          {/* Left Section */}
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="GeneBio Healthcare"
                className="h-[62px] object-contain"
              />
            </Link>

            {/* Address */}
            <p className="mt-8 max-w-[430px] text-[17px] font-extralight leading-8 text-[#E1E1E1]">
              Reg. Off.: Sec-F, E-635 LDA Colony, Kanpur Road,
              Lucknow-226012
              <br />

              Production Unit: A-6/1A/2,
              Industrial Area, Kursi Road, Distt: Barabanki (U.P) 225302
            </p>

            {/* Contact Details */}
            <div className="mt-5 space-y-2 text-[17px] font-extralight text-[#E1E1E1]">
              
              {/* Email with Icon */}
              <a
                href="mailto:sp@genebiohealthcare.com"
                className="flex w-fit items-center gap-2 transition hover:text-[#24B8F4]"
              >
                <Mail size={16} className="shrink-0" />
                <span>sp@genebiohealthcare.com</span>
              </a>

              {/* Phone Numbers - No Icons */}
              <a
                href="tel:18008911499"
                className="block w-fit transition hover:text-[#24B8F4]"
              >
                1800-8911-499
              </a>

              <a
                href="tel:+919236392922"
                className="block w-fit transition hover:text-[#24B8F4]"
              >
                +91 9236392922
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-3">
              
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1CoSdFA7Ti/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition duration-300 hover:border-[#24B8F4] hover:bg-[#24B8F4]"
              >
                <FaFacebookF size={14} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/genebiohealthcareindia?igsh=NnJwMmh6eXUwbng4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition duration-300 hover:border-[#24B8F4] hover:bg-[#24B8F4]"
              >
                <FaInstagram size={15} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/genebio-healthcare/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition duration-300 hover:border-[#24B8F4] hover:bg-[#24B8F4]"
              >
                <FaLinkedinIn size={14} />
              </a>

              {/* Email */}
              <a
                href="mailto:sp@genebiohealthcare.com"
                aria-label="Email GeneBio Healthcare"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition duration-300 hover:border-[#24B8F4] hover:bg-[#24B8F4]"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Product Ecosystem */}
          <div>
            <h3 className="font-semibold text-[#24B8F4]">
              Product Ecosystem
            </h3>

            <div className="mt-8 space-y-5">
              <Link
                to="/products"
                className="block text-[#E4E4E4] transition hover:text-white"
              >
                Product Catalog
              </Link>

              <Link
                to="/company/manufacturing"
                className="block text-[#E4E4E4] transition hover:text-white"
              >
                Manufacturing Standards
              </Link>

              <Link
                to="/company/global-presence"
                className="block text-[#E4E4E4] transition hover:text-white"
              >
                Global Distribution
              </Link>
            </div>
          </div>

          {/* Governance */}
          <div>
            <h3 className="font-semibold text-[#24B8F4]">
              Governance
            </h3>

            <div className="mt-8 space-y-5">
              <Link
                to="/company/certifications"
                className="block text-[#E4E4E4] transition hover:text-white"
              >
                Certifications
              </Link>

              <Link
                to="/privacy-policy"
                className="block text-[#E4E4E4] transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-of-service"
                className="block text-[#E4E4E4] transition hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex min-h-[52px] max-w-[1280px] items-center justify-center px-6 py-3 text-center">
            <p className="text-[13px] tracking-wide text-[#B6B6B6]">
              © {new Date().getFullYear()} GeneBio Healthcare. Precision
              Biotechnology & Clinical Innovation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}