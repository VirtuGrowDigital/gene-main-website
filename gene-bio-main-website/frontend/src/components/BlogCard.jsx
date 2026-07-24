import { ArrowRight } from "lucide-react";

export default function BlogCard({
  image,
  author,
  date,
  readTime,
  title,
  description,
}) {
  return (
    <article className="overflow-hidden rounded-[20px] border border-[#EEF2F5] bg-white transition hover:-translate-y-1 hover:shadow-xl">

      <img
        src={image}
        alt={title}
        className="h-[230px] w-full object-cover"
      />

      <div className="p-6">

        <div className="flex items-center gap-3 text-[12px] text-[#777]">

          <div className="h-9 w-9 rounded-full bg-[#E9EEF2]" />

          <span className="font-medium">{author}</span>

          <span>•</span>

          <span>{date}</span>

          <span>•</span>

          <span>{readTime}</span>

        </div>

        <h3 className="mt-5 text-[34px] font-semibold leading-[1.2] text-[#222]">
          {title}
        </h3>

        <p className="mt-5 text-[15px] leading-8 text-[#666]">
          {description}
        </p>

        <button className="mt-7 flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#2CBDF5]">
          Learn More
          <ArrowRight size={16} />
        </button>

      </div>

    </article>
  );
}