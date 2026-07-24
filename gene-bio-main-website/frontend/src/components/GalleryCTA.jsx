import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function GalleryCTA() {
  return (
    <section className="relative overflow-hidden bg-[#032A35] py-28">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#21BDF4]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1180px] px-6">

        <div className="mx-auto max-w-[900px] text-center">

          <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-[#21BDF4]">
            Let's Build Healthcare Together
          </p>

          <h2 className="mt-6 text-[40px] font-bold leading-[1.2] text-white md:text-[52px]">
            Partner With
            <br />
            GeneBio Healthcare
          </h2>

          <p className="mx-auto mt-8 max-w-[620px] text-[16px] leading-8 text-white/75">
            From innovative diagnostics to dependable manufacturing,
            we're committed to delivering quality healthcare solutions
            across the globe.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#21BDF4] px-8 py-4 text-[14px] font-semibold text-[#032A35] transition hover:scale-105"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-[14px] font-semibold text-white transition hover:border-[#21BDF4] hover:bg-white/5"
            >
              Explore Products
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}