
import { useEffect, useState } from "react";
import {
  X,
  ArrowRight,
  TestTube2,
  Microscope,
  FlaskConical,
  FileCheck,
  BriefcaseBusiness,
} from "lucide-react";

const enquiryItems = [
  {
    icon: TestTube2,
    title: "Rapid Test Kits",
    description: "Wide range of rapid diagnostic test kits",
  },
  {
    icon: Microscope,
    title: "ELISA Test Kits",
    description: "Reliable ELISA diagnostic solutions",
  },
  {
    icon: FlaskConical,
    title: "Biochemistry & Reagents",
    description: "Biochemistry products and laboratory reagents",
  },
  {
    icon: FileCheck,
    title: "GeM & OEM Authorization",
    description: "OEM authorization and institutional supply enquiries",
  },
];

export default function BusinessEnquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleEnquiry = () => {
    setIsOpen(false);

    setTimeout(() => {
      const contactSection = document.getElementById("contact");

      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 200);
  };

  return (
    <>
      {/* Floating Business Enquiry Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open Business Enquiry"
        className="fixed right-0 top-1/2 z-[90] flex -translate-y-1/2 items-center gap-2 rounded-l-lg bg-[#1b567e] px-3 py-4 text-white shadow-lg transition-all duration-300 hover:bg-[#1C5272] hover:shadow-xl md:px-4"
      >
        <BriefcaseBusiness size={18} />

        <span className="rotate-180 text-[10px] font-extrabold uppercase tracking-[0.13em] [writing-mode:vertical-rl]">
          For OEM & Export Enquiries
        </span>
      </button>

      {/* Popup */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[999] flex animate-in fade-in items-center justify-center bg-[#071521]/70 px-4 py-6 backdrop-blur-sm duration-300"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="business-enquiry-title"
            className="relative max-h-[90vh] w-full max-w-[770px] animate-in fade-in zoom-in-95 overflow-y-auto rounded-[18px] border border-white/10 bg-[#12344B] p-5 text-white shadow-2xl duration-300 sm:p-8"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close popup"
              className="absolute right-5 top-5 rounded-full p-1 text-white/80 transition-all duration-300 hover:rotate-90 hover:text-sky-300"
            >
              <X size={22} />
            </button>

            {/* Label */}
            <div className="mb-5 inline-flex rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300">
                Global Business Enquiries
              </span>
            </div>

            {/* Heading */}
            <h2
              id="business-enquiry-title"
              className="max-w-[600px] pr-7 text-2xl font-bold leading-tight tracking-tight sm:text-[30px]"
            >
              Export & OEM{" "}
              <span className="text-sky-300">Enquiry</span>
            </h2>

            <p className="mt-3 max-w-[650px] text-[13px] leading-6 text-white/75 sm:text-[14px]">
              Partner with GeneBio Healthcare for high-quality In Vitro
              Diagnostic (IVD) products, OEM manufacturing and global
              distribution opportunities.
            </p>

            {/* Divider */}
            <div className="my-5 border-t border-white/15 sm:my-6" />

            {/* Enquiry Categories */}
            <div className="space-y-4">
              {enquiryItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.04] p-3 transition-all duration-300 hover:border-sky-300/30 hover:bg-white/[0.08] sm:gap-4 sm:p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#12344B] transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <div>
                      <h3 className="text-[13px] font-bold text-white sm:text-[15px]">
                        {item.title}
                      </h3>

                      <p className="mt-0.5 text-[11px] leading-5 text-white/65 sm:text-[12px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={handleEnquiry}
              className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 text-[13px] font-bold text-white shadow-lg shadow-sky-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-sky-500/20 active:scale-[0.98] sm:h-[50px] sm:text-[14px]"
            >
              Submit Your Enquiry
              <ArrowRight size={17} />
            </button>

            {/* Footer Text */}
            <p className="mt-3 text-center text-[10px] leading-5 text-white/55 sm:text-[11px]">
              Explore business, export and OEM partnership opportunities
              with GeneBio Healthcare.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
