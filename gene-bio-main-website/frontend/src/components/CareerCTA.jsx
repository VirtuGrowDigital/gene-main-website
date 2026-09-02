import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";

export default function CareerCTA() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1180px] px-5 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[36px] bg-[#111827] px-8 py-20 md:px-16 lg:px-24"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#28BDF4]/25 blur-[120px]" />

            <div className="absolute -left-24 -bottom-24 h-[250px] w-[250px] rounded-full bg-cyan-400/10 blur-[100px]" />

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
            />
          </div>

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)
              `,
              backgroundSize: "42px 42px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-300"
            >
              Careers at GeneBio
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
              className="mt-8 text-[38px] font-bold leading-tight text-white md:text-[56px]"
            >
              Ready to Build the
              <br />
              Future of Diagnostics?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              viewport={{ once: true }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70"
            >
              Join a passionate team dedicated to advancing healthcare through
              innovation, collaboration, and scientific excellence. Your next
              career opportunity starts here.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              viewport={{ once: true }}
              className="mt-12 flex flex-col justify-center gap-4 sm:flex-row"
            >
            
            <a
  href="/careers#open-roles"
  className="group inline-flex items-center justify-center gap-2 rounded-full border bg-[#28BDF4] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#18A7DB]"
>
  <BriefcaseBusiness size={18} />

  View Open Roles
</a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}