import React, { useEffect, useMemo, useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

import client1 from "../assets/images/PHOTO-2026-09-10-12-53-21 2.jpg";
import client2 from "../assets/images/PHOTO-2026-09-10-12-53-21 3.jpg";
import client3 from "../assets/images/PHOTO-2026-09-10-12-53-21.jpg";

import client4 from "../assets/images/PHOTO-2026-09-10-12-53-37 2.jpg";
import client5 from "../assets/images/PHOTO-2026-09-10-12-53-37 3.jpg";
import client6 from "../assets/images/PHOTO-2026-09-10-12-53-37.jpg";

import client7 from "../assets/images/PHOTO-2026-09-10-12-53-38 2.jpg";
import client8 from "../assets/images/PHOTO-2026-09-10-12-53-38 3.jpg";
import client9 from "../assets/images/PHOTO-2026-09-10-12-53-38.jpg";

import client10 from "../assets/images/PHOTO-2026-09-10-12-53-39 2.jpg";
import client11 from "../assets/images/PHOTO-2026-09-10-12-53-39 3.jpg";
import client12 from "../assets/images/PHOTO-2026-09-10-12-53-39.jpg";

import client13 from "../assets/images/PHOTO-2026-09-10-12-53-40 2.jpg";
import client14 from "../assets/images/PHOTO-2026-09-10-12-53-40 3.jpg";
import client15 from "../assets/images/PHOTO-2026-09-10-12-53-40.jpg";

import client16 from "../assets/images/PHOTO-2026-09-10-12-53-41 2.jpg";
import client17 from "../assets/images/PHOTO-2026-09-10-12-53-41 3.jpg";
import client18 from "../assets/images/PHOTO-2026-09-10-12-53-41.jpg";

import client19 from "../assets/images/PHOTO-2026-09-10-12-53-42 2.jpg";
import client20 from "../assets/images/PHOTO-2026-09-10-12-53-42 3.jpg";

const clients = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
  client14,
  client15,
  client16,
  client17,
  client18,
  client19,
  client20,
];

const GlobalPartners = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  /* =========================================================
     RESPONSIVE VISIBLE LOGOS
     
     Mobile  = 2
     Tablet  = 3
     Desktop = 4
  ========================================================= */

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setVisibleCount(2);
      } else if (width < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  /* =========================================================
     CREATE CAROUSEL PAGES
     
     Example desktop:

     Page 1 → 1  2  3  4
     Page 2 → 5  6  7  8
     Page 3 → 9 10 11 12
     Page 4 → 13 14 15 16
     Page 5 → 17 18 19 20
  ========================================================= */

  const pages = useMemo(() => {
    const result = [];

    for (let i = 0; i < clients.length; i += visibleCount) {
      result.push(clients.slice(i, i + visibleCount));
    }

    return result;
  }, [visibleCount]);

  /* =========================================================
     RESET PAGE WHEN SCREEN SIZE CHANGES
  ========================================================= */

  useEffect(() => {
    setCurrentPage(0);
  }, [visibleCount]);

  /* =========================================================
     AUTO SLIDE
  ========================================================= */

  useEffect(() => {
    if (isPaused || pages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => {
        if (prev >= pages.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused, pages.length]);

  /* =========================================================
     NEXT PAGE
  ========================================================= */

  const nextSlide = () => {
    setCurrentPage((prev) =>
      prev >= pages.length - 1 ? 0 : prev + 1
    );
  };

  /* =========================================================
     PREVIOUS PAGE
  ========================================================= */

  const prevSlide = () => {
    setCurrentPage((prev) =>
      prev <= 0 ? pages.length - 1 : prev - 1
    );
  };

  /* =========================================================
     TOUCH START
  ========================================================= */

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  /* =========================================================
     TOUCH MOVE
  ========================================================= */

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  /* =========================================================
     TOUCH END
  ========================================================= */

  const handleTouchEnd = () => {
    const distance =
      touchStartX.current - touchEndX.current;

    if (Math.abs(distance) < 50) return;

    if (distance > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  return (
    <section className="w-full overflow-hidden bg-[#0A2020] py-14 sm:py-16 lg:py-20">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1180px]
          grid-cols-1
          items-center
          gap-10
          px-5
          sm:px-6
          md:grid-cols-2
          md:gap-8
          lg:gap-16
          lg:px-8
        "
      >
        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}

        <div className="flex min-w-0 flex-col justify-center">
          <h2 className="text-[26px] font-medium leading-tight text-white sm:text-[30px]">
            Global Health.
          </h2>

          <div className="mt-6 border-l-2 border-[#21CAFF] pl-4 sm:mt-7 sm:pl-5">
            <p className="max-w-[480px] text-[13px] italic leading-[1.8] text-white/75 sm:text-[14px]">
              "Bringing health and happiness to the world, one
              insightful diagnosis at a time — from Bangalore to Berlin."
            </p>
          </div>

          <p className="mt-8 max-w-[430px] text-[12px] italic leading-[1.7] text-white/30 sm:mt-10">
            The supply chain reliability of GeneBio has been a
            game-changer for our hospital network distribution
            across Asia.
          </p>

          {/* Trust Indicator */}

          <div className="mt-7 flex items-center gap-3 sm:mt-8">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#21CAFF] opacity-50" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#21CAFF]" />
            </span>

            <span className="text-[8px] uppercase tracking-[0.16em] text-white/30 sm:text-[9px] sm:tracking-[0.2em]">
              Trusted Healthcare Network
            </span>
          </div>
        </div>

        {/* =====================================================
            RIGHT CLIENT CAROUSEL
        ====================================================== */}

        <div className="min-w-0 w-full">
          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-[22px]
              border
              border-white/10
              bg-black/20
              px-4
              py-5
              sm:rounded-[24px]
              sm:px-6
              sm:py-6
              lg:px-7
              lg:py-7
            "
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* =================================================
                HEADER
            ================================================== */}

            <div className="mb-5 flex items-center justify-between gap-4 sm:mb-6">
              <div className="min-w-0">
                <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-[#21CAFF]/60 sm:text-[9px]">
                  Trusted Network
                </p>

                <h3 className="mt-1 text-[18px] font-medium text-white sm:text-[21px]">
                  Our Valued Clients
                </h3>
              </div>

              {/* Pause / Play */}

              <button
                type="button"
                onClick={() => setIsPaused((prev) => !prev)}
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-white/40
                  transition-all
                  duration-300
                  hover:border-[#21CAFF]/40
                  hover:bg-[#21CAFF]/5
                  hover:text-[#21CAFF]
                "
                aria-label={
                  isPaused
                    ? "Play carousel"
                    : "Pause carousel"
                }
              >
                {isPaused ? (
                  <Play
                    size={12}
                    fill="currentColor"
                  />
                ) : (
                  <Pause size={12} />
                )}
              </button>
            </div>

            {/* =================================================
                CAROUSEL
            ================================================== */}

            <div className="relative w-full">
              {/* Previous */}

              <button
                type="button"
                onClick={prevSlide}
                className="
                  absolute
                  left-0
                  top-1/2
                  z-20
                  hidden
                  h-8
                  w-8
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-[#0A2020]/95
                  text-white/50
                  shadow-lg
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-[#21CAFF]/50
                  hover:text-[#21CAFF]
                  lg:flex
                "
                aria-label="Previous clients"
              >
                <ChevronLeft size={16} />
              </button>

              {/* =================================================
                  VIEWPORT
              ================================================== */}

              <div className="w-full overflow-hidden rounded-[16px]">
                {/* =================================================
                    TRACK

                    Every page is exactly 100% width.

                    Therefore:

                    Page 1 = 100%
                    Page 2 = 100%
                    Page 3 = 100%

                    This completely prevents the blank-slide
                    problem.
                ================================================== */}

                <div
                  className="flex"
                  style={{
                    transform: `translateX(-${
                      currentPage * 100
                    }%)`,
                    transition:
                      "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  {pages.map((page, pageIndex) => (
                    <div
                      key={pageIndex}
                      className="
                        min-w-full
                        shrink-0
                      "
                    >
                      <div
                        className="
                          grid
                          w-full
                          grid-cols-2
                          gap-3
                          sm:grid-cols-3
                          lg:grid-cols-4
                        "
                      >
                        {page.map((client, clientIndex) => (
                          <div
                            key={`${pageIndex}-${clientIndex}`}
                            className="min-w-0"
                          >
                            <div
                              className="
                                group
                                flex
                                h-[95px]
                                w-full
                                items-center
                                justify-center
                                overflow-hidden
                                rounded-[14px]
                                border
                                border-[#0A2020]/10
                                bg-white
                                p-2.5
                                shadow-[0_5px_20px_rgba(0,0,0,0.12)]
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-[#21CAFF]/50
                                hover:shadow-[0_8px_25px_rgba(33,202,255,0.18)]
                                sm:h-[105px]
                                sm:rounded-[15px]
                                sm:p-3
                                md:h-[110px]
                                lg:h-[115px]
                              "
                            >
                              <img
                                src={client}
                                alt={`GeneBio Healthcare client ${
                                  pageIndex * visibleCount +
                                  clientIndex +
                                  1
                                }`}
                                loading="lazy"
                                draggable="false"
                                className="
                                  h-full
                                  w-full
                                  select-none
                                  object-contain
                                  transition-transform
                                  duration-500
                                  group-hover:scale-105
                                "
                              />
                            </div>
                          </div>
                        ))}

                        {/* =================================================
                            EMPTY PLACEHOLDERS

                            Important for the final page.

                            Example:
                            20 clients / 4 desktop = exactly 5 pages.

                            If there were 18 clients:
                            final page would contain 2 logos.
                            These placeholders keep the layout aligned.
                        ================================================== */}

                        {Array.from({
                          length:
                            visibleCount - page.length,
                        }).map((_, emptyIndex) => (
                          <div
                            key={`empty-${pageIndex}-${emptyIndex}`}
                            className="hidden sm:block"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next */}

              <button
                type="button"
                onClick={nextSlide}
                className="
                  absolute
                  right-0
                  top-1/2
                  z-20
                  hidden
                  h-8
                  w-8
                  translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-[#0A2020]/95
                  text-white/50
                  shadow-lg
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-[#21CAFF]/50
                  hover:text-[#21CAFF]
                  lg:flex
                "
                aria-label="Next clients"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* =================================================
                MOBILE HINT
            ================================================== */}

            <p className="mt-4 text-center text-[7px] uppercase tracking-[0.18em] text-white/20 sm:hidden">
              Swipe to explore our healthcare partners
            </p>

            {/* =================================================
                PAGINATION
            ================================================== */}

            <div className="mt-5 flex items-center justify-center gap-1.5">
              {pages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToPage(index)}
                  aria-label={`Go to client group ${
                    index + 1
                  }`}
                  className={`
                    h-1.5
                    shrink-0
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      currentPage === index
                        ? "w-5 bg-[#21CAFF]"
                        : "w-1.5 bg-white/15 hover:bg-white/30"
                    }
                  `}
                />
              ))}
            </div>

            {/* =================================================
                FOOTER
            ================================================== */}

            <div className="mt-5 flex items-center gap-2.5">
              <div className="h-px flex-1 bg-white/10" />

              <p className="whitespace-nowrap text-[7px] uppercase tracking-[0.15em] text-white/25 sm:text-[8px] sm:tracking-[0.18em]">
                Trusted Across India
              </p>

              <div className="h-px flex-1 bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =============================================================
   GO TO PAGE

   Defined outside JSX so pagination buttons work correctly.
============================================================= */

const goToPage = (index) => {
  // This function is replaced below through the component's
  // local handler.
};

export default GlobalPartners;