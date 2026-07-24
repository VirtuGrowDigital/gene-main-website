import { CalendarDays, ArrowRight } from "lucide-react";
import featuredImage from "../assets/images/blog1.png"; // use your featured image

export default function FeaturedArticle() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1180px] px-5">

        <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_30px_70px_rgba(0,0,0,.12)]">

          <div className="grid lg:grid-cols-[58%_42%]">

            {/* LEFT IMAGE */}

            <div className="relative h-[620px]">

              <img
                src={featuredImage}
                alt=""
                className="h-full w-full object-cover"
              />

              <div className="absolute left-6 top-6 rounded-full bg-[#29BDF4] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                Future of POCT
              </div>

            </div>

            {/* RIGHT */}

            <div className="flex flex-col justify-center px-16 py-14">

              <div className="flex items-center gap-4 text-[13px] text-[#777]">

                <CalendarDays size={15} />

                <span>May 24, 2024</span>

                <span>•</span>

                <span>12 min read</span>

              </div>

              <h2 className="mt-8 text-[54px] font-bold leading-[1.05] tracking-[-0.03em] text-[#202020]">
                The Next
                <br />
                Decade of
                <br />
                Rapid Point-
                <br />
                of-Care
                <br />
                Molecular
                <br />
                Testing
              </h2>

              <p className="mt-8 text-[17px] leading-9 text-[#666]">
                As decentralization continues to reshape diagnostic
                landscapes, we analyze the architectural shift toward
                molecular intelligence in community clinics.
              </p>

              <button className="mt-10 flex w-fit items-center gap-2 font-semibold text-[#29BDF4] transition hover:gap-3">

                Read Full Article

                <ArrowRight size={18} />

              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}