import Hero from "@/components/sections/Hero";
import { packagesData } from "@/data/packagesData";
import { useState } from "react";



const Packages = () => {
  const [filter, setFilter] = useState("All");

  const filteredPackages =
    filter === "All"
      ? packagesData
      : packagesData.filter((p) => p.category === filter);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="h-[50vh] relative flex items-center justify-center text-white">
        <img
          src="/images/hero.jpg"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Explore Kashmir & Ladakh
          </h1>
          <p className="mt-3 text-lg opacity-90">
            Handpicked tours crafted for unforgettable experiences
          </p>
        </div>
      </section>
      {/* <Hero
        title="Tour Packages" 
        subtitle="Explore the world with us" 
        variant="compact" 
      /> */}

      {/* FILTER */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-4 justify-center">
          {["All", "Kashmir", "Ladakh"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-5 py-2 rounded-full border ${
                filter === item
                  ? "bg-orange-600 text-white"
                  : "bg-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* PACKAGES GRID */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6">

          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl shadow hover:shadow-xl transition"
            >
              <img
                src={pkg.image}
                className="h-56 w-full object-cover rounded-t-xl"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold">{pkg.title}</h3>
                <p className="text-gray-500 text-sm">{pkg.location}</p>

                <div className="flex justify-between items-center mt-3">
                  <span className="text-sm">{pkg.duration}</span>
                  <span className="font-bold text-orange-600">
                    ₹{pkg.price}
                  </span>
                </div>

                <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700">
                  View Details
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 text-white text-center py-12">
        <h2 className="text-3xl font-bold">
          Ready for your next adventure?
        </h2>
        <button className="mt-4 bg-white text-orange-600 px-6 py-3 rounded-full font-semibold">
          Plan Your Trip
        </button>
      </section>
    </div>
  );
};

export default Packages;