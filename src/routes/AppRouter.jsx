import { Routes, Route } from 'react-router-dom';
import Tours from '@/components/sections/Tours';
import Contact from '@/pages/components/Contact';
import Home from '@/pages/components/Home';
// ✅ IMPORT DESTINATION PAGES
import Kashmir from "@/pages/components/Destinations/Kashmir";
import Ladakh from "@/pages/components/Destinations/Ladakh";

import Packages from '@/pages/components/Packages';



const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {/* ✅ DESTINATION ROUTES */}
    <Route path="/destinations/kashmir" element={<Kashmir />} />
    <Route path="/destinations/ladakh" element={<Ladakh />} />
      
    <Route path="/packages" element={<Packages />} />
   <Route path="/packages/destinations/:id" element={<Tours />} />
    <Route path="/contact" element={<Contact />} />
   
    <Route path="*" element={<div className="h-screen flex items-center justify-center">404 - Not Found</div>} />
  </Routes>
);

export default AppRouter;