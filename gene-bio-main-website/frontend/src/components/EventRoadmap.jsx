import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  CalendarDays,
} from "lucide-react";

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
    month: "7 th July",
    year: "2026",
    title: "GeneBio foundation day ",
    location: "Lucknow, Uttar Pradesh",
    venue: "GeneBio Health Production Unit",
    status: "Completed",
  },
  // {
  //   id: 3,
  //   month: "MAR",
  //   year: "2025",
  //   title: "AACC Summit",
  //   location: "Chicago, USA",
  //   venue: "McCormick Place",
  //   status: "Coming Soon",
  // },
  // {
  //   id: 4,
  //   month: "MAY",
  //   year: "2025",
  //   title: "Diagnostics Expo",
  //   location: "Singapore",
  //   venue: "Marina Bay Sands",
  //   status: "Upcoming",
  // },
  // {
  //   id: 5,
  //   month: "JUL",
  //   year: "2025",
  //   title: "Global Healthcare",
  //   location: "Tokyo, Japan",
  //   venue: "Tokyo Big Sight",
  //   status: "Upcoming",
  // },
];

export default function EventRoadmap() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

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
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-[#F5F7F9] py-24">
      <div className="mx-auto max-w-[1180px] px-5 md:px-6 lg:px-8">

        {/* Header */}

        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .5 }}
              className="text-[44px] font-bold leading-tight text-[#202020]"
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
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D8EAF3] bg-white transition hover:bg-[#28BDF4] hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={scrollNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D8EAF3] bg-white transition hover:bg-[#28BDF4] hover:text-white"
            >
              <ChevronRight size={20} />
            </button>

          </div>

        </div>

        {/* Carousel */}

        <div className="overflow-hidden" ref={emblaRef}>

          <div className="flex gap-7">
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
                className="min-w-[320px] md:min-w-[360px] lg:min-w-[370px]"
              >
                <div
                  className={`relative h-full overflow-hidden rounded-[24px] border bg-white transition-all duration-500

                  ${
                    active
                      ? "border-[#29BDF4] shadow-[0_25px_55px_rgba(41,189,244,.18)]"
                      : "border-[#E9EDF2] hover:border-[#BFE8F9] hover:shadow-xl"
                  }`}
                >
                  {/* Active Top Bar */}

                  <div
                    className={`h-[5px] transition-all duration-500

                    ${
                      active
                        ? "bg-[#29BDF4]"
                        : "bg-transparent"
                    }`}
                  />

                  <div className="p-8">

                    {/* Date */}

                    <div className="flex items-center justify-between">

                      <div>

                        <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#29BDF4]">
                          {event.month}
                        </p>

                        <p className="mt-1 text-[15px] text-[#888]">
                          {event.year}
                        </p>

                      </div>

                      <span
                        className={`rounded-full px-4 py-2 text-[11px] font-semibold transition

                        ${
                          active
                            ? "bg-[#29BDF4] text-white"
                            : "bg-[#EEF8FD] text-[#29BDF4]"
                        }`}
                      >
                        {event.status}
                      </span>

                    </div>

                    {/* Title */}

                    <h3 className="mt-8 text-[28px] font-bold leading-tight text-[#202020]">
                      {event.title}
                    </h3>

                    {/* Location */}

                    <div className="mt-7 flex items-center gap-3 text-[15px] text-[#666]">

                      <MapPin
                        size={18}
                        className="text-[#29BDF4]"
                      />

                      {event.location}

                    </div>

                    {/* Venue */}

                    <div className="mt-5 flex items-center gap-3 text-[15px] text-[#666]">

                      <CalendarDays
                        size={18}
                        className="text-[#29BDF4]"
                      />

                      {event.venue}

                    </div>

                    {/* Button */}

                   

                  </div>

                  {/* Decorative Circle */}

                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#29BDF4]/5" />

                </div>
              </motion.div>
            );
          })}
                    </div>
        </div>

        {/* Pagination */}

        <div className="mt-10 flex justify-center gap-3">

          {roadmap.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300

              ${
                index === selectedIndex
                  ? "w-10 bg-[#29BDF4]"
                  : "w-2 bg-[#C8D5DD] hover:bg-[#29BDF4]"
              }`}
            />
          ))}

        </div>

      </div>
    </section>
  );
}