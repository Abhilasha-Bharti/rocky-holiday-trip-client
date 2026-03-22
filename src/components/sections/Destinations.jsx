import { destinations } from "@/data/destinations";

const Destinations = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Top Destinations</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {destinations.map((d, i) => (
            <div key={i} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <img
                src={d.image}
                alt={d.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-semibold text-xl">{d.name}</h3>
                <p className="text-gray-600">{d.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;