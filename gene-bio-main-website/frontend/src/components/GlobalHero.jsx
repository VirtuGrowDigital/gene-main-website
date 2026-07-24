import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero-bg.png";

export default function GlobalHero() {
  return (
    <section className="relative h-[760px] overflow-hidden">
      {/* Background */}
      <img
        src={heroImage}
        alt="Global Presence"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00131e]/75 via-[#00131e]/35 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1180px] items-center px-6">

        <div className="max-w-[520px]">

          <h1 className="text-[38px] font-bold leading-[1.1] text-white md:text-[56px]">
            Expanding
            <br />
            <span className="text-[#21BDF4]">
              Global Access
            </span>{" "}
            to
            <br />
            Precision Care
          </h1>

          <p className="mt-6 max-w-[430px] text-[15px] leading-8 text-white/80">
            Our interconnected logistics network ensures life-saving
            diagnostics reach every corner of the world with zero
            compromise on integrity.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/contact"
              className="rounded-md bg-[#21BDF4] px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#14b0ea]"
            >
              View Logistic Map
            </Link>

            <Link
              to="/partners/distributor"
              className="rounded-md bg-white px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-[#032A35] transition hover:bg-[#F2F2F2]"
            >
              Partner Network
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}