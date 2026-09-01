import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function MissionVision() {
  return (
    <motion.section
      className="bg-[#F5F7F7] py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          className="grid gap-8 lg:grid-cols-2"
        >
          {/* Mission */}

          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -8,
              transition: { duration: 0.3 },
            }}
            className="rounded-[32px] border border-[#ECECEC] bg-white p-10 shadow-sm lg:p-12"
          >
            <motion.div
              variants={fadeUp}
              className="mb-8 h-1 w-16 rounded-full bg-[#18B7F2]"
            />

            <motion.p
              variants={fadeUp}
              className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-[#18B7F2]"
            >
              OUR MISSION
            </motion.p>

            <motion.h3
              variants={fadeUp}
              className="mb-6 text-[36px] font-bold leading-tight text-[#222]"
            >
              Making Advanced Diagnostics Accessible Worldwide
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="text-lg leading-8 text-[#666]"
            >
              To engineer robust, cost-effective, and highly sensitive diagnostic tools that enable early disease detection and improve patient outcomes across all tiers of healthcare.
            </motion.p>
          </motion.div>

          {/* Vision */}

          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -8,
              transition: { duration: 0.3 },
            }}
            className="rounded-[32px] border border-[#ECECEC] bg-white p-10 shadow-sm lg:p-12"
          >
            <motion.div
              variants={fadeUp}
              className="mb-8 h-1 w-16 rounded-full bg-[#18B7F2]"
            />

            <motion.p
              variants={fadeUp}
              className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-[#18B7F2]"
            >
              OUR VISION
            </motion.p>

            <motion.h3
              variants={fadeUp}
              className="mb-6 text-[36px] font-bold leading-tight text-[#222]"
            >
              Becoming a Global Leader in Diagnostic Innovation
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="text-lg leading-8 text-[#666]"
            >
              To stand as a globally recognized IVD innovator, driving technological sovereignty in healthcare diagnostics through continuous translational research.
              Integrity in Science: Every diagnostic claim is backed by rigorous empirical data, standardized lot verification, and strict regulatory adherence.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}