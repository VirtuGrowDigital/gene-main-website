import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    MapPin,
    BriefcaseBusiness,
    GraduationCap,
    IndianRupee,
    Clock3,
    ChevronDown,
    Heart,
    Share2,
  } from "lucide-react";

const jobs = [
    {
      id: 1,
      category: "Research",
      title: "Senior Molecular Biologist",
      location: "Zurich, Switzerland",
      type: "Full Time",
      experience: "5+ Years",
      salary: "$90K - $120K",
      posted: "2 days ago",
      description:
        "Lead molecular diagnostics research and develop innovative IVD solutions for global healthcare markets.",
      responsibilities: [
        "Lead molecular biology projects",
        "Develop diagnostic assays",
        "Mentor junior scientists",
        "Collaborate with R&D teams",
      ],
    },
    {
      id: 2,
      category: "Engineering",
      title: "Software Engineer (React)",
      location: "Bangalore, India",
      type: "Full Time",
      experience: "3+ Years",
      salary: "₹12L - ₹18L",
      posted: "5 days ago",
      description:
        "Build scalable healthcare web applications using React and modern frontend technologies.",
      responsibilities: [
        "Develop React applications",
        "Work with REST APIs",
        "Write reusable components",
        "Collaborate with designers",
      ],
    },
    {
      id: 3,
      category: "Manufacturing",
      title: "Production Executive",
      location: "Pune, India",
      type: "Full Time",
      experience: "2+ Years",
      salary: "₹6L - ₹9L",
      posted: "1 week ago",
      description:
        "Ensure smooth production while maintaining GMP compliance.",
      responsibilities: [
        "Monitor production lines",
        "Maintain GMP standards",
        "Coordinate with QA",
        "Prepare reports",
      ],
    },
    {
      id: 4,
      category: "Sales",
      title: "Regional Sales Manager",
      location: "Dubai, UAE",
      type: "Hybrid",
      experience: "6+ Years",
      salary: "$70K - $95K",
      posted: "Yesterday",
      description:
        "Drive regional sales growth across healthcare markets.",
      responsibilities: [
        "Generate leads",
        "Manage distributors",
        "Meet sales targets",
        "Develop client relationships",
      ],
    },
  ];

const departments = [
  "All Roles",
  "Engineering",
  "Research",
  "Manufacturing",
  "Sales",
];

const locations = [
  "All",
  "India",
  "Switzerland",
  "Germany",
  "UAE",
  "USA",
];

const jobTypes = [
  "All",
  "Full Time",
  "Hybrid",
  "Remote",
  "Internship",
];

export default function OpenRoles() {
    
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        coverLetter: "",
        resume: null,
      });

    const [department, setDepartment] = useState("All Roles");

    const [search, setSearch] = useState("");
    
    const [location, setLocation] = useState("All");
    
    const [jobType, setJobType] = useState("All");
    
    const [sortBy, setSortBy] = useState("Newest");

    const [expandedJob, setExpandedJob] = useState(null);

    const [selectedJob, setSelectedJob] = useState(null);

const [showApplyModal, setShowApplyModal] = useState(false);

const [savedJobs, setSavedJobs] = useState([]);

    const filteredJobs = useMemo(() => {
        let data = [...jobs];
      
        if (department !== "All Roles") {
          data = data.filter(
            (job) => job.category === department
          );
        }
      
        if (location !== "All") {
          data = data.filter((job) =>
            job.location.includes(location)
          );
        }
      
        if (jobType !== "All") {
          data = data.filter(
            (job) => job.type === jobType
          );
        }
      
        if (search.trim()) {
          const keyword = search.toLowerCase();
      
          data = data.filter(
            (job) =>
              job.title.toLowerCase().includes(keyword) ||
              job.category.toLowerCase().includes(keyword) ||
              job.location.toLowerCase().includes(keyword)
          );
        }
      
        if (sortBy === "A-Z") {
          data.sort((a, b) => a.title.localeCompare(b.title));
        }
      
        if (sortBy === "Newest") {
          data.sort((a, b) => b.id - a.id);
        }
      
        if (sortBy === "Oldest") {
          data.sort((a, b) => a.id - b.id);
        }
      
        return data;
      
      }, [department, search, location, jobType, sortBy]);

      const handleSubmit = (e) => {
        e.preventDefault();
      
        if (!formData.fullName || !formData.email || !formData.phone) {
          alert("Please fill all required fields.");
          return;
        }
      
        console.log({
          job: selectedJob,
          applicant: formData,
        });
      
        // TODO: Send to backend API
      
        alert("Application submitted successfully!");
      
        setShowApplyModal(false);
      
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          coverLetter: "",
          resume: null,
        });
      };

      return (
        <section className="bg-[#F8FAFC] py-24">
          <div className="mx-auto max-w-[1180px] px-5 md:px-6 lg:px-8">
      
            {/* Heading */}
      
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-[42px] md:text-[54px] font-bold text-[#1D1D1D]">
                Open Roles
              </h2>
      
              <p className="mt-4 text-gray-500">
                Join GeneBio and shape the future of diagnostics.
              </p>
            </motion.div>
      
            {/* Filter Toolbar */}
      
            <motion.div
              layout
              className="mt-14 rounded-[22px] bg-white p-6 shadow-lg border border-[#EDF2F7]"
            >
      
              {/* Top Filters */}
      
              <div className="grid gap-5 lg:grid-cols-4">
      
                {/* Search */}
      
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search job title..."
                  className="rounded-xl border border-gray-200 px-5 py-3 outline-none transition-all focus:border-[#28BDF4]"
                />
      
                {/* Location */}
      
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="rounded-xl border border-gray-200 px-5 py-3 outline-none"
                >
                  {locations.map((item) => (
                    <option key={item}>
                      {item}
                    </option>
                  ))}
                </select>
      
                {/* Job Type */}
      
                <select
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  className="rounded-xl border border-gray-200 px-5 py-3 outline-none"
                >
                  {jobTypes.map((item) => (
                    <option key={item}>
                      {item}
                    </option>
                  ))}
                </select>
      
                {/* Sort */}
      
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-xl border border-gray-200 px-5 py-3 outline-none"
                >
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>A-Z</option>
                </select>
      
              </div>
      
              {/* Department Tabs */}
      
              <div className="mt-8 flex flex-wrap gap-3">
      
                {departments.map((item) => (
      
                  <button
                    key={item}
                    onClick={() => setDepartment(item)}
                    className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300
      
                    ${
                      department === item
                        ? "bg-[#28BDF4] text-white shadow-lg"
                        : "bg-[#F1F5F9] text-[#555] hover:bg-[#DFF5FF]"
                    }`}
                  >
                    {item}
                  </button>
      
                ))}
      
              </div>
      
            </motion.div>
            
            <div className="mt-12">

<AnimatePresence mode="wait">

  <motion.div
    layout
    className="grid gap-6"
  >

    {filteredJobs.map((job) => (

      <motion.div
        key={job.id}
        layout
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl border border-[#E8EDF2] bg-white p-8 shadow-sm hover:shadow-xl transition-all"
      >

<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

<div className="flex-1">

  {/* Department */}

  <span className="inline-flex rounded-full bg-[#EAF8FF] px-4 py-2 text-xs font-semibold text-[#1D90C5]">
    {job.category}
  </span>

  {/* Title */}

  <h3 className="mt-5 text-2xl font-bold text-[#222]">
    {job.title}
  </h3>

  {/* Meta */}

  <div className="mt-5 flex flex-wrap gap-6 text-sm text-gray-500">

<div className="flex items-center gap-2">
  <MapPin size={18} />
  {job.location}
</div>

<div className="flex items-center gap-2">
  <BriefcaseBusiness size={18} />
  {job.type}
</div>

<div className="flex items-center gap-2">
  <GraduationCap size={18} />
  {job.experience}
</div>

<div className="flex items-center gap-2">
  <IndianRupee size={18} />
  {job.salary}
</div>

<div className="flex items-center gap-2">
  <Clock3 size={18} />
  {job.posted}
</div>

</div>

</div>

{/* Right Side */}

<div className="flex items-center gap-3">

  


  <div className="flex items-center gap-3">

<button
  onClick={() =>
    setSavedJobs((prev) =>
      prev.includes(job.id)
        ? prev.filter((id) => id !== job.id)
        : [...prev, job.id]
    )
  }
  className="rounded-xl border p-3 hover:bg-gray-100 transition"
>
  <Heart
    size={18}
    fill={savedJobs.includes(job.id) ? "#ef4444" : "none"}
    className={
      savedJobs.includes(job.id)
        ? "text-red-500"
        : "text-gray-500"
    }
  />
</button>

<button className="rounded-xl border p-3 hover:bg-gray-100 transition">
  <Share2 size={18} />
</button>

<button
  onClick={() => {
    setSelectedJob(job);
    setShowApplyModal(true);
  }}
  className="group flex items-center gap-2 rounded-xl bg-[#28BDF4] px-6 py-3 font-semibold text-white transition hover:bg-[#1598CC]"
>
  Apply Now

  <ArrowRight
    size={18}
    className="transition-transform group-hover:translate-x-1"
  />
</button>

</div>

</div>

</div>


      </motion.div>

    ))}

  </motion.div>

</AnimatePresence>

</div>

<AnimatePresence>

  {showApplyModal && (

    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <motion.div
        initial={{ y: 40, opacity: 0, scale: .95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: .3 }}
        className="w-full max-w-2xl rounded-3xl bg-white p-8"
      >

        <div className="flex items-start justify-between">

          <div>

            <h3 className="text-3xl font-bold">

              Apply for

            </h3>

            <p className="mt-2 text-[#28BDF4] font-semibold">

              {selectedJob?.title}

            </p>

          </div>

          <button
            onClick={() => setShowApplyModal(false)}
            className="text-3xl leading-none"
          >
            ×
          </button>

        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">

        <input
  placeholder="Full Name"
  value={formData.fullName}
  onChange={(e) =>
    setFormData({
      ...formData,
      fullName: e.target.value,
    })
  }
  className="rounded-xl border p-4 outline-none"
/>

<input
  type="email"
  placeholder="Email Address"
  value={formData.email}
  onChange={(e) =>
    setFormData({
      ...formData,
      email: e.target.value,
    })
  }
  className="rounded-xl border p-4 outline-none"
/>

<input
  placeholder="Phone Number"
  value={formData.phone}
  onChange={(e) =>
    setFormData({
      ...formData,
      phone: e.target.value,
    })
  }
  className="rounded-xl border p-4 outline-none"
/>

<input
  type="file"
  onChange={(e) =>
    setFormData({
      ...formData,
      resume: e.target.files[0],
    })
  }
  className="rounded-xl border p-3"
/>

        </div>

        <textarea
  rows={5}
  placeholder="Cover Letter"
  value={formData.coverLetter}
  onChange={(e) =>
    setFormData({
      ...formData,
      coverLetter: e.target.value,
    })
  }
  className="mt-5 w-full rounded-xl border p-4 outline-none"
/>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={() => setShowApplyModal(false)}
            className="rounded-xl border px-6 py-3"
          >
            Cancel
          </button>

          <button
  onClick={handleSubmit}
  className="rounded-xl bg-[#28BDF4] px-8 py-3 font-semibold text-white hover:bg-[#1598CC] transition"
>
  Submit Application
</button>

        </div>

      </motion.div>

    </motion.div>

  )}

</AnimatePresence>

          </div>
          
        </section>
      );
}