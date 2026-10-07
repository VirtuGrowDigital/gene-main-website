import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ============================================================
// BLOG IMAGES
// ============================================================

import blog1 from "../assets/images/malaria.jpeg";
import blog2 from "../assets/images/dengueblog.jpeg";
import blog3 from "../assets/images/malaria2.jpeg";

import chikungunyaBlog from "../assets/images/chikungunya-blog.png";
import leishmaniasisBlog from "../assets/images/leishmaniasis-blog.png";

// ============================================================
// BLOG DATA
// ============================================================

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

    seoTitle:
      "Swine Flu (H1N1) in Lucknow: Symptoms, Testing & Diagnosis | GeneBio Healthcare",

    metaDescription:
      "Learn about Swine Flu and H1N1 symptoms, high-risk markers, diagnostic testing and prevention. Understand when molecular testing may be needed.",

    keywords:
      "swine flu symptoms, H1N1 symptoms, H1N1 testing, swine flu test, influenza A H1N1, H1N1 diagnosis",

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
              "Respiratory droplets and direct contact with contaminated surfaces",
          },
          {
            label: "Viral Shedding",
            value:
              "Often up to 5–7 days from symptom onset, and potentially longer in some groups",
          },
        ],
      },

      {
        heading: "Symptom Breakdown & High-Risk Triage",

        subSections: [
          {
            heading: "Common Symptoms",

            bullets: [
              "Sudden onset of fever and chills",
              "Persistent dry cough and sore throat",
              "Muscle aches and significant fatigue",
              "Headache and nasal congestion",
              "Occasional gastrointestinal symptoms",
            ],
          },

          {
            heading:
              "High-Risk Groups Requiring Medical Attention",

            bullets: [
              "Young children and older adults",
              "Pregnant women",
              "Individuals with chronic respiratory conditions",
              "Immunocompromised individuals",
              "People with significant underlying medical conditions",
            ],
          },
        ],
      },

      {
        heading: "Triage Matrix: Category A, B, and C",

        paragraphs: [
          `Influenza cases can present with different levels of severity. Clinical assessment helps determine whether home care, medical monitoring or urgent hospital evaluation is appropriate.`,
        ],

        table: {
          headers: [
            "Category",
            "Clinical Presentation",
            "Recommended Action",
            "Diagnostic Testing",
          ],

          rows: [
            [
              "Category A",
              "Mild fever, cough, sore throat and body ache",
              "Home isolation, hydration, rest and symptomatic care",
              "Based on clinical assessment",
            ],
            [
              "Category B",
              "More significant symptoms or high-risk medical conditions",
              "Medical assessment and close monitoring",
              "Case-by-case clinical judgment",
            ],
            [
              "Category C",
              "Breathlessness, chest pain, low oxygen saturation or rapid deterioration",
              "Immediate medical evaluation and possible hospitalization",
              "Molecular testing may be recommended",
            ],
          ],
        },
      },

      {
        heading:
          "Diagnostic Protocols: Why Molecular Integrity Matters",

        paragraphs: [
          `Definitive laboratory identification of influenza viruses can involve molecular testing such as Real-Time Reverse Transcription Polymerase Chain Reaction (RT-PCR).`,

          `Rapid testing may provide useful information in appropriate clinical settings, while molecular methods can offer more detailed detection and identification.`,
        ],

        subSections: [
          {
            heading:
              "Critical Steps for Reliable Molecular Diagnosis",

            numbered: [
              {
                title: "Accurate Swab Sampling",

                text: `Respiratory specimens should be collected using appropriate specimen-collection devices and according to the requirements of the intended diagnostic test.`,
              },

              {
                title: "Specimen Preservation",

                text: `Appropriate viral transport and specimen-preservation systems help maintain specimen integrity during transportation to the testing laboratory.`,
              },

              {
                title: "Cold-Chain Maintenance",

                text: `Specimens should be stored and transported according to the requirements of the specific collection system and diagnostic assay.`,
              },
            ],
          },
        ],
      },

      {
        heading:
          "GeneBio Healthcare: Diagnostic Infrastructure Supporting Regional Labs",

        paragraphs: [
          `GeneBio Healthcare develops diagnostic products, specimen collection systems and laboratory solutions designed to support healthcare professionals and diagnostic laboratories.`,

          `The company's diagnostic portfolio can support laboratories with appropriate specimen collection and testing workflows.`,
        ],

        bullets: [
          "Specimen collection and transport solutions",
          "Molecular diagnostic workflow support",
          "Rapid diagnostic solutions for infectious diseases",
        ],
      },

      {
        heading:
          "Prevention: Practical Steps for Residents",

        bullets: [
          "Wear a suitable mask in crowded or high-risk indoor environments.",
          "Cover coughs and sneezes and wash hands regularly.",
          "Avoid unnecessary close contact when experiencing respiratory symptoms.",
          "Maintain adequate ventilation in indoor spaces.",
          "Seek medical advice rather than self-medicating with antibiotics or antivirals.",
        ],
      },

      {
        heading: "Institutional Procurement & Lab Support",

        paragraphs: [
          `GeneBio Healthcare works with healthcare institutions, laboratories and diagnostic professionals to support access to diagnostic solutions and laboratory products.`,
        ],
      },

      {
        heading: "Disclaimer",

        paragraphs: [
          `This article is intended for general health education and does not replace professional medical advice, diagnosis or treatment. If you have symptoms or concerns, consult a qualified healthcare professional.`,
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

    seoTitle:
      "Dengue Symptoms, Warning Signs & Prevention | GeneBio Healthcare",

    metaDescription:
      "Learn about dengue symptoms, warning signs, testing, prevention and when urgent medical attention may be needed.",

    keywords:
      "dengue symptoms, dengue warning signs, dengue test, dengue prevention, severe dengue",

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
          `Dengue is a viral infection caused by the dengue virus (DENV) and is primarily transmitted through the bite of an infected female Aedes aegypti mosquito.`,

          `These mosquitoes are commonly found in and around human habitation and can breed in containers or areas where water collects.`,

          `There are four dengue virus serotypes. A person can be infected with dengue more than once, and subsequent infections can carry a higher risk of severe disease.`,
        ],
      },

      {
        heading: "Why Is Dengue More Common During the Rainy Season?",

        paragraphs: [
          `Rainwater can collect in buckets, discarded containers, tyres, flowerpots, coolers and other objects around homes and workplaces.`,

          `Warm temperatures and high humidity can further support mosquito survival and dengue transmission.`,

          `This is why eliminating stagnant water and protecting yourself from mosquito bites becomes particularly important during periods of increased rainfall.`,
        ],
      },

      {
        heading: "Common Symptoms of Dengue",

        paragraphs: [
          `Dengue symptoms generally appear several days after infection, although not everyone infected with the virus develops noticeable symptoms.`,

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
          "Sudden worsening of symptoms",
        ],
      },

      {
        heading: "Why Severe Dengue Requires Urgent Medical Care",

        paragraphs: [
          `Severe dengue can cause serious complications, including severe bleeding, fluid leakage, shock and organ impairment. Early recognition and appropriate medical care can significantly reduce the risk of serious outcomes.`,
        ],
      },

      {
        heading: "What Should You Do If You Suspect Dengue?",

        paragraphs: [
          `If you develop a high fever along with symptoms such as severe headache, body pain, nausea, vomiting or rash, consult a healthcare professional.`,

          `Your doctor may recommend appropriate blood tests based on your symptoms, the stage of illness and clinical assessment.`,

          `Do not rely solely on symptoms to confirm dengue because several other infections can cause similar symptoms.`,
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
              `Do not self-medicate without professional guidance. Aspirin and certain anti-inflammatory medicines may increase bleeding risk in dengue. Follow appropriate medical advice for fever and pain management.`,
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

            bullets: [
              "Wear clothing that covers the arms and legs.",
              "Use mosquito repellents according to product instructions.",
              "Use window and door screens.",
              "Use mosquito nets where appropriate.",
              "Follow local mosquito-control recommendations.",
            ],
          },

          {
            heading: "Eliminate Stagnant Water",

            bullets: [
              "Empty and clean water containers regularly.",
              "Keep water-storage containers covered.",
              "Remove discarded items that can collect rainwater.",
              "Check flowerpots and plant trays.",
              "Clean coolers and other water-holding appliances.",
              "Dispose of waste properly.",
            ],
          },
        ],
      },

      {
        heading: "Final Takeaway",

        paragraphs: [
          `Dengue can range from a mild illness to a serious and potentially life-threatening condition. Recognising common symptoms early, knowing the warning signs and seeking timely medical care are important steps in reducing complications.`,

          `During rainy and humid periods, make mosquito prevention part of your regular routine.`,
        ],

        bullets: [
          "Stay informed, stay protected and don't ignore warning signs.",
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

    seoTitle:
      "Malaria Symptoms, Causes, Prevention & Testing | GeneBio Healthcare",

    metaDescription:
      "Learn about malaria symptoms, causes, testing, rapid diagnostic tests and prevention. Understand why timely diagnosis matters.",

    keywords:
      "malaria symptoms, malaria test, malaria rapid test, malaria prevention, malaria diagnosis",

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

          `Malaria can affect people of all ages. While it is treatable, some forms can progress rapidly and become life-threatening without timely medical attention.`,
        ],
      },

      {
        heading: "What Causes Malaria?",

        paragraphs: [
          `Malaria is caused by Plasmodium parasites. Several species can infect humans, with Plasmodium falciparum and Plasmodium vivax being among the important causes of human malaria globally.`,

          `The infection usually begins when an infected mosquito bites a person and introduces malaria parasites into the bloodstream.`,
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
          "Nausea or general symptoms of illness",
        ],
      },

      {
        heading: "When Can Malaria Become Serious?",

        paragraphs: [
          `Some infections can progress to severe malaria, particularly when diagnosis and treatment are delayed.`,
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

          `Prompt parasite-based testing can help identify malaria and support appropriate treatment decisions.`,

          `Testing may be performed through microscopy or a malaria rapid diagnostic test (RDT), depending on the clinical setting and availability.`,
        ],
      },

      {
        heading: "What Is a Malaria Rapid Diagnostic Test?",

        paragraphs: [
          `A malaria rapid diagnostic test is designed to detect specific antigens produced by malaria parasites in a blood sample.`,

          `Many malaria RDTs use a small blood sample and can provide results relatively quickly. Depending on the specific test, an RDT may detect one or more malaria parasite species or their associated antigens.`,

          `Test selection, interpretation and clinical decisions should always be handled according to the specific product instructions and guidance from qualified healthcare professionals.`,
        ],
      },

      {
        heading: "How Can You Prevent Malaria?",

        paragraphs: [
          `Prevention starts with reducing exposure to infected mosquitoes.`,
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
        heading: "Malaria vs Other Causes of Fever",

        paragraphs: [
          `Fever does not automatically mean malaria.`,

          `Dengue, chikungunya, typhoid and several other infections can also cause fever and overlapping symptoms.`,

          `When malaria is suspected, appropriate diagnostic testing can help healthcare professionals distinguish malaria from other causes of fever.`,
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

  // ============================================================
  // CHIKUNGUNYA BLOG
  // ============================================================

  {
    slug: "chikungunya-symptoms-testing-prevention",

    image: chikungunyaBlog,

    author: "GeneBio Healthcare",

    date: "September 08, 2026",

    readTime: "8 min read",

    seoTitle:
      "Chikungunya Symptoms, Testing & Prevention | GeneBio Healthcare",

    metaDescription:
      "Learn about chikungunya symptoms, testing, treatment and prevention. Understand how chikungunya differs from dengue and when to seek medical advice.",

    keywords:
      "chikungunya symptoms, chikungunya test, chikungunya symptoms in adults, chikungunya vs dengue, chikungunya fever, chikungunya prevention, chikungunya testing",

    title:
      "Chikungunya Symptoms, Testing & Prevention: What You Need to Know",

    intro: [
      `A sudden fever accompanied by intense joint pain can be easy to mistake for dengue, flu or another viral infection. But during periods when mosquito-borne illnesses are circulating, chikungunya is another infection that should be considered.`,

      `Chikungunya is a viral disease transmitted primarily by infected Aedes aegypti and Aedes albopictus mosquitoes. These are the same mosquito species that can also transmit dengue, which means similar environmental conditions can contribute to the spread of both diseases.`,

      `Understanding the symptoms, knowing when testing may be needed and taking steps to prevent mosquito bites can help reduce the impact of chikungunya.`,
    ],

    sections: [
      {
        heading: "What Is Chikungunya?",

        paragraphs: [
          `Chikungunya is a mosquito-borne viral infection caused by the chikungunya virus (CHIKV).`,

          `The infection is primarily transmitted through the bite of an infected Aedes mosquito. These mosquitoes are generally active during the daytime and can breed in containers and other places where water collects.`,

          `Chikungunya has been reported across tropical and subtropical regions, including parts of Asia and India.`,
        ],
      },

      {
        heading: "What Are the Symptoms of Chikungunya?",

        paragraphs: [
          `Symptoms usually appear within a few days after being bitten by an infected mosquito.`,

          `The most characteristic symptoms include:`,
        ],

        bullets: [
          "Sudden fever",
          "Severe joint pain",
          "Joint swelling",
          "Muscle pain",
          "Headache",
          "Skin rash",
          "Fatigue or weakness",
          "Nausea in some cases",
        ],

        subSections: [
          {
            heading: "Why Joint Pain Is Important",

            paragraphs: [
              `One of the features that can distinguish chikungunya from some other mosquito-borne infections is the severity of joint pain. In some people, joint pain can continue for weeks or even months after the initial infection.`,

              `However, symptoms can overlap considerably with dengue and other infections. This means symptoms alone may not be enough to identify the cause.`,
            ],
          },
        ],
      },

      {
        heading: "Chikungunya vs Dengue: Why Can They Be Confused?",

        paragraphs: [
          `Chikungunya and dengue are both transmitted primarily by Aedes mosquitoes and can cause fever, headache, muscle pain and rash.`,

          `The difference is not always obvious from symptoms alone.`,

          `Chikungunya is particularly associated with sudden fever and severe joint pain, while dengue can have a different clinical presentation and may involve warning signs associated with bleeding or fluid leakage.`,

          `Because the two infections can occur in the same regions and may initially look similar, appropriate medical evaluation and diagnostic testing can be important when either infection is suspected.`,
        ],
      },

      {
        heading: "How Is Chikungunya Diagnosed?",

        paragraphs: [
          `Laboratory testing can help confirm chikungunya infection.`,

          `The type of test used can depend on how long the person has been experiencing symptoms.`,

          `During the early stage of illness, the virus can be detected directly in blood using molecular methods such as RT-PCR. Later in the illness, antibody-based tests may be used to detect the body's immune response to the virus.`,

          `Rapid antibody tests may also be used in appropriate clinical settings. The choice of test should be based on the stage of illness, clinical assessment and the intended use of the specific diagnostic product.`,
        ],
      },

      {
        heading: "Why Is Testing Important?",

        paragraphs: [
          `Fever and joint pain can have several possible causes.`,

          `A person may have chikungunya, dengue, another viral infection or a different illness altogether. Assuming the cause based only on symptoms can therefore lead to confusion.`,

          `Testing, when recommended by a healthcare professional, can help provide additional information for clinical assessment and appropriate management.`,

          `This is particularly important in areas where multiple mosquito-borne infections may be circulating at the same time.`,
        ],
      },

      {
        heading: "Can Chikungunya Become Serious?",

        paragraphs: [
          `Most people recover from chikungunya, but recovery is not always immediate.`,

          `Severe disease is uncommon, but certain groups can be at greater risk of serious illness or slower recovery, including older adults, newborns and people with certain underlying health conditions.`,

          `Persistent joint pain can also affect some people for an extended period after the initial fever has resolved.`,

          `If symptoms are severe, persistent or worsening, medical attention should be sought promptly.`,
        ],
      },

      {
        heading: "How Is Chikungunya Treated?",

        paragraphs: [
          `There is currently no specific antiviral treatment for chikungunya.`,

          `Treatment generally focuses on managing symptoms, maintaining hydration and getting adequate rest. Healthcare professionals may recommend appropriate medication for fever and pain.`,

          `Because chikungunya can resemble dengue, medical advice is particularly important before using certain pain-relieving medicines. Aspirin and certain anti-inflammatory medicines may be inappropriate when dengue has not been ruled out because of potential bleeding risk.`,

          `Do not self-medicate without appropriate medical advice.`,
        ],
      },

      {
        heading: "How Can You Prevent Chikungunya?",

        paragraphs: [
          `Since chikungunya is spread by mosquitoes, preventing mosquito bites is one of the most important ways to reduce the risk of infection.`,
        ],

        subSections: [
          {
            heading: "Protect Yourself From Mosquito Bites",

            bullets: [
              "Use an appropriate mosquito repellent according to its instructions.",
              "Wear long-sleeved clothing and trousers where practical.",
              "Use mosquito screens on doors and windows.",
              "Use mosquito nets where appropriate.",
              "Take precautions during the daytime as Aedes mosquitoes can be active during daylight hours.",
            ],
          },

          {
            heading: "Eliminate Stagnant Water",

            paragraphs: [
              `Regularly check your surroundings for places where water can collect.`,

              `Empty or clean:`,
            ],

            bullets: [
              "Buckets and containers",
              "Flowerpots and plant trays",
              "Old tyres",
              "Coolers",
              "Open water-storage containers",
              "Other items that can collect rainwater",
            ],
          },
        ],
      },

      {
        heading: "What Should You Do If You Develop Symptoms?",

        paragraphs: [
          `If you develop a sudden fever accompanied by severe joint pain, headache, rash or unusual weakness, consult a healthcare professional.`,

          `Do not assume that every mosquito-borne fever is dengue or chikungunya. A healthcare professional can assess your symptoms, exposure history and local disease patterns and determine whether diagnostic testing is appropriate.`,

          `Seek medical attention promptly if symptoms become severe or if you belong to a group at increased risk of complications.`,
        ],
      },

      {
        heading: "Stay Alert to Mosquito-Borne Diseases",

        paragraphs: [
          `Chikungunya, dengue and malaria can all occur in regions where mosquito-borne infections are present, and some of their symptoms can overlap.`,

          `The best approach is not to guess the cause of a fever but to pay attention to symptoms, prevent mosquito bites and seek appropriate medical evaluation when needed.`,

          `At GeneBio Healthcare, we believe that accessible diagnostic solutions and health awareness go hand in hand. Understanding symptoms and knowing when to seek testing can be an important step toward timely healthcare.`,
        ],

        bullets: [
          "Stay informed. Stay protected. Don't ignore persistent or unusual symptoms.",
        ],
      },

      {
        heading: "Disclaimer",

        paragraphs: [
          `This article is intended for general health education and does not replace professional medical advice, diagnosis or treatment. Diagnostic tests should be used according to their intended use and product instructions. Always consult a qualified healthcare professional for diagnosis and treatment.`,
        ],
      },
    ],
  },

  // ============================================================
  // LEISHMANIASIS / KALA-AZAR BLOG
  // ============================================================

  {
    slug: "leishmaniasis-kala-azar-symptoms-testing-prevention",

    image: leishmaniasisBlog,

    author: "GeneBio Healthcare",

    date: "September 10, 2026",

    readTime: "10 min read",

    seoTitle:
      "Leishmaniasis (Kala-azar): Symptoms, Causes, Testing & Prevention | GeneBio Healthcare",

    metaDescription:
      "Learn about leishmaniasis and Kala-azar, including symptoms, transmission, diagnosis, rapid testing and prevention. Know when medical attention is needed.",

    keywords:
      "leishmaniasis symptoms, kala azar symptoms, visceral leishmaniasis, kala azar test, leishmaniasis test, leishmaniasis diagnosis, kala azar rapid test, leishmaniasis prevention",

    title:
      "Leishmaniasis (Kala-azar): Symptoms, Causes, Testing & Prevention",

    intro: [
      `A fever that continues for weeks, unexplained weight loss or unusual weakness should never be ignored, especially in areas where mosquito- and sandfly-borne diseases are present.`,

      `Leishmaniasis is a group of diseases caused by Leishmania parasites and transmitted through the bite of infected female phlebotomine sandflies. The disease occurs in several forms, with visceral leishmaniasis (VL), also known as Kala-azar, being the most serious form.`,

      `Because some symptoms can resemble malaria, typhoid and other systemic illnesses, awareness and timely diagnosis are important.`,
    ],

    sections: [
      {
        heading: "What Is Leishmaniasis?",

        paragraphs: [
          `Leishmaniasis is a parasitic disease caused by different species of the Leishmania parasite.`,

          `The parasite is transmitted to humans through the bite of an infected female sandfly. There are three main forms of leishmaniasis:`,
        ],

        bullets: [
          "Visceral leishmaniasis (VL), also called Kala-azar",
          "Cutaneous leishmaniasis (CL)",
          "Mucocutaneous leishmaniasis (MCL)",
        ],

        paragraphsAfterBullets: [
          `Visceral leishmaniasis affects internal organs and is the most serious form, while cutaneous leishmaniasis primarily affects the skin. Mucocutaneous leishmaniasis can affect the mucous membranes of the nose, mouth and throat.`,
        ],
      },

      {
        heading: "What Is Kala-azar?",

        paragraphs: [
          `Kala-azar is another name for visceral leishmaniasis.`,

          `It is particularly important in parts of South Asia, including India. The disease can affect the spleen, liver and blood and may become life-threatening if it is not diagnosed and treated appropriately.`,
        ],
      },

      {
        heading: "How Does Leishmaniasis Spread?",

        paragraphs: [
          `Leishmaniasis is transmitted through the bite of an infected female phlebotomine sandfly.`,

          `Sandflies are very small insects, and transmission is associated with specific environmental and geographical conditions.`,

          `Factors such as population movement, environmental changes, poor housing conditions and exposure to sandflies can influence transmission in endemic areas.`,
        ],
      },

      {
        heading: "What Are the Symptoms of Visceral Leishmaniasis?",

        paragraphs: [
          `The symptoms of visceral leishmaniasis can develop gradually and may initially be confused with other illnesses.`,

          `Common signs include:`,
        ],

        bullets: [
          "Prolonged or irregular fever",
          "Significant weight loss",
          "Weakness and fatigue",
          "Enlargement of the spleen",
          "Enlargement of the liver",
          "Anaemia",
          "Loss of appetite",
          "In some cases, enlarged lymph nodes",
        ],
      },

      {
        heading: "What Are the Symptoms of Cutaneous Leishmaniasis?",

        paragraphs: [
          `Cutaneous leishmaniasis primarily affects the skin.`,

          `It can begin as a small bump or nodule at the site of the sandfly bite and may develop into a skin ulcer. Lesions commonly occur on exposed areas such as the face, arms and legs.`,

          `Some lesions can take months or longer to heal and may leave permanent scars.`,

          `It is important not to assume that every persistent skin ulcer is leishmaniasis, as several other skin conditions can appear similar.`,
        ],
      },

      {
        heading: "How Is Leishmaniasis Diagnosed?",

        paragraphs: [
          `Diagnosis depends on the form of the disease.`,

          `For visceral leishmaniasis, diagnosis generally combines clinical assessment with parasitological or serological testing. Rapid diagnostic tests can be useful in appropriate settings, particularly in areas where visceral leishmaniasis is endemic.`,

          `For cutaneous and mucocutaneous leishmaniasis, clinical assessment and parasitological confirmation may be required, as serological tests have limited value for these forms.`,

          `This makes it important to use the appropriate diagnostic method for the suspected form of disease.`,
        ],
      },

      {
        heading: "Why Is Early Diagnosis Important?",

        paragraphs: [
          `Visceral leishmaniasis can become severe when diagnosis and treatment are delayed.`,

          `Persistent fever accompanied by weight loss, weakness or enlargement of the spleen or liver should therefore receive medical attention, particularly in areas where Kala-azar occurs.`,

          `Prompt diagnosis can help connect patients with appropriate treatment and reduce risks associated with delayed care.`,
        ],
      },

      {
        heading: "What Is a Rapid Diagnostic Test for Kala-azar?",

        paragraphs: [
          `Rapid diagnostic tests can support the diagnosis of visceral leishmaniasis in appropriate healthcare settings.`,

          `rK39-based rapid diagnostic tests may be used for visceral leishmaniasis diagnosis in endemic settings and can produce results relatively quickly.`,

          `However, rapid diagnostic tests should not be viewed in isolation. Test results need to be interpreted alongside clinical signs, patient history and other appropriate investigations.`,

          `The exact test to be used depends on the suspected form of leishmaniasis, geographical setting and clinical circumstances.`,
        ],
      },

      {
        heading: "Can Leishmaniasis Be Treated?",

        paragraphs: [
          `Yes. Leishmaniasis is treatable, but treatment depends on several factors, including the form of the disease, parasite species, geographical location and the patient's individual health status.`,

          `Visceral leishmaniasis requires prompt and complete treatment under qualified medical supervision.`,

          `Treatment should never be started based only on symptoms or a self-interpreted test result.`,
        ],
      },

      {
        heading: "How Can Leishmaniasis Be Prevented?",

        paragraphs: [
          `There is currently no widely available vaccine that provides routine protection against leishmaniasis, so reducing exposure to infected sandflies is important.`,
        ],

        bullets: [
          "Wear clothing that covers exposed skin.",
          "Use appropriate insect repellents according to their instructions.",
          "Use insecticide-treated bed nets where recommended.",
          "Use screens or other barriers where appropriate.",
          "Reduce exposure to sandflies, particularly in areas where transmission occurs.",
          "Follow local vector-control recommendations.",
        ],

        subSections: [
          {
            heading: "Environmental and Vector Control",

            paragraphs: [
              `Environmental and vector-control measures can also play an important role in reducing transmission.`,
            ],
          },
        ],
      },

      {
        heading: "When Should You See a Doctor?",

        paragraphs: [
          `Seek medical attention if you experience persistent or unexplained fever, especially when it is accompanied by:`,
        ],

        bullets: [
          "Unexplained weight loss",
          "Significant weakness",
          "Loss of appetite",
          "Abdominal swelling or discomfort",
          "Signs of anaemia",
          "Persistent skin ulcers or lesions",
        ],

        subSections: [
          {
            heading: "Tell Your Healthcare Professional About Travel or Exposure",

            paragraphs: [
              `If you live in or have travelled to an area where leishmaniasis occurs, tell your healthcare professional about your potential exposure.`,
            ],
          },
        ],
      },

      {
        heading: "Don't Ignore a Fever That Won't Go Away",

        paragraphs: [
          `Persistent fever can have many causes, and leishmaniasis may not be the first condition that comes to mind.`,

          `But in areas where Kala-azar occurs, prolonged fever combined with weight loss, weakness or an enlarged spleen should be medically evaluated.`,

          `Because symptoms can overlap with other diseases, appropriate diagnostic testing is an important part of identifying the cause.`,
        ],
      },

      {
        heading: "Choose Timely Diagnostic Support",

        paragraphs: [
          `At GeneBio Healthcare, we work to make diagnostic solutions more accessible to healthcare professionals and laboratories.`,

          `If you are looking for rapid diagnostic solutions for leishmaniasis or Kala-azar, explore GeneBio's relevant diagnostic portfolio or contact our team to learn more about product availability, intended use and ordering information.`,
        ],

        bullets: [
          "Need information about GeneBio's Leishmaniasis/Kala-azar diagnostic solution? Contact GeneBio Healthcare today.",
        ],
      },

      {
        heading: "Disclaimer",

        paragraphs: [
          `This article is intended for general health education and does not replace professional medical advice, diagnosis or treatment. Leishmaniasis diagnosis and treatment should be carried out by qualified healthcare professionals. Diagnostic tests must be used according to their intended use and product instructions.`,
        ],
      },
    ],
  },
];

// ============================================================
// RELATED BLOGS
// ============================================================

const getRelatedBlogs = (currentSlug) => {
  return blogs
    .filter((blog) => blog.slug !== currentSlug)
    .slice(0, 3);
};

// ============================================================
// SEO HELPER
// ============================================================

function updateMetaTag(name, content) {
  if (!content) return;

  let meta = document.querySelector(`meta[name="${name}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

function updatePropertyMeta(property, content) {
  if (!content) return;

  let meta = document.querySelector(
    `meta[property="${property}"]`
  );

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

// ============================================================
// COMPONENT
// ============================================================

export default function BlogDetails() {
  const { slug } = useParams();

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  // ==========================================================
  // SEO
  // ==========================================================

  useEffect(() => {
    if (!blog) {
      document.title = "Blog Not Found | GeneBio Healthcare";
      return;
    }

    document.title = blog.seoTitle;

    updateMetaTag(
      "description",
      blog.metaDescription
    );

    updateMetaTag(
      "keywords",
      blog.keywords
    );

    updateMetaTag(
      "author",
      blog.author
    );

    updatePropertyMeta(
      "og:title",
      blog.seoTitle
    );

    updatePropertyMeta(
      "og:description",
      blog.metaDescription
    );

    updatePropertyMeta(
      "og:type",
      "article"
    );

    updatePropertyMeta(
      "og:image",
      blog.image
    );

    updatePropertyMeta(
      "og:url",
      window.location.href
    );

    let canonical =
      document.querySelector(
        'link[rel="canonical"]'
      );

    if (!canonical) {
      canonical =
        document.createElement("link");

      canonical.setAttribute(
        "rel",
        "canonical"
      );

      document.head.appendChild(
        canonical
      );
    }

    canonical.setAttribute(
      "href",
      window.location.href
    );

    return () => {
      document.title =
        "GeneBio Healthcare";
    };
  }, [blog]);

  // ==========================================================
  // BLOG NOT FOUND
  // ==========================================================

  if (!blog) {
    return (
      <>
        <Navbar />

        <section className="flex min-h-[70vh] items-center justify-center bg-[#F8FAFC] px-5">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#17242B]">
              Blog Not Found
            </h1>

            <p className="mx-auto mt-4 max-w-md text-[#667085]">
              The article you are looking for may have
              been moved or is no longer available.
            </p>

            <Link
              to="/resources/blogs"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E9A117] px-6 py-3 font-semibold text-white transition hover:bg-[#D89100]"
            >
              <ArrowLeft size={17} />
              Back to Blogs
            </Link>
          </div>
        </section>

        <Footer />
      </>
    );
  }

  const relatedBlogs = getRelatedBlogs(
    blog.slug
  );

  // ==========================================================
  // MAIN
  // ==========================================================

  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* ==================================================
            BLOG HERO
        ================================================== */}

        <section className="bg-[#F7FAFC] pb-16 pt-12 sm:pb-20 sm:pt-16">
          <div className="mx-auto max-w-[1000px] px-5 sm:px-6">

            {/* BACK */}

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

            <h1 className="mt-6 max-w-[950px] text-[34px] font-bold leading-[1.12] tracking-[-0.02em] text-[#17242B] sm:text-[44px] md:text-[58px]">
              {blog.title}
            </h1>

          </div>
        </section>

        {/* ==================================================
            FEATURED IMAGE
        ================================================== */}

        <section className="relative -mt-4">
          <div className="mx-auto max-w-[1100px] px-5 sm:px-6">

            <div className="overflow-hidden rounded-[22px] bg-[#F3F6F8] shadow-lg sm:rounded-[26px] md:rounded-[28px]">
              <img
                src={blog.image}
                alt={blog.title}
                className="h-[260px] w-full object-cover sm:h-[380px] md:h-[550px]"
              />
            </div>

          </div>
        </section>

        {/* ==================================================
            BLOG CONTENT
        ================================================== */}

        <section className="pb-20 pt-12 sm:pb-28 sm:pt-16">
          <div className="mx-auto max-w-[850px] px-5 sm:px-6">

            <article>

              {/* ==================================================
                  INTRO
              ================================================== */}

              {blog.intro?.map(
                (paragraph, index) => (
                  <p
                    key={index}
                    className="mb-6 text-[16px] leading-8 text-[#59636E] sm:text-[17px] sm:leading-9"
                  >
                    {paragraph}
                  </p>
                )
              )}

              {/* ==================================================
                  SECTIONS
              ================================================== */}

              {blog.sections?.map(
                (section, index) => (
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

                    {section.paragraphs?.map(
                      (paragraph, i) => (
                        <p
                          key={i}
                          className="mb-6 text-[16px] leading-8 text-[#59636E] sm:text-[17px] sm:leading-9"
                        >
                          {paragraph}
                        </p>
                      )
                    )}

                    {/* SNAPSHOT */}

                    {section.snapshot && (
                      <div className="my-8 rounded-[20px] border border-[#DCEEF4] bg-[#F3FAFC] p-5 sm:rounded-[22px] sm:p-8">

                        <h3 className="mb-5 text-lg font-bold text-[#17242B]">
                          Clinical Snapshot
                        </h3>

                        <div className="space-y-4">

                          {section.snapshot.map(
                            (item, i) => (
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
                            )
                          )}

                        </div>
                      </div>
                    )}

                    {/* BULLETS */}

                    {section.bullets && (
                      <ul className="mt-6 space-y-4">

                        {section.bullets.map(
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

                    {/* PARAGRAPHS AFTER BULLETS */}

                    {section.paragraphsAfterBullets?.map(
                      (paragraph, i) => (
                        <p
                          key={i}
                          className="mt-6 text-[16px] leading-8 text-[#59636E] sm:text-[17px] sm:leading-9"
                        >
                          {paragraph}
                        </p>
                      )
                    )}

                    {/* SUBSECTIONS */}

                    {section.subSections?.map(
                      (
                        subSection,
                        subIndex
                      ) => (
                        <div
                          key={subIndex}
                          className="mt-9"
                        >

                          <h3 className="mb-5 text-[21px] font-bold leading-tight text-[#17242B] sm:text-[23px]">
                            {subSection.heading}
                          </h3>

                          {/* SUB PARAGRAPHS */}

                          {subSection.paragraphs?.map(
                            (
                              paragraph,
                              i
                            ) => (
                              <p
                                key={i}
                                className="mb-6 text-[16px] leading-8 text-[#59636E] sm:text-[17px] sm:leading-9"
                              >
                                {paragraph}
                              </p>
                            )
                          )}

                          {/* SUB BULLETS */}

                          {subSection.bullets && (
                            <ul className="space-y-4">

                              {subSection.bullets.map(
                                (
                                  item,
                                  i
                                ) => (
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
                                (
                                  item,
                                  i
                                ) => (
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
                                (
                                  header,
                                  i
                                ) => (
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
                              (
                                row,
                                rowIndex
                              ) => (
                                <tr
                                  key={
                                    rowIndex
                                  }
                                  className="border-b border-[#EEF2F5] last:border-0"
                                >

                                  {row.map(
                                    (
                                      cell,
                                      cellIndex
                                    ) => (
                                      <td
                                        key={
                                          cellIndex
                                        }
                                        className="px-5 py-5 align-top text-[14px] leading-7 text-[#59636E]"
                                      >
                                        {
                                          cell
                                        }
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
                )
              )}

            </article>

            {/* ==================================================
                RELATED ARTICLES
            ================================================== */}

            {relatedBlogs.length > 0 && (
              <section className="mt-16 border-t border-[#E8EEF1] pt-12 sm:mt-20 sm:pt-14">

                <div className="mb-7">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#20BDEB]">
                    Keep Reading
                  </p>

                  <h2 className="mt-2 text-[28px] font-bold text-[#17242B] sm:text-[32px]">
                    Related Health Articles
                  </h2>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                  {relatedBlogs.map(
                    (relatedBlog) => (
                      <Link
                        key={
                          relatedBlog.slug
                        }
                        to={`/resources/blogs/${relatedBlog.slug}`}
                        className="group overflow-hidden rounded-[18px] border border-[#E7EDF0] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
                      >

                        <div className="h-[180px] overflow-hidden bg-[#F3F6F8]">
                          <img
                            src={
                              relatedBlog.image
                            }
                            alt={
                              relatedBlog.title
                            }
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                        </div>

                        <div className="p-5">

                          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#20BDEB]">
                            {relatedBlog.date}
                          </p>

                          <h3 className="mt-2 line-clamp-3 text-[17px] font-bold leading-6 text-[#17242B]">
                            {
                              relatedBlog.title
                            }
                          </h3>

                          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#20BDEB]">
                            Read Article
                            <ArrowRight
                              size={15}
                              className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                          </span>

                        </div>

                      </Link>
                    )
                  )}

                </div>

              </section>
            )}

            {/* ==================================================
                BOTTOM CTA
            ================================================== */}

            <div className="mt-14 rounded-[24px] bg-[#EAF6FB] p-7 text-center sm:mt-16 sm:rounded-[28px] sm:p-12">

              <h3 className="text-2xl font-bold text-[#17242B] md:text-3xl">
                Stay Updated with GeneBio
              </h3>

              <p className="mx-auto mt-4 max-w-[600px] text-[#667085]">
                Discover more insights, research updates,
                and innovations from the world of diagnostics
                and healthcare.
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