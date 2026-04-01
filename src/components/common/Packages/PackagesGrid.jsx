import PackageCard from "./PackageCard";

const PackagesGrid = ({ packages }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} pkg={pkg} />
      ))}
    </div>
  );
};

export default PackagesGrid;