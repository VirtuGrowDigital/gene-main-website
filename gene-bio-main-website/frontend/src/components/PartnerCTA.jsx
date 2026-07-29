export default function PartnerCTA() {
    return (
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="rounded-[32px] bg-[#27B8F2] px-8 py-20 text-center">
            <h2 className="text-5xl font-bold text-black">
              Partner With Excellence
            </h2>
  
            <p className="mx-auto font-extralight mt-6 max-w-2xl text-lg leading-8 text-black/80">
              GeneBio Healthcare provides customized logistics and volume-based
              pricing for hospitals, government agencies and clinical chains
              worldwide.
            </p>
  
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-5">
  <button
    className="
      w-full
      rounded-xl
      bg-white
      px-8
      py-4
      text-center
      font-semibold
      transition
      hover:bg-gray-100

      sm:w-auto
    "
  >
    Inquire for Bulk Pricing
  </button>

  <button
    className="
      w-full
      rounded-xl
      border
      border-white
      px-8
      py-4
      text-center
      font-semibold
      text-white
      transition
      hover:bg-white
      hover:text-[#27B8F2]

      sm:w-auto
    "
  >
    Download Full Catalog
  </button>
</div>
          </div>
        </div>
      </section>
    );
  }