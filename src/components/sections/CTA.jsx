import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2000')`,
        }}
      >
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
          Ready for the <span className="text-[#F3A446]">Memories of a Lifetime?</span>
        </h2>
        
        <p className="mt-6 text-lg md:text-xl text-slate-300 font-medium tracking-wide">
          Stop dreaming and start travelling.
        </p>

        <div className="mt-10 flex justify-center">
          <Button 
            size="lg"
            className="h-16 px-10 rounded-xl bg-gradient-to-r from-[#D67C3C] to-[#F3A446] hover:from-[#F3A446] hover:to-[#D67C3C] border-none text-white font-bold text-lg uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-orange-500/20 active:scale-95"
          >
            <CalendarDays className="mr-3 h-5 w-5" />
            Book Your Trip Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;