import { Upload } from "lucide-react";

export default function DistributorApplicationForm() {
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

          <form className="space-y-8">

            {/* Row 1 */}

            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-3 block text-sm font-semibold text-[#222]">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="h-[58px] w-full rounded-xl border border-[#E5E7EB] px-5 outline-none transition focus:border-[#27BDF3]"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold text-[#222]">
                  Company Name
                </label>

                <input
                  type="text"
                  placeholder="ABC Healthcare Pvt Ltd"
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
                  placeholder="name@company.com"
                  className="h-[58px] w-full rounded-xl border border-[#E5E7EB] px-5 outline-none transition focus:border-[#27BDF3]"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold text-[#222]">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="+91 9876543210"
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
                  placeholder="India"
                  className="h-[58px] w-full rounded-xl border border-[#E5E7EB] px-5 outline-none transition focus:border-[#27BDF3]"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold text-[#222]">
                  Years in Distribution
                </label>

                <input
                  type="text"
                  placeholder="10 Years"
                  className="h-[58px] w-full rounded-xl border border-[#E5E7EB] px-5 outline-none transition focus:border-[#27BDF3]"
                />
              </div>

            </div>

            {/* Upload */}

            <div>

              <label className="mb-3 block text-sm font-semibold text-[#222]">
                Company Profile
              </label>

              <label className="flex h-[140px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#D7E7EF] transition hover:border-[#27BDF3]">

                <Upload
                  size={36}
                  className="text-[#27BDF3]"
                />

                <p className="mt-4 text-[15px] font-medium text-[#444]">
                  Click to upload Company Profile
                </p>

                <p className="mt-1 text-sm text-[#888]">
                  PDF, DOC or PPT (Max 10MB)
                </p>

                <input
                  type="file"
                  className="hidden"
                />

              </label>

            </div>

            {/* Message */}

            <div>

              <label className="mb-3 block text-sm font-semibold text-[#222]">
                Tell us about your business
              </label>

              <textarea
                rows={6}
                placeholder="Describe your distribution network, healthcare experience and business goals..."
                className="w-full rounded-2xl border border-[#E5E7EB] p-5 outline-none transition focus:border-[#27BDF3]"
              />

            </div>

            {/* Checkbox */}

            <label className="flex items-center gap-3 text-[15px] text-[#555]">

              <input
                type="checkbox"
                className="h-5 w-5 accent-[#27BDF3]"
              />

              I agree to be contacted by GeneBio Healthcare.

            </label>

            {/* Submit */}

            <button
              type="submit"
              className="rounded-xl bg-[#27BDF3] px-10 py-4 text-[16px] font-semibold text-white transition hover:bg-[#15AEE8]"
            >
              Submit Application
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}