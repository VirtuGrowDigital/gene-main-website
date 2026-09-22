import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Award,
} from "lucide-react";

// =========================================================
// AWARD IMAGES
// =========================================================

import award1 from "../assets/images/award1.jpeg";
import award2 from "../assets/images/award2.jpeg";
import award3 from "../assets/images/award3.jpeg";
import award4 from "../assets/images/award4.jpeg";
import award5 from "../assets/images/award2.jpg.jpeg";

// =========================================================
// AWARDS DATA
// =========================================================

const awardImages = [
  {
    src: award1,
    alt: "GeneBio Healthcare Award",
  },
  {
    src: award2,
    alt: "GeneBio Healthcare Award Ceremony",
  },
  {
    src: award3,
    alt: "GeneBio Healthcare Leadership Award",
  },
  {
    src: award4,
    alt: "GeneBio Healthcare Award",
  },
  {
    src: award5,
    alt: "GeneBio Healthcare Recognition",
  },
];

// =========================================================
// COMPONENT
// =========================================================

export default function AwardsCollage() {
  const [selectedImage, setSelectedImage] = useState(null);

  // =========================================================
  // MOBILE CAROUSEL
  // =========================================================

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const [carouselIndex, setCarouselIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setCarouselIndex(
      emblaApi.selectedScrollSnap()
    );
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // =========================================================
  // OPEN IMAGE
  // =========================================================

  const openImage = (index) => {
    setSelectedImage(index);
  };

  // =========================================================
  // CLOSE IMAGE
  // =========================================================

  const closeImage = () => {
    setSelectedImage(null);
  };

  // =========================================================
  // NEXT FULLSCREEN IMAGE
  // =========================================================

  const nextImage = useCallback(() => {
    setSelectedImage((prev) => {
      if (prev === null) return null;

      return (
        (prev + 1) % awardImages.length
      );
    });
  }, []);

  // =========================================================
  // PREVIOUS FULLSCREEN IMAGE
  // =========================================================

  const prevImage = useCallback(() => {
    setSelectedImage((prev) => {
      if (prev === null) return null;

      return (
        (prev - 1 + awardImages.length) %
        awardImages.length
      );
    });
  }, []);

  // =========================================================
  // KEYBOARD NAVIGATION
  // =========================================================

  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        prevImage();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    selectedImage,
    nextImage,
    prevImage,
  ]);

  return (
    <>
      {/* =====================================================
          AWARDS SECTION
      ===================================================== */}

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1180px] px-5 md:px-6 lg:px-8">

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="mb-10 text-center md:mb-14">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EEF9FD] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#29BDF4]">
              <Award size={15} />
              Recognition
            </div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="text-[34px] font-bold leading-tight text-[#202020] sm:text-[40px] lg:text-[46px]"
            >
              Awards &{" "}
              <span className="text-[#29BDF4]">
                Recognition
              </span>
            </motion.h2>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#666]">
              Celebrating the people and milestones that
              continue to shape GeneBio Healthcare's journey.
            </p>

          </div>

          {/* =================================================
              DESKTOP COLLAGE
              lg and above
              
              IMPORTANT:
              No row-span conflicts.
          ================================================= */}

          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-4">

            {/* =================================================
                LEFT LARGE IMAGE
            ================================================= */}

            <AwardImage
              image={awardImages[0]}
              index={0}
              onClick={openImage}
              className="col-span-7 h-[620px]"
            />

            {/* =================================================
                RIGHT SIDE
            ================================================= */}

            <div className="col-span-5 flex flex-col gap-4">

              {/* IMAGE 2 */}

              <AwardImage
                image={awardImages[1]}
                index={1}
                onClick={openImage}
                className="h-[200px]"
              />

              {/* IMAGE 3 */}

              <AwardImage
                image={awardImages[2]}
                index={2}
                onClick={openImage}
                className="h-[200px]"
              />

              {/* IMAGE 4 */}

              <AwardImage
                image={awardImages[3]}
                index={3}
                onClick={openImage}
                className="h-[200px]"
              />

            </div>

            {/* =================================================
                IMAGE 5
            ================================================= */}

            <AwardImage
              image={awardImages[4]}
              index={4}
              onClick={openImage}
              className="col-span-12 mt-4 h-[300px]"
            />

          </div>

          {/* =================================================
              MOBILE / TABLET CAROUSEL
          ================================================= */}

          <div className="lg:hidden">

            {/* Carousel */}

            <div
              ref={emblaRef}
              className="overflow-hidden"
            >
              <div className="flex">

                {awardImages.map(
                  (image, index) => (
                    <div
                      key={`${image.src}-${index}`}
                      className="min-w-0 flex-[0_0_100%] px-1"
                    >
                      <AwardImage
                        image={image}
                        index={index}
                        onClick={openImage}
                        className="h-[340px] w-full sm:h-[450px] md:h-[500px]"
                      />
                    </div>
                  )
                )}

              </div>
            </div>

            {/* =================================================
                MOBILE CONTROLS
            ================================================= */}

            <div className="mt-6 flex items-center justify-between">

              {/* Previous */}

              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Previous award"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8EAF3] bg-white text-[#202020] shadow-sm transition hover:border-[#29BDF4] hover:bg-[#29BDF4] hover:text-white"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dots */}

              <div className="flex items-center gap-2">
                {awardImages.map(
                  (_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() =>
                        emblaApi?.scrollTo(index)
                      }
                      aria-label={`Go to award ${
                        index + 1
                      }`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        carouselIndex === index
                          ? "w-8 bg-[#29BDF4]"
                          : "w-2 bg-[#C8D5DD]"
                      }`}
                    />
                  )
                )}
              </div>

              {/* Next */}

              <button
                type="button"
                onClick={scrollNext}
                aria-label="Next award"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8EAF3] bg-white text-[#202020] shadow-sm transition hover:border-[#29BDF4] hover:bg-[#29BDF4] hover:text-white"
              >
                <ChevronRight size={20} />
              </button>

            </div>

            {/* Counter */}

            <div className="mt-3 text-center text-xs font-medium text-[#888]">
              {carouselIndex + 1} /{" "}
              {awardImages.length}
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FULLSCREEN IMAGE VIEWER
      ===================================================== */}

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 md:p-8"
            onClick={closeImage}
          >

            {/* CLOSE */}

            <button
              type="button"
              onClick={closeImage}
              aria-label="Close gallery"
              className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 md:right-8 md:top-8"
            >
              <X size={22} />
            </button>

            {/* PREVIOUS */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                prevImage();
              }}
              aria-label="Previous award"
              className="absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 md:left-8"
            >
              <ChevronLeft size={24} />
            </button>

            {/* FULL IMAGE */}

            <motion.img
              key={selectedImage}
              src={
                awardImages[selectedImage].src
              }
              alt={
                awardImages[selectedImage].alt
              }
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="max-h-[88vh] max-w-[85vw] rounded-xl object-contain shadow-2xl"
            />

            {/* NEXT */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              aria-label="Next award"
              className="absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 md:right-8"
            >
              <ChevronRight size={24} />
            </button>

            {/* COUNTER */}

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md">
              {selectedImage + 1} /{" "}
              {awardImages.length}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// =========================================================
// REUSABLE AWARD IMAGE
// =========================================================

function AwardImage({
  image,
  index,
  onClick,
  className = "",
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onClick(index)}
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -4,
      }}
      className={`group relative min-h-0 overflow-hidden rounded-[22px] bg-[#F4F7F9] text-left shadow-[0_8px_30px_rgba(0,0,0,0.06)] ${className}`}
    >

      {/* IMAGE */}

      <img
        src={image.src}
        alt={image.alt}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
      />

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* VIEW AWARD */}

      <div className="absolute bottom-5 left-5 translate-y-3 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-[#202020] opacity-0 shadow-lg backdrop-blur-sm transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        View Award
      </div>

      {/* NUMBER */}

      <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-[#202020] opacity-0 shadow-md transition duration-500 group-hover:opacity-100">
        {String(index + 1).padStart(2, "0")}
      </div>

    </motion.button>
  );
}