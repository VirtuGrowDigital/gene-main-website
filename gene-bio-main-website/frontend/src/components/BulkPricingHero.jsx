import { BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import heroBg from "../assets/images/bulk-hero.png";
import catalog from "../assets/images/GeneBio Healthcare Products_20240930_134047_0000.pdf";

export default function BulkPricingHero() {
  const navigate = useNavigate();

  const handleInquiryClick = () => {
    // If already on the Bulk Pricing page
    if (window.location.pathname === "/partners/bulk-pricing") {
      const element = document.getElementById("bulk-inquiry");

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    // Navigate to Bulk Pricing page first
    navigate("/partners/bulk-pricing");

    // Wait for the page to render, then scroll
    setTimeout(() => {
      const element = document.getElementById("bulk-inquiry");

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  return (
    <section className="relative overflow-hidden bg-[#F9FBFC]">

      {/* Background Image */}
      <img
        src={heroBg}
        alt="Bulk Pricing Hero"
        className="absolute right-0 top-0 h-full w-[60%] object-cover opacity-90"
      />

      {/* Left White Fade */}
      <div className="absolute inset-y-0 left-0 w-[75%] bg-gradient-to-r from-white via-white/95 to-transparent" />

      {/* Blue Glow */}
      <div className="absolute right-24 top-48 h-40 w-40 rounded-full bg-[#8DE8FF]/60 blur-[120px]" />

      <div className="relative z-20">

        {/* Navbar */}
        <div className="pt-8">
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="mx-auto grid min-h-[640px] max-w-[1180px] items-center gap-12 px-5 pt-20 sm:pt-24 lg:grid-cols-2 lg:pt-0">

          {/* LEFT */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-[#EAF8FF] px-4 py-2">

              <span className="mr-2 h-2 w-2 rounded-full bg-[#27BDF3]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#27BDF3]">
                Enterprise Solutions
              </span>

            </div>

            {/* Heading */}
            <h1 className="mt-8 text-[42px] font-bold leading-[1.08] tracking-[-0.03em] text-[#202020] md:text-[56px]">
              Get Competitive
              <br />

              <span className="text-[#29BDF4]">
                Bulk Pricing
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[480px] text-[16px] leading-8 text-[#555]">
              Empower your healthcare network with precision-engineered
              diagnostics and laboratory solutions at manufacturer-direct
              rates.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex gap-5">

              {/* Inquire Now */}
              <button
                type="button"
                onClick={handleInquiryClick}
                className="rounded-xl bg-[#29BDF4] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_15px_35px_rgba(41,189,244,.35)] transition hover:bg-[#17AFE6]"
              >
                Inquire Now
              </button>

              {/* Download Catalogue */}
              <a
                href={catalog}
                download="GeneBio-Healthcare-Catalogue.pdf"
                className="rounded-xl border border-[#BEEBFD] bg-white px-8 py-4 text-[15px] font-semibold text-[#29BDF4] transition hover:bg-[#F5FCFF]"
              >
                View Catalog
              </a>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-end">

            <div className="w-[360px] rounded-[28px] bg-white p-8 shadow-[0_35px_80px_rgba(0,0,0,0.14)]">

              {/* Capacity Header */}
              <div className="flex justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF8FF]">

                  <BarChart3
                    size={24}
                    className="text-[#29BDF4]"
                  />

                </div>

                <div className="text-right">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#999]">
                    Global Capacity
                  </p>

                  <h2 className="mt-2 text-[42px] font-bold text-[#29BDF4]">
                    50M+
                  </h2>

                  <p className="text-[18px] font-semibold text-[#29BDF4]">
                    Units / Year
                  </p>

                </div>

              </div>

              {/* Efficiency */}
              <div className="mt-10">

                <div className="h-[7px] overflow-hidden rounded-full bg-[#E5EEF3]">

                  <div className="h-full w-[98%] rounded-full bg-[#29BDF4]" />

                </div>

                <div className="mt-4 flex justify-between text-[13px]">

                  <span className="text-[#555]">
                    Export Efficiency
                  </span>

                  <span className="font-semibold">
                    98.4%
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}