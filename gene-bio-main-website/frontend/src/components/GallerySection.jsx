import mainHall from "../assets/images/awards2.jpeg";
import interaction from "../assets/images/awards.jpeg";
import speech from "../assets/images/exebition4.jpeg";
import networking from "../assets/images/exebition2.jpeg";

export default function GallerySection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1180px] px-5">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-[52px] font-bold leading-tight text-[#202020]">
            Moments of{" "}
            <span className="text-[#28BDF4]">
              Excellence
            </span>
          </h2>

          <p className="mt-3 text-[16px] text-[#666]">
            A look back at our global journey in 2023.
          </p>

        </div>

        {/* Gallery */}

        <div className="mt-16 h-[760px] grid grid-cols-1 gap-4 lg:grid-cols-[1.08fr_0.92fr]">

          {/* LEFT */}

          <div className="overflow-hidden rounded-[22px]">

            <img
              src={mainHall}
              alt="Main Hall"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />

          </div>

          {/* RIGHT */}

          <div className="grid h-full grid-rows-[220px_1fr] gap-4">

            {/* Top */}

            <div className="grid grid-cols-2 gap-4">

              <div className="overflow-hidden rounded-[20px]">

                <img
                  src={interaction}
                  alt="Interaction"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />

              </div>

              <div className="overflow-hidden rounded-[20px]">

                <img
                  src={speech}
                  alt="Speech"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />

              </div>

            </div>

            {/* Bottom */}

            <div className="overflow-hidden rounded-[20px]">

              <img
                src={networking}
                alt="Networking"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}