export default function NewsletterCard() {
    return (
      <div className="rounded-[20px] bg-[#2C3136] p-8 text-white">
  
        <h3 className="text-[34px] font-semibold">
          Precision Insider
        </h3>
  
        <p className="mt-5 text-[15px] leading-8 text-white/75">
          Monthly deep-dives into clinical research and market trends.
        </p>
  
        <input
          placeholder="Email address"
          className="mt-8 h-12 w-full rounded-lg border border-white/15 bg-transparent px-4 text-white placeholder:text-white/40 outline-none"
        />
  
        <button className="mt-5 h-12 w-full rounded-lg bg-[#2CBDF5] text-sm font-semibold uppercase tracking-[0.08em]">
          Subscribe Now
        </button>
  
      </div>
    );
  }