import { useEffect, useState } from "react";
import { packagesData } from "@/data/packagesData";

export const usePackages = () => {
  const [packages, setPackages] = useState(packagesData);

  //later replace with API call
  useEffect(() => {
    fetch("/api/packages")
      .then(res => res.json())
      .then(data => setPackages(data));
  }, []);

  return { packages };
};