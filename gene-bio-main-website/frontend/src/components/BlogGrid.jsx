import BlogCard from "./BlogCard";
import TrendingSidebar from "./TrendingSidebar";

import blog1 from "../assets/images/malaria.jpeg";
import blog2 from "../assets/images/dengueblog.jpeg";
import blog3 from "../assets/images/chikungunya-blog.png";
import blog4 from "../assets/images/leishmaniasis-blog.png";

// ============================================================
// BLOG DATA
// ============================================================

const blogs = [
  // ============================================================
  // CHIKUNGUNYA — NEW
  // ============================================================

  {
    image: blog3,
    author: "GeneBio Healthcare",
    date: "October 07, 2026",
    readTime: "8 min read",
    slug: "chikungunya-symptoms-testing-prevention",
    title:
      "Chikungunya Symptoms, Testing & Prevention: What You Need to Know",
    description: `A sudden fever accompanied by intense joint pain can be easy to mistake for dengue, flu or another viral infection.

Understanding chikungunya symptoms, knowing when testing may be needed and taking steps to prevent mosquito bites can help reduce the impact of this mosquito-borne disease.`,
  },

  // ============================================================
  // LEISHMANIASIS / KALA-AZAR — NEW
  // ============================================================

  {
    image: blog4,
    author: "GeneBio Healthcare",
    date: "October 07, 2026",
    readTime: "10 min read",
    slug: "leishmaniasis-kala-azar-symptoms-testing-prevention",
    title:
      "Leishmaniasis (Kala-azar): Symptoms, Causes, Testing & Prevention",
    description: `A fever that continues for weeks, unexplained weight loss or unusual weakness should never be ignored, especially in areas where leishmaniasis occurs.

Learn about Kala-azar symptoms, transmission, diagnosis, rapid testing and prevention.`,
  },

  // ============================================================
  // SWINE FLU — OLD
  // ============================================================

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

  // ============================================================
  // DENGUE — OLD
  // ============================================================

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
];

// ============================================================
// COMPONENT
// ============================================================

export default function BlogGrid() {
  return (
    <section className="bg-white pb-20 sm:pb-24 lg:pb-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-8">

          {/* ==================================================
              LEFT BLOG GRID
          ================================================== */}

          <div className="grid gap-7 sm:gap-8 md:grid-cols-2">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.slug}
                {...blog}
              />
            ))}
          </div>

          {/* ==================================================
              RIGHT SIDEBAR
          ================================================== */}

          <aside className="space-y-8">
            <TrendingSidebar />
          </aside>

        </div>
      </div>
    </section>
  );
}