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
    author: "GeneBio Healthcare",
    date: "August 30, 2026",
    readTime: "8 min read",
    slug: "swine-flu-h1n1-surge-in-lucknow",
    title:
      "Swine Flu (H1N1) Surge in Lucknow: Clinical Assessment, High-Risk Markers, and Diagnostic Protocols",
    description: `With regional hospitals across Lucknow—including SGPGI (Sanjay Gandhi Post Graduate Institute of Medical Sciences), RMLIMS, and King George’s Medical University (KGMU)—reporting admissions for Influenza A (H1N1), respiratory illness surveillance is once again in sharp focus.
  
  While the term "Swine Flu" often triggers public anxiety, medical microbiologists and the Indian Council of Medical Research (ICMR) confirm that H1N1 (specifically the A/H1N1 pdm09 strain) now circulates as an endemic seasonal influenza virus.
  
  Accurate diagnosis, standardized sample collection, and clear risk stratification are critical to managing patient outcomes without straining diagnostic infrastructure.`,
  },
  // {
  //   slug: "ai-driven-diagnostics",
  //   image: blog2,
  //   author: "Marcus Chen",
  //   date: "May 09, 2024",
  //   readTime: "6 min read",
  //   title: "AI-Driven Diagnostics: Beyond the Hype",
  //   description:
  //     "How machine learning models are improving patient outcomes in early-stage oncology screening.",
  // },
  // {
  //   slug: "genomic-data-privacy",
  //   image: blog3,
  //   author: "Sarah Jenkins",
  //   date: "Apr 29, 2024",
  //   readTime: "10 min read",
  //   title: "The Ethics of Genomic Data Privacy",
  //   description:
  //     "Navigating patient consent in the era of large-scale bio-banking and DNA analytics.",
  // },
  // {
  //   slug: "respiratory-panel-innovation",
  //   image: blog4,
  //   author: "Robert Vance",
  //   date: "Apr 20, 2024",
  //   readTime: "6 min read",
  //   title: "Respiratory Panel Innovation: A New Era",
  //   description:
  //     "Why multi-pathogen testing is becoming the gold standard for seasonal respiratory surveillance.",
  // },
];

export default function BlogGrid() {
  return (
    <section className="bg-white pb-28">
      <div className="mx-auto max-w-[1180px] px-5">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          
          {/* LEFT BLOG GRID */}
          <div className="grid gap-8 md:grid-cols-2">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.slug}
                {...blog}
              />
            ))}
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-8">
            <TrendingSidebar />

          

           
          </aside>
        </div>
      </div>
    </section>
  );
}