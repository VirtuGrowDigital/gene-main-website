import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What are the Minimum Order Quantities (MOQs)?",
    answer:
      "MOQ depends on the product category. Diagnostic products generally begin at 1,000 units, while POCT devices may have lower minimums. Contact us for product-specific requirements.",
  },
  {
    question: "What is the typical lead time for large orders?",
    answer:
      "Lead time generally ranges from 2–6 weeks depending on product availability, production schedules, and shipping destination.",
  },
  {
    question: "Do you provide samples before bulk commitment?",
    answer:
      "Yes. Sample kits are available for evaluation before placing large enterprise orders. Terms vary by product category.",
  },
  {
    question: "Can you manufacture under our own brand (OEM/Private Label)?",
    answer:
      "Yes. We provide OEM and private-label manufacturing with complete regulatory and packaging support.",
  },
];

export default function BulkFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#F7F8FA] py-24">
      <div className="mx-auto grid max-w-[1180px] gap-16 px-5 lg:grid-cols-[330px_1fr]">
        {/* Left */}

        <div>
          <h2 className="text-[58px] font-bold leading-none">
            Bulk Pricing
            <br />
            <span className="text-[#2CBDF5]">FAQ</span>
          </h2>

          <p className="mt-8 text-[16px] leading-8 text-[#666]">
            Everything you need to know about enterprise procurement.
          </p>
        </div>

        {/* Right */}

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition-all"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between px-7 py-6 text-left"
                >
                  <h3 className="text-[18px] font-semibold text-[#202020]">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-7 text-[15px] leading-8 text-[#666]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}