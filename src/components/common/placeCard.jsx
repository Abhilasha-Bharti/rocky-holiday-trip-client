import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Heart } from "lucide-react";
import { useState } from "react";

const PlaceCard = ({ place, onExplore }) => {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <Card className="w-[300px] min-w-[300px] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group bg-white relative">

      {/* IMAGE */}
      <div className="relative h-[200px] overflow-hidden">

        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* DARK OVERLAY ON HOVER */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300" />

        {/* WISHLIST BUTTON */}
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute top-3 left-3 bg-white/90 p-2 rounded-full shadow hover:scale-110 transition"
        >
          <Heart
            size={16}
            className={wishlisted ? "text-red-500 fill-red-500" : "text-gray-600"}
          />
        </button>

        {/* BADGES */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {/* <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-md backdrop-blur">
            Trending
          </span> */}

          <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-md font-medium">
            Trending
          </span>
        </div>

        {/* QUICK VIEW (HOVER CTA) */}
        {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <Button
            onClick={() => onQuickView(place)}
            className="bg-white text-black hover:bg-gray-200 rounded-full px-5"
          >
            Quick View
          </Button>
        </div> */}

        {/* BOTTOM OVERLAY */}
        <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
          <h3 className="text-lg font-semibold leading-tight">
            {place.name}
          </h3>

          <div className="flex items-center gap-2 text-sm mt-1">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span>{place.rating}</span>
            <span className="opacity-80">• Kashmir</span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <CardContent className="p-4 flex flex-col justify-between h-[170px]">

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {place.desc}
        </p>

        {/* EXTRA INFO */}
        {/* <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>{place.bestTime}</span>
          <span>{place.duration}</span>
        </div> */}

        {/* CTA */}
        <div className="flex gap-2 mt-4">
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 rounded-full text-sm"
            onClick={() => onExplore(place)}
          >
            View Packages
          </Button>

          <Button
            variant="outline"
            className="w-full rounded-full text-sm"
          >
            Details
          </Button>
        </div>

      </CardContent>
    </Card>
  );
};

export default PlaceCard;