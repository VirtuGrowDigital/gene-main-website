import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";
import blog4 from "../assets/images/blog4.png";

const blogs = [
  {
    slug: "swine-flu-h1n1-surge-in-lucknow",

    image: blog1,

    author: "GeneBio Healthcare",

    date: "August 30, 2026",

    readTime: "8 min read",

    title:
      "Swine Flu (H1N1) Surge in Lucknow: Clinical Assessment, High-Risk Markers, and Diagnostic Protocols",

    intro: [
      `With regional hospitals across Lucknow—including SGPGI (Sanjay Gandhi Post Graduate Institute of Medical Sciences), RMLIMS, and King George’s Medical University (KGMU)—reporting admissions for Influenza A (H1N1), respiratory illness surveillance is once again in sharp focus.`,

      `While the term "Swine Flu" often triggers public anxiety, medical microbiologists and the Indian Council of Medical Research (ICMR) confirm that H1N1 (specifically the A/H1N1 pdm09 strain) now circulates as an endemic seasonal influenza virus. The post-monsoon and early-winter weather shifts in Uttar Pradesh routinely create favorable conditions for respiratory virus transmission.`,

      `Accurate diagnosis, standardized sample collection, and clear risk stratification are critical to managing patient outcomes without straining diagnostic infrastructure.`,
    ],

    sections: [
      {
        heading:
          "Understanding the Current H1N1 Wave: Swine Flu vs. Seasonal Flu",

        paragraphs: [
          `Influenza A viruses frequently undergo minor antigenic variations. According to ICMR surveillance data, the Influenza A (H1N1) pdm09 lineage accounts for the overwhelming majority of seasonal influenza cases detected during this period.`,

          `For most healthy individuals, an H1N1 infection is self-limiting and resolves within 5 to 7 days with symptomatic care, hydration, and rest. However, high-risk demographics require vigilant monitoring to avoid secondary lower-respiratory complications.`,
        ],

        snapshot: [
          {
            label: "Incubation Period",
            value: "1 to 4 days",
          },

          {
            label: "Primary Mode of Transmission",
            value: "Respiratory droplets, direct contact with fomites",
          },

          {
            label: "Viral Shedding",
            value:
              "Up to 5–7 days from symptom onset (longer in pediatric & immunocompromised groups)",
          },
        ],
      },

      {
        heading: "Symptom Breakdown & High-Risk Triage",

        subSections: [
          {
            heading: "Common Symptoms",

            bullets: [
              "Sudden onset of high-grade fever and chills",

              "Persistent dry cough and severe sore throat",

              "Generalized myalgia (muscle aches) and deep fatigue",

              "Headache, nasal congestion, and occasional gastrointestinal distress",
            ],
          },

          {
            heading:
              "High-Risk Groups Requiring Immediate Clinical Attention",

            bullets: [
              "Children under 5 years of age and elderly adults (65+ years)",

              "Pregnant women (all trimesters)",

              "Individuals with chronic pulmonary disorders (Asthma, COPD)",

              "Immunocompromised patients or those with metabolic co-morbidities (Diabetes, chronic kidney disease)",
            ],
          },
        ],
      },

      {
        heading: "Triage Matrix: Category A, B, and C",

        paragraphs: [
          `Health authorities and clinical guidelines categorize influenza cases into three tiers to prevent unnecessary hospitalizations and testing backlogs.`,
        ],

        table: {
          headers: [
            "Category",
            "Clinical Presentation",
            "Recommended Action",
            "Diagnostic Testing Needed?",
          ],

          rows: [
            [
              "Category A",
              "Mild fever, cough, sore throat, body ache",
              "Home isolation, symptomatic management (e.g., Paracetamol), hydration",
              "No",
            ],

            [
              "Category B",
              "Category A symptoms + High-grade fever OR high-risk co-morbidities",
              "Medical assessment, close monitoring, antiviral therapy if prescribed by physician",
              "Case-by-case clinical judgment",
            ],

            [
              "Category C",
              "Breathlessness, chest pain, drop in SpO₂ (<94%), confusion, hemoptysis",
              "Immediate hospitalization, isolation ward admission, oxygen/ventilatory support",
              "Yes (RT-PCR testing mandatory)",
            ],
          ],
        },
      },

      {
        heading:
          "Diagnostic Protocols: Why Molecular Integrity Matters",

        paragraphs: [
          `Unlike routine bacterial infections, definitive identification of H1N1 requires Real-Time Reverse Transcription Polymerase Chain Reaction (RT-PCR) to amplify and identify viral RNA.`,

          `Rapid antigen testing provides quick qualitative insights for general screening, but molecular testing remains the clinical gold standard for hospitalized and severe respiratory cases.`,
        ],

        subSections: [
          {
            heading:
              "Critical Steps for Reliable Molecular Diagnosis",

            numbered: [
              {
                title: "Accurate Swab Sampling",

                text: `Nasopharyngeal and oropharyngeal swabs must be gathered using synthetic flocked swabs (polyester or nylon) rather than calcium alginate or cotton swabs with wooden shafts, which inhibit PCR amplification.`,
              },

              {
                title: "Specimen Preservation via VTM",

                text: `Swabs must be immediately immersed in an authorized Viral Transport Medium (VTM) formulation. The transport buffer must maintain viral viability and stabilize nucleic acids while suppressing bacterial and fungal overgrowth during transit to reference labs.`,
              },

              {
                title: "Cold-Chain Maintenance",

                text: `Specimens must be preserved at 2°C to 8°C during transit and processed within 48 to 72 hours of collection.`,
              },
            ],
          },
        ],
      },

      {
        heading:
          "GeneBio Healthcare: Diagnostic Infrastructure Supporting Regional Labs",

        paragraphs: [
          `Based out of Lucknow and Barabanki, GeneBio Healthcare manufactures ISO 13485:2016 and CDSCO-certified in-vitro diagnostic products, specimen collection systems, and lateral flow assays in Class 100,000 cleanroom environments.`,

          `To support healthcare institutions, hospital networks, and private pathology labs during seasonal influenza surges, GeneBio supplies:`,
        ],

        bullets: [
          `GVTM Series Viral Transport Media Kits: CDC/ICMR-compliant collection systems equipped with sterile flocked swabs and viral preservation buffers engineered for molecular RT-PCR testing.`,

          `High-Throughput Diagnostic Consumables: Pre-analytical preservation tools built for zero sample degradation across transportation runs.`,

          `Rapid Diagnostic Multiplex Assays: Enabling differential diagnosis between seasonal viral infections, dengue, malaria, and typhoid in febrile patients.`,
        ],
      },

      {
        heading:
          "Prevention: Practical Steps for Lucknow Residents",

        bullets: [
          `Mask in Crowded Settings: Wear surgical or N95 masks when visiting crowded public transit nodes, hospitals, or enclosed markets.`,

          `Strict Respiratory Etiquette: Cover coughs and sneezes with a flexed elbow or tissue; wash hands frequently with soap or alcohol-based sanitizer.`,

          `Avoid Self-Medication: Do not consume over-the-counter antibiotics or unverified antiviral medications without a licensed physician's prescription.`,

          `Ensure Adequate Indoor Ventilation: Keep residential and workspace areas well-ventilated to reduce indoor viral load concentrations.`,
        ],
      },

      {
        heading:
          "Institutional Procurement & Lab Support",

        paragraphs: [
          `GeneBio Healthcare delivers diagnostic kits, VTM transport media, and rapid testing assays directly to hospitals, medical colleges, and diagnostic lab chains across Uttar Pradesh and pan-India.`,
        ],

        bullets: [
          `Explore Specimen Collection Kits: www.genebio.com/pdp`,

          `Bulk Inquiries & Institutional Tenders: Contact our technical procurement desk at sp@genebiohealthcare.com or call +91-7307996045.`,
        ],
      },
    ],
  },

  {
    slug: "ai-driven-diagnostics",

    image: blog2,

    author: "Marcus Chen",

    date: "May 09, 2024",

    readTime: "6 min read",

    title: "AI-Driven Diagnostics: Beyond the Hype",

    intro: [
      `Artificial intelligence is increasingly becoming an important tool in modern healthcare diagnostics.`,
    ],

    sections: [
      {
        heading: "Machine Learning in Healthcare",

        paragraphs: [
          `Machine learning models can analyze large volumes of medical information and help identify patterns that may support earlier diagnosis.`,
        ],
      },

      {
        heading: "Improving Patient Outcomes",

        paragraphs: [
          `AI-assisted diagnostic systems have the potential to support clinicians by improving efficiency, consistency, and early-stage disease detection.`,
        ],
      },
    ],
  },

  {
    slug: "genomic-data-privacy",

    image: blog3,

    author: "Sarah Jenkins",

    date: "Apr 29, 2024",

    readTime: "10 min read",

    title: "The Ethics of Genomic Data Privacy",

    intro: [
      `Genomic information contains highly sensitive personal data and requires responsible management.`,
    ],

    sections: [
      {
        heading: "Patient Consent",

        paragraphs: [
          `Clear consent frameworks are essential when collecting and storing genomic information for research or healthcare purposes.`,
        ],
      },

      {
        heading: "Data Protection",

        paragraphs: [
          `Healthcare organizations must establish strong systems to protect sensitive genetic information from unauthorized access.`,
        ],
      },
    ],
  },

  {
    slug: "respiratory-panel-innovation",

    image: blog4,

    author: "Robert Vance",

    date: "Apr 20, 2024",

    readTime: "6 min read",

    title: "Respiratory Panel Innovation: A New Era",

    intro: [
      `Respiratory illnesses often present similar symptoms, making accurate diagnosis an important clinical challenge.`,
    ],

    sections: [
      {
        heading: "Multi-Pathogen Testing",

        paragraphs: [
          `Modern respiratory panels can help laboratories identify multiple pathogens from a single patient sample.`,
        ],
      },

      {
        heading: "Future of Respiratory Diagnostics",

        paragraphs: [
          `Integrated diagnostic solutions are helping healthcare systems improve surveillance and respond more effectively to seasonal respiratory illnesses.`,
        ],
      },
    ],
  },
];

export default function BlogDetails() {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <>
        <Navbar />

        <section className="flex min-h-[70vh] items-center justify-center bg-[#F8FAFC] px-5">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#17242B]">
              Blog Not Found
            </h1>

            <Link
              to="/blogs"
              className="mt-6 inline-flex rounded-full bg-[#E9A117] px-6 py-3 font-semibold text-white"
            >
              Back to Blogs
            </Link>
          </div>
        </section>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* BLOG HERO */}

        <section className="bg-[#F7FAFC] pb-20 pt-16">
          <div className="mx-auto max-w-[1000px] px-5">

            {/* BACK BUTTON */}

            <Link
              to="/blogs"
              className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-[#2CBDF5] transition hover:text-[#178EF2]"
            >
              <ArrowLeft size={18} />
              Back to Blogs
            </Link>

            {/* META */}

            <div className="flex flex-wrap items-center gap-4 text-sm text-[#667085]">

              <span className="font-semibold text-[#17242B]">
                {blog.author}
              </span>

              <span>•</span>

              <span className="flex items-center gap-2">
                <Calendar size={15} />
                {blog.date}
              </span>

              <span>•</span>

              <span className="flex items-center gap-2">
                <Clock size={15} />
                {blog.readTime}
              </span>

            </div>

            {/* TITLE */}

            <h1 className="mt-7 max-w-[950px] text-[42px] font-bold leading-[1.15] text-[#17242B] md:text-[58px]">
              {blog.title}
            </h1>

          </div>
        </section>

        {/* FEATURED IMAGE */}

        <section className="relative -mt-4">
          <div className="mx-auto max-w-[1100px] px-5">

            <img
              src={blog.image}
              alt={blog.title}
              className="h-[320px] w-full rounded-[28px] object-cover shadow-lg md:h-[550px]"
            />

          </div>
        </section>

        {/* BLOG CONTENT */}

        <section className="pb-28 pt-16">
          <div className="mx-auto max-w-[850px] px-5">

            <article>

              {/* INTRODUCTION */}

              {blog.intro?.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-6 text-[17px] leading-9 text-[#59636E]"
                >
                  {paragraph}
                </p>
              ))}

              {/* BLOG SECTIONS */}

              {blog.sections?.map((section, index) => (
                <div key={index} className="mb-14">

                  {/* MAIN HEADING */}

                  {section.heading && (
                    <h2 className="mb-6 text-[30px] font-bold leading-tight text-[#17242B] md:text-[38px]">
                      {section.heading}
                    </h2>
                  )}

                  {/* PARAGRAPHS */}

                  {section.paragraphs?.map((paragraph, i) => (
                    <p
                      key={i}
                      className="mb-6 text-[17px] leading-9 text-[#59636E]"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {/* CLINICAL SNAPSHOT */}

                  {section.snapshot && (
                    <div className="my-8 rounded-[22px] border border-[#DCEEF4] bg-[#F3FAFC] p-6 md:p-8">

                      <h3 className="mb-5 text-lg font-bold text-[#17242B]">
                        Clinical Snapshot
                      </h3>

                      <div className="space-y-4">

                        {section.snapshot.map((item, i) => (
                          <div
                            key={i}
                            className="flex flex-col gap-1 border-b border-[#DCEEF4] pb-4 last:border-0 last:pb-0 md:flex-row md:gap-3"
                          >

                            <span className="font-semibold text-[#17242B]">
                              {item.label}:
                            </span>

                            <span className="text-[#59636E]">
                              {item.value}
                            </span>

                          </div>
                        ))}

                      </div>
                    </div>
                  )}

                  {/* SIMPLE BULLET LIST */}

                  {section.bullets && (
                    <ul className="mt-6 space-y-4">

                      {section.bullets.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-4 text-[17px] leading-8 text-[#59636E]"
                        >

                          <span className="mt-[11px] h-2 w-2 shrink-0 rounded-full bg-[#20C9EE]" />

                          <span>{item}</span>

                        </li>
                      ))}

                    </ul>
                  )}

                  {/* SUBSECTIONS */}

                  {section.subSections?.map(
                    (subSection, subIndex) => (
                      <div key={subIndex} className="mt-10">

                        <h3 className="mb-5 text-[23px] font-bold text-[#17242B]">
                          {subSection.heading}
                        </h3>

                        {/* SUBSECTION BULLETS */}

                        {subSection.bullets && (
                          <ul className="space-y-4">

                            {subSection.bullets.map(
                              (item, i) => (
                                <li
                                  key={i}
                                  className="flex gap-4 text-[17px] leading-8 text-[#59636E]"
                                >

                                  <span className="mt-[11px] h-2 w-2 shrink-0 rounded-full bg-[#20C9EE]" />

                                  <span>{item}</span>

                                </li>
                              )
                            )}

                          </ul>
                        )}

                        {/* NUMBERED STEPS */}

                        {subSection.numbered && (
                          <div className="space-y-6">

                            {subSection.numbered.map(
                              (item, i) => (
                                <div
                                  key={i}
                                  className="rounded-[18px] border border-[#E5EDF0] bg-white p-6"
                                >

                                  <div className="flex gap-4">

                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EAF8FC] font-bold text-[#20C9EE]">
                                      {i + 1}
                                    </span>

                                    <div>

                                      <h4 className="text-[18px] font-bold text-[#17242B]">
                                        {item.title}
                                      </h4>

                                      <p className="mt-3 text-[16px] leading-8 text-[#59636E]">
                                        {item.text}
                                      </p>

                                    </div>

                                  </div>

                                </div>
                              )
                            )}

                          </div>
                        )}

                      </div>
                    )
                  )}

                  {/* TABLE */}

                  {section.table && (
                    <div className="mt-8 overflow-x-auto rounded-[20px] border border-[#E5EDF0]">

                      <table className="w-full min-w-[850px] border-collapse">

                        <thead className="bg-[#EAF8FC]">

                          <tr>
                            {section.table.headers.map(
                              (header, i) => (
                                <th
                                  key={i}
                                  className="border-b border-[#DCEEF4] px-5 py-4 text-left text-[14px] font-bold text-[#17242B]"
                                >
                                  {header}
                                </th>
                              )
                            )}
                          </tr>

                        </thead>

                        <tbody>

                          {section.table.rows.map(
                            (row, rowIndex) => (
                              <tr
                                key={rowIndex}
                                className="border-b border-[#EEF2F5] last:border-0"
                              >
                                {row.map(
                                  (cell, cellIndex) => (
                                    <td
                                      key={cellIndex}
                                      className="px-5 py-5 align-top text-[14px] leading-7 text-[#59636E]"
                                    >
                                      {cell}
                                    </td>
                                  )
                                )}
                              </tr>
                            )
                          )}

                        </tbody>

                      </table>

                    </div>
                  )}

                </div>
              ))}

            </article>

            {/* BOTTOM CTA */}

            <div className="mt-16 rounded-[28px] bg-[#EAF6FB] p-8 text-center md:p-12">

              <h3 className="text-2xl font-bold text-[#17242B] md:text-3xl">
                Stay Updated with GeneBio
              </h3>

              <p className="mx-auto mt-4 max-w-[600px] text-[#667085]">
                Discover more insights, research updates, and innovations from
                the world of diagnostics and healthcare.
              </p>

              <Link
                to="/blogs"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#E9A117] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#D89100]"
              >
                Explore More Articles

                <ArrowRight size={17} />
              </Link>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}