import { SlidersHorizontal } from "lucide-react";

const FilterSidebar = ({ budget, setBudget, type, setType }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg space-y-6">

      {/* HEADER */}
      <div className="flex items-center gap-2 border-b pb-3">
        <SlidersHorizontal size={18} />
        <h3 className="font-semibold text-lg">Filters</h3>
      </div>

      {/* BUDGET */}
      <div className="space-y-2">
        <h4 className="font-medium text-sm text-gray-700">Budget</h4>

        <input
          type="range"
          min="5000"
          max="50000"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full accent-black"
        />

        <div className="flex justify-between text-xs text-gray-500">
          <span>₹5k</span>
          <span>₹50k</span>
        </div>

        <p className="text-sm font-medium text-black">
          Up to ₹{budget}
        </p>
      </div>

      {/* TYPE */}
      <div className="space-y-3">
        <h4 className="font-medium text-sm text-gray-700">
          Travel Type
        </h4>

        <div className="space-y-2">
          {["honeymoon", "family", "adventure", "camping"].map((t) => (
            <label
              key={t}
              className={`flex items-center justify-between px-3 py-2 rounded-lg border cursor-pointer transition
                ${
                  type === t
                    ? "bg-black text-white border-black"
                    : "hover:bg-gray-100"
                }
              `}
            >
              <span className="capitalize">{t}</span>

              <input
                type="radio"
                name="type"
                value={t}
                checked={type === t}
                onChange={(e) => setType(e.target.value)}
                className="hidden"
              />
            </label>
          ))}
        </div>
      </div>

      {/* RESET */}
      <button
        onClick={() => {
          setType("");
          setBudget(50000);
        }}
        className="w-full border border-gray-300 py-2 rounded-full text-sm hover:bg-gray-100 transition"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSidebar;