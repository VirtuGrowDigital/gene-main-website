import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import blog1 from "../assets/images/malaria.jpeg";
import blog2 from "../assets/images/dengueblog.jpeg";
import blog3 from "../assets/images/malaria2.jpeg";

const blogs = [
  // ============================================================
  // SWINE FLU BLOG
  // ============================================================

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
            value:
              "Respiratory droplets, direct contact with fomites",
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

  // ============================================================
  // DENGUE BLOG
  // ============================================================

  {
    slug: "dengue-symptoms-warning-signs-prevention",

    image: blog2,

    author: "GeneBio Healthcare",

    date: "September 02, 2026",

    readTime: "10 min read",

    title:
      "Dengue Symptoms, Warning Signs & Prevention: What You Need to Know",

    intro: [
      `Dengue is a mosquito-borne viral infection that can affect people of all ages. While many dengue infections are mild and resolve with proper care, some cases can progress to severe dengue and require urgent medical attention.`,

      `Dengue transmission is particularly influenced by environmental conditions such as rainfall, humidity and temperature, which can support the breeding and survival of Aedes mosquitoes. This makes awareness and prevention especially important during and after the rainy season.`,

      `Knowing the early symptoms, understanding the warning signs and taking simple preventive measures can help you respond to dengue more effectively.`,
    ],

    sections: [
      {
        heading: "What Is Dengue?",

        paragraphs: [
          `Dengue is a viral infection caused by the dengue virus (DENV) and is primarily transmitted through the bite of an infected female Aedes aegypti mosquito. These mosquitoes are commonly found in and around human habitation and can breed in containers or areas where water collects.`,

          `There are four dengue virus serotypes. A person can be infected with dengue more than once, and a subsequent infection with a different serotype can carry a higher risk of severe dengue.`,

          `According to the World Health Organization (WHO), dengue is now a major global public health concern, with hundreds of millions of infections estimated to occur each year.`,
        ],
      },

      {
        heading: "Why Is Dengue More Common During the Rainy Season?",

        paragraphs: [
          `Rainwater can collect in buckets, discarded containers, tyres, flowerpots, coolers and other objects around homes and workplaces. These stagnant-water sources can become breeding sites for Aedes mosquitoes.`,

          `Warm temperatures and high humidity can further support mosquito survival and dengue transmission.`,

          `This is why eliminating stagnant water and protecting yourself from mosquito bites becomes particularly important during periods of increased rainfall.`,
        ],
      },

      {
        heading: "Common Symptoms of Dengue",

        paragraphs: [
          `Dengue symptoms generally appear around 4–10 days after infection, although not everyone infected with the virus develops noticeable symptoms.`,

          `Common symptoms include:`,
        ],

        bullets: [
          "High fever",
          "Severe headache",
          "Pain behind the eyes",
          "Muscle and joint pain",
          "Nausea or vomiting",
          "Skin rash",
          "Swollen glands",
          "Fatigue or weakness",
        ],
      },

      {
        heading: "How Long Do Dengue Symptoms Last?",

        paragraphs: [
          `Symptoms can last for several days, and many people recover within one to two weeks with appropriate care.`,

          `However, dengue should not be taken lightly simply because the initial symptoms may resemble those of other viral infections.`,
        ],
      },

      {
        heading: "Dengue Warning Signs You Should Not Ignore",

        paragraphs: [
          `One of the most important things to understand about dengue is that a reduction in fever does not always mean the person is recovering.`,

          `Warning signs of severe dengue can appear around the time the fever goes away, often during the critical phase of illness.`,

          `Seek immediate medical attention if someone with suspected or confirmed dengue develops:`,
        ],

        bullets: [
          "Severe abdominal pain",
          "Persistent vomiting",
          "Bleeding from the nose or gums",
          "Blood in vomit or stool",
          "Rapid breathing",
          "Extreme tiredness or restlessness",
          "Pale or cold skin",
          "Excessive thirst",
          "Weakness or a sudden worsening of symptoms",
        ],
      },

      {
        heading: "Why Severe Dengue Requires Urgent Medical Care",

        paragraphs: [
          `Severe dengue can cause serious complications, including severe bleeding, fluid leakage, shock and organ impairment. Early recognition and appropriate medical care can significantly reduce the risk of fatal outcomes.`,
        ],
      },

      {
        heading: "What Should You Do If You Suspect Dengue?",

        paragraphs: [
          `If you develop a high fever along with symptoms such as severe headache, body pain, nausea, vomiting or rash, consult a healthcare professional.`,

          `Your doctor may recommend appropriate blood tests based on your symptoms, the stage of illness and clinical assessment.`,

          `Do not rely solely on symptoms to confirm dengue because several other infections can cause similar symptoms.`,

          `If dengue is suspected or confirmed:`,
        ],

        subSections: [
          {
            heading: "1. Stay Hydrated",

            paragraphs: [
              `Adequate fluid intake is important during dengue. Follow your healthcare professional's advice regarding fluids, especially if vomiting or dehydration is present.`,
            ],
          },

          {
            heading: "2. Get Adequate Rest",

            paragraphs: [
              `Dengue can cause significant fatigue and weakness. Give your body enough time to recover.`,
            ],
          },

          {
            heading: "3. Follow Medical Advice for Fever and Pain",

            paragraphs: [
              `Do not self-medicate without professional guidance. WHO advises against aspirin and non-steroidal anti-inflammatory medicines such as ibuprofen in dengue because they can increase bleeding risk. Paracetamol may be used for fever and pain when advised appropriately by a healthcare professional.`,
            ],
          },

          {
            heading: "4. Monitor Symptoms Carefully",

            paragraphs: [
              `Keep an eye out for warning signs, particularly when the fever starts to decrease. If symptoms worsen or warning signs appear, seek medical care immediately.`,
            ],
          },
        ],
      },

      {
        heading: "How Can You Prevent Dengue?",

        paragraphs: [
          `The most effective way to reduce dengue risk is to prevent mosquito bites and eliminate mosquito breeding sites.`,
        ],

        subSections: [
          {
            heading: "Prevent Mosquito Bites",

            paragraphs: [
              `You can reduce your risk by:`,
            ],

            bullets: [
              "Wearing clothing that covers the arms and legs",
              "Using mosquito repellents according to the product instructions",
              "Using window and door screens",
              "Using mosquito nets, particularly when sleeping during the day",
              "Using appropriate mosquito-control measures at home",
            ],
          },

          {
            heading: "Eliminate Stagnant Water",

            paragraphs: [
              `Check your home and surroundings regularly for places where water can collect.`,

              `Remember to:`,
            ],

            bullets: [
              "Empty and clean water containers regularly",
              "Keep water-storage containers covered",
              "Remove discarded items that can collect rainwater",
              "Check flowerpots and plant trays",
              "Clean coolers and other water-holding appliances",
              "Dispose of waste properly",
              "Keep your surroundings clean and dry wherever possible",
            ],
          },
        ],
      },

      {
        heading: "Even Small Amounts of Water Can Matter",

        paragraphs: [
          `Even small amounts of stagnant water can provide breeding opportunities for mosquitoes.`,
        ],
      },

      {
        heading: "Can You Get Dengue More Than Once?",

        paragraphs: [
          `Yes.`,

          `Dengue is caused by four closely related virus serotypes. Infection with one serotype provides long-term protection against that particular serotype, but it does not provide complete protection against infection with the other serotypes.`,

          `A subsequent dengue infection can have a higher risk of progressing to severe dengue, which is why previous dengue infection does not mean a person is permanently protected.`,
        ],
      },

      {
        heading: "Dengue: When Should You See a Doctor?",

        paragraphs: [
          `You should consult a healthcare professional if you develop symptoms that could indicate dengue, particularly if you live in or have recently travelled to an area where dengue transmission occurs.`,

          `Immediate medical attention is important if warning signs such as severe abdominal pain, persistent vomiting, bleeding, rapid breathing, extreme weakness or other sudden deterioration appear.`,

          `Remember: the fever coming down does not always mean the danger has passed.`,
        ],
      },

      {
        heading: "Dengue Prevention Starts at Home",

        paragraphs: [
          `Dengue prevention is not only an individual responsibility. It requires households and communities to reduce mosquito breeding opportunities.`,

          `A few minutes spent checking for stagnant water around your home each week can help reduce potential breeding sites.`,

          `Protect yourself, protect your family and encourage others around you to take dengue prevention seriously.`,
        ],
      },

      {
        heading: "Final Takeaway",

        paragraphs: [
          `Dengue can range from a mild illness to a serious and potentially life-threatening condition. Recognising common symptoms early, knowing the warning signs and seeking timely medical care are important steps in reducing complications.`,

          `During rainy and humid periods, make mosquito prevention part of your regular routine: cover stored water, remove stagnant water, protect yourself from mosquito bites and stay alert to symptoms.`,

          `If you or someone in your family develops symptoms suggestive of dengue, consult a qualified healthcare professional rather than relying on self-diagnosis.`,
        ],

        bullets: [
          "GeneBio Healthcare believes that better health begins with better awareness. Stay informed, stay protected and don't ignore the warning signs.",
        ],
      },

      {
        heading: "Disclaimer",

        paragraphs: [
          `This article is intended for general health education and does not replace professional medical advice, diagnosis or treatment. If you have symptoms or concerns about dengue, consult a qualified healthcare professional.`,
        ],
      },
    ],
  },

  // ============================================================
  // MALARIA BLOG
  // ============================================================

  {
    slug: "malaria-symptoms-causes-prevention-testing",

    image: blog3,

    author: "GeneBio Healthcare",

    date: "September 02, 2026",

    readTime: "10 min read",

    title:
      "Malaria Symptoms, Causes, Prevention & Testing: What You Need to Know",

    intro: [
      `A fever during the rainy season can often be dismissed as a routine seasonal illness. But when fever is accompanied by chills, headache, body aches or unusual weakness, it is important not to ignore the possibility of mosquito-borne infections such as malaria.`,

      `Malaria is a preventable and curable disease, but it can become serious if diagnosis and treatment are delayed. Because its early symptoms can resemble those of several other febrile illnesses, timely testing plays an important role in identifying the infection and guiding appropriate medical care.`,
    ],

    sections: [
      {
        heading: "What Is Malaria?",

        paragraphs: [
          `Malaria is an infectious disease caused by parasites of the Plasmodium genus. It is primarily transmitted to humans through the bite of an infected female Anopheles mosquito.`,

          `Unlike illnesses that spread directly from person to person, malaria is primarily mosquito-borne. The risk of transmission can also vary by season, with rainy conditions in tropical regions often creating more favourable conditions for mosquito breeding and transmission.`,

          `Malaria can affect people of all ages. While it is treatable, some forms can progress rapidly and become life-threatening without timely medical attention.`,
        ],
      },

      {
        heading: "What Causes Malaria?",

        paragraphs: [
          `Malaria is caused by Plasmodium parasites. Several species can infect humans, with Plasmodium falciparum and Plasmodium vivax being among the most important causes of human malaria globally.`,

          `The infection usually begins when an infected mosquito bites a person and introduces malaria parasites into the bloodstream.`,
        ],
      },

      {
        heading: "Why Is Malaria a Concern During the Rainy Season?",

        paragraphs: [
          `Rainfall can create additional water-collection sites that may support mosquito breeding. Changes in temperature and humidity can also influence mosquito populations and malaria transmission.`,

          `This is why mosquito-bite prevention and awareness become particularly important during rainy periods in areas where malaria transmission occurs.`,

          `However, seasonal fever should never automatically be assumed to be malaria. Fever can have many causes, and appropriate diagnostic testing can help healthcare professionals distinguish malaria from other illnesses.`,
        ],
      },

      {
        heading: "What Are the Common Symptoms of Malaria?",

        paragraphs: [
          `The early symptoms of malaria can sometimes be mild and may resemble those of other infections.`,

          `Common symptoms include:`,
        ],

        bullets: [
          "Fever",
          "Chills",
          "Headache",
          "Body aches",
          "Weakness and fatigue",
          "Sweating",
          "Nausea or other general symptoms of illness",
        ],
      },

      {
        heading: "When Can Malaria Become Serious?",

        paragraphs: [
          `Malaria should not be taken lightly.`,

          `Some infections can progress to severe malaria, particularly when diagnosis and treatment are delayed. Severe symptoms can include:`,
        ],

        bullets: [
          "Extreme tiredness or weakness",
          "Confusion or impaired consciousness",
          "Difficulty breathing",
          "Seizures or convulsions",
          "Dark or bloody urine",
          "Jaundice",
          "Abnormal bleeding",
        ],
      },

      {
        heading: "Why Is Early Malaria Testing Important?",

        paragraphs: [
          `Symptoms alone cannot reliably confirm malaria because several other illnesses can also cause fever, chills and headache.`,

          `The WHO recommends prompt parasite-based testing for people with suspected malaria before treatment is administered. Testing may be performed through microscopy or a malaria rapid diagnostic test (RDT), depending on the clinical setting and availability.`,

          `Early diagnosis can help healthcare professionals identify malaria promptly and determine the appropriate course of treatment.`,
        ],
      },

      {
        heading: "What Is a Malaria Rapid Diagnostic Test?",

        paragraphs: [
          `A malaria rapid diagnostic test is designed to detect specific antigens produced by malaria parasites in a blood sample.`,

          `Many malaria RDTs use a small blood sample, commonly obtained through a finger prick, and can provide results relatively quickly. Depending on the specific test, an RDT may detect one or more malaria parasite species or their associated antigens.`,

          `Rapid tests can be particularly useful where timely microscopy is not readily available.`,

          `However, test selection, interpretation and clinical decisions should always be handled according to the specific product instructions and guidance from qualified healthcare professionals.`,
        ],
      },

      {
        heading: "Malaria Testing Should Not Be Delayed",

        paragraphs: [
          `One of the biggest challenges with malaria is that the initial symptoms can be difficult to distinguish from other common causes of fever.`,

          `That is why simply assuming that a fever is “viral” or treating it without appropriate assessment may delay the identification of malaria.`,

          `If malaria is suspected based on symptoms, exposure or local transmission risk, consult a healthcare professional about appropriate diagnostic testing.`,

          `A positive or negative result should also be interpreted in the context of the patient's symptoms, timing and clinical assessment.`,
        ],
      },

      {
        heading: "How Can You Prevent Malaria?",

        paragraphs: [
          `Prevention starts with reducing exposure to infected mosquitoes.`,

          `Some practical measures include:`,
        ],

        subSections: [
          {
            heading: "Avoid Mosquito Bites",

            bullets: [
              "Use mosquito repellents according to product instructions.",
              "Wear clothing that covers the arms and legs.",
              "Use mosquito nets where appropriate.",
              "Keep doors and windows screened where possible.",
              "Follow local mosquito-control recommendations.",
            ],
          },

          {
            heading: "Reduce Mosquito Breeding Opportunities",

            bullets: [
              "Avoid stagnant water around your home.",
              "Empty containers that collect rainwater.",
              "Keep water-storage containers properly covered.",
              "Clean areas where water may accumulate.",
              "Dispose of waste that can collect water responsibly.",
            ],
          },
        ],
      },

      {
        heading: "Community-Level Prevention",

        paragraphs: [
          `Community-level mosquito control and environmental management are also important parts of malaria prevention.`,
        ],
      },

      {
        heading: "Malaria vs Other Causes of Fever",

        paragraphs: [
          `One of the most important things to remember is that fever does not automatically mean malaria.`,

          `Dengue, chikungunya, typhoid and several other infections can also cause fever and overlapping symptoms.`,

          `Trying to identify the cause based only on symptoms can therefore be difficult.`,

          `When malaria is suspected, appropriate diagnostic testing can help healthcare professionals distinguish malaria from other causes of fever and make informed treatment decisions.`,
        ],
      },

      {
        heading: "When Should You Seek Medical Attention?",

        paragraphs: [
          `Consult a healthcare professional if you develop persistent or unexplained fever, especially if you live in or have recently travelled to an area where malaria transmission occurs.`,

          `Seek urgent medical attention if fever is accompanied by symptoms such as:`,
        ],

        bullets: [
          "Severe weakness",
          "Confusion",
          "Difficulty breathing",
          "Seizures",
          "Abnormal bleeding",
          "Jaundice",
          "Dark or bloody urine",
          "Rapid worsening of the condition",
        ],
      },

      {
        heading: "Stay Alert During Mosquito Season",

        paragraphs: [
          `Malaria is preventable and treatable, but awareness remains one of the first lines of defence.`,

          `During rainy periods, take mosquito-prevention measures seriously and do not ignore unexplained fever. If malaria is suspected, timely diagnostic testing can help identify the infection and support appropriate medical care.`,
        ],

        bullets: [
          "Don't guess your fever. Get informed. Get tested. Get the right medical advice.",
        ],
      },

      {
        heading: "GeneBio Healthcare & Malaria Awareness",

        paragraphs: [
          `At GeneBio Healthcare, we believe accessible diagnostic solutions and better health awareness can contribute to timely decision-making and improved healthcare outcomes.`,
        ],
      },

      {
        heading: "Disclaimer",

        paragraphs: [
          `This article is intended for general health education and does not replace professional medical advice, diagnosis or treatment. If you have symptoms or suspect malaria, consult a qualified healthcare professional. Diagnostic tests should be used and interpreted according to their intended use and product instructions.`,
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
              to="/resources/blogs"
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

        {/* ======================================================
            BLOG HERO
        ====================================================== */}

        <section className="bg-[#F7FAFC] pb-16 pt-12 sm:pb-20 sm:pt-16">

          <div className="mx-auto max-w-[1000px] px-5 sm:px-6">

            {/* BACK BUTTON */}

            <Link
              to="/resources/blogs"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#2CBDF5] transition hover:text-[#178EF2] sm:mb-10"
            >
              <ArrowLeft size={18} />
              Back to Blogs
            </Link>

            {/* META */}

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[#667085]">

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

            <h1 className="mt-6 max-w-[950px] text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-[#17242B] sm:text-[44px] md:text-[58px]">
              {blog.title}
            </h1>

          </div>
        </section>

        {/* ======================================================
            FEATURED IMAGE
        ====================================================== */}

        <section className="relative -mt-4">

          <div className="mx-auto max-w-[1100px] px-5 sm:px-6">

            <img
              src={blog.image}
              alt={blog.title}
              className="h-[260px] w-full rounded-[22px] object-cover shadow-lg sm:h-[380px] sm:rounded-[26px] md:h-[550px] md:rounded-[28px]"
            />

          </div>

        </section>

        {/* ======================================================
            BLOG CONTENT
        ====================================================== */}

        <section className="pb-20 pt-12 sm:pb-28 sm:pt-16">

          <div className="mx-auto max-w-[850px] px-5 sm:px-6">

            <article>

              {/* INTRODUCTION */}

              {blog.intro?.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-6 text-[16px] leading-8 text-[#59636E] sm:text-[17px] sm:leading-9"
                >
                  {paragraph}
                </p>
              ))}

              {/* BLOG SECTIONS */}

              {blog.sections?.map((section, index) => (
                <div
                  key={index}
                  className="mb-12 sm:mb-14"
                >

                  {/* MAIN HEADING */}

                  {section.heading && (
                    <h2 className="mb-5 text-[26px] font-bold leading-tight text-[#17242B] sm:mb-6 sm:text-[30px] md:text-[38px]">
                      {section.heading}
                    </h2>
                  )}

                  {/* PARAGRAPHS */}

                  {section.paragraphs?.map((paragraph, i) => (
                    <p
                      key={i}
                      className="mb-6 text-[16px] leading-8 text-[#59636E] sm:text-[17px] sm:leading-9"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {/* CLINICAL SNAPSHOT */}

                  {section.snapshot && (
                    <div className="my-8 rounded-[20px] border border-[#DCEEF4] bg-[#F3FAFC] p-5 sm:rounded-[22px] sm:p-8">

                      <h3 className="mb-5 text-lg font-bold text-[#17242B]">
                        Clinical Snapshot
                      </h3>

                      <div className="space-y-4">

                        {section.snapshot.map((item, i) => (
                          <div
                            key={i}
                            className="flex flex-col gap-1 border-b border-[#DCEEF4] pb-4 last:border-0 last:pb-0 sm:flex-row sm:gap-3"
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

                  {/* BULLET LIST */}

                  {section.bullets && (
                    <ul className="mt-6 space-y-4">

                      {section.bullets.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-[16px] leading-8 text-[#59636E] sm:gap-4 sm:text-[17px]"
                        >

                          <span className="mt-[11px] h-2 w-2 shrink-0 rounded-full bg-[#20C9EE]" />

                          <span>
                            {item}
                          </span>

                        </li>
                      ))}

                    </ul>
                  )}

                  {/* SUBSECTIONS */}

                  {section.subSections?.map(
                    (subSection, subIndex) => (
                      <div
                        key={subIndex}
                        className="mt-9"
                      >

                        <h3 className="mb-5 text-[21px] font-bold leading-tight text-[#17242B] sm:text-[23px]">
                          {subSection.heading}
                        </h3>

                        {/* SUBSECTION PARAGRAPHS */}

                        {subSection.paragraphs?.map(
                          (paragraph, i) => (
                            <p
                              key={i}
                              className="mb-6 text-[16px] leading-8 text-[#59636E] sm:text-[17px] sm:leading-9"
                            >
                              {paragraph}
                            </p>
                          )
                        )}

                        {/* SUBSECTION BULLETS */}

                        {subSection.bullets && (
                          <ul className="space-y-4">

                            {subSection.bullets.map(
                              (item, i) => (
                                <li
                                  key={i}
                                  className="flex gap-3 text-[16px] leading-8 text-[#59636E] sm:gap-4 sm:text-[17px]"
                                >

                                  <span className="mt-[11px] h-2 w-2 shrink-0 rounded-full bg-[#20C9EE]" />

                                  <span>
                                    {item}
                                  </span>

                                </li>
                              )
                            )}

                          </ul>
                        )}

                        {/* NUMBERED STEPS */}

                        {subSection.numbered && (
                          <div className="space-y-5">

                            {subSection.numbered.map(
                              (item, i) => (
                                <div
                                  key={i}
                                  className="rounded-[18px] border border-[#E5EDF0] bg-white p-5 sm:p-6"
                                >

                                  <div className="flex gap-4">

                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EAF8FC] font-bold text-[#20C9EE]">
                                      {i + 1}
                                    </span>

                                    <div className="min-w-0">

                                      <h4 className="text-[17px] font-bold text-[#17242B] sm:text-[18px]">
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

            {/* ==================================================
                BOTTOM CTA
            ================================================== */}

            <div className="mt-12 rounded-[24px] bg-[#EAF6FB] p-7 text-center sm:mt-16 sm:rounded-[28px] sm:p-12">

              <h3 className="text-2xl font-bold text-[#17242B] md:text-3xl">
                Stay Updated with GeneBio
              </h3>

              <p className="mx-auto mt-4 max-w-[600px] text-[#667085]">
                Discover more insights, research updates, and innovations from
                the world of diagnostics and healthcare.
              </p>

              <Link
                to="/resources/blogs"
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