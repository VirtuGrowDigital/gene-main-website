import BlogCard from "./BlogCard";
import TrendingSidebar from "./TrendingSidebar";

import blog1 from "../assets/images/malaria.jpeg";
import blog2 from "../assets/images/dengueblog.jpeg";
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

  {
    image: blog2,
    author: "GeneBio Healthcare",
    date: "September 02, 2026",
    readTime: "10 min read",
    slug: "dengue-symptoms-warning-signs-prevention",
    title:
      "Dengue Symptoms, Warning Signs & Prevention: What You Need to Know",
    description: `Dengue is a mosquito-borne viral infection that can affect people of all ages. While many dengue infections are mild and resolve with proper care, some cases can progress to severe dengue and require urgent medical attention.

Understanding the early symptoms, recognising warning signs and taking simple preventive measures can help you respond to dengue more effectively.`,
  },

  // {
  //   image: blog3,
  //   author: "Sarah Jenkins",
  //   date: "Apr 29, 2024",
  //   readTime: "10 min read",
  //   slug: "genomic-data-privacy",
  //   title: "The Ethics of Genomic Data Privacy",
  //   description:
  //     "Navigating patient consent in the era of large-scale bio-banking and DNA analytics.",
  // },

  // {
  //   image: blog4,
  //   author: "Robert Vance",
  //   date: "Apr 20, 2024",
  //   readTime: "6 min read",
  //   slug: "respiratory-panel-innovation",
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