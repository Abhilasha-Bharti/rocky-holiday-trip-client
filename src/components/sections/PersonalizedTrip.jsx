import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useTripForm } from "@/hooks/useTripForm";

const PersonalizedTrip = () => {
  const { register, handleSubmit, errors, onSubmit } = useTripForm();

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto max-w-5xl px-4">
        
        {/* Section Heading with Lines */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="h-[1px] flex-1 bg-slate-300 hidden md:block" />
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-800 text-center uppercase">
            Looking for a personalised trip?
          </h2>
          <div className="h-[1px] flex-1 bg-slate-300 hidden md:block" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Side: Detail Inputs */}
            <div className="space-y-4">
              <Input 
                type="date" 
                {...register("date", { required: "Date is required" })}
                className={errors.date ? "border-red-500" : "border-slate-300"}
              />
              
              <Input 
                placeholder="Your Name" 
                {...register("name", { required: "Name is required" })}
                className={errors.name ? "border-red-500" : "border-slate-300"}
              />

              <div className="flex gap-3">
                <Input 
                  placeholder="+91" 
                  className="w-24 border-slate-300"
                  {...register("countryCode")}
                />
                <Input 
                  placeholder="Contact Number" 
                  className={`flex-1 ${errors.phone ? "border-red-500" : "border-slate-300"}`}
                  {...register("phone", { required: true })}
                />
              </div>

              <Input 
                type="email" 
                placeholder="Email ID" 
                {...register("email", { required: true })}
                className={errors.email ? "border-red-500" : "border-slate-300"}
              />
            </div>

            {/* Right Side: Message Area */}
            <div className="flex h-full">
              <Textarea 
                placeholder="Message" 
                className="min-h-[200px] md:min-h-full flex-1 border-blue-200 focus:ring-blue-500"
                {...register("message")}
              />
            </div>
          </div>

          {/* Red Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-[#E63946] hover:bg-[#D62839] text-white py-8 text-xl font-bold uppercase tracking-widest transition-all rounded-md"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default PersonalizedTrip;