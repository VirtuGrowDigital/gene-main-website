import { motion } from "framer-motion";

import labImg from "../assets/images/office.jpg";
import officeImg from "../assets/images/lab.jpg";
import peopleImg from "../assets/images/diagnostic-lab.png";

const galleryItems = [
  {
    title: "Collaborative Culture",
    image: officeImg,
  },
  {
    title: "Global Impact",
    image: peopleImg,
  },
];

export default function CareerGallery() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1180px] px-5 md:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-[38px] font-bold leading-tight text-[#1D1D1D] md:text-[50px]">
            Life at GeneBio
          </h2>

          <p className="mt-5 text-[17px] leading-8 text-[#667085]">
            Discover our collaborative culture, advanced laboratories,
            innovative workspaces, and the passionate people building the
            future of diagnostics.
          </p>
        </motion.div>


        {/* Gallery */}

        <div className="mt-16 space-y-6">

          {/* 1. Large Image */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-[28px]"
          >
            <img
              src={labImg}
              alt="GeneBio Laboratory"
              className="
                h-[430px]
                w-full
                object-cover
                transition
                duration-700
                group-hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>


          {/* Bottom Grid */}

          <div className="grid gap-6 md:grid-cols-2">

            {/* 2 & 3 */}

            {galleryItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="group relative overflow-hidden rounded-[24px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-[250px]
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-medium text-white backdrop-blur-md">
                    {item.title}
                  </span>
                </div>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}