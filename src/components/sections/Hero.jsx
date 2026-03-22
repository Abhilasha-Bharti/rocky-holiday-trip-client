const Hero = ({ 
  title = "Explore The World With Us", 
  subtitle = "Your adventure starts here. Discover amazing destinations and luxury tours.",
  variant = "home" 
}) => {
  return (
    <section className={`relative flex items-center justify-center ${variant === 'compact' ? 'h-[50vh]' : 'h-[80vh]'} bg-gray-900 text-white`}>
      <img
        src="/images/hero.jpg" // Ensure this matches your assets folder
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10"></div>
      
      <div className="relative text-center max-w-4xl px-4 z-10">
        <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl font-medium opacity-90">
          {subtitle}
        </p>
        {variant === "home" && (
          <button className="mt-8 bg-orange-500 px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition-all transform hover:scale-105">
            Start Your Journey
          </button>
        )}
      </div>
    </section>
  );
};

export default Hero;