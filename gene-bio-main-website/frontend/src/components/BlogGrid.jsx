import BlogCard from "./BlogCard";
import TrendingSidebar from "./TrendingSidebar";
import NewsletterCard from "./NewsletterCard";
import ResourcesCard from "./ResourcesCard";

import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";
import blog4 from "../assets/images/blog4.png";

const blogs = [
  {
    image: blog1,
    author: "Dr. Elena Smith",
    date: "May 12, 2024",
    readTime: "8 min read",
    title: "Scaling Global RNA Production for mRNA",
    description:
      "Examining the logistical challenges and scientific breakthroughs in mRNA cold-chain stability for tropical regions.",
  },
  {
    image: blog2,
    author: "Marcus Chen",
    date: "May 09, 2024",
    readTime: "6 min read",
    title: "AI-Driven Diagnostics: Beyond the Hype",
    description:
      "How machine learning models are improving patient outcomes in early-stage oncology screening.",
  },
  {
    image: blog3,
    author: "Sarah Jenkins",
    date: "Apr 29, 2024",
    readTime: "10 min read",
    title: "The Ethics of Genomic Data Privacy",
    description:
      "Navigating patient consent in the era of large-scale bio-banking and DNA analytics.",
  },
  {
    image: blog4,
    author: "Robert Vance",
    date: "Apr 20, 2024",
    readTime: "6 min read",
    title: "Respiratory Panel Innovation: A New Era",
    description:
      "Why multi-pathogen testing is becoming the gold standard for seasonal respiratory surveillance.",
  },
];

export default function BlogGrid() {
  return (
    <section className="bg-white pb-28">
      <div className="mx-auto max-w-[1180px] px-5">

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

          {/* LEFT */}

          <div className="grid gap-8 md:grid-cols-2">

            {blogs.map((blog, index) => (
              <BlogCard
                key={index}
                {...blog}
              />
            ))}

          </div>

          {/* RIGHT SIDEBAR */}

          <aside className="space-y-8">

            <TrendingSidebar />

            <NewsletterCard />

            <ResourcesCard />

          </aside>

        </div>

      </div>
    </section>
  );
}