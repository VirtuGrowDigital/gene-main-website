import { motion } from "framer-motion";
import { Award } from "lucide-react";

import officeImage from "../assets/images/culture-office.png";
import meetingImage from "../assets/images/culture-meeting.png";

export default function CultureSection() {
  return (
    <section className="bg-[#F5F6F7] py-24 overflow-hidden">
      <div className="mx-auto max-w-[1180px] px-5 md:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_.95fr_.95fr]">

          {/* Quote Card */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="rounded-[30px] bg-white p-12 shadow-[0_30px_70px_rgba(0,0,0,.08)]"
          >
            <h2 className="text-[56px] font-bold leading-[1.05] text-[#202020]">
              Our DNA is
              <br />
              Excellence
            </h2>

            <p className="mt-8 text-[18px] italic leading-9 text-[#555]">
              “At GeneBio, we don't just hire for skills; we hire for the
              relentless curiosity that drives medical breakthroughs. Our
              culture is where clinical precision meets human empathy.”
            </p>

            <div className="mt-12 flex items-center gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF8FF] text-[#28BDF4]">
                <Award size={24} />
              </div>

              <div>
                <h4 className="text-[18px] font-semibold text-[#202020]">
                  Dr. Arun Kumar Srivastava
                </h4>

                <p className="mt-1 text-[15px] text-[#666]">
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
            transition={{ delay: .15 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className="overflow-hidden rounded-[26px] bg-gradient-to-br  p-3 shadow-xl">

              <img
                src={meetingImage}
                alt=""
                className="w-full rounded-xl transition duration-700 group-hover:scale-105"
              />

            </div>
          </motion.div>

          {/* Right Image */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .25 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className="overflow-hidden rounded-[26px] shadow-[0_25px_60px_rgba(0,0,0,.18)]">

              <img
                src={officeImage}
                alt=""
                className="w-full transition duration-700 group-hover:scale-105"
              />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}