import { useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

import genoSnap from "../assets/images/genosnap.png";
import immunoScan from "../assets/images/immunoscan.png";
import metaboPath from "../assets/images/metabopath.png";

const products = [
  {
    category: "NEW RELEASE",
    title: "GenoSnap™ Rapid POCT",
    description:
      "Ultra-fast antigen detection with 99.8% sensitivity in under 10 minutes.",
    status: "In-Stock",
    image: genoSnap,
  },
  {
    category: "CLINICAL GRADE",
    title: "ImmunoScan™ Serology",
    description:
      "Advanced antibody profiling for respiratory and vector-borne pathogens.",
    status: "Global Shipping",
    image: immunoScan,
  },
  {
    category: "AI-INTEGRATED",
    title: "MetaboPath™ Analyze",
    description:
      "Real-time metabolic data analysis powered by proprietary neural algorithms.",
    status: "Certification Pending",
    image: metaboPath,
  },
];

const InnovationSpotlight = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const scrollAmount = sliderRef.current.clientWidth * 0.7;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="overflow-hidden bg-[#F8FAFA] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 md:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-[32px] font-bold leading-tight tracking-[-0.03em] text-[#171B1C] md:text-[40px]">
              Innovation Spotlight
            </h2>

            <p className="mt-2 text-[13px] text-[#536064] md:text-[14px]">
              Our latest breakthrough diagnostic platforms.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="hidden shrink-0 items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6B777A] text-[#263235] transition hover:bg-[#068D9C] hover:text-white"
              aria-label="Previous products"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6B777A] text-[#263235] transition hover:bg-[#068D9C] hover:text-white"
              aria-label="Next products"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={sliderRef}
          className="
            mt-10 flex gap-6
            overflow-x-auto scroll-smooth
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {products.map((product) => (
            <article
              key={product.title}
              className="
                flex min-w-[85%] flex-col
                overflow-hidden rounded-[28px]
                bg-white
                sm:min-w-[55%]
                lg:min-w-0 lg:flex-1
              "
            >
              {/* Image */}
              <div className="h-[260px] overflow-hidden md:h-[290px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col px-7 pb-7 pt-8">
                <p className="text-[13px] font-medium text-[#18BFEA]">
                  {product.category}
                </p>

                <h3 className="mt-3 text-[22px] font-medium leading-[1.25] tracking-[-0.02em] text-[#202526] md:text-[24px]">
                  {product.title}
                </h3>

                <p className="mt-5 min-h-[58px] text-[14px] leading-[1.55] text-[#566164]">
                  {product.description}
                </p>

                <div className="mt-7 border-t border-[#E2E6E7]" />

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="text-[14px] font-bold text-[#222829]">
                    {product.status}
                  </span>

                  <a
                    href="#products"
                    className="flex shrink-0 items-center gap-1 text-[13px] font-medium text-[#18BFEA] transition hover:text-[#068D9C]"
                  >
                    LEARN MORE
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Controls */}
        <div className="mt-6 flex justify-end gap-3 sm:hidden">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6B777A]"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6B777A]"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default InnovationSpotlight;