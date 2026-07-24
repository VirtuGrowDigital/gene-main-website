import {
    Download,
    FileText,
  } from "lucide-react";
  
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
      <section className="bg-white py-28">
        <div className="mx-auto max-w-[1180px] px-6">
  
          {/* Heading */}
  
          <div className="text-center">
            <h2 className="text-[54px] font-bold text-[#20C9EE]">
              Regulatory Vault
            </h2>
  
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#666]">
              Access our latest compliance documents, certifications, and
              regulatory approvals for transparent verification.
            </p>
          </div>
  
          {/* Table */}
  
          <div className="mt-16 overflow-hidden rounded-[28px] border border-[#E6EEF2] shadow-sm">
  
            {/* Header */}
  
            <div className="grid grid-cols-12 bg-[#F7FAFC] px-8 py-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#666]">
  
              <div className="col-span-5">
                Document
              </div>
  
              <div className="col-span-2">
                Version
              </div>
  
              <div className="col-span-2">
                Release Date
              </div>
  
              <div className="col-span-1">
                Type
              </div>
  
              <div className="col-span-2 text-right">
                Action
              </div>
  
            </div>
  
            {/* Rows */}
  
            {documents.map((doc, index) => (
              <div
                key={index}
                className="grid grid-cols-12 items-center border-t border-[#EEF3F5] px-8 py-6 transition hover:bg-[#FAFCFD]"
              >
  
                {/* Name */}
  
                <div className="col-span-5 flex items-center gap-4">
  
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ECF9FF]">
                    <FileText
                      size={22}
                      className="text-[#20C9EE]"
                    />
                  </div>
  
                  <span className="font-semibold text-[#333]">
                    {doc.name}
                  </span>
  
                </div>
  
                {/* Version */}
  
                <div className="col-span-2 text-[#666]">
                  {doc.version}
                </div>
  
                {/* Date */}
  
                <div className="col-span-2 text-[#666]">
                  {doc.date}
                </div>
  
                {/* Type */}
  
                <div className="col-span-1">
  
                  <span className="rounded-full bg-[#EAF9FE] px-3 py-1 text-[11px] font-semibold text-[#20C9EE]">
                    {doc.type}
                  </span>
  
                </div>
  
                {/* Download */}
  
                <div className="col-span-2 flex justify-end">
  
                  <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8EAF2] transition hover:border-[#20C9EE] hover:bg-[#20C9EE] hover:text-white">
                    <Download size={18} />
                  </button>
  
                </div>
  
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }