import manufactureImg from "../assets/images/manufacturing-machine.png";
import { CircleCheck } from "lucide-react";

export default function PrecisionScale() {
  return (
    <section className="bg-white pt-[90px] pb-[90px]">
     <div className="max-w-[1380px] mx-auto px-14">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-[#18B7F2] text-[60px] font-bold leading-none">
            Precision at Scale
          </h2>

          <div className="w-[110px] h-[4px] bg-[#0B9AA7] rounded-full mx-auto mt-8"></div>

        </div>

        {/* Content */}

        <div className="mt-24 grid grid-cols-[520px_600px] justify-center items-center gap-24">
          {/* Left Side */}

          <div className="w-[500px]">

          <h3 className="text-[68px] leading-[72px] font-bold tracking-[-2px] text-[#171717]">

              Crafting reliability

              <br />

              through

              <span className="text-[#18B7F2]">

                {" "}Automated

                <br />

                Integrity.

              </span>

            </h3>

            <p className="mt-10
max-w-[470px]
text-[18px]
leading-[38px]
text-[#525252]">

              Our manufacturing lines integrate advanced AI monitoring
              with pharmaceutical-grade robotics. Every diagnostic kit
              that leaves our floor undergoes 1,200 automated checks,
              ensuring that when a life is on the line, our accuracy is
              never in question.

            </p>

            {/* Stats */}

            <div className="flex gap-16 mt-16">
                              {/* Stat 1 */}
              <div className="flex items-start gap-5">

<div className="mt-2 h-[56px] w-[3px] rounded-full bg-[#18B7F2]" />

<div>

  <h4 className="text-[44px] font-bold leading-none text-[#18B7F2]">
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

  <h4 className="text-[54px] font-bold leading-none text-[#18B7F2]">
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
w-[600px]
h-[620px]
rounded-[34px]
object-cover
shadow-[0_40px_80px_rgba(0,0,0,0.18)]
"
/>

{/* Floating Card */}

<div
className="
absolute
bottom-[-34px]
left-[-28px]
w-[360px]
rounded-[22px]
bg-white
px-7
py-5
shadow-[0_20px_50px_rgba(0,0,0,0.18)]
opacity-80
"
>

<div className="flex items-center gap-3 ">

<CircleCheck
  size={22}
  className="text-[#111]"
/>

<span className="text-lg font-semibold text-[#1E1E1E]">
  Quality Verified
</span>

</div>

<p className="mt-4 text-[16px] leading-7 text-[#666]">
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