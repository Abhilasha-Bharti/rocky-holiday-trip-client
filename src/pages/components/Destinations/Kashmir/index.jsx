import Filter from "@/components/common/Filter";
import PlacesSection from "@/components/common/PlacesSection";
import Hero from "@/components/sections/Hero";
import { KashmirPlaces } from "@/data/kashmirPlaces";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Kashmir = () => {
 
  const [filters, setFilters] = useState({
    category: "",
    budget: 50000,
  });

  const navigate = useNavigate();
  

  
  const filteredPlaces = KashmirPlaces.filter((place) => {
    return (
      (!filters.category || place.type === filters.category) &&
      place.price <= filters.budget
    );
  });

  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <Hero
        title="Explore Kashmir"
        subtitle="Paradise on Earth"
        image="/images/kashmir.jpg"
      />

      {/* INTRO */}
      <div className="max-w-7xl mx-auto px-6 mt-10 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Discover the Beauty of Kashmir
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore top destinations, hidden gems, and curated travel experiences
          across Kashmir.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">

        {/* FILTER */}
        <Filter filters={filters} setFilters={setFilters} />

        {/* CONTENT */}
        <div className="lg:col-span-3 space-y-14">

          <PlacesSection
            title="Top Places"
            data={filteredPlaces.filter(p => p.type === "top")}
            onExplore={(place) =>
              navigate(`/packages?destination=kashmir&place=${place.name}`)
            }
            
          />

          <PlacesSection
            title="Offbeat Places"
            data={filteredPlaces.filter(p => p.type === "offbeat")}
            onExplore={() =>
              navigate(`/packages?destination=kashmir&type=offbeat`)
            }
            
          />

          <PlacesSection
            title="Adventure"
            data={filteredPlaces.filter(p => p.type === "adventure")}
            onExplore={() =>
              navigate(`/packages?type=adventure`)
            }
           
          />

          <PlacesSection
            title="Trekking"
            data={filteredPlaces.filter(p => p.type === "trekking")}
            onExplore={() =>
              navigate(`/packages?type=trekking`)
            }
           
          />

          <PlacesSection
            title="Camping"
            data={filteredPlaces.filter(p => p.type === "camping")}
            onExplore={() =>
              navigate(`/packages?type=camping`)
            }
            
          />

          {/* CTA */}
          <div className="text-center bg-black text-white p-10 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">
              Plan Your Kashmir Trip Now
            </h2>
            <button
              onClick={() => navigate("/packages?destination=kashmir")}
              className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold"
            >
              View All Packages →
            </button>
          </div>

        </div>
      </div>

      {/* STICKY CTA */}
      <div className="fixed bottom-0 w-full bg-white/90 backdrop-blur border-t p-4 flex justify-between items-center shadow-lg z-50">
        <span className="font-medium">Plan your Kashmir trip</span>
        <button
          onClick={() => navigate("/packages?destination=kashmir")}
          className="bg-yellow-500 px-5 py-2 rounded-full"
        >
          View Packages
        </button>
      </div>

    </div>
  );
};

export default Kashmir;