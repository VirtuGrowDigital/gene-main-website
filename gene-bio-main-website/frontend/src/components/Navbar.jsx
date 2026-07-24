import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

import logo from "../assets/images/genebio-logo.png";

const navItems = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Products",
    to: "/products",
  },
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
      { name: "Events", to: "/resources/events" },
    ],
  },
  {
    name: "Careers",
    to: "/careers",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full px-5 pt-6 md:px-10 lg:px-16">
      <nav
        className="
          relative mx-auto flex max-w-[1180px] items-center justify-between
          rounded-[32px] bg-white px-5 py-3
          shadow-[0_0_10px_2px_rgba(0,200,255,0.9),0_0_28px_8px_rgba(0,200,255,0.45)]
          md:px-8 lg:px-10
        "
      >
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center">
          <img
            src={logo}
            alt="GeneBIO Healthcare"
            className="w-[145px] md:w-[170px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex xl:gap-10">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.name} className="group relative">
                <button className="flex items-center gap-1 text-[15px] font-extralight text-[#068D9C] transition hover:text-[#04C7E8]">
                  {item.name}
                  <ChevronDown size={16} />
                </button>

                <div
  className="
    invisible absolute left-0 top-full mt-4 w-64
    rounded-2xl
    border border-white/20
    bg-white/75
    backdrop-blur-xl
    p-3
    opacity-0
    shadow-[0_12px_40px_rgba(0,0,0,0.15)]
    transition-all duration-300
    group-hover:visible
    group-hover:translate-y-0
    group-hover:opacity-100
    translate-y-2
  "
>
                  {item.children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 text-sm transition ${
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
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "font-semibold text-[#04C7E8]"
                      : "font-extralight text-[#068D9C] hover:text-[#04C7E8]"
                  } text-[15px] transition-colors`
                }
              >
                {item.name}
              </NavLink>
            )
          )}
        </div>

        {/* CTA */}
        <Link
          to="/partners/bulk-pricing"
          className="
            hidden lg:inline-flex items-center justify-center
            rounded-[14px] bg-[#068D9C]
            px-6 py-3 text-[14px] font-bold text-white
            transition-all hover:-translate-y-0.5 hover:bg-[#057887]
          "
        >
          Get Bulk Pricing
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0795A8] text-white lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute left-0 top-[calc(100%+12px)] w-full rounded-[24px] bg-white p-5 shadow-xl lg:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.name}>
                    <p className="px-4 py-2 text-sm font-bold text-[#068D9C]">
                      {item.name}
                    </p>

                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `ml-3 block rounded-xl px-4 py-3 text-sm ${
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
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    end={item.to === "/"}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3 text-sm ${
                        isActive
                          ? "bg-[#EEF9FD] font-semibold text-[#04C7E8]"
                          : "text-[#068D9C] hover:bg-[#EEF9FD]"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )
              )}

              <Link
                to="/partners/bulk-pricing"
                onClick={() => setIsOpen(false)}
                className="mt-4 flex justify-center rounded-[14px] bg-[#068D9C] px-5 py-3 text-sm font-bold text-white"
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