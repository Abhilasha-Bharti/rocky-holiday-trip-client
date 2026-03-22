import { useState } from "react";
import { ListFilter, RotateCcw } from "lucide-react";
import { Slider } from "@/components/ui/slider"; // ShadCN Slider
import { Checkbox } from "@/components/ui/checkbox"; // ShadCN Checkbox
import { Button } from "@/components/ui/button"; // ShadCN Button

const SidebarFilter = ({ onPriceChange }) => {
  const [price, setPrice] = useState(76999);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const resetFilters = () => {
    setPrice(76999);
    setSelectedTypes([]);
    onPriceChange(76999, []);
  };

  return (
    <aside className="w-full lg:w-1/4 space-y-8">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <ListFilter size={18} className="text-orange-600" /> Filters
          </h3>
          <Button variant="link" size="sm" onClick={resetFilters} className="text-orange-600 flex items-center gap-1">
            <RotateCcw size={12} /> Reset
          </Button>
        </div>

        {/* Price Filter */}
        <div className="mb-8">
          <label className="block text-sm font-black uppercase tracking-wider mb-4 text-gray-700">
            Price Range
          </label>
          <Slider
            value={[price]}
            min={0}
            max={100000}
            step={500}
            onValueChange={(val) => {
              setPrice(val[0]);
              onPriceChange(val[0], selectedTypes);
            }}
          />
          <div className="flex justify-between mt-3">
            <span className="text-xs font-bold text-gray-500">₹0</span>
            <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">
              ₹{Number(price).toLocaleString()}
            </span>
          </div>
        </div>

        {/* Destination Type Checkboxes */}
        <div className="space-y-3">
          <label className="block text-sm font-black uppercase tracking-wider mb-2 text-gray-700">
            Destination Type
          </label>
          {["Domestic", "International"].map((type) => (
            <div key={type} className="flex items-center gap-3 cursor-pointer">
              <Checkbox
                checked={selectedTypes.includes(type)}
                onCheckedChange={() => toggleType(type)}
              />
              <span className="text-sm font-medium text-gray-600">{type}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SidebarFilter;