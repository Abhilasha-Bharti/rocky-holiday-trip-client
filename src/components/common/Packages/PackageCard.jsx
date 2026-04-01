const PackageCard = ({ pkg }) => {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">

      {/* IMAGE */}
      <div className="relative">
        <img src={pkg.image} className="h-52 w-full object-cover" />
        <span className="absolute top-3 left-3 bg-yellow-400 text-xs px-3 py-1 rounded-full">
          Bestseller
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg">{pkg.title}</h3>

        <p className="text-sm text-gray-500">{pkg.location}</p>

        <div className="flex justify-between text-sm text-gray-500">
          <span>{pkg.duration}</span>
          <span>⭐ {pkg.rating}</span>
        </div>

        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-bold text-orange-600">
            ₹{pkg.price}
          </span>
        </div>

        <button className="w-full bg-black text-white py-2 rounded-full mt-2">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PackageCard;