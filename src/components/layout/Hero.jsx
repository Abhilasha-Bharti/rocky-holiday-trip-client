// src/components/hero/Hero.jsx
import React from "react";
import { Button } from "@/components/ui/button"; // ShadCN button

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('/hero-bg.jpg')`, // replace with your uploaded image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Explore the world with us
        </h1>
        <p className="text-lg lg:text-2xl text-gray-200 mb-6 drop-shadow-md">
          Explore the world with us
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3">
            Book Your Trip
          </Button>
          <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-black px-6 py-3">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;