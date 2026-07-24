import { CalendarDays } from "lucide-react";

export default function ConnectExperts() {
  return (
    <section className="bg-[#F8F9FB] py-24">
      <div className="mx-auto max-w-[1180px] px-5">

        <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_25px_70px_rgba(0,0,0,0.08)]">

          <div className="grid lg:grid-cols-[420px_1fr]">

            {/* Left */}

            <div className="flex flex-col justify-center p-16">

              <h2 className="text-[52px] font-bold leading-[1.15] text-[#202020]">
                Connect with
                <br />
                Our Experts
              </h2>

              <p className="mt-8 text-[17px] leading-8 text-[#666]">
                Schedule a private demonstration or consultation at our next
                global event. Experience GeneBio's precision solutions
                firsthand.
              </p>

              <div className="mt-12 flex items-start gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E9F8FF]">

                  <CalendarDays
                    size={26}
                    className="text-[#28BDF4]"
                  />

                </div>

                <div>

                  <h4 className="text-[18px] font-semibold text-[#202020]">
                    Personalized Schedule
                  </h4>

                  <p className="mt-2 text-[15px] text-[#777]">
                    We adapt to your availability.
                  </p>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="relative min-h-[470px] bg-gradient-to-br from-[#F8FCFF] to-white">

              {/* Decorative circles */}

              <div className="absolute right-20 top-16 h-56 w-56 rounded-full bg-[#DDF5FF]/70 blur-3xl" />

              <div className="absolute bottom-16 left-20 h-40 w-40 rounded-full bg-[#EAF9FF] blur-3xl" />

              {/* Placeholder */}

              <div className="absolute inset-10 rounded-[24px] border-2 border-dashed border-[#D8EDF8] bg-[#FBFDFF] flex items-center justify-center">

                <div className="text-center">

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#EAF8FF]">

                    <CalendarDays
                      size={36}
                      className="text-[#28BDF4]"
                    />

                  </div>

                  <p className="mt-6 text-[16px] font-medium text-[#8A8A8A]">
                    Event Calendar / Consultation
                  </p>

                  <p className="mt-2 text-[14px] text-[#B0B0B0]">
                    Add Calendly, Google Calendar or illustration here.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}