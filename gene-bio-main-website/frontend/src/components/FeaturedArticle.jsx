import { CalendarDays, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import featuredImage from "../assets/images/malaria2.jpeg";

export default function FeaturedArticle() {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-6 lg:px-8">

        <div className="overflow-hidden rounded-[22px] bg-white shadow-[0_30px_70px_rgba(0,0,0,.12)] sm:rounded-[26px] lg:rounded-[28px]">

          <div className="grid lg:grid-cols-[58%_42%]">

            {/* LEFT IMAGE */}
            <div className="relative h-[280px] sm:h-[380px] md:h-[480px] lg:h-[620px]">

              <img
                src={featuredImage}
                alt="Malaria symptoms, prevention and testing"
                className="h-full w-full object-cover"
              />

              <div className="absolute left-5 top-5 rounded-full bg-[#29BDF4] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white sm:left-6 sm:top-6 sm:text-[11px] sm:tracking-[0.18em]">
                Malaria Awareness
              </div>

            </div>

            {/* RIGHT CONTENT */}
            <div className="flex flex-col justify-center px-6 py-10 sm:px-9 sm:py-12 md:px-12 md:py-14 lg:px-16 lg:py-14">

              {/* META */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] text-[#777] sm:gap-4 sm:text-[13px]">

                <CalendarDays size={15} />

                <span>September 02, 2026</span>

                <span>•</span>

                <span>10 min read</span>

              </div>

              {/* TITLE */}
              <h2 className="mt-6 text-[34px] font-bold leading-[1.08] tracking-[-0.03em] text-[#202020] sm:mt-7 sm:text-[42px] md:text-[48px] lg:mt-8 lg:text-[54px] lg:leading-[1.05]">

                Malaria
                <br />
                Symptoms,
                <br />
                Causes &
                <br />
                Prevention

              </h2>

              {/* DESCRIPTION */}
              <p className="mt-6 text-[16px] leading-7 text-[#666] sm:mt-7 sm:text-[17px] sm:leading-9 lg:mt-8">

                Malaria is a preventable and curable disease, but delayed
                diagnosis and treatment can lead to serious complications.
                Learn about common symptoms, warning signs, prevention and
                the importance of timely malaria testing.

              </p>

              {/* CTA */}
              <Link
                to="/resources/blogs/malaria-symptoms-causes-prevention-testing"
                className="mt-8 flex w-fit items-center gap-2 font-semibold text-[#29BDF4] transition-all hover:gap-3 sm:mt-10"
              >
                Read Full Article

                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}