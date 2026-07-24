import { useState } from "react";
import { motion } from "framer-motion";
import { Network, Microscope, Users } from "lucide-react";

const categories = [
  {
    id: 1,
    icon: Network,
    title: "Trade Shows",
    description: "Connecting with the global medical supply chain.",
  },
  {
    id: 2,
    icon: Microscope,
    title: "Medical Conferences",
    description: "Unveiling the future of genomic research.",
  },
  {
    id: 3,
    icon: Users,
    title: "Healthcare Expos",
    description: "Hands-on experiences with GeneBio systems.",
  },
];

export default function EventCategories() {
  const [active, setActive] = useState(2);

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1180px] px-5 md:px-6 lg:px-8">
        <div className="grid gap-7 md:grid-cols-3">
          {categories.map((item, index) => {
            const Icon = item.icon;
            const isActive = active === item.id;

            return (
              <motion.button
                key={item.id}
                type="button"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActive(item.id)}
                className={`group relative overflow-hidden rounded-[22px] border p-9 text-left transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#29BDF4]
                
                ${
                  isActive
                    ? "border-[#B8EAFB] bg-[#F7FCFF] shadow-[0_25px_55px_rgba(41,189,244,.15)]"
                    : "border-[#ECECEC] bg-white hover:border-[#CDEFFD] hover:shadow-[0_20px_45px_rgba(0,0,0,.08)]"
                }`}
              >
                {/* Top Glow */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 transition-all duration-500 ${
                    isActive ? "bg-[#29BDF4]" : "bg-transparent group-hover:bg-[#29BDF4]"
                  }`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className={`mb-7 inline-flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-500 ${
                    isActive
                      ? "bg-[#29BDF4] text-white"
                      : "bg-[#EAF8FF] text-[#29BDF4] group-hover:bg-[#29BDF4] group-hover:text-white"
                  }`}
                >
                  <Icon size={28} strokeWidth={2} />
                </motion.div>

                {/* Title */}
                <h3 className="text-[32px] font-bold leading-[1.1] text-[#202020]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-[15px] leading-7 text-[#666666]">
                  {item.description}
                </p>

                {/* Bottom Accent */}
                <motion.div
                  animate={{
                    width: isActive ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.35 }}
                  className="absolute bottom-0 left-0 h-[3px] bg-[#29BDF4]"
                />
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}