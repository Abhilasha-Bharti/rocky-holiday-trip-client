import PlaceCard from "./placeCard";


const PlacesSection = ({ title, data, onExplore}) => {
  if (data.length === 0) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>

      <div className="flex gap-5 overflow-x-auto pb-2">
        {data.map((place) => (
          <PlaceCard
            key={place.id}
            place={place}
            onExplore={onExplore}
          />
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => onExplore(data[0])}
          className="text-blue-600 font-semibold"
        >
          Explore Packages →
        </button>
      </div>
    </div>
  );
};

export default PlacesSection;