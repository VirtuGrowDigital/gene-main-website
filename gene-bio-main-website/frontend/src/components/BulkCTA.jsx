import catalog from "../assets/images/GeneBio Healthcare Products_20240930_134047_0000.pdf";
export default function BulkCTA() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1180px] px-5 md:px-6">
        <div className="rounded-[24px] bg-[#2CBDF5] px-6 py-12 text-center shadow-[0_35px_80px_rgba(44,189,245,.35)] lg:rounded-[36px] lg:px-12 lg:py-24">
          <h2 className="mx-auto max-w-[700px] text-[36px] font-bold leading-[1.1] text-white md:text-[48px] lg:text-[60px]">
            Ready to Scale Your Healthcare Supply?
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-[15px] leading-7 text-white/90 md:text-[16px] lg:mt-8 lg:text-[17px] lg:leading-8">
            Speak with our enterprise consultants today to secure tailored
            pricing agreements and streamline your global diagnostics
            procurement.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-5 lg:mt-14">
          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sp@genebiohealthcare.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex w-full items-center justify-center rounded-xl bg-white px-8 py-4 text-[15px] font-semibold text-[#2CBDF5] transition hover:bg-[#F5FCFF] sm:w-auto lg:px-9"
>
  Contact Our Enterprise Team
</a>

<a
  href={catalog}
  download="GeneBio-Healthcare-Catalogue.pdf"
  className="inline-flex w-full items-center justify-center rounded-xl border border-white/40 px-8 py-4 text-[15px] font-semibold text-white transition hover:bg-white hover:text-[#2CBDF5] sm:w-auto lg:px-9"
>
  Download Catalogue
</a>
          </div>
        </div>
      </div>
    </section>
  );
}