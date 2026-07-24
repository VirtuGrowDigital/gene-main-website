import { motion } from "framer-motion";
import {
  HeartPulse,
  GraduationCap,
  BriefcaseBusiness,
  Gem,
} from "lucide-react";

const benefits = [
  {
    icon: HeartPulse,
    title: "Health & Wellness",
    description:
      "Premium global health coverage including mental wellness apps.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Uncapped tuition reimbursement and professional certifications.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Flexible Flow",
    description:
      "Hybrid-first approach with focus on results, not desk hours.",
  },
  {
    icon: Gem,
    title: "Growth Incentives",
    description:
      "Competitive equity packages and performance-based rewards.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-[1180px] px-5 md:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[54px] font-bold leading-tight text-[#202020]">
            Rewarding Your Dedication
          </h2>

          <p className="mt-4 text-[17px] text-[#666]">
            Comprehensive benefits designed for the modern innovator.
          </p>
        </motion.div>

        {/* Benefits */}

        <div className="mt-20 grid gap-10 sm:grid-cols-2 xl:grid-cols-4">

          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group text-center"
              >
                {/* Icon */}

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#DFF6FF] transition duration-300 group-hover:bg-[#28BDF4]">

                  <Icon
                    size={34}
                    className="text-[#28BDF4] transition duration-300 group-hover:text-white group-hover:scale-110"
                  />

                </div>

                {/* Title */}

                <h3 className="mt-8 text-[24px] font-semibold text-[#202020]">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mx-auto mt-4 max-w-[250px] text-[15px] leading-8 text-[#666]">
                  {item.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}