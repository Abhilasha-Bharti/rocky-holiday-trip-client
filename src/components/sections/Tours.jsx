import { tours } from "@/data/tours";

const Tours = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Luxury Tours</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {tours.map((t, i) => (
            <div key={i} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <img
                src={t.image}
                alt={t.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-semibold text-xl">{t.title}</h3>
                <p className="text-gray-600">{t.duration}</p>
                <p className="text-orange-500 font-bold mt-2">{t.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;