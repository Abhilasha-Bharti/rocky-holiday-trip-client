import { useState } from "react";
import { usePackages } from "@/hooks/usePackages";
import FilterSidebar from "@/components/common/packages/FilterSidebar";
import PackagesGrid from "@/components/common/packages/PackagesGrid";
import TopFilterBar from "@/components/common/packages/TopFilterBar";
import Hero from "@/components/sections/Hero";
import { SlidersHorizontal } from "lucide-react";

const Packages = () => {
  const { packages } = usePackages();

  const [filter, setFilter] = useState("All");
  const [budget, setBudget] = useState(50000);
  const [type, setType] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredPackages = packages.filter((pkg) => {
    return (
      (filter === "All" || pkg.destination === filter) &&
      pkg.price <= budget &&
      (!type || pkg.type === type)
    );
  });

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <Hero
        title="Explore Kashmir & Ladakh"
        subtitle="Curated travel experiences designed for unforgettable journeys"
        image="/images/hero.jpg"
      />

      {/* INTRO */}
      <div className="max-w-5xl mx-auto px-6 mt-10 text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Find Your Perfect Trip
        </h2>
        <p className="text-gray-600 mt-3 text-sm md:text-base">
          Discover luxury stays, adventure tours, and personalized travel packages.
        </p>
      </div>

      {/* TOP BAR (Sticky like premium apps) */}
      <div className="sticky top-16 z-40 bg-white border-b mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

          {/* DESTINATION FILTER */}
          <TopFilterBar filter={filter} setFilter={setFilter} />

          {/* MOBILE FILTER BUTTON */}
          <button
            onClick={() => setShowFilters(true)}
            className="lg:hidden flex items-center gap-2 border px-4 py-2 rounded-full bg-gray-100"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* SIDEBAR (Desktop) */}
        <div className="hidden lg:block">
          <div className="sticky top-28">
            <FilterSidebar
              budget={budget}
              setBudget={setBudget}
              type={type}
              setType={setType}
            />
          </div>
        </div>

        {/* MOBILE FILTER DRAWER */}
        {showFilters && (
          <div className="fixed inset-0 bg-black/50 z-50 flex justify-end lg:hidden">
            <div className="bg-white w-[80%] p-5 h-full overflow-y-auto">
              <div className="flex justify-between mb-4">
                <h3 className="font-semibold">Filters</h3>
                <button onClick={() => setShowFilters(false)}>✕</button>
              </div>

              <FilterSidebar
                budget={budget}
                setBudget={setBudget}
                type={type}
                setType={setType}
              />
            </div>
          </div>
        )}

        {/* PACKAGES SECTION */}
        <div className="lg:col-span-3">

          {/* RESULT + SORT */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-3">
            <h2 className="text-lg md:text-xl font-semibold">
              {filteredPackages.length} Packages Available
            </h2>

            <select className="border px-3 py-2 rounded-full text-sm bg-white">
              <option>Sort by Popularity</option>
              <option>Price Low → High</option>
              <option>Price High → Low</option>
              <option>Duration</option>
            </select>
          </div>

          {/* GRID */}
          <PackagesGrid packages={filteredPackages} />

        </div>
      </div>

      {/* STICKY CTA (Mobile like real apps) */}
      <div className="fixed bottom-0 w-full bg-white border-t p-4 flex justify-between items-center lg:hidden z-50">
        <span className="text-sm font-medium">
          {filteredPackages.length} trips found
        </span>
        <button className="bg-orange-600 text-white px-5 py-2 rounded-full">
          View Packages
        </button>
      </div>
    </div>
  );
};

export default Packages;