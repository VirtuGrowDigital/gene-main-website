
import BlogCard from "./BlogCard";
import TrendingSidebar from "./TrendingSidebar";

import blog1 from "../assets/images/ai.jpeg";
import blog2 from "../assets/images/dengueblog.jpeg";
import blog3 from "../assets/images/chikungunya-blog.png";
import blog4 from "../assets/images/leishmaniasis-blog.png";

// ============================================================
// BLOG DATA
// ============================================================

const blogs = [
  // ============================================================
  // CHIKUNGUNYA
  // ============================================================
    {
    image: blog1,
    author: "GeneBio Healthcare",
    date: "November 20, 2026",
    readTime: "12 min read",
    slug: "ai-in-medical-diagnostics-artificial-intelligence-healthcare-2026",
    title:
      "AI in Medical Diagnostics: How Artificial Intelligence Is Transforming Healthcare in 2026",
    description: `Artificial Intelligence is transforming healthcare by improving how diseases are detected, medical data is analysed and diagnostic decisions are supported.

Explore how AI-powered medical imaging, automated laboratory systems, infectious disease detection and advanced data analysis are shaping the future of In Vitro Diagnostics (IVD) and healthcare technology.`,
  },


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
  // LEISHMANIASIS / KALA-AZAR
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
  // AI IN MEDICAL DIAGNOSTICS — NEW
  // ============================================================


  // ============================================================
  // DENGUE
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

          {/* LEFT BLOG GRID */}

          <div className="grid gap-7 sm:gap-8 md:grid-cols-2">
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
