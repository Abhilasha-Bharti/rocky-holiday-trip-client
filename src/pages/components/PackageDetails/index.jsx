import { useState } from "react";
import { tours } from "@/data/tours";
import { ChevronDown } from "lucide-react";
import SidebarFilter from "@/components/common/SidebarFilter";

const PackageDetails = () => {
  const [filteredPrice, setFilteredPrice] = useState(100000);
  const [filteredTypes, setFilteredTypes] = useState([]);

  // Filter tours dynamically based on price/type (dummy for now)
  const filteredTours = tours.filter((tour) => tour.price <= filteredPrice);

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
        {/* SIDEBAR */}
        <SidebarFilter
          onPriceChange={(price, types) => {
            setFilteredPrice(price);
            setFilteredTypes(types);
          }}
        />

        {/* MAIN LIST */}
        <div className="flex-1 space-y-6">
          {/* Sort Bar */}
          <div className="flex items-center gap-4 bg-white p-3 rounded-xl shadow-sm border border-gray-100 overflow-x-auto no-scrollbar">
            {["Price ↑", "Price ↓", "Themes (0)", "Type (0)", "Destinations (0)"].map(
              (item) => (
                <button
                  key={item}
                  className="whitespace-nowrap px-4 py-2 bg-gray-50 text-xs font-bold rounded-lg border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all flex items-center gap-2"
                >
                  {item} <ChevronDown size={14} />
                </button>
              )
            )}
          </div>

          {/* Cards List */}
          <div className="space-y-6">
            {filteredTours.map((tour, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-all group"
              >
                {/* Image Section */}
                <div className="md:w-1/3 relative overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info Section */}
                <div className="flex-1 p-6 flex flex-col justify-center border-r border-gray-50">
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight uppercase mb-2">
                    {tour.title}
                  </h3>
                  <div className="text-orange-600 font-bold text-sm">{tour.duration}</div>
                </div>

                {/* Pricing & CTA */}
                <div className="md:w-1/4 bg-gray-50/50 p-6 flex flex-col items-center justify-center gap-3 text-center border-l border-gray-100">
                  <div className="space-y-0">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                      Starting From :
                    </p>
                    <p className="text-3xl font-black text-orange-600 leading-none">
                      ₹{tour.price}
                    </p>
                  </div>
                  <button className="w-full py-2.5 border-2 border-orange-500 text-orange-600 font-bold rounded-xl text-sm hover:bg-orange-50 transition-colors">
                    Get Quotes
                  </button>
                  <button className="w-full py-2.5 bg-orange-600 text-white font-bold rounded-xl text-sm shadow-lg shadow-orange-200 hover:bg-orange-700 transition-all">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageDetails;