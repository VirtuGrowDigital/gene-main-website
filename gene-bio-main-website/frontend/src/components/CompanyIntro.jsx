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
           Advancing Diagnostic   
            <span className="text-[#17A8E8]"> Precision</span>
            <span className="text-[#17A8E8]"> to Empower</span> 
            <span className="text-[#17A8E8]"> Clinical Decisions</span>
          </motion.h2>

          {/* Content */}

          <motion.div
            variants={containerVariants}
            className="mt-10 space-y-7 text-[18px] leading-9 text-[#666666]"
          >
            <motion.p variants={fadeUp}>
            Established in 2020 and headquartered in Lucknow, Uttar Pradesh, GeneBio Healthcare Pvt. Ltd. was founded with a singular objective: to manufacture clinical-grade diagnostic tests that eliminate reliance on diagnostic imports while maintaining uncompromising global quality benchmarks.

            </motion.p>

            <motion.p variants={fadeUp}>
            Operating an advanced manufacturing and cleanroom facility in the Barabanki industrial corridor, GeneBio produces millions of rapid diagnostic kits, ELISA assays, biochemistry reagents, and molecular sample preservation products each month. Every lot manufactured undergoes stringent multi-stage verification to ensure precision at the point of care.
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