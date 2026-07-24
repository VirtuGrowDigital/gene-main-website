export default function TrendingSidebar() {
    const items = [
      "How GeneBio is redefining the sub-15 minute PCR benchmark.",
      "The panel discussion on CRISPR and human lineage at GENECON '24.",
      "Resilient manufacturing: Protecting our global reagents pipeline.",
    ];
  
    return (
      <div className="rounded-[20px] border border-[#EEF2F5] bg-white p-7">
  
        <h3 className="text-[28px] font-semibold">
          Trending Now
        </h3>
  
        <div className="mt-8 space-y-8">
  
          {items.map((item, index) => (
            <div key={index}>
  
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#999]">
                #{["Diagnostics", "Bioethics", "SupplyChain"][index]}
              </p>
  
              <p className="mt-2 text-[16px] font-medium leading-7 text-[#222]">
                {item}
              </p>
  
            </div>
          ))}
  
        </div>
  
      </div>
    );
  }