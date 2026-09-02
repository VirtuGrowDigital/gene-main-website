import { motion } from "framer-motion";
import { Award } from "lucide-react";

import officeImage from "../assets/images/culture-office.png";
import meetingImage from "../assets/images/culture-meeting.png";

export default function CultureSection() {
  return (
    <section className="overflow-hidden bg-[#F5F6F7] py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-6 md:px-6 lg:px-8">
        <div className="grid items-center gap-6 sm:gap-8 md:gap-10 lg:grid-cols-[1.15fr_.95fr_.95fr]">

          {/* Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              rounded-[24px]
              bg-white
              p-7
              shadow-[0_20px_50px_rgba(0,0,0,.07)]
              sm:rounded-[26px]
              sm:p-9
              md:rounded-[30px]
              md:p-10
              lg:p-12
            "
          >
            <h2
              className="
                text-[34px]
                font-bold
                leading-[1.08]
                tracking-[-0.02em]
                text-[#202020]
                sm:text-[40px]
                md:text-[48px]
                lg:text-[56px]
                lg:leading-[1.05]
              "
            >
              Building the
              <br />
              Future of Diagnostics
            </h2>

            <p
              className="
                mt-6
                text-[16px]
                italic
                leading-7
                text-[#555]
                sm:mt-7
                sm:text-[17px]
                sm:leading-8
                md:mt-8
                md:text-[18px]
                md:leading-9
              "
            >
              “At GeneBio, our work directly impacts clinical decisions and
              patient outcomes every single day. We bring together scientific
              rigor, cleanroom precision, and a shared commitment to making
              advanced diagnostics accessible at a population scale.”
            </p>

            <div
              className="
                mt-8
                flex
                items-center
                gap-4
                sm:mt-10
                sm:gap-5
                md:mt-12
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#EAF8FF]
                  text-[#28BDF4]
                  sm:h-14
                  sm:w-14
                "
              >
                <Award size={22} className="sm:h-6 sm:w-6" />
              </div>

              <div className="min-w-0">
                <h4
                  className="
                    text-[16px]
                    font-semibold
                    leading-6
                    text-[#202020]
                    sm:text-[17px]
                    md:text-[18px]
                  "
                >
                  Dr. Arun Kumar Srivastava
                </h4>

                <p
                  className="
                    mt-0.5
                    text-[13px]
                    leading-5
                    text-[#666]
                    sm:mt-1
                    sm:text-[14px]
                    md:text-[15px]
                  "
                >
                  Director of GeneBio Healthcare
                </p>
              </div>
            </div>
          </motion.div>

          {/* Middle Image */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div
              className="
                overflow-hidden
                rounded-[22px]
                bg-gradient-to-br
                p-2.5
                shadow-xl
                sm:rounded-[24px]
                sm:p-3
                md:rounded-[26px]
              "
            >
              <img
                src={meetingImage}
                alt="GeneBio Healthcare team meeting"
                className="
                  block
                  h-auto
                  w-full
                  rounded-[14px]
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                  sm:rounded-[16px]
                "
              />
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div
              className="
                overflow-hidden
                rounded-[22px]
                shadow-[0_20px_50px_rgba(0,0,0,.14)]
                sm:rounded-[24px]
                md:rounded-[26px]
              "
            >
              <img
                src={officeImage}
                alt="GeneBio Healthcare office"
                className="
                  block
                  h-auto
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                "
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}