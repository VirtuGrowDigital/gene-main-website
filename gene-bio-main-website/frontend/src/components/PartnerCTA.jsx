import { Link } from "react-router-dom";
import catalogPdf from "../assets/images/GeneBio Healthcare Products_20240930_134047_0000.pdf";

export default function PartnerCTA() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="rounded-[32px] bg-[#27B8F2] px-8 py-20 text-center">
          
          <h2 className="text-5xl font-bold text-black">
            Partner With Excellence
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-extralight leading-8 text-black/80">
            GeneBio Healthcare provides customized logistics and volume-based
            pricing for hospitals, government agencies and clinical chains
            worldwide.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-5">
            
            {/* Bulk Pricing Inquiry */}

            <Link
              to="/partners/bulk-pricing"
              className="
                w-full
                rounded-xl
                bg-white
                px-8
                py-4
                text-center
                font-semibold
                text-black
                transition
                hover:bg-gray-100
                sm:w-auto
              "
            >
              Inquire for Bulk Pricing
            </Link>

            {/* Download Catalog */}

            <a
              href={catalogPdf}
              download="GeneBio-Healthcare-Full-Catalog.pdf"
              className="
                w-full
                rounded-xl
                border
                border-white
                px-8
                py-4
                text-center
                font-semibold
                text-white
                transition
                hover:bg-white
                hover:text-[#27B8F2]
                sm:w-auto
              "
            >
              Download Full Catalog
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}