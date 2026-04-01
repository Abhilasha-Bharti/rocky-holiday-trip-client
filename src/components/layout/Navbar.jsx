import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Search,
  Phone,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/navLinks";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobile, setActiveMobile] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ Desktop dropdown states
  const [activeDropdown, setActiveDropdown] = useState(null);
 

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white text-black shadow-md py-2"
          : "bg-transparent text-white py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" className="h-8" />
          <span className="font-bold text-lg">
            Rocky Holiday <span className="text-orange-600">Trips</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link, i) => {

            // ✅ DESTINATIONS (NESTED DROPDOWN)
            if (link.type === "dropdown") {
              return (
                <div
                  key={i}
                  className="relative py-2"
                  onMouseEnter={() => setActiveDropdown(i)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 font-semibold">
                    {link.name} <ChevronDown size={14} />
                  </button>

                  <div
                    className={cn(
                      "absolute top-full left-0 bg-white text-black shadow-xl rounded-lg w-52 transition-all duration-200",
                      activeDropdown === i
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    )}
                  >
                    {link.items.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className="block px-4 py-2 hover:bg-orange-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            // ✅ EXPERIENCES (SIMPLE DROPDOWN)
            if (link.type === "dropdown") {
              return (
                <div
                  key={i}
                  className="relative py-2"
                  onMouseEnter={() => setActiveDropdown(i)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 font-semibold">
                    {link.name} <ChevronDown size={14} />
                  </button>

                  <div
                    className={cn(
                      "absolute top-full left-0 bg-white text-black shadow-xl rounded-lg w-52 transition-all duration-200",
                      activeDropdown === i
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    )}
                  >
                    {link.items.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className="block px-4 py-2 hover:bg-orange-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            // ✅ NORMAL LINK
            return (
              <Link
                key={i}
                to={link.path}
                className={cn(
                  "font-semibold",
                  location.pathname === link.path
                    ? "text-orange-600"
                    : "hover:text-orange-500"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-5">
          <Search className="cursor-pointer hover:text-orange-500" />
          <Phone className="cursor-pointer hover:text-orange-500" />
          <User className="cursor-pointer hover:text-orange-500" />

          <button className="bg-orange-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-700 transition">
            Book Now
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-black text-white p-6 space-y-4">
          {navLinks.map((link, i) => (
            <div key={i}>
              <div
                className="flex justify-between items-center"
                onClick={() =>
                  setActiveMobile(activeMobile === i ? null : i)
                }
              >
                <Link to={link.path}>{link.name}</Link>
                {link.items && <ChevronDown />}
              </div>

              {activeMobile === i && link.items && (
                <div className="ml-4 mt-2 space-y-2">
                  {link.type === "nested" &&
                    link.items.map((item, idx) => (
                      <div key={idx}>
                        <p className="text-orange-400">{item.name}</p>
                        {item.children.map((child, cIdx) => (
                          <Link
                            key={cIdx}
                            to={child.path}
                            className="block text-gray-300 ml-3"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    ))}

                  {link.type === "dropdown" &&
                    link.items.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className="block text-gray-300"
                      >
                        {item.name}
                      </Link>
                    ))}
                </div>
              )}
            </div>
          ))}

          <button className="w-full bg-orange-600 py-3 rounded-full">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;