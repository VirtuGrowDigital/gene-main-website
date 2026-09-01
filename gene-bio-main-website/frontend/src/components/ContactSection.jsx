import React, { useState } from "react";
import phoneIcon from "../assets/icons/phone.png";
import mailIcon from "../assets/icons/mail.png";

const ContactSection = () => {
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
      "New Inquiry from GeneBio Healthcare Website"
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
        setStatus("Thank you! Your inquiry has been submitted successfully.");
        event.target.reset();
      } else {
        setStatus(
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
                    alt="Email"
                    className="h-6 w-6 object-contain"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7D8A8C]">
                    Email Us
                  </p>

                  <a
                    href="mailto:sp@genebiohealthcare.com"
                    className="mt-1 block text-[16px] font-semibold text-[#191C1D] transition hover:text-[#21CAFF]"
                  >
                    sp@genebiohealthcare.com
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F2F6F7]">
                  <img
                    src={phoneIcon}
                    alt="Phone"
                    className="h-6 w-6 object-contain"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7D8A8C]">
                    Global Support
                  </p>

                  <a
                    href="tel:18008911499"
                    className="mt-1 block text-[16px] font-semibold text-[#191C1D] transition hover:text-[#21CAFF]"
                  >
                    1800-8911-499
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div>
            <div className="rounded-[28px] bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.10)]">
              
              <form onSubmit={handleSubmit}>
                
                <div className="grid gap-5 md:grid-cols-2">
                  
                  {/* FULL NAME */}
                  <div>
                    <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#6A7475]">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="h-12 w-full rounded-lg border border-[#DDE5E7] px-4 text-[14px] outline-none transition focus:border-[#21CAFF]"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#6A7475]">
                      Work Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      className="h-12 w-full rounded-lg border border-[#DDE5E7] px-4 text-[14px] outline-none transition focus:border-[#21CAFF]"
                    />
                  </div>
                </div>

                {/* INQUIRY TYPE */}
                <div className="mt-5">
                  <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#6A7475]">
                    Inquiry Type
                  </label>

                  <select
                    name="inquiry_type"
                    required
                    className="h-12 w-full rounded-lg border border-[#DDE5E7] px-4 text-[14px] outline-none focus:border-[#21CAFF]"
                  >
                    <option value="">
                      Select Inquiry Type
                    </option>

                    <option>
                      Bulk Distribution Inquiry
                    </option>

                    <option>
                      Become a Partner
                    </option>

                    <option>
                      Product Support
                    </option>

                    <option>
                      General Inquiry
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="mt-5">
                  <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#6A7475]">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your requirements..."
                    className="w-full rounded-lg border border-[#DDE5E7] p-4 text-[14px] outline-none transition focus:border-[#21CAFF]"
                  />
                </div>

                {/* STATUS MESSAGE */}
                {status && (
                  <p
                    className={`mt-5 text-center text-[14px] font-medium ${
                      status.includes("successfully")
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {status}
                  </p>
                )}

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 h-12 w-full rounded-lg bg-[#21CAFF] text-[14px] font-semibold text-white transition hover:bg-[#0EAEE5] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Submit Inquiry"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;