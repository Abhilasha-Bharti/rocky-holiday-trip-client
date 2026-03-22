import Hero from "@/components/sections/Hero";
import Footer from "@/components/layout/Footer";
import PackageDetails from "../PackageDetails";

const Packages = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
      <Hero 
        title="Tour Packages" 
        subtitle="Explore the world with us" 
        variant="compact" 
      />
      <main className="flex-grow">
        <PackageDetails />
      </main>
      <Footer />
    </div>
  );
};

export default Packages;