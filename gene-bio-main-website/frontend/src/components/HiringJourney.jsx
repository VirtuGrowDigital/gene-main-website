import { motion } from "framer-motion";
import {
  FileText,
  SearchCheck,
  MessagesSquare,
  Users,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Apply Online",
    description:
      "Submit your application with your resume and relevant information.",
  },
  {
    icon: SearchCheck,
    title: "Application Review",
    description:
      "Our hiring team carefully reviews your profile and experience.",
  },
  {
    icon: MessagesSquare,
    title: "Interview",
    description:
      "Meet our team through technical and cultural discussions.",
  },
  {
    icon: Users,
    title: "Final Assessment",
    description:
      "A collaborative evaluation to ensure the right mutual fit.",
  },
  {
    icon: BadgeCheck,
    title: "Offer & Onboarding",
    description:
      "Receive your offer and begin your journey at GeneBio.",
  },
];

export default function HiringJourney() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1180px] px-5 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <span className="inline-flex rounded-full bg-[#EAF8FF] px-5 py-2 text-sm font-semibold text-[#1D90C5]">
            Hiring Process
          </span>

          <h2 className="mt-5 text-[40px] font-bold text-[#1D1D1D] md:text-[54px]">
            Your Hiring Journey
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-500">
            We believe in a transparent, efficient, and candidate-friendly
            recruitment process designed to help you succeed.
          </p>
        </motion.div>

        <div className="relative mt-20">
          {/* Timeline */}

          <div className="absolute left-0 right-0 top-14 hidden h-[3px] bg-[#E8EEF3] lg:block" />

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="absolute left-0 top-14 hidden h-[3px] origin-left bg-[#28BDF4] lg:block"
            style={{ width: "100%" }}
          />

          <div className="grid gap-8 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .45,
                    delay: index * .12,
                  }}
                  whileHover={{ y: -8 }}
                  className="relative text-center"
                >
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#D8EEF8] bg-white shadow-lg">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#28BDF4] text-white">
                      <Icon size={28} />
                    </div>
                  </div>

                  <div className="mx-auto mt-8 rounded-3xl border border-[#EDF2F7] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl">
                    <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#28BDF4] font-bold text-white">
                      {index + 1}
                    </div>

                    <h3 className="text-xl font-bold text-[#1D1D1D]">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}