import { Link } from "react-router-dom";
import { useState } from "react";
import { navLinks } from "@/data/navLinks";
import { currencies } from "@/data/currencies";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
            <span className="font-bold text-lg hidden sm:block">Rocky Holiday Trips</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, i) => {
              
              // 1. DESTINATIONS: Multi-level Nested Dropdown
              if (link.subCategories) {
                return (
                  <div key={i} className="relative group py-5">
                    <button className="flex items-center gap-1 hover:text-orange-500 transition-colors">
                      {link.name} <ChevronDown size={14} />
                    </button>
                    <div className="absolute top-full left-0 hidden group-hover:block w-56 bg-white text-gray-800 shadow-2xl rounded-md border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="py-2">
                        <Link to={link.path} className="block px-4 py-2 font-bold text-orange-600 hover:bg-orange-50 border-b">
                          All Packages
                        </Link>
                        {link.subCategories.map((sub, idx) => (
                          <div key={idx} className="relative group/sub px-4 py-2 hover:bg-gray-100 flex items-center justify-between cursor-pointer">
                            <span>{sub.name}</span>
                            <ChevronRight size={14} className="text-gray-400" />
                            {/* Nested Domestic/International Locations */}
                            <div className="absolute top-0 left-full hidden group-hover/sub:block w-56 bg-white shadow-2xl rounded-md border border-gray-100 ml-1">
                              {sub.locations.map((loc, lIdx) => (
                                <Link key={lIdx} to={loc.path} className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600">
                                  {loc.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // 2. BIKE TRIPS: Simple List Dropdown
              if (link.subItems) {
                return (
                  <div key={i} className="relative group py-5">
                    <button className="flex items-center gap-1 hover:text-orange-500 transition-colors">
                      {link.name} <ChevronDown size={14} />
                    </button>
                    <div className="absolute top-full left-0 hidden group-hover:block w-72 bg-white text-gray-800 shadow-2xl rounded-md border border-gray-100 p-2 mt-1 animate-in fade-in zoom-in-95 duration-200">
                      {link.subItems.map((item, idx) => (
                        <Link key={idx} to={item.path} className="block px-4 py-3 text-sm font-medium hover:bg-orange-50 hover:text-orange-600 rounded-md transition-colors">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              // Default Links (Home, Luxury, etc.)
              return (
                <Link key={i} to={link.path} className="hover:text-orange-500 transition-colors font-medium">
                  {link.name}
                </Link>
              );
            })}
{/* Currency Selector */}
            <select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-orange-500"
            >
              {currencies.map((c, i) => <option key={i} value={c}>{c}</option>)}
            </select>
            <button className="bg-orange-600 px-5 py-2 rounded-full font-bold hover:bg-orange-700 transition-transform active:scale-95">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 max-h-[90vh] overflow-y-auto">
          <ul className="flex flex-col p-4 space-y-2">
            {navLinks.map((link, i) => (
              <li key={i} className="py-2 border-b border-gray-700/50">
                <Link to={link.path} className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </Link>
                {/* Visual indicator that this has sub-items in mobile */}
                {(link.subCategories || link.subItems) && (
                  <span className="ml-2 text-[10px] bg-gray-700 px-2 py-0.5 rounded uppercase opacity-60 italic">
                    Tap to view on page
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;