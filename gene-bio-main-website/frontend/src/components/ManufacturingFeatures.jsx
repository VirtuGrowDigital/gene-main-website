import icon1 from "../assets/icons/Icon1.png";
import icon2 from "../assets/icons/Icon2.png";
import icon3 from "../assets/icons/Icon3.png";

export default function ManufacturingFeatures() {
  const cards = [
    {
      icon: icon1,
      value: "10000",
      label: "CLEAN ROOM FACILITY",
      text:
        "Stringent atmospheric controls and multi-stage filtration ensuring zero-contamination zones.",
    },
    {
      icon: icon2,
      value: "99.5%",
      label: "ACCURACY CERTIFIED",
      text:
        "Laser-guided calibration and multi-point AI validation for every single diagnostic component.",
    },
    {
      icon: icon3,
      value: "AI-Driven",
      label: "QUALITY CONTROL",
      text:
        "Predictive maintenance and computer-vision based defect detection running 24/7/365.",
    },
  ];

  return (
    <section className="bg-[#2D2D2D] py-28">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.value}
              className="h-[410px] rounded-[26px] bg-[#B7B7B7] px-8 pt-8 pb-10"
            >
              {/* Icon Box */}
              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[14px] bg-[#9FC6D6]">
                <img
                  src={card.icon}
                  alt=""
                  className="h-8 w-8 object-contain"
                />
              </div>

              {/* Value */}
              <h3 className="mt-10 text-[34px] font-light leading-none text-white">
                {card.value}
              </h3>

              {/* Label */}
              <p className="mt-3 text-[11px] font-medium uppercase tracking-[3px] text-white/70">
                {card.label}
              </p>

              {/* Description */}
              <p className="mt-8 text-[15px] font-semibold leading-8 text-white/90">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}