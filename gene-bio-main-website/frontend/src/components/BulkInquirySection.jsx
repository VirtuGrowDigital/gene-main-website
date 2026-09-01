import { useState } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";

const features = [
  "Customized Logistics Planning",
  "Volume-based Discounts",
  "Regulatory Documentation Support",
];

export default function BulkInquirySection() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "cd6a1416-78d0-45f1-a8fc-f9a9cc237cce"
    );

    formData.append(
      "subject",
      "New Bulk Inquiry - GeneBio Healthcare"
    );

    formData.append(
      "from_name",
      "GeneBio Healthcare Website"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus(
          "Your bulk inquiry has been submitted successfully! Our enterprise team will contact you soon."
        );

        event.target.reset();
      } else {
        setStatus(
          data.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setStatus(
        "Unable to submit your inquiry. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-28">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-20 px-5 lg:grid-cols-[360px_1fr]">

        {/* LEFT */}

        <div className="pt-0 lg:pt-28">
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

                <span className="text-[17px] text-[#333]">
                  {item}
                </span>
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

            <form
              onSubmit={handleSubmit}
              className="space-y-8"
            >

              {/* Row 1 */}

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                <Input
                  label="Company Name"
                  name="company_name"
                  placeholder="Global Health Corp"
                  required
                />

                <Select
                  label="Country"
                  name="country"
                  options={[
                    "United States",
                    "India",
                    "UAE",
                    "Other",
                  ]}
                  required
                />

              </div>

              {/* Row 2 */}

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                <Select
                  label="Product Category"
                  name="product_category"
                  options={[
                    "Diagnostics",
                    "Rapid Tests",
                    "Biochemistry",
                  ]}
                  required
                />

                <Input
                  label="Product Name"
                  name="product_name"
                  placeholder="e.g. Rapid Antigen Test Kit"
                  required
                />

              </div>

              {/* Row 3 */}

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                <Input
                  label="Required Quantity"
                  name="required_quantity"
                  placeholder="5000"
                  required
                />

                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  required
                />

              </div>

              {/* Email */}

              <Input
                label="Email Address"
                name="email"
                type="email"
                placeholder="procurement@company.com"
                required
              />

              {/* Message */}

              <div>
                <Label>
                  Message / Special Requirements
                </Label>

                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Provide additional details regarding shipping schedules or documentation..."
                  className="w-full resize-none border border-[#BEEBFD] px-4 py-4 text-[15px] outline-none transition focus:border-[#2CBDF5]"
                />
              </div>

              {/* Status Message */}

              {status && (
                <p
                  className={`text-[14px] font-medium ${
                    status.includes("successfully")
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {status}
                </p>
              )}

              {/* Submit */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="h-[60px] w-full rounded-[16px] bg-[#2CBDF5] text-[18px] font-semibold text-white shadow-[0_18px_40px_rgba(44,189,245,.35)] transition hover:bg-[#1FB5EE] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting
                  ? "Submitting Query..."
                  : "Submit Query"}
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

function Input({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}) {
  return (
    <div>
      <Label>{label}</Label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="h-[46px] w-full border border-[#BEEBFD] px-4 text-[15px] outline-none transition focus:border-[#2CBDF5]"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
  required = false,
}) {
  return (
    <div>
      <Label>{label}</Label>

      <div className="relative">
        <select
          name={name}
          required={required}
          className="h-[46px] w-full appearance-none border border-[#BEEBFD] bg-white px-4 text-[15px] outline-none transition focus:border-[#2CBDF5]"
        >
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
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