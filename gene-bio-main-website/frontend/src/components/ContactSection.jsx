import React from "react";
import phoneIcon from "../assets/icons/phone.png";
import mailIcon from "../assets/icons/mail.png";

const ContactSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8">

        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">

          {/* LEFT SIDE */}
          <div>

            <h2 className="text-[42px] font-bold leading-none text-[#191C1D]">
              Start a Conversation.
            </h2>

            <p className="mt-5 max-w-[430px] text-[15px] leading-7 text-[#5D6668]">
              Our clinical specialists are ready to discuss your diagnostic
              requirements and provide tailored volume pricing.
            </p>

            <div className="mt-12 space-y-5">

              {/* EMAIL */}

              <div className="flex items-center gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F2F6F7]">
                  <img
                    src={mailIcon}
                    alt=""
                    className="h-6 w-6 object-contain"
                  />
                </div>

                <div>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7D8A8C]">
                    Email Us
                  </p>

                  <p className="mt-1 text-[16px] font-semibold text-[#191C1D]">
                    sp@genebiohealthcare.com
                  </p>

                </div>

              </div>

              {/* PHONE */}

              <div className="flex items-center gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F2F6F7]">
                  <img
                    src={phoneIcon}
                    alt=""
                    className="h-6 w-6 object-contain"
                  />
                </div>

                <div>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7D8A8C]">
                    Global Support
                  </p>

                  <p className="mt-1 text-[16px] font-semibold text-[#191C1D]">
                    1800-8911-499
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* FORM */}

          <div>

            <div className="rounded-[28px] bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.10)]">

              <div className="grid gap-5 md:grid-cols-2">

                <div>

                  <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#6A7475]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="h-12 w-full rounded-lg border border-[#DDE5E7] px-4 text-[14px] outline-none transition focus:border-[#21CAFF]"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#6A7475]">
                    Work Email
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="h-12 w-full rounded-lg border border-[#DDE5E7] px-4 text-[14px] outline-none transition focus:border-[#21CAFF]"
                  />

                </div>

              </div>

              <div className="mt-5">

                <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#6A7475]">
                  Inquiry Type
                </label>

                <select className="h-12 w-full rounded-lg border border-[#DDE5E7] px-4 text-[14px] outline-none focus:border-[#21CAFF]">

                  <option>Bulk Distribution Inquiry</option>
                  <option>Become a Partner</option>
                  <option>Product Support</option>
                  <option>General Inquiry</option>

                </select>

              </div>

              <div className="mt-5">

                <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#6A7475]">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="w-full rounded-lg border border-[#DDE5E7] p-4 text-[14px] outline-none transition focus:border-[#21CAFF]"
                />

              </div>

              <button className="mt-6 h-12 w-full rounded-lg bg-[#21CAFF] text-[14px] font-semibold text-white transition hover:bg-[#0EAEE5]">
                Submit Inquiry
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;