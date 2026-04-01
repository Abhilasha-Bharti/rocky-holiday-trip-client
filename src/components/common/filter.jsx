import { Card } from "@/components/ui/card";

const categories = [
  { label: "All", value: "" },
  { label: "Top Places", value: "top" },
  { label: "Offbeat", value: "offbeat" },
  { label: "Adventure", value: "adventure" },
  { label: "Trekking", value: "trekking" },
  { label: "Camping", value: "camping" },
];

const Filter = ({ filters, setFilters }) => {
  return (
    <Card className="p-5 rounded-2xl shadow-lg sticky top-20 hidden lg:block">

      <h3 className="font-bold text-lg mb-4">Filters</h3>

      <div className="mb-6">
        <p className="font-semibold mb-3">Category</p>

        {categories.map((item) => (
          <label key={item.value} className="flex gap-2 p-2 cursor-pointer">
            <input
              type="radio"
              checked={filters.category === item.value}
              onChange={() =>
                setFilters((prev) => ({
                  ...prev,
                  category: item.value,
                }))
              }
            />
            {item.label}
          </label>
        ))}
      </div>

      <div>
        <p className="font-semibold mb-3">Budget</p>

        <input
          type="range"
          min="5000"
          max="50000"
          value={filters.budget}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              budget: Number(e.target.value),
            }))
          }
          className="w-full"
        />

        <p className="text-sm mt-2 text-blue-600">
          Up to ₹{filters.budget}
        </p>
      </div>

    </Card>
  );
};

export default Filter;