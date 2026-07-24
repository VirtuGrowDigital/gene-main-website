import { motion } from "framer-motion";
import {
  FlaskConical,
  TrendingUp,
  Globe2,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    id: 1,
    icon: FlaskConical,
    title: "Innovation",
    description:
      "Pioneering molecular diagnostic solutions that set global standards.",
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "Growth",
    description:
      "Structured mentorship and career paths for every professional tier.",
  },
  {
    id: 3,
    icon: Globe2,
    title: "Global",
    description:
      "Collaborate with experts across five continents on critical projects.",
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: "Impact",
    description:
      "Your work directly improves patient outcomes and saves lives daily.",
  },
];

export default function CareerValues() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1180px] px-5 md:px-6 lg:px-8">
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-[22px] border border-[#DCEFFA] bg-white p-9 transition-all duration-300 hover:border-[#28BDF4] hover:shadow-[0_20px_45px_rgba(40,189,244,.15)]"
              >
                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-[#28BDF4] transition-all duration-500 group-hover:w-full" />

                {/* Icon */}
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-[#EAF8FF] text-[#28BDF4] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#28BDF4] group-hover:text-white">
                  <Icon size={28} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-[42px] font-bold leading-none text-[#202020]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-5 text-[15px] leading-8 text-[#666666]">
                  {item.description}
                </p>

                {/* Bottom Glow */}
                <div className="absolute -bottom-24 right-0 h-40 w-40 rounded-full bg-[#28BDF4]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}