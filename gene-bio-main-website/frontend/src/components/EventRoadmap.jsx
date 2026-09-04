import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  CalendarDays,
  X,
  Images,
} from "lucide-react";

// =========================================================
// INDORE EXPO IMAGES
// =========================================================

import indore1 from "../assets/images/indore1.jpeg";
import indore2 from "../assets/images/indore2.jpeg";
import indore3 from "../assets/images/indore3.jpeg";
import indore4 from "../assets/images/indore4.jpeg";
import indore5 from "../assets/images/indore5.jpeg";
import indore6 from "../assets/images/indore6.jpeg";
import indore7 from "../assets/images/indore7.jpeg";

// =========================================================
// FOUNDATION DAY IMAGES
// =========================================================

import foundation1 from "../assets/images/foundation1.jpeg";
import foundation2 from "../assets/images/foundation2.jpeg";
import foundation3 from "../assets/images/foundation3.jpeg";
import founation4 from "../assets/images/founation4.jpeg";
import foundation5 from "../assets/images/foundation5.jpeg";
import foundation6 from "../assets/images/foundation6.jpeg";
import foundation7 from "../assets/images/foundation7.jpeg";
import foundation8 from "../assets/images/foundation8.jpeg";
import foundation9 from "../assets/images/foundation9.jpeg";

// =========================================================
// EVENT DATA
// =========================================================

const roadmap = [
  {
    id: 1,
    month: "07, 08, 09 August",
    year: "2026",
    title: "Indore medical expo",
    location: "Indore, Madhya Pradesh",
    venue: "Hall 3 / Booth B42",
    status: "Completed",
  },
  {
    id: 2,
    month: "7th July",
    year: "2026",
    title: "GeneBio foundation day",
    location: "Lucknow, Uttar Pradesh",
    venue: "GeneBio Health Production Unit",
    status: "Completed",
  },
];

// =========================================================
// EVENT GALLERIES
// =========================================================

const eventGalleries = {
  1: [
    indore1,
    indore2,
    indore3,
    indore4,
    indore5,
    indore6,
    indore7,
  ],

  2: [
    foundation1,
    foundation2,
    foundation3,
    founation4,
    foundation5,
    foundation6,
    foundation7,
    foundation8,
    foundation9,
  ],
};

// =========================================================
// COMPONENT
// =========================================================

export default function EventRoadmap() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  // Gallery states
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // =========================================================
  // CAROUSEL
  // =========================================================

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
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
  // GALLERY
  // =========================================================

  const openGallery = (event) => {
    const images = eventGalleries[event.id];

    if (!images?.length) return;

    setSelectedEvent(event);
    setSelectedImage(0);
  };

  const closeGallery = () => {
    setSelectedEvent(null);
    setSelectedImage(null);
  };

  const nextImage = useCallback(() => {
    if (!selectedEvent) return;

    const images = eventGalleries[selectedEvent.id];

    setSelectedImage((prev) => (prev + 1) % images.length);
  }, [selectedEvent]);

  const prevImage = useCallback(() => {
    if (!selectedEvent) return;

    const images = eventGalleries[selectedEvent.id];

    setSelectedImage(
      (prev) => (prev - 1 + images.length) % images.length
    );
  }, [selectedEvent]);

  // =========================================================
  // KEYBOARD NAVIGATION
  // =========================================================

  useEffect(() => {
    if (!selectedEvent) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") prevImage();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedEvent, nextImage, prevImage]);

  return (
    <section className="bg-[#F5F7F9] py-16 md:py-24">
      <div className="mx-auto max-w-[1180px] px-5 md:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[34px] font-bold leading-tight text-[#202020] sm:text-[40px] lg:text-[44px]"
            >
              Event Roadmap{" "}
              <span className="text-[#28BDF4]">
                2026-27
              </span>
            </motion.h2>

            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#666]">
              Follow GeneBio Healthcare across the world's leading
              diagnostics and biotechnology exhibitions.
            </p>
          </div>

          {/* Arrows */}

          <div className="flex gap-4">
            <button
              onClick={scrollPrev}
              aria-label="Previous event"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D8EAF3] bg-white transition hover:bg-[#28BDF4] hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={scrollNext}
              aria-label="Next event"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D8EAF3] bg-white transition hover:bg-[#28BDF4] hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>

        {/* =====================================================
            CAROUSEL
        ===================================================== */}

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5 md:gap-7">

            {roadmap.map((event, index) => {
              const active = index === selectedIndex;

              return (
                <motion.div
                  key={event.id}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                  }}
                  className="min-w-[290px] md:min-w-[360px] lg:min-w-[370px]"
                >
                  <div
                    className={`relative h-full overflow-hidden rounded-[24px] border bg-white transition-all duration-500 ${
                      active
                        ? "border-[#29BDF4] shadow-[0_25px_55px_rgba(41,189,244,.18)]"
                        : "border-[#E9EDF2] hover:border-[#BFE8F9] hover:shadow-xl"
                    }`}
                  >

                    {/* Active Top Bar */}

                    <div
                      className={`h-[5px] transition-all duration-500 ${
                        active
                          ? "bg-[#29BDF4]"
                          : "bg-transparent"
                      }`}
                    />

                    <div className="p-6 md:p-8">

                      {/* Date */}

                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#29BDF4] md:text-[12px] md:tracking-[0.22em]">
                            {event.month}
                          </p>

                          <p className="mt-1 text-[15px] text-[#888]">
                            {event.year}
                          </p>
                        </div>

                        <span
                          className={`rounded-full px-3 py-2 text-[10px] font-semibold transition md:px-4 md:text-[11px] ${
                            active
                              ? "bg-[#29BDF4] text-white"
                              : "bg-[#EEF8FD] text-[#29BDF4]"
                          }`}
                        >
                          {event.status}
                        </span>
                      </div>

                      {/* Title */}

                      <h3 className="mt-7 text-[24px] font-bold leading-tight text-[#202020] md:mt-8 md:text-[28px]">
                        {event.title}
                      </h3>

                      {/* Location */}

                      <div className="mt-6 flex items-start gap-3 text-[14px] text-[#666] md:mt-7 md:text-[15px]">
                        <MapPin
                          size={18}
                          className="mt-0.5 shrink-0 text-[#29BDF4]"
                        />

                        <span>{event.location}</span>
                      </div>

                      {/* Venue */}

                      <div className="mt-5 flex items-start gap-3 text-[14px] text-[#666] md:text-[15px]">
                        <CalendarDays
                          size={18}
                          className="mt-0.5 shrink-0 text-[#29BDF4]"
                        />

                        <span>{event.venue}</span>
                      </div>

                      {/* =================================================
                          GALLERY BUTTON
                      ================================================= */}

                      {eventGalleries[event.id]?.length > 0 && (
                        <button
                          onClick={() => openGallery(event)}
                          className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#D8EAF3] bg-white px-5 py-3 text-sm font-semibold text-[#29BDF4] transition hover:bg-[#29BDF4] hover:text-white"
                        >
                          <Images size={17} />
                          See Gallery
                        </button>
                      )}

                    </div>

                    {/* Decorative Circle */}

                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#29BDF4]/5" />

                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* =====================================================
            PAGINATION
        ===================================================== */}

        <div className="mt-10 flex justify-center gap-3">
          {roadmap.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to event ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-10 bg-[#29BDF4]"
                  : "w-2 bg-[#C8D5DD] hover:bg-[#29BDF4]"
              }`}
            />
          ))}
        </div>

      </div>

      {/* =========================================================
          FULL-SCREEN IMAGE VIEWER
      ========================================================= */}

      <AnimatePresence>
        {selectedEvent && selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-3 sm:p-4 md:p-8"
            onClick={closeGallery}
          >

            {/* Close Button */}

            <button
              onClick={closeGallery}
              aria-label="Close gallery"
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-4 sm:top-4 md:right-8 md:top-8 md:h-11 md:w-11"
            >
              <X size={22} />
            </button>

            {/* Previous */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-3 md:left-8 md:h-11 md:w-11"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Full Image */}

            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              src={eventGalleries[selectedEvent.id][selectedImage]}
              alt={`${selectedEvent.title} gallery photo ${selectedImage + 1}`}
              className="max-h-[88vh] max-w-[calc(100vw-90px)] rounded-lg object-contain sm:max-w-[calc(100vw-100px)] md:max-h-[85vh] md:max-w-[85vw]"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
              className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-3 md:right-8 md:h-11 md:w-11"
            >
              <ChevronRight size={22} />
            </button>

            {/* Counter */}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md sm:bottom-5">
              {selectedImage + 1} / {eventGalleries[selectedEvent.id].length}
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}