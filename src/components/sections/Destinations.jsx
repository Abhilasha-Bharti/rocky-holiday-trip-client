import { destinations } from "@/data/destinations";
import { ArrowRight } from "lucide-react";

const Destinations = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-3">
            Explore Top Destinations
          </h2>
          <p className="text-gray-600 text-lg">
            Discover the most beautiful places in Kashmir & Ladakh
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {destinations.map((d, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Image */}
              <img
                src={d.image}
                alt={d.name}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-5 text-white w-full">
                <h3 className="text-2xl font-bold">{d.name}</h3>
                <p className="text-sm opacity-80 mb-3">{d.country}</p>

                {/* CTA */}
                <button className="flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all">
                  View Packages <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition shadow-lg">
            Explore All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;