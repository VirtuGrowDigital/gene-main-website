import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import banner from "../assets/images/exebition.jpg";

export default function FeaturedEvent() {
  // Medical Fair India 2026
  // 17 September 2026
  const eventDate = new Date("2026-09-17T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(
        Math.floor(difference / (1000 * 60 * 60 * 24))
      ).padStart(2, "0"),
      hours: String(
        Math.floor((difference / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0"),
      minutes: String(
        Math.floor((difference / (1000 * 60)) % 60)
      ).padStart(2, "0"),
      seconds: String(
        Math.floor((difference / 1000) % 60)
      ).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[34px]"
        >
          {/* Background */}

          <img
            src={banner}
            alt="Featured Event"
            className="h-[520px] w-full object-cover md:h-[600px] lg:h-[650px] transition duration-700 hover:scale-105"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />

          {/* Left Content */}

          <div className="absolute left-8 top-8 max-w-[580px] text-white md:left-12 md:top-12 lg:left-20 lg:top-20">
            <span className="rounded-full border border-white/25 bg-white/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] backdrop-blur">
              Coming Soon
            </span>

            <h2 className="mt-8 text-[32px] font-bold leading-[1.05] md:text-[36px] lg:text-[42px]">
              GeneBio Innovation Summit 2026
            </h2>

            <p className="mt-6 max-w-[520px] text-[16px] leading-8 text-white/80">
            The leaders shaping the future of healthcare are coming together under one roof!.
            <br></br>
            From cutting-edge medical devices and advanced hospital equipment to breakthrough health-tech innovations, explore top industry brands showcase their latest solutions at Medical Fair India 2026 in Mumbai!
           <br></br>
           <span className="text-blue-200">
           Hall 4, Bombay Exhibition Center, Goregaon (E), Mumbai
           17–19 September 2026
           </span>
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="mt-10 rounded-full bg-[#29BDF4] px-10 py-4 text-[15px] font-semibold text-white shadow-lg transition hover:bg-[#12A7E4]"
            >
              Register Interest
            </motion.button>
          </div>

          {/* Countdown */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="absolute bottom-8 right-8 rounded-[24px] border border-white/20 bg-white/80 px-8 py-8 shadow-[0_25px_70px_rgba(0,0,0,.18)] backdrop-blur-xl md:bottom-12 md:right-12 lg:bottom-20 lg:right-20 lg:px-12 lg:py-10"
          >
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-[#777]">
              Countdown To Launch
            </p>

            <div className="mt-7 flex gap-6 lg:gap-8">
              {[
                [timeLeft.days, "Days"],
                [timeLeft.hours, "Hrs"],
                [timeLeft.minutes, "Min"],
                [timeLeft.seconds, "Sec"],
              ].map(([value, label]) => (
                <div key={label} className="text-center">
                  <div className="text-[32px] font-extrabold text-[#202020] tabular-nums lg:text-[46px]">
                    {value}
                  </div>

                  <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#888]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}