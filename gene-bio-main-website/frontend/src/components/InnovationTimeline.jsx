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

const leftCard = {
  hidden: {
    opacity: 0,
    x: -60,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const rightCard = {
  hidden: {
    opacity: 0,
    x: 60,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function InnovationTimeline() {
  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description:
        "GeneBio Healthcare was established with the vision of delivering innovative and reliable diagnostic solutions.",
    },
    {
      year: "2020",
      title: "Manufacturing Expansion",
      description:
        "Expanded production capabilities with advanced manufacturing infrastructure and quality assurance systems.",
    },
    {
      year: "2021",
      title: "Global Presence",
      description:
        "Successfully expanded our distribution network across multiple international markets.",
    },
    {
      year: "2024",
      title: "Innovation & Growth",
      description:
        "Continuing to invest in R&D, product innovation and strategic healthcare partnerships worldwide.",
    },
  ];

  return (
    <motion.section
      className="bg-white py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          variants={containerVariants}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-[#18B7F2]"
          >
            OUR JOURNEY
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-5xl font-bold leading-tight text-[#222]"
          >
            Innovation Milestones
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-8 text-[#666]"
          >
            Every milestone reflects our commitment to advancing diagnostic
            science and delivering healthcare solutions trusted worldwide.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Center Line */}

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-1/2 top-0 hidden h-full w-[2px] origin-top -translate-x-1/2 bg-[#D9EEF8] lg:block"
          />

          <div className="space-y-16">
            {milestones.map((item, index) => (
              <div
                key={item.year}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  index % 2 === 0 ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                {/* Card */}

                <motion.div
                  variants={index % 2 === 0 ? leftCard : rightCard}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  className={`${
                    index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
                  }`}
                >
                  <div className="rounded-[28px] border border-[#ECECEC] bg-[#F8FAFA] p-8 shadow-sm">
                    <motion.span
                      variants={fadeUp}
                      className="mb-6 inline-flex items-center justify-center rounded-full bg-[#18B7F2] px-5 py-2 text-sm font-bold text-white"
                    >
                      {item.year}
                    </motion.span>

                    <motion.h3
                      variants={fadeUp}
                      className="mb-4 text-3xl font-bold text-[#222]"
                    >
                      {item.title}
                    </motion.h3>

                    <motion.p
                      variants={fadeUp}
                      className="leading-8 text-[#666]"
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </motion.div>

                {/* Timeline Dot */}

                <div className="hidden justify-center lg:flex">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 220,
                      damping: 18,
                    }}
                    className="h-6 w-6 rounded-full border-[6px] border-white bg-[#18B7F2] shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}