import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import heroImage from "../assets/images/hero-bg.png";
import heroImageMobile from "../assets/images/home-bg-mobile.png";

export default function CareerHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#02131D]">
      {/* Desktop Background */}

      <img
        src={heroImage}
        alt="Career Hero"
        className="absolute inset-0 hidden h-full w-full object-cover object-right lg:block"
      />

      {/* Mobile Background */}

      <img
        src={heroImageMobile}
        alt="Career Hero"
        className="absolute inset-0 h-full w-full object-cover object-center lg:hidden"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#00131E]/90 via-[#00131E]/60 to-transparent lg:from-[#00131E]/90 lg:via-[#00131E]/55 lg:to-transparent" />

      {/* Decorative Glow */}

      <div className="absolute -left-24 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-[#28BDF4]/20 blur-[110px] lg:h-72 lg:w-72 lg:blur-[130px]" />

      {/* Navbar */}

      <Navbar />

      {/* Hero */}

      <div className="relative mx-auto flex min-h-screen max-w-[1180px] items-center px-5 pt-24 md:px-6 md:pt-28 lg:px-8 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-[560px]"
        >
          {/* Heading */}

          <h1 className="text-[38px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[48px] lg:text-[54px]">
            Build The
            <br />
            <span className="text-[#28BDF4]">
              Future Of Diagnostics
            </span>
          </h1>

          {/* Description */}

          <p className="mt-6 max-w-[470px] text-[15px] leading-7 text-white/75 lg:mt-7 lg:leading-8">
            Join a team of visionaries dedicated to redefining human health
            through precision biotech and innovative engineering.
          </p>

          {/* Buttons */}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:mt-10">
            <Link
              to="#roles"
              className="rounded-lg bg-[#28BDF4] px-8 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#12ACE7]"
            >
              View Openings
            </Link>

            <Link
              to="/about"
              className="rounded-lg bg-white px-8 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-[#202020] transition duration-300 hover:-translate-y-1"
            >
              Our Mission
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}