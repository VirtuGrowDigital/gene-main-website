import { CheckCircle2, ChevronDown } from "lucide-react";

const features = [
  "Customized Logistics Planning",
  "Volume-based Discounts",
  "Regulatory Documentation Support",
];

export default function BulkInquirySection() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-20 px-5 lg:grid-cols-[360px_1fr]">
        {/* LEFT */}

        <div className="pt-28">
          <h2 className="text-[55px] font-bold leading-[1.05] tracking-[-0.03em] text-[#202020]">
            Submit Your
            <br />
            Bulk Inquiry
          </h2>

          <p className="mt-8 text-[17px] leading-9 text-[#555]">
            Our enterprise team typically responds with a customized quote
            within 4–6 business hours. Complete the form to initiate the
            procurement process.
          </p>

          <div className="mt-14 space-y-5">
            {features.map((item) => (
              <div key={item} className="flex items-center gap-4">
                <CheckCircle2 size={20} className="text-[#2CBDF5]" />

                <span className="text-[17px] text-[#333]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}

        <div className="relative">
          {/* Corner */}

          <div className="absolute right-0 top-0 h-[120px] w-[120px] overflow-hidden rounded-tr-[30px]">
            <div className="absolute right-0 top-0 h-[180px] w-[180px] rounded-full bg-[#DDF5FF]" />
          </div>

          <div className="rounded-[34px] bg-white p-10 shadow-[0_35px_90px_rgba(0,0,0,0.14)]">
            <form className="space-y-8">
              {/* Row */}

              <div className="grid grid-cols-2 gap-6">
                <Input
                  label="Company Name"
                  placeholder="Global Health Corp"
                />

                <Select
                  label="Country"
                  options={["United States", "India", "UAE"]}
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Select
                  label="Product Category"
                  options={[
                    "Diagnostics",
                    "Rapid Tests",
                    "Biochemistry",
                  ]}
                />

                <Input
                  label="Product Name"
                  placeholder="e.g. Rapid Antigen Test Kit"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Input
                  label="Required Quantity"
                  placeholder="5000"
                />

                <Input
                  label="Phone Number"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <Input
                label="Email Address"
                placeholder="procurement@company.com"
              />

              <div>
                <Label>Message / Special Requirements</Label>

                <textarea
                  rows={4}
                  placeholder="Provide additional details regarding shipping schedules or documentation..."
                  className="w-full resize-none border border-[#BEEBFD] px-4 py-4 text-[15px] outline-none transition focus:border-[#2CBDF5]"
                />
              </div>

              <button className="h-[60px] w-full rounded-[16px] bg-[#2CBDF5] text-[18px] font-semibold text-white shadow-[0_18px_40px_rgba(44,189,245,.35)] transition hover:bg-[#1FB5EE]">
                Generate Custom Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------- */

function Label({ children }) {
  return (
    <label className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#555]">
      {children}
    </label>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <Label>{label}</Label>

      <input
        placeholder={placeholder}
        className="h-[46px] w-full border border-[#BEEBFD] px-4 text-[15px] outline-none transition focus:border-[#2CBDF5]"
      />
    </div>
  );
}

function Select({ label, options }) {
  return (
    <div>
      <Label>{label}</Label>

      <div className="relative">
        <select className="h-[46px] w-full appearance-none border border-[#BEEBFD] bg-white px-4 text-[15px] outline-none transition focus:border-[#2CBDF5]">
          {options.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#777]"
        />
      </div>
    </div>
  );
}