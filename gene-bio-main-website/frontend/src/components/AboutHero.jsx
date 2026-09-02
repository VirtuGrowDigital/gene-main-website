import { motion } from "framer-motion";
import heroBg from "../assets/images/hero-bg.png";
import heroBgMobile from "../assets/images/home-bg-mobile.png";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AboutHero() {
  return (
    <section className="relative h-[100vh] min-h-[650px] max-h-[824px] overflow-hidden bg-[#00141d]">
      {/* Desktop Background */}

      <motion.img
        src={heroBg}
        alt="About Hero"
        className="absolute inset-0 hidden h-full w-full object-cover lg:block"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Mobile Background */}

      <motion.img
        src={heroBgMobile}
        alt="About Hero"
        className="absolute inset-0 h-full w-full object-cover object-center lg:hidden"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Dark Overlay */}

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#00131e]/85 via-[#00131e]/45 to-transparent lg:from-[#00131e]/60 lg:via-[#00131e]/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Content */}

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1180px] items-center px-5 md:px-6 lg:px-8">
        <motion.div
          className="mt-16 max-w-[500px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Label */}

          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex rounded-full border border-[#18B7F2]/30 bg-[#032a35]/50 px-4 py-1.5"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#36D8F4]">
              The Precision Standard
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h1
            variants={fadeUp}
            className="text-[38px] font-bold leading-[1.15] tracking-[-0.02em] text-white md:text-[48px] lg:text-[54px]"
          >
           IVD 
            <br />
            <span className="text-[#20C9EE]">
           Manufacturing 
            </span>{" "}
            Company in India
          </motion.h1>

          {/* Description */}

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-[450px] text-[13px] leading-[1.8] text-white/70 md:text-[14px]"
          >
            Developed in collaboration with premier research institutions like CSIR-CDRI, GeneBio Healthcare manufactures indigenized, point-of-care diagnostic assays and specimen preservation systems. We combine rigorous analytical validation with scalable manufacturing to support hospitals, pathology networks, and national health programs.
          </motion.p>

          {/* Button */}

          
        </motion.div>
      </div>
    </section>
  );
}