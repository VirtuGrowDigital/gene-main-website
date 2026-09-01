import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronUp } from "lucide-react";

export default function BlogCard({
  image,
  author,
  date,
  readTime,
  title,
  description,
  slug,
}) {
  const [expanded, setExpanded] = useState(false);

  const isLongDescription = description.length > 220;

  const shortDescription = isLongDescription
    ? `${description.substring(0, 220)}...`
    : description;

  return (
    <article className="overflow-hidden rounded-[20px] border border-[#EEF2F5] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="h-[230px] w-full object-cover"
      />

      <div className="p-6">

        {/* Author Info */}
        <div className="flex flex-wrap items-center gap-3 text-[12px] text-[#777]">
          <div className="h-9 w-9 rounded-full bg-[#E9EEF2]" />

          <span className="font-medium">{author}</span>

          <span>•</span>

          <span>{date}</span>

          <span>•</span>

          <span>{readTime}</span>
        </div>

        {/* Title */}
        <h3 className="mt-5 text-[34px] font-semibold leading-[1.2] text-[#222]">
          {title}
        </h3>

        {/* Description */}
        <div className="mt-5 text-[15px] leading-8 text-[#666]">
          {expanded ? (
            description.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))
          ) : (
            <p>{shortDescription}</p>
          )}
        </div>

        {/* View More / View Less */}
        {isLongDescription && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#2CBDF5] transition hover:text-[#178EF2]"
          >
            {expanded ? (
              <>
                View Less
                <ChevronUp size={16} />
              </>
            ) : (
              <>
                View More
                <ArrowRight size={16} />
              </>
            )}
          </button>
        )}

        {/* Learn More */}
        <Link
          to={`/resources/blogs/${slug}`}
          className="mt-6 flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#2CBDF5] transition hover:text-[#178EF2]"
        >
          Learn More
          <ArrowRight size={16} />
        </Link>

      </div>
    </article>
  );
}