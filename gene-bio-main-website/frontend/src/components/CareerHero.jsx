import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import heroImage from "../assets/images/hero-bg.png";

export default function CareerHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#02131D]">
      {/* Background Image */}

      <img
        src={heroImage}
        alt="Career Hero"
        className="absolute inset-0 h-full w-full object-cover object-right"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#00131E]/90 via-[#00131E]/55 to-transparent" />

      {/* Decorative Glow */}

      <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#28BDF4]/20 blur-[130px]" />

      <Navbar />

      <div className="relative mx-auto flex min-h-screen max-w-[1180px] items-center px-5 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="max-w-[560px]"
        >
          <h1 className="text-[40px] font-bold leading-[1.12] tracking-[-0.02em] text-white md:text-[54px]">
            Build The
            <br />
            <span className="text-[#28BDF4]">
              Future Of Diagnostics
            </span>
          </h1>

          <p className="mt-7 max-w-[470px] text-[15px] leading-8 text-white/75">
            Join a team of visionaries dedicated to redefining human health
            through precision biotech and innovative engineering.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="#roles"
              className="rounded-lg bg-[#28BDF4] px-8 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#12ACE7]"
            >
              View Openings
            </Link>

            <Link
              to="/about"
              className="rounded-lg bg-white px-8 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#202020] transition duration-300 hover:-translate-y-1"
            >
              Our Mission
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}

    
    </section>
  );
}