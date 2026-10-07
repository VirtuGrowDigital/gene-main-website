import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Award,
  MapPin,
  CalendarDays,
} from "lucide-react";

// =========================================================
// EXISTING AWARD IMAGES
// =========================================================

import award1 from "../assets/images/award1.jpeg";
import award2 from "../assets/images/award2.jpeg";
import award3 from "../assets/images/award3.jpeg";
import award4 from "../assets/images/award4.jpeg";
import award5 from "../assets/images/award2.jpg.jpeg";

// =========================================================
// NEW BHARAT ENTREPRENEURS AWARD IMAGES
// =========================================================

import bharatAward1 from "../assets/images/bharat-award-1.jpeg";
import bharatAward2 from "../assets/images/bharat-award-2.jpeg";
import bharatAward3 from "../assets/images/bharat-award-3.jpeg";

// =========================================================
// AWARD GALLERY IMAGES
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
// AWARDS / RECOGNITION DATA
// =========================================================

const awardStories = [
  {
    id: "bharat-entrepreneurs-award",

    title: "Bharat Entrepreneurs Award",

    category: "State-wise Category",

    location: "New Delhi",

    date: "3 October",

    description:
      "Mr. Arun Kumar Srivastava, Founder of GeneBio Healthcare, was honoured with the Bharat Entrepreneurs Award at the 5th Bharat Entrepreneurship Summit for his contribution to indigenous diagnostic manufacturing from Uttar Pradesh.",

    images: [
      {
        src: bharatAward1,
        alt: "GeneBio Healthcare receiving Bharat Entrepreneurs Award",
      },
      {
        src: bharatAward2,
        alt: "Bharat Entrepreneurs Award ceremony",
      },
      {
        src: bharatAward3,
        alt: "GeneBio Healthcare Bharat Entrepreneurs Award recognition",
      },
    ],
  },
];

// =========================================================
// COMPONENT
// =========================================================

export default function AwardsCollage() {
  const [selectedImage, setSelectedImage] = useState(null);

  // =========================================================
  // MOBILE AWARD CAROUSEL
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

    setCarouselIndex(emblaApi.selectedScrollSnap());
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

  const openImage = (image) => {
    setSelectedImage(image);
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
    setSelectedImage((current) => {
      if (!current) return null;

      const images = awardStories[0].images;

      const currentIndex = images.findIndex(
        (image) => image.src === current.src
      );

      const nextIndex =
        (currentIndex + 1) % images.length;

      return images[nextIndex];
    });
  }, []);

  // =========================================================
  // PREVIOUS FULLSCREEN IMAGE
  // =========================================================

  const prevImage = useCallback(() => {
    setSelectedImage((current) => {
      if (!current) return null;

      const images = awardStories[0].images;

      const currentIndex = images.findIndex(
        (image) => image.src === current.src
      );

      const previousIndex =
        (currentIndex - 1 + images.length) %
        images.length;

      return images[previousIndex];
    });
  }, []);

  // =========================================================
  // KEYBOARD NAVIGATION
  // =========================================================

  useEffect(() => {
    if (!selectedImage) return;

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
          AWARDS & RECOGNITION SECTION
      ===================================================== */}

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1180px] px-5 md:px-6 lg:px-8">

          {/* =================================================
              SECTION HEADER
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
              Celebrating the milestones and recognitions
              that continue to shape GeneBio Healthcare's
              journey.
            </p>

          </div>

          {/* =================================================
              FEATURED NEW AWARD
          ================================================= */}

          {awardStories.map((award) => (
            <motion.article
              key={award.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                mb-16
                overflow-hidden
                rounded-[28px]
                border
                border-[#E6EEF2]
                bg-[#F8FCFE]
                shadow-[0_12px_45px_rgba(0,0,0,0.06)]
                md:mb-20
              "
            >
              <div className="grid lg:grid-cols-12">

                {/* =================================================
                    AWARD INFORMATION
                ================================================= */}

                <div
                  className="
                    flex
                    flex-col
                    justify-center
                    px-6
                    py-8
                    sm:px-8
                    md:px-10
                    lg:col-span-5
                    lg:px-12
                    lg:py-12
                  "
                >
                  {/* LABEL */}

                  <div className="mb-5 flex w-fit items-center gap-2 rounded-full bg-[#E9F8FD] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#29BDF4]">
                    <Award size={14} />

                    Latest Recognition
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      text-[28px]
                      font-bold
                      leading-[1.15]
                      text-[#202020]
                      sm:text-[34px]
                      lg:text-[38px]
                    "
                  >
                    {award.title}
                  </h3>

                  {/* CATEGORY */}

                  <p className="mt-3 text-[15px] font-semibold text-[#29BDF4]">
                    {award.category}
                  </p>

                  {/* LOCATION + DATE */}

                  <div className="mt-6 flex flex-wrap gap-3">

                    <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-medium text-[#555] shadow-sm">
                      <MapPin
                        size={14}
                        className="text-[#29BDF4]"
                      />

                      {award.location}
                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-medium text-[#555] shadow-sm">
                      <CalendarDays
                        size={14}
                        className="text-[#29BDF4]"
                      />

                      {award.date}
                    </div>

                  </div>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-6
                      max-w-[500px]
                      text-[14px]
                      leading-7
                      text-[#666]
                      sm:text-[15px]
                    "
                  >
                    {award.description}
                  </p>

                  {/* SMALL DIVIDER */}

                  <div className="mt-7 flex items-center gap-3">
                    <span className="h-[2px] w-10 bg-[#29BDF4]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#999]">
                      A moment worth celebrating
                    </span>
                  </div>

                </div>

                {/* =================================================
                    AWARD IMAGES
                ================================================= */}

                <div
                  className="
                    p-3
                    sm:p-4
                    lg:col-span-7
                  "
                >
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">

                    {/* MAIN IMAGE */}

                    <AwardImage
                      image={award.images[0]}
                      onClick={openImage}
                      className="
                        col-span-2
                        h-[260px]
                        sm:h-[340px]
                      "
                    />

                    {/* SECOND IMAGE */}

                    <AwardImage
                      image={award.images[1]}
                      onClick={openImage}
                      className="
                        h-[180px]
                        sm:h-[230px]
                      "
                    />

                    {/* THIRD IMAGE */}

                    <AwardImage
                      image={award.images[2]}
                      onClick={openImage}
                      className="
                        h-[180px]
                        sm:h-[230px]
                      "
                    />

                  </div>
                </div>

              </div>
            </motion.article>
          ))}

          {/* =================================================
              EXISTING AWARD GALLERY
          ================================================= */}

          <div className="mb-10 text-center">

            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#29BDF4]">
              More Moments
            </p>

            <h3 className="mt-2 text-[25px] font-bold text-[#202020] sm:text-[30px]">
              Our Journey of Recognition
            </h3>

          </div>

          {/* =================================================
              DESKTOP COLLAGE
          ================================================= */}

          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-4">

            {/* LEFT LARGE IMAGE */}

            <AwardImage
              image={awardImages[0]}
              onClick={openImage}
              className="col-span-7 h-[620px]"
            />

            {/* RIGHT SIDE */}

            <div className="col-span-5 flex flex-col gap-4">

              <AwardImage
                image={awardImages[1]}
                onClick={openImage}
                className="h-[200px]"
              />

              <AwardImage
                image={awardImages[2]}
                onClick={openImage}
                className="h-[200px]"
              />

              <AwardImage
                image={awardImages[3]}
                onClick={openImage}
                className="h-[200px]"
              />

            </div>

            {/* BOTTOM IMAGE */}

            <AwardImage
              image={awardImages[4]}
              onClick={openImage}
              className="col-span-12 mt-4 h-[300px]"
            />

          </div>

          {/* =================================================
              MOBILE / TABLET CAROUSEL
          ================================================= */}

          <div className="lg:hidden">

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
                        onClick={openImage}
                        className="
                          h-[340px]
                          w-full
                          sm:h-[450px]
                          md:h-[500px]
                        "
                      />
                    </div>
                  )
                )}

              </div>
            </div>

            {/* CONTROLS */}

            <div className="mt-6 flex items-center justify-between">

              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Previous award"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D8EAF3]
                  bg-white
                  text-[#202020]
                  shadow-sm
                  transition
                  hover:border-[#29BDF4]
                  hover:bg-[#29BDF4]
                  hover:text-white
                "
              >
                <ChevronLeft size={20} />
              </button>

              {/* DOTS */}

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

              <button
                type="button"
                onClick={scrollNext}
                aria-label="Next award"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D8EAF3]
                  bg-white
                  text-[#202020]
                  shadow-sm
                  transition
                  hover:border-[#29BDF4]
                  hover:bg-[#29BDF4]
                  hover:text-white
                "
              >
                <ChevronRight size={20} />
              </button>

            </div>

            {/* COUNTER */}

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
        {selectedImage && (
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
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/95
              p-4
              md:p-8
            "
            onClick={closeImage}
          >
            {/* CLOSE */}

            <button
              type="button"
              onClick={closeImage}
              aria-label="Close gallery"
              className="
                absolute
                right-4
                top-4
                z-30
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                backdrop-blur-md
                transition
                hover:bg-white/20
                md:right-8
                md:top-8
              "
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
              className="
                absolute
                left-3
                top-1/2
                z-30
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                backdrop-blur-md
                transition
                hover:bg-white/20
                md:left-8
              "
            >
              <ChevronLeft size={24} />
            </button>

            {/* IMAGE */}

            <motion.img
              key={selectedImage.src}
              src={selectedImage.src}
              alt={selectedImage.alt}
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
              className="
                max-h-[88vh]
                max-w-[85vw]
                rounded-xl
                object-contain
                shadow-2xl
              "
            />

            {/* NEXT */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              aria-label="Next award"
              className="
                absolute
                right-3
                top-1/2
                z-30
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                backdrop-blur-md
                transition
                hover:bg-white/20
                md:right-8
              "
            >
              <ChevronRight size={24} />
            </button>

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
  onClick,
  className = "",
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onClick(image)}
      whileHover={{
        y: -4,
      }}
      className={`
        group
        relative
        min-h-0
        overflow-hidden
        rounded-[20px]
        bg-[#F4F7F9]
        text-left
        shadow-[0_8px_30px_rgba(0,0,0,0.06)]
        ${className}
      `}
    >
      {/* IMAGE */}

      <img
        src={image.src}
        alt={image.alt}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition
          duration-700
          ease-out
          group-hover:scale-[1.04]
        "
      />

      {/* OVERLAY */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/50
          via-transparent
          to-transparent
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
        "
      />

      {/* VIEW */}

      <div
        className="
          absolute
          bottom-5
          left-5
          translate-y-3
          rounded-full
          bg-white/95
          px-4
          py-2
          text-xs
          font-semibold
          text-[#202020]
          opacity-0
          shadow-lg
          backdrop-blur-sm
          transition
          duration-500
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        View Award
      </div>
    </motion.button>
  );
}