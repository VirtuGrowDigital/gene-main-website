import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  BriefcaseBusiness,
  GraduationCap,
  IndianRupee,
  Clock3,
  Heart,
  Share2,
} from "lucide-react";

/* =========================================================
   JOB DATA
   Add actual jobs here when positions become available.
========================================================= */

const jobs = [
  // Example:
  // {
  //   id: 1,
  //   category: "Research",
  //   title: "Senior Molecular Biologist",
  //   location: "Lucknow, India",
  //   type: "Full Time",
  //   experience: "5+ Years",
  //   salary: "₹8L - ₹12L",
  //   posted: "2 days ago",
  //   description:
  //     "Lead molecular diagnostics research and develop innovative IVD solutions.",
  // },
];

/* =========================================================
   FILTER OPTIONS
========================================================= */

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
  /* =======================================================
     APPLICATION FORM
  ======================================================= */

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null,
  });

  /* =======================================================
     FILTER STATES
  ======================================================= */

  const [department, setDepartment] = useState("All Roles");
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [jobType, setJobType] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  /* =======================================================
     JOB STATES
  ======================================================= */

  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [savedJobs, setSavedJobs] = useState([]);

  /* =======================================================
     FILTER JOBS
  ======================================================= */

  const filteredJobs = useMemo(() => {
    let data = [...jobs];

    if (department !== "All Roles") {
      data = data.filter(
        (job) => job.category === department
      );
    }

    if (location !== "All") {
      data = data.filter(
        (job) => job.location?.includes(location)
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
          job.title?.toLowerCase().includes(keyword) ||
          job.category?.toLowerCase().includes(keyword) ||
          job.location?.toLowerCase().includes(keyword)
      );
    }

    if (sortBy === "A-Z") {
      data.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    if (sortBy === "Newest") {
      data.sort((a, b) => b.id - a.id);
    }

    if (sortBy === "Oldest") {
      data.sort((a, b) => a.id - b.id);
    }

    return data;
  }, [
    department,
    search,
    location,
    jobType,
    sortBy,
  ]);

  /* =======================================================
     APPLICATION SUBMIT
  ======================================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone
    ) {
      alert("Please fill all required fields.");
      return;
    }

    console.log({
      job: selectedJob,
      applicant: formData,
    });

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

  /* =======================================================
     SHARE JOB
  ======================================================= */

  const handleShare = async (job) => {
    const shareData = {
      title: job.title,
      text: `Check out this opportunity at GeneBio Healthcare: ${job.title}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(
          window.location.href
        );

        alert("Job link copied to clipboard!");
      }
    } catch (error) {
      console.log("Share cancelled.");
    }
  };

  return (
    <section
      id="open-roles"
      className="scroll-mt-24 bg-[#F8FAFC] py-24"
    >
      <div className="mx-auto max-w-[1180px] px-5 md:px-6 lg:px-8">

        {/* =================================================
            HEADING
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="text-center"
        >
          <h2 className="text-[42px] font-bold text-[#1D1D1D] md:text-[54px]">
            Open Roles
          </h2>

          <p className="mt-4 text-[16px] leading-7 text-gray-500">
            Join GeneBio and shape the future of diagnostics.
            <br />
            Mail your CV at{" "}
            <a
              href="mailto:hr@genebiohealthcare.com"
              className="font-semibold text-[#28BDF4] transition hover:text-[#1598CC]"
            >
              hr@genebiohealthcare.com
            </a>
          </p>
        </motion.div>

        {/* =================================================
            FILTER TOOLBAR
        ================================================= */}

        <motion.div
          layout
          className="mt-14 rounded-[22px] border border-[#EDF2F7] bg-white p-6 shadow-lg"
        >

          {/* Top Filters */}

          <div className="grid gap-5 lg:grid-cols-4">

            {/* Search */}

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search job title..."
              className="rounded-xl border border-gray-200 px-5 py-3 outline-none transition-all focus:border-[#28BDF4]"
            />

            {/* Location */}

            <select
              value={location}
              onChange={(e) =>
                setLocation(e.target.value)
              }
              className="rounded-xl border border-gray-200 bg-white px-5 py-3 outline-none transition focus:border-[#28BDF4]"
            >
              {locations.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            {/* Job Type */}

            <select
              value={jobType}
              onChange={(e) =>
                setJobType(e.target.value)
              }
              className="rounded-xl border border-gray-200 bg-white px-5 py-3 outline-none transition focus:border-[#28BDF4]"
            >
              {jobTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            {/* Sort */}

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value)
              }
              className="rounded-xl border border-gray-200 bg-white px-5 py-3 outline-none transition focus:border-[#28BDF4]"
            >
              <option value="Newest">
                Newest
              </option>

              <option value="Oldest">
                Oldest
              </option>

              <option value="A-Z">
                A-Z
              </option>
            </select>

          </div>

          {/* Department Tabs */}

          <div className="mt-8 flex flex-wrap gap-3">

            {departments.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setDepartment(item)
                }
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
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

        {/* =================================================
            JOB LIST
        ================================================= */}

        <div className="mt-12">

          <AnimatePresence mode="wait">

            {filteredJobs.length > 0 ? (

              <motion.div
                layout
                className="grid gap-6"
              >

                {filteredJobs.map((job) => (

                  <motion.div
                    key={job.id}
                    layout
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="rounded-3xl border border-[#E8EDF2] bg-white p-8 shadow-sm transition-all hover:shadow-xl"
                  >

                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                      {/* Job Information */}

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

                      {/* Actions */}

                      <div className="flex items-center gap-3">

                        {/* Save */}

                        <button
                          type="button"
                          onClick={() =>
                            setSavedJobs((prev) =>
                              prev.includes(job.id)
                                ? prev.filter(
                                    (id) =>
                                      id !== job.id
                                  )
                                : [
                                    ...prev,
                                    job.id,
                                  ]
                            )
                          }
                          className="rounded-xl border p-3 transition hover:bg-gray-100"
                          aria-label="Save job"
                        >
                          <Heart
                            size={18}
                            fill={
                              savedJobs.includes(job.id)
                                ? "#ef4444"
                                : "none"
                            }
                            className={
                              savedJobs.includes(job.id)
                                ? "text-red-500"
                                : "text-gray-500"
                            }
                          />
                        </button>

                        {/* Share */}

                        <button
                          type="button"
                          onClick={() =>
                            handleShare(job)
                          }
                          className="rounded-xl border p-3 transition hover:bg-gray-100"
                          aria-label="Share job"
                        >
                          <Share2 size={18} />
                        </button>

                        {/* Apply */}

                        <button
                          type="button"
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

                  </motion.div>

                ))}

              </motion.div>

            ) : (

              /* =================================================
                 NO OPEN ROLES
              ================================================= */

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="rounded-3xl border border-[#E8EDF2] bg-white px-6 py-16 text-center shadow-sm"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF8FF]">

                  <BriefcaseBusiness
                    size={28}
                    className="text-[#28BDF4]"
                  />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#222]">
                  No Open Roles
                </h3>

                <p className="mx-auto mt-3 max-w-[560px] text-[15px] leading-7 text-gray-500">
                  We currently don't have any open positions.
                  However, we're always interested in connecting
                  with talented professionals.
                </p>

                <p className="mt-5 text-[15px] text-gray-500">
                  Send your CV to{" "}
                  <a
                    href="mailto:hr@genebiohealthcare.com"
                    className="font-semibold text-[#28BDF4] transition hover:text-[#1598CC]"
                  >
                    hr@genebiohealthcare.com
                  </a>
                </p>

              </motion.div>

            )}

          </AnimatePresence>

        </div>

        {/* =================================================
            APPLICATION MODAL
        ================================================= */}

        <AnimatePresence>

          {showApplyModal && selectedJob && (

            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
            >

              <motion.div
                initial={{
                  y: 40,
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  y: 30,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-8"
              >

                {/* Modal Header */}

                <div className="flex items-start justify-between">

                  <div>

                    <h3 className="text-3xl font-bold text-[#222]">
                      Apply for
                    </h3>

                    <p className="mt-2 font-semibold text-[#28BDF4]">
                      {selectedJob.title}
                    </p>

                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setShowApplyModal(false)
                    }
                    className="text-3xl leading-none text-gray-500 transition hover:text-black"
                    aria-label="Close"
                  >
                    ×
                  </button>

                </div>

                {/* Form */}

                <form
                  onSubmit={handleSubmit}
                  className="mt-8"
                >

                  <div className="grid gap-5 md:grid-cols-2">

                    {/* Full Name */}

                    <input
                      type="text"
                      placeholder="Full Name *"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          fullName: e.target.value,
                        })
                      }
                      className="rounded-xl border border-gray-200 p-4 outline-none transition focus:border-[#28BDF4]"
                      required
                    />

                    {/* Email */}

                    <input
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      className="rounded-xl border border-gray-200 p-4 outline-none transition focus:border-[#28BDF4]"
                      required
                    />

                    {/* Phone */}

                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                      className="rounded-xl border border-gray-200 p-4 outline-none transition focus:border-[#28BDF4]"
                      required
                    />

                    {/* Resume */}

                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          resume:
                            e.target.files?.[0] ||
                            null,
                        })
                      }
                      className="rounded-xl border border-gray-200 p-3 text-sm"
                    />

                  </div>

                  {/* Cover Letter */}

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
                    className="mt-5 w-full rounded-xl border border-gray-200 p-4 outline-none transition focus:border-[#28BDF4]"
                  />

                  {/* Actions */}

                  <div className="mt-8 flex justify-end gap-3">

                    <button
                      type="button"
                      onClick={() =>
                        setShowApplyModal(false)
                      }
                      className="rounded-xl border border-gray-200 px-6 py-3 transition hover:bg-gray-50"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="rounded-xl bg-[#28BDF4] px-8 py-3 font-semibold text-white transition hover:bg-[#1598CC]"
                    >
                      Submit Application
                    </button>

                  </div>

                </form>

              </motion.div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>
    </section>
  );
}