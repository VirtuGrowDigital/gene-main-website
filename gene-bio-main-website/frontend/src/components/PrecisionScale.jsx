import manufactureImg from "../assets/images/manufacturing-machine.png";
import { CircleCheck } from "lucide-react";

export default function PrecisionScale() {
  return (
    <section className="bg-white py-16 lg:pt-[90px] lg:pb-[90px]">
     <div className="mx-auto max-w-[1380px] px-5 md:px-8 lg:px-14">

        {/* Heading */}

        <div className="text-center">

        <h2 className="text-[36px] font-bold leading-tight text-[#18B7F2] md:text-[48px] lg:text-[60px]">
            Precision at Scale
          </h2>

          <div className="mx-auto mt-6 h-[4px] w-[90px] rounded-full bg-[#0B9AA7] lg:mt-8 lg:w-[110px]" />

        </div>

        {/* Content */}

        <div className="mt-14 grid items-center gap-14 lg:mt-24 lg:grid-cols-[520px_600px] lg:justify-center lg:gap-24">
          {/* Left Side */}

          <div className="w-full lg:w-[500px]">

          <h3 className="text-[38px] font-bold leading-[1.1] tracking-[-1px] text-[#171717] md:text-[52px] lg:text-[68px] lg:leading-[72px] lg:tracking-[-2px]">

              Crafting reliability

              <br />

              through

              <span className="text-[#18B7F2]">

                {" "}Automated

                <br />

                Integrity.

              </span>

            </h3>

            <p className="mt-6 max-w-full text-[16px] leading-8 text-[#525252] lg:mt-10 lg:max-w-[470px] lg:text-[18px] lg:leading-[38px]">

              Our manufacturing lines integrate advanced AI monitoring
              with pharmaceutical-grade robotics. Every diagnostic kit
              that leaves our floor undergoes 1,200 automated checks,
              ensuring that when a life is on the line, our accuracy is
              never in question.

            </p>

            {/* Stats */}

            <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:gap-12 lg:mt-16 lg:gap-16">
                              {/* Stat 1 */}
              <div className="flex items-start gap-5">

<div className="mt-2 h-[56px] w-[3px] rounded-full bg-[#18B7F2]" />

<div>

  <h4 className="text-[36px] lg:text-[44px] font-bold leading-none text-[#18B7F2]">
    12M+
  </h4>

  <p className="mt-3 text-[13px] font-medium uppercase tracking-[3px] text-[#7B7B7B]">
    KITS MONTHLY
  </p>

</div>

</div>

{/* Stat 2 */}
<div className="flex items-start gap-5">

<div className="mt-2 h-[72px] w-[3px] rounded-full bg-[#18B7F2]" />

<div>

  <h4 className="text-[42px] lg:text-[54px] font-bold leading-none text-[#18B7F2]">
    0.01%
  </h4>

  <p className="mt-3 text-[13px] font-medium uppercase tracking-[3px] text-[#7B7B7B]">
    ERROR MARGIN
  </p>

</div>

</div>

</div>

</div>

{/* Right Side */}

<div className="relative flex justify-center">

<img
src={manufactureImg}
alt="Manufacturing"
className="
w-full
max-w-[600px]
rounded-[24px]
object-cover
shadow-[0_40px_80px_rgba(0,0,0,0.18)]
lg:h-[620px]
lg:rounded-[34px]
"
/>

{/* Floating Card */}

<div
className="
absolute
bottom-4
left-4
right-4
rounded-[18px]
bg-white/90
px-5
py-4
shadow-[0_20px_50px_rgba(0,0,0,0.18)]
backdrop-blur
lg:bottom-[-34px]
lg:left-[-28px]
lg:right-auto
lg:w-[360px]
lg:rounded-[22px]
lg:px-7
lg:py-5
"
>

<div className="flex items-center gap-3 ">

<CircleCheck
  size={22}
  className="text-[#111]"
/>

<span className="text-base font-semibold text-[#1E1E1E] lg:text-lg">
  Quality Verified
</span>

</div>

<p className="mt-3 text-[14px] leading-6 text-[#666] lg:mt-4 lg:text-[16px] lg:leading-7">
Every production batch undergoes
multi-stage validation before
leaving our facility.
</p>

</div>

</div>

</div>
</div>
    </section>
  );
}