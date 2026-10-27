
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
  ExternalLink,
} from "lucide-react";

// =========================================================
// EXTERNAL AWARD LINKS
// =========================================================

const AWARD_LINKS = {
  entrepreneur:
    "https://www.entrepreneurindia.com/award-winners.php",
  bharat:
    "https://eaiindia.com/media-coverage.aspx",
  healthcare:
    "https://health.economictimes.indiatimes.com/healthcare-awards/winners-list",
  gdphd:
    "https://gdphdhealth.org/#/pib1",
};

// =========================================================
// EXISTING AWARD IMAGES
// =========================================================

import award1 from "../assets/images/award1.jpeg";
import award2 from "../assets/images/award2.jpeg";
import award3 from "../assets/images/award3.jpeg";
import award4 from "../assets/images/award4.jpeg";
import award5 from "../assets/images/award2.jpg.jpeg";

// =========================================================
// BHARAT ENTREPRENEURS AWARD IMAGES
// =========================================================

import bharatAward1 from "../assets/images/bharat-award-1.jpeg";
import bharatAward2 from "../assets/images/bharat-award-2.jpeg";
import bharatAward3 from "../assets/images/bharat-award-3.jpeg";

// =========================================================
// ENTREPRENEUR INDIA AWARDS 2026
// =========================================================

import entrepreneurAward1 from "../assets/images/enter1.jpeg";
import entrepreneurAward2 from "../assets/images/enter2.jpeg";
import entrepreneurAward3 from "../assets/images/enter3.jpeg";
import entrepreneurAward4 from "../assets/images/enter4.jpeg";

// =========================================================
// ENTREPRENEUR AWARD IMAGES
// =========================================================

const entrepreneurImages = [
  {
    src: entrepreneurAward1,
    alt: "Arun Kumar Srivastava receiving the Entrepreneur India Award 2026",
    link: AWARD_LINKS.entrepreneur,
    linkLabel: "View Official Award Winners",
  },
  {
    src: entrepreneurAward2,
    alt: "Entrepreneur India Awards 2026 celebration",
    link: AWARD_LINKS.entrepreneur,
    linkLabel: "View Official Award Winners",
  },
  {
    src: entrepreneurAward3,
    alt: "Entrepreneur India Awards 2026 presentation",
    link: AWARD_LINKS.entrepreneur,
    linkLabel: "View Official Award Winners",
  },
  {
    src: entrepreneurAward4,
    alt: "Entrepreneur India Awards 2026 trophy",
    link: AWARD_LINKS.entrepreneur,
    linkLabel: "View Official Award Winners",
  },
];

// =========================================================
// EXISTING GALLERY IMAGES
// =========================================================

const galleryImages = [
  {
    src: award1,
    alt: "GeneBio Healthcare award",
    link: AWARD_LINKS.healthcare,
    linkLabel: "View Healthcare Award Winners",
  },
  {
    src: award2,
    alt: "GeneBio Healthcare award ceremony",
    link: AWARD_LINKS.healthcare,
    linkLabel: "View Healthcare Award Winners",
  },
  {
    src: award3,
    alt: "GeneBio Healthcare recognition",
    link: AWARD_LINKS.healthcare,
    linkLabel: "View Healthcare Award Winners",
  },
  {
    src: award4,
    alt: "GeneBio Healthcare award presentation",
    link: AWARD_LINKS.healthcare,
    linkLabel: "View Healthcare Award Winners",
  },
  {
    src: award5,
    alt: "GeneBio Healthcare achievement",
    link: AWARD_LINKS.healthcare,
    linkLabel: "View Healthcare Award Winners",
  },
];

// =========================================================
// AWARD STORIES — LATEST AWARD FIRST
// =========================================================

const awardStories = [
  {
    id: "entrepreneur-india-award-2026",
    title: "Entrepreneur India Awards 2026",
    category: "Entrepreneur of the Year — Pharmaceuticals",
    location: "Bharat Mandapam, New Delhi",
    date: "5 October 2026",
    description:
      "Arun Kumar Srivastava, Founder of GeneBio Healthcare, was named a winner at the 16th Entrepreneur Awards 2026 by Entrepreneur India, recognising his contribution to India's in-vitro diagnostics sector and indigenous diagnostic manufacturing.",
    images: entrepreneurImages,
    link: AWARD_LINKS.entrepreneur,
    linkLabel: "View Official Award Winners",
    featured: true,
  },
  {
    id: "bharat-entrepreneurs-award",
    title: "Bharat Entrepreneurs Award",
    category: "Entrepreneurial Recognition",
    location: "New Delhi",
    date: "3 October",
    description:
      "Mr. Arun Kumar Srivastava, Founder of GeneBio Healthcare, was recognised for his contribution to indigenous diagnostic manufacturing.",
    images: [
      {
        src: bharatAward1,
        alt: "Bharat Entrepreneurs Award presentation",
        link: AWARD_LINKS.bharat,
        linkLabel: "View Media Coverage",
      },
      {
        src: bharatAward2,
        alt: "Bharat Entrepreneurs Award ceremony",
        link: AWARD_LINKS.bharat,
        linkLabel: "View Media Coverage",
      },
      {
        src: bharatAward3,
        alt: "Bharat Entrepreneurs Award recognition",
        link: AWARD_LINKS.bharat,
        linkLabel: "View Media Coverage",
      },
    ],
    link: AWARD_LINKS.bharat,
    linkLabel: "View Media Coverage",
  },
];

// =========================================================
// REUSABLE AWARD IMAGE
// =========================================================

function AwardImage({
  image,
  images,
  onClick,
  className = "",
}) {
  return (
    <div
      className={`group relative min-h-0 overflow-hidden rounded-[20px] bg-[#F3F7F9] shadow-[0_8px_28px_rgba(0,0,0,0.06)] sm:rounded-[24px] ${className}`}
    >
      <button
        type="button"
        onClick={() => onClick(image, images)}
        aria-label={`Enlarge ${image.alt}`}
        className="absolute inset-0 z-0 h-full w-full cursor-zoom-in"
      >
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </button>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

      {image.link && (
        <a
          href={image.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={image.linkLabel || "View award details"}
          className="absolute bottom-3 left-3 z-[2] inline-flex min-h-9 max-w-[calc(100%-24px)] items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-[10px] font-bold text-[#202020] shadow-lg transition-colors hover:bg-[#29BDF4] sm:bottom-4 sm:left-4 sm:px-4 sm:text-xs"
        >
          <span className="truncate">
            {image.linkLabel || "View Award Details"}
          </span>
          <ExternalLink size={13} className="shrink-0" />
        </a>
      )}
    </div>
  );
}

// =========================================================
// MAIN AWARDS COMPONENT
// =========================================================

export default function AwardsCollage() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
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

  const openImage = useCallback((image, images) => {
    setSelectedImage({ image, images });
  }, []);

  const closeImage = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const changeImage = useCallback((direction) => {
    setSelectedImage((current) => {
      if (!current) return null;

      const { image, images } = current;

      const currentIndex = images.findIndex(
        (item) => item.src === image.src
      );

      if (currentIndex === -1 || images.length === 0) {
        return current;
      }

      const nextIndex =
        (currentIndex + direction + images.length) %
        images.length;

      return {
        image: images[nextIndex],
        images,
      };
    });
  }, []);

  const showNextImage = useCallback(() => {
    changeImage(1);
  }, [changeImage]);

  const showPreviousImage = useCallback(() => {
    changeImage(-1);
  }, [changeImage]);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeImage();
      if (event.key === "ArrowRight") showNextImage();
      if (event.key === "ArrowLeft") showPreviousImage();
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    selectedImage,
    closeImage,
    showNextImage,
    showPreviousImage,
  ]);

  return (
    <>
      <section className="bg-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          {/* MAIN HEADING */}
          <div className="mb-10 text-center sm:mb-14">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EEF9FD] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#29BDF4] sm:text-xs">
              <Award size={15} />
              Awards & Recognition
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#202020] sm:text-4xl lg:text-[46px]">
              Moments of{" "}
              <span className="text-[#29BDF4]">
                Excellence
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#666] sm:text-base">
              Celebrating achievements, industry recognition, and
              milestones in GeneBio Healthcare's journey.
            </p>
          </div>

          {/* AWARD STORIES — NEWEST AWARD FIRST */}
          {awardStories.map((award) => (
            <motion.article
              key={award.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
              className={`mb-10 overflow-hidden rounded-[26px] border shadow-[0_12px_40px_rgba(0,0,0,0.06)] sm:mb-14 sm:rounded-[30px] ${
                award.featured
                  ? "border-[#29BDF4]/30 bg-[#F4FBFE]"
                  : "border-[#E6EEF2] bg-[#F9FBFC]"
              }`}
            >
              <div className="grid lg:grid-cols-12">
                {/* AWARD DETAILS */}
                <div className="flex flex-col justify-center p-5 sm:p-8 lg:col-span-5 lg:p-10 xl:p-12">
                  <div className="mb-5 flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#29BDF4] shadow-sm sm:text-xs">
                    <Award size={15} />
                    {award.featured
                      ? "Latest Recognition"
                      : "Award Recognition"}
                  </div>

                  <h3 className="text-[27px] font-bold leading-tight text-[#202020] sm:text-[32px] lg:text-[36px]">
                    {award.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold leading-6 text-[#29BDF4] sm:text-base">
                    {award.category}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[11px] font-medium text-[#555] shadow-sm sm:text-xs">
                      <MapPin
                        size={14}
                        className="shrink-0 text-[#29BDF4]"
                      />
                      {award.location}
                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[11px] font-medium text-[#555] shadow-sm sm:text-xs">
                      <CalendarDays
                        size={14}
                        className="shrink-0 text-[#29BDF4]"
                      />
                      {award.date}
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-7 text-[#666] sm:text-[15px]">
                    {award.description}
                  </p>

                  <div className="mt-7 flex items-center gap-3">
                    <span className="h-[2px] w-10 rounded-full bg-[#29BDF4]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#999]">
                      A moment worth celebrating
                    </span>
                  </div>

                  {award.link && (
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-full bg-[#29BDF4] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#159DCE] sm:text-sm"
                    >
                      {award.linkLabel}
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>

                {/* AWARD PHOTOS */}
                <div className="p-3 sm:p-4 lg:col-span-7 lg:p-5">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {award.images.map((image, index) => (
                      <AwardImage
                        key={`${award.id}-${image.src}`}
                        image={image}
                        images={award.images}
                        onClick={openImage}
                        className={
                          index === 0
                            ? "col-span-2 h-[230px] sm:h-[320px] lg:h-[350px]"
                            : "h-[145px] sm:h-[210px] lg:h-[190px]"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

          {/* EXISTING AWARD GALLERY */}
          <div className="mt-14 sm:mt-20">
            <div className="mb-8 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#29BDF4] sm:text-xs">
                Photo Gallery
              </p>

              <h3 className="mt-3 text-2xl font-bold text-[#202020] sm:text-3xl">
                Our Journey of Recognition
              </h3>
            </div>

            {/* DESKTOP GALLERY */}
            <div className="hidden grid-cols-12 gap-4 lg:grid">
              <AwardImage
                image={galleryImages[0]}
                images={galleryImages}
                onClick={openImage}
                className="col-span-7 h-[500px]"
              />

              <div className="col-span-5 grid grid-rows-2 gap-4">
                {galleryImages.slice(1, 3).map((image) => (
                  <AwardImage
                    key={image.src}
                    image={image}
                    images={galleryImages}
                    onClick={openImage}
                    className="h-[242px]"
                  />
                ))}
              </div>

              {galleryImages.slice(3).map((image) => (
                <AwardImage
                  key={image.src}
                  image={image}
                  images={galleryImages}
                  onClick={openImage}
                  className="col-span-6 h-[260px]"
                />
              ))}
            </div>

            {/* MOBILE AND TABLET CAROUSEL */}
            <div className="lg:hidden">
              <div ref={emblaRef} className="overflow-hidden">
                <div className="flex">
                  {galleryImages.map((image, index) => (
                    <div
                      key={`${image.src}-${index}`}
                      className="min-w-0 flex-[0_0_90%] pl-2 sm:flex-[0_0_70%] md:flex-[0_0_55%]"
                    >
                      <AwardImage
                        image={image}
                        images={galleryImages}
                        onClick={openImage}
                        className="h-[310px] w-full sm:h-[400px]"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* CAROUSEL CONTROLS */}
              <div className="mt-5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={scrollPrev}
                  aria-label="Previous gallery image"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8EAF3] bg-white text-[#202020] transition hover:border-[#29BDF4] hover:bg-[#29BDF4] hover:text-white"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="flex items-center gap-2">
                  {galleryImages.map((image, index) => (
                    <button
                      key={`${image.src}-dot`}
                      type="button"
                      onClick={() => emblaApi?.scrollTo(index)}
                      aria-label={`Go to gallery image ${index + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        carouselIndex === index
                          ? "w-8 bg-[#29BDF4]"
                          : "w-2 bg-[#C8D5DD]"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={scrollNext}
                  aria-label="Next gallery image"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8EAF3] bg-white text-[#202020] transition hover:border-[#29BDF4] hover:bg-[#29BDF4] hover:text-white"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <p className="mt-3 text-center text-xs text-[#888]">
                {carouselIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FULLSCREEN IMAGE VIEWER */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 sm:p-8"
            onClick={closeImage}
            role="dialog"
            aria-modal="true"
            aria-label="Award image viewer"
          >
            <button
              type="button"
              onClick={closeImage}
              aria-label="Close image viewer"
              className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8 sm:top-8"
            >
              <X size={22} />
            </button>

            {selectedImage.images.length > 1 && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPreviousImage();
                }}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-8 sm:h-12 sm:w-12"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            <motion.div
              key={selectedImage.image.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="flex max-h-full max-w-6xl flex-col items-center"
            >
              <img
                src={selectedImage.image.src}
                alt={selectedImage.image.alt}
                className="max-h-[75vh] max-w-[82vw] rounded-2xl object-contain shadow-2xl sm:max-h-[80vh]"
              />

              <p className="mt-3 max-w-[80vw] text-center text-xs text-white/70 sm:text-sm">
                {selectedImage.image.alt}
              </p>

              {selectedImage.image.link && (
                <a
                  href={selectedImage.image.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#29BDF4] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#159DCE] sm:text-sm"
                >
                  {selectedImage.image.linkLabel ||
                    "View Award Details"}
                  <ExternalLink size={15} />
                </a>
              )}
            </motion.div>

            {selectedImage.images.length > 1 && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNextImage();
                }}
                aria-label="Next image"
                className="absolute right-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8 sm:h-12 sm:w-12"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
