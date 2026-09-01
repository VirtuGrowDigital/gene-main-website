import { useState } from "react";

export default function DistributorApplicationForm() {
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
      "New Distributor Application - GeneBio Healthcare"
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
          "Application submitted successfully! Our partnerships team will contact you soon."
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
        "Unable to submit your application. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#FAFBFC] py-24">
      <div className="mx-auto max-w-[1180px] px-5">

        {/* Heading */}

        <div className="text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-[#27BDF3]">
            Partnership Application
          </p>

          <h2 className="mt-5 text-[52px] font-bold leading-tight text-[#1D1D1D]">
            Apply to Become
            <br />
            a GeneBio Distributor
          </h2>

          <p className="mx-auto mt-6 max-w-[700px] text-[17px] leading-8 text-[#666]">
            Fill out the information below and our partnerships team will
            contact you within 2–3 business days.
          </p>
        </div>

        {/* Form Card */}

        <div className="mt-16 rounded-[34px] bg-white p-12 shadow-[0_25px_70px_rgba(0,0,0,0.08)]">

          <form
            onSubmit={handleSubmit}
            className="space-y-8"
          >

            {/* Row 1 */}

            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-3 block text-sm font-semibold text-[#222]">
                  Full Name
                </label>

                <input
                  type="text"
                  name="full_name"
                  placeholder="John Doe"
                  required
                  className="h-[58px] w-full rounded-xl border border-[#E5E7EB] px-5 outline-none transition focus:border-[#27BDF3]"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold text-[#222]">
                  Company Name
                </label>

                <input
                  type="text"
                  name="company_name"
                  placeholder="ABC Healthcare Pvt Ltd"
                  required
                  className="h-[58px] w-full rounded-xl border border-[#E5E7EB] px-5 outline-none transition focus:border-[#27BDF3]"
                />
              </div>

            </div>

            {/* Row 2 */}

            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-3 block text-sm font-semibold text-[#222]">
                  Business Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  required
                  className="h-[58px] w-full rounded-xl border border-[#E5E7EB] px-5 outline-none transition focus:border-[#27BDF3]"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold text-[#222]">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 9876543210"
                  required
                  className="h-[58px] w-full rounded-xl border border-[#E5E7EB] px-5 outline-none transition focus:border-[#27BDF3]"
                />
              </div>

            </div>

            {/* Row 3 */}

            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-3 block text-sm font-semibold text-[#222]">
                  Country
                </label>

                <input
                  type="text"
                  name="country"
                  placeholder="India"
                  required
                  className="h-[58px] w-full rounded-xl border border-[#E5E7EB] px-5 outline-none transition focus:border-[#27BDF3]"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold text-[#222]">
                  Years in Distribution
                </label>

                <input
                  type="text"
                  name="years_in_distribution"
                  placeholder="10 Years"
                  required
                  className="h-[58px] w-full rounded-xl border border-[#E5E7EB] px-5 outline-none transition focus:border-[#27BDF3]"
                />
              </div>

            </div>

            {/* Message */}

            <div>
              <label className="mb-3 block text-sm font-semibold text-[#222]">
                Tell us about your business
              </label>

              <textarea
                name="message"
                rows={6}
                required
                placeholder="Describe your distribution network, healthcare experience and business goals..."
                className="w-full rounded-2xl border border-[#E5E7EB] p-5 outline-none transition focus:border-[#27BDF3]"
              />
            </div>

            {/* Checkbox */}

            <label className="flex items-center gap-3 text-[15px] text-[#555]">
              <input
                type="checkbox"
                name="consent"
                value="I agree to be contacted by GeneBio Healthcare"
                required
                className="h-5 w-5 accent-[#27BDF3]"
              />

              I agree to be contacted by GeneBio Healthcare.
            </label>

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
              className="rounded-xl bg-[#27BDF3] px-10 py-4 text-[16px] font-semibold text-white transition hover:bg-[#15AEE8] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting
                ? "Submitting Application..."
                : "Submit Application"}
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}