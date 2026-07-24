import {
    FileText,
    BookOpen,
    ShieldCheck,
    ExternalLink,
  } from "lucide-react";
  
  const resources = [
    {
      icon: FileText,
      title: "2024 White Paper",
    },
    {
      icon: BookOpen,
      title: "Product Catalog",
    },
    {
      icon: ShieldCheck,
      title: "Compliance Guides",
    },
  ];
  
  export default function ResourcesCard() {
    return (
      <div className="rounded-[20px] border border-[#EEF2F5] bg-white p-7">
  
        <h3 className="text-[30px] font-semibold">
          Related Resources
        </h3>
  
        <div className="mt-8 space-y-4">
  
          {resources.map((item) => {
            const Icon = item.icon;
  
            return (
              <button
                key={item.title}
                className="flex w-full items-center justify-between rounded-xl bg-[#F7F8FA] px-5 py-4 transition hover:bg-[#EDF8FD]"
              >
                <div className="flex items-center gap-3">
  
                  <Icon
                    size={18}
                    className="text-[#2CBDF5]"
                  />
  
                  <span className="font-medium">
                    {item.title}
                  </span>
  
                </div>
  
                <ExternalLink size={16} />
  
              </button>
            );
          })}
  
        </div>
  
      </div>
    );
  }