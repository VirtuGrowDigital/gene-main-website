import { motion } from "framer-motion";

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

export default function CompanyIntro() {
  return (
    <motion.section
      className="bg-white py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-5xl">
          {/* Label */}

          <motion.p
            variants={fadeUp}
            className="mb-6 text-sm font-semibold uppercase tracking-[3px] text-[#17A8E8]"
          >
            ABOUT GENEBIO HEALTHCARE
          </motion.p>

          {/* Heading */}

          <motion.h2
            variants={fadeUp}
            className="text-[44px] font-bold leading-[1.2] text-[#232323] lg:text-[56px]"
          >
            Transforming Diagnostics Through
            <span className="text-[#17A8E8]"> Science</span>,
            <span className="text-[#17A8E8]"> Innovation</span> &
            <span className="text-[#17A8E8]"> Trust</span>
          </motion.h2>

          {/* Content */}

          <motion.div
            variants={containerVariants}
            className="mt-10 space-y-7 text-[18px] leading-9 text-[#666666]"
          >
            <motion.p variants={fadeUp}>
              GeneBio Healthcare Pvt. Ltd. is an innovation-driven healthcare
              company focused on delivering advanced
              <span className="font-semibold text-[#222]">
                {" "}
                In-Vitro Diagnostic (IVD)
              </span>{" "}
              solutions that empower clinicians, laboratories and healthcare
              professionals across the globe.
            </motion.p>

            <motion.p variants={fadeUp}>
              Combining cutting-edge biotechnology with precision manufacturing,
              our product portfolio spans rapid diagnostics, molecular testing,
              serology, microbiology and laboratory consumables, ensuring
              dependable results for every stage of patient care.
            </motion.p>

            <motion.p variants={fadeUp}>
              Our commitment extends beyond manufacturing—we continuously invest
              in research, regulatory excellence and strategic partnerships to
              shape the future of diagnostic healthcare.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}