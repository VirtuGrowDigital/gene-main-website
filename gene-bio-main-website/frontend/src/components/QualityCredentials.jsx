import {
  BriefcaseBusiness,
  Building2,
  BadgeCheck,
  ShieldCheck,
  ClipboardCheck,
  ArrowUpRight,
} from "lucide-react";

import iso13485 from "../assets/images/ISO - 13485_New.pdf";
import iso9001 from "../assets/images/ISO - 9001.pdf";
import ceCertificate from "../assets/images/CE & WHO-GMPCertificate-1.pdf";
import zedCertificate from "../assets/images/Zed_MSME_Certificate.pdf";
import udyamCertificate from "../assets/images/Udyam Certificate.pdf";

const credentials = [
  {
    icon: BriefcaseBusiness,
    title: "ISO 13485:2016",
    description:
      "Certified Quality Management System for Medical Devices covering the design, development, manufacturing and sale of In-Vitro Diagnostic (IVD) kits.",
    pdf: iso13485,
  },
  {
    icon: BadgeCheck,
    title: "ISO 9001:2015",
    description:
      "Certified Quality Management System demonstrating consistent quality, operational excellence and continual improvement across manufacturing processes.",
    pdf: iso9001,
  },
  {
    icon: ShieldCheck,
    title: "CE Compliance",
    description:
      "Complies with the Medical Devices Directive (93/42/EEC), enabling internationally recognized quality and safety standards for diagnostic products.",
    pdf: ceCertificate,
  },
  {
    icon: ClipboardCheck,
    title: "MSME ZED Certified",
    description:
      "Recognized under the MSME Sustainable (ZED) Certification Scheme for Zero Defect, Zero Effect manufacturing and sustainable business practices.",
    pdf: zedCertificate,
  },
  {
    icon: Building2,
    title: "Udyam Registered",
    description:
      "Registered with the Ministry of MSME, Government of India, as a Micro Manufacturing Enterprise under the Udyam Registration scheme.",
    pdf: udyamCertificate,
  },
];

export default function QualityCredentials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1180px] px-6">
        {/* Heading */}

        <div className="text-center">
          <h2 className="text-[54px] font-bold text-[#20C9EE]">
            Quality Credentials
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#555]">
            GeneBio Healthcare operates under internationally recognized
            quality management systems and government certifications,
            ensuring compliance, safety and manufacturing excellence.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {credentials.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-[22px] border border-[#DCEFF8] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#20C9EE] hover:shadow-xl"
              >
                {/* Icon */}

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#ECF9FF]">
                  <Icon
                    className="text-[#20C9EE]"
                    size={24}
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}

                <h3 className="mt-8 text-[36px] font-bold leading-tight text-[#303030]">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-4 text-[15px] leading-7 text-[#666]">
                  {item.description}
                </p>

                {/* PDF Link */}

                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#20C9EE] hover:underline"
                >
                  View Certificate
                  <ArrowUpRight size={14} />
                </a>
              </div>
            );
          })}

          {/* Dark Card */}

          <div className="rounded-[22px] bg-[#2F3133] p-8 text-white">
            <h3 className="text-[38px] font-bold leading-tight">
              Request Custom
              <br />
              Audits
            </h3>

            <p className="mt-5 text-[15px] leading-7 text-white/75">
              Government bodies can request direct on-site audits or detailed
              validation protocols.
            </p>

            <a
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#20C9EE]"
            >
              Contact Compliance Office
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}