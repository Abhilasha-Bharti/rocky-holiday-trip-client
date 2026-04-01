import { MapPin } from "lucide-react";

const destinations = [
  { label: "All", value: "All" },
  { label: "Kashmir", value: "Kashmir" },
  { label: "Ladakh", value: "Ladakh" },
];

const TopFilterBar = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-3 overflow-x-auto scrollbar-hide">

      {destinations.map((item) => (
        <button
          key={item.value}
          onClick={() => setFilter(item.value)}
          className={`
            flex items-center gap-2 px-5 py-2 rounded-full text-sm whitespace-nowrap
            transition-all duration-200 border
            ${
              filter === item.value
                ? "bg-black text-white shadow-md scale-105"
                : "bg-white hover:bg-gray-100"
            }
          `}
        >
          <MapPin size={14} />
          {item.label}
        </button>
      ))}

    </div>
  );
};

export default TopFilterBar;