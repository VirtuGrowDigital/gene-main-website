export default function ProductCard({
    title,
    description,
    image,
    active,
    onClick,
  }) {
    return (
      <div
        onClick={onClick}
        className={`cursor-pointer overflow-hidden rounded-[30px] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
          active
            ? "border-[4px] border-[#178EF2]"
            : "border-[2px] border-[#9ED8E8]"
        }`}
      >
        {/* Image */}
  
        <div className="flex h-[320px] items-center justify-center bg-[#DDF7FC] p-10">
  
          <img
            src={image}
            alt={title}
            className="max-h-[220px] w-auto object-contain transition duration-300 hover:scale-105"
          />
  
        </div>
  
        {/* Content */}
  
        <div className="border-t border-[#D8EEF5] bg-white p-5">
  
          <h3 className="text-[20px] font-bold leading-tight text-[#111]">
            {title}
          </h3>
  
          <p className="mt-3 min-h-[72px] text-[14px] leading-7 text-[#5F5F5F]">
            {description}
          </p>
  
          <div className="mt-6 flex gap-3">
  
            <button
              onClick={(e) => {
                e.stopPropagation();
                alert(`Downloading spec for ${title}`);
              }}
              className="flex-1 rounded-full bg-[#0B95A5] py-3 text-[13px] font-semibold text-white transition hover:bg-[#087B89]"
            >
              Download Spec
            </button>
  
            <button
              onClick={(e) => {
                e.stopPropagation();
                alert(`Get Quote for ${title}`);
              }}
              className="flex-1 rounded-full border border-[#0B95A5] py-3 text-[13px] font-semibold text-[#0B95A5] transition hover:bg-[#0B95A5] hover:text-white"
            >
              Get Quote
            </button>
  
          </div>
  
        </div>
      </div>
    );
  }