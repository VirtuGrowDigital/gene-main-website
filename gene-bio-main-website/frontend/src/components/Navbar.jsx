
import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

import logo from "../assets/images/genebio-logo.png";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Products", to: "/products" },
  {
    name: "Company",
    children: [
      { name: "About Us", to: "/company/about" },
      { name: "Manufacturing & Quality", to: "/company/manufacturing" },
      { name: "Certifications", to: "/company/certifications" },
      { name: "Gallery", to: "/company/gallery" },
      { name: "Global Presence", to: "/company/global-presence" },
    ],
  },
  {
    name: "Partners",
    children: [
      { name: "Become a Distributor", to: "/partners/distributor" },
      { name: "Get Bulk Pricing", to: "/partners/bulk-pricing" },
    ],
  },
  {
    name: "Resources",
    children: [
      { name: "News & Blogs", to: "/resources/blogs" },
    ],
  },
  { name: "Careers", to: "/careers" },
  { name: "Awards & Events", to: "/resources/events" },
  
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const navRef = useRef(null);

  // Sticky navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
        isScrolling ? "pt-3" : "pt-5 lg:pt-6"
      }`}
    >
      <nav
        ref={navRef}
        className={`
          relative mx-auto flex w-full max-w-[1400px] items-center
          justify-between gap-4 rounded-[28px] px-5 py-3
          transition-all duration-300 sm:px-6 lg:px-7
          ${
            isScrolling
              ? "bg-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-xl"
              : "bg-white shadow-[0_0_10px_2px_rgba(0,200,255,0.7),0_0_24px_6px_rgba(0,200,255,0.3)]"
          }
        `}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="GeneBIO Healthcare"
            className="w-[130px] object-contain sm:w-[150px] lg:w-[160px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 items-center justify-center gap-5 xl:flex 2xl:gap-7">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.name} className="group relative flex h-full items-center">
                <button
                  type="button"
                  aria-haspopup="true"
                  className="
                    flex items-center gap-1 whitespace-nowrap
                    text-[14px] font-medium text-[#068D9C]
                    transition-colors hover:text-[#04C7E8]
                    2xl:text-[15px]
                  "
                >
                  {item.name}
                  <ChevronDown
                    size={15}
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                </button>

                {/* Dropdown */}
                <div
                  className="
                    invisible absolute left-0 top-full z-50 w-64
                    translate-y-2 pt-4 opacity-0
                    transition-all duration-200
                    group-hover:visible group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  <div className="rounded-2xl border border-gray-100 bg-white/95 p-3 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className={({ isActive }) =>
                          `block rounded-xl px-4 py-3 text-sm transition-colors ${
                            isActive
                              ? "bg-[#EEF9FD] font-semibold text-[#04C7E8]"
                              : "text-[#068D9C] hover:bg-[#EEF9FD] hover:text-[#04C7E8]"
                          }`
                        }
                      >
                        {child.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `whitespace-nowrap text-[14px] transition-colors 2xl:text-[15px] ${
                    isActive
                      ? "font-semibold text-[#04C7E8]"
                      : "font-medium text-[#068D9C] hover:text-[#04C7E8]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/partners/bulk-pricing"
          className="
            hidden shrink-0 items-center justify-center
            whitespace-nowrap rounded-[13px]
            bg-[#068D9C] px-4 py-3
            text-[13px] font-bold text-white
            transition-all duration-300
            hover:-translate-y-0.5 hover:bg-[#057887]
            2xl:px-5 2xl:text-[14px]
            xl:inline-flex
          "
        >
          Get Bulk Pricing
        </Link>

        {/* Mobile / Tablet Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          className="
            flex h-10 w-10 shrink-0 items-center justify-center
            rounded-full text-[#068D9C] transition-colors
            hover:bg-[#EEF9FD] xl:hidden
          "
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        {/* Mobile / Tablet Menu */}
        {isOpen && (
          <div
            className="
              absolute left-0 top-[calc(100%+12px)] z-50
              max-h-[80vh] w-full overflow-y-auto
              rounded-[24px] border border-gray-100
              bg-white p-4 shadow-[0_15px_40px_rgba(0,0,0,0.12)]
              sm:p-5 xl:hidden
            "
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.name} className="rounded-xl">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown((current) =>
                          current === item.name ? null : item.name
                        )
                      }
                      aria-expanded={openDropdown === item.name}
                      className="
                        flex w-full items-center justify-between
                        rounded-xl px-4 py-3.5 text-sm font-semibold
                        text-[#068D9C] transition-colors
                        hover:bg-[#EEF9FD]
                      "
                    >
                      {item.name}

                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openDropdown === item.name && (
                      <div className="ml-3 mt-1 flex flex-col gap-1 border-l-2 border-[#D9F1F4] pl-3">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                              `rounded-xl px-4 py-3 text-sm transition-colors ${
                                isActive
                                  ? "bg-[#EEF9FD] font-semibold text-[#04C7E8]"
                                  : "text-[#068D9C] hover:bg-[#EEF9FD]"
                              }`
                            }
                          >
                            {child.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    end={item.to === "/"}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3.5 text-sm transition-colors ${
                        isActive
                          ? "bg-[#EEF9FD] font-semibold text-[#04C7E8]"
                          : "font-medium text-[#068D9C] hover:bg-[#EEF9FD]"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )
              )}

              {/* Mobile CTA */}
              <Link
                to="/partners/bulk-pricing"
                onClick={closeMobileMenu}
                className="
                  mt-3 flex w-full items-center justify-center
                  rounded-[14px] bg-[#068D9C] px-5 py-3.5
                  text-sm font-bold text-white transition-colors
                  hover:bg-[#057887]
                "
              >
                Get Bulk Pricing
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
