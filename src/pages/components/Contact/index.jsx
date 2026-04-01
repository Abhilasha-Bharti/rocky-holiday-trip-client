import { useState } from "react";
import Hero from "@/components/sections/Hero";
import KashmirFilter from "@/components/common/filter";
import PlacesSection from "@/components/common/placesSection";

import CallbackModal from "@/components/common/CallbackModal";
import { KashmirPlaces } from "@/data/kashmirPlaces";

const Kashmir = () => {
  const [filters, setFilters] = useState({
    category: "",
    budget: 50000,
  });
  const [selectedPlace, setSelectedPlace] = useState(null);

 // OPEN MODAL
  const handleCallbackOpen = (place) => {
    setSelectedPlace(place);
  };

  // CLOSE MODAL
  const handleClose = () => {
    setSelectedPlace(null);
  };
  // FILTER LOGIC
  const filteredPlaces = KashmirPlaces.filter((place) => {
    return (
      (!filters.category || place.type === filters.category) &&
      place.price <= filters.budget
    );
  });

  return (
    <div>
      <Hero
        title="Explore Kashmir"
        subtitle="Paradise on Earth"
        image="/images/kashmir.jpg"
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
        
        {/* FILTER */}
        <KashmirFilter filters={filters} setFilters={setFilters} />

        {/* CONTENT */}
        <div className="lg:col-span-3">

          <PlacesSection
            title="Top Places"
            data={filteredPlaces.filter(p => p.type === "top")}
            onCallback={handleCallbackOpen}
          />

          <PlacesSection
            title="Offbeat Places"
            data={filteredPlaces.filter(p => p.type === "offbeat")}
            onCallback={handleCallbackOpen}
          />

          <PlacesSection
            title="Adventure"
            data={filteredPlaces.filter(p => p.type === "adventure")}
            onCallback={handleCallbackOpen}
          />

          <PlacesSection
            title="Trekking"
            data={filteredPlaces.filter(p => p.type === "trekking")}
            onCallback={handleCallbackOpen}
          />

          <PlacesSection
            title="Camping"
            data={filteredPlaces.filter(p => p.type === "camping")}
            onCallback={handleCallbackOpen}
          />

        </div>
      </div>
      {/* CALLBACK MODAL */}
      {selectedPlace && (
        <CallbackModal
          place={selectedPlace}
          onClose={handleClose}
        />
      )}
    </div>
     
  );
};

export default Kashmir;