import { Search, MapPin, Calendar, Users } from "lucide-react";

const Hero = ({
  title = "Explore Kashmir & Ladakh",
  subtitle = "Discover breathtaking landscapes, offbeat places & unforgettable adventures",
  variant = "home",
}) => {
  return (
    <section
      className={`relative flex items-center justify-center ${
        variant === "compact" ? "h-[50vh]" : "h-[90vh]"
      } text-white`}
    >
      {/* Background Image */}
      <img
        src="/images/hero.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center max-w-5xl px-4 z-10 mt-16">
        
        <h1 className="text-4xl md:text-7xl font-extrabold mb-4 leading-tight">
          {title}
        </h1>

        <p className="text-lg md:text-2xl opacity-90 mb-8">
          {subtitle}
        </p>

        {/* CTA */}
        {variant === "home" && (
          <button className="mt-8 bg-orange-600 px-8 py-4 rounded-full font-bold hover:bg-orange-700 transition-all transform hover:scale-105 shadow-lg">
            Book Now
          </button>
        )}
      </div>
    </section>
  );
};

export default Hero;