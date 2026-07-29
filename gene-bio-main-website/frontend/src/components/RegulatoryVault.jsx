import { Download, FileText } from "lucide-react";

const documents = [
  {
    name: "Corporate Profile",
    version: "v3.2",
    date: "12 Jan 2026",
    type: "PDF",
  },
  {
    name: "ISO 13485:2016 Certificate",
    version: "v2.1",
    date: "08 Dec 2025",
    type: "PDF",
  },
  {
    name: "ICMR Validation Report",
    version: "v1.5",
    date: "15 Nov 2025",
    type: "PDF",
  },
  {
    name: "GMP Compliance Certificate",
    version: "v4.0",
    date: "22 Oct 2025",
    type: "PDF",
  },
  {
    name: "Environmental Report",
    version: "v2.0",
    date: "18 Sep 2025",
    type: "PDF",
  },
];

export default function RegulatoryVault() {
  return (
    <section className="bg-white py-16 lg:py-28">
      <div className="mx-auto max-w-[1180px] px-5 md:px-6 lg:px-6">
        {/* Heading */}

        <div className="text-center">
          <h2 className="text-[34px] font-bold text-[#20C9EE] md:text-[44px] lg:text-[54px]">
            Regulatory Vault
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-[#666] md:text-[15px]">
            Access our latest compliance documents, certifications, and
            regulatory approvals for transparent verification.
          </p>
        </div>

        {/* ========================= */}
        {/* Desktop Table */}
        {/* ========================= */}

        <div className="mt-16 hidden overflow-hidden rounded-[28px] border border-[#E6EEF2] shadow-sm lg:block">
          {/* Header */}

          <div className="grid grid-cols-12 bg-[#F7FAFC] px-8 py-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#666]">
            <div className="col-span-5">Document</div>

            <div className="col-span-2">Version</div>

            <div className="col-span-2">Release Date</div>

            <div className="col-span-1">Type</div>

            <div className="col-span-2 text-right">Action</div>
          </div>

          {/* Rows */}

          {documents.map((doc, index) => (
            <div
              key={index}
              className="grid grid-cols-12 items-center border-t border-[#EEF3F5] px-8 py-6 transition hover:bg-[#FAFCFD]"
            >
              <div className="col-span-5 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ECF9FF]">
                  <FileText size={22} className="text-[#20C9EE]" />
                </div>

                <span className="font-semibold text-[#333]">
                  {doc.name}
                </span>
              </div>

              <div className="col-span-2 text-[#666]">{doc.version}</div>

              <div className="col-span-2 text-[#666]">{doc.date}</div>

              <div className="col-span-1">
                <span className="rounded-full bg-[#EAF9FE] px-3 py-1 text-[11px] font-semibold text-[#20C9EE]">
                  {doc.type}
                </span>
              </div>

              <div className="col-span-2 flex justify-end">
                <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8EAF2] transition hover:border-[#20C9EE] hover:bg-[#20C9EE] hover:text-white">
                  <Download size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ========================= */}
        {/* Mobile Cards */}
        {/* ========================= */}

        <div className="mt-10 space-y-4 lg:hidden">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#E6EEF2] bg-white p-5 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ECF9FF]">
                  <FileText size={20} className="text-[#20C9EE]" />
                </div>

                <div className="flex-1">
                  <h3 className="text-[16px] font-semibold leading-6 text-[#333]">
                    {doc.name}
                  </h3>

                  <div className="mt-4 grid grid-cols-2 gap-y-3 text-[13px]">
                    <div>
                      <p className="text-[#999]">Version</p>
                      <p className="mt-1 font-medium text-[#333]">
                        {doc.version}
                      </p>
                    </div>

                    <div>
                      <p className="text-[#999]">Type</p>

                      <span className="mt-1 inline-flex rounded-full bg-[#EAF9FE] px-3 py-1 text-[11px] font-semibold text-[#20C9EE]">
                        {doc.type}
                      </span>
                    </div>

                    <div className="col-span-2">
                      <p className="text-[#999]">Release Date</p>

                      <p className="mt-1 font-medium text-[#333]">
                        {doc.date}
                      </p>
                    </div>
                  </div>

                  <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#20C9EE] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#10B9DC]">
                    <Download size={18} />
                    Download Document
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}