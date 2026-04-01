import { X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const QuickViewModal = ({ place, onClose, onExplore }) => {
  if (!place) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      {/* MODAL BOX */}
      <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-xl relative">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow"
        >
          <X size={18} />
        </button>

        {/* IMAGE */}
        <div className="h-[250px]">
          <img
            src={place.image}
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="p-6">

          {/* TITLE */}
          <h2 className="text-2xl font-bold">{place.name}</h2>

          {/* RATING */}
          <div className="flex items-center gap-2 mt-2 text-sm">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span>{place.rating}</span>
            <span className="text-gray-500">• Kashmir</span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mt-4">
            {place.desc}
          </p>

          {/* INFO */}
          <div className="flex justify-between mt-4 text-sm text-gray-500">
            <span>Best time: {place.bestTime}</span>
            <span>Duration: {place.duration}</span>
          </div>

          {/* CTA */}
          <div className="flex gap-3 mt-6">
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 rounded-full"
              onClick={() => onExplore(place)}
            >
              View Packages
            </Button>

            <Button
              variant="outline"
              className="w-full rounded-full"
            >
              Get Itinerary
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};
