import { Routes, Route } from 'react-router-dom';

import Tours from '@/components/sections/Tours';
import Contact from '@/pages/components/Contact';
import Home from '@/pages/components/Home';
import Packages from '@/pages/components/Packages';


const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/packages" element={<Packages />} />
   <Route path="/packages/destinations/:id" element={<Tours />} />
    <Route path="/contact" element={<Contact />} />
   
    <Route path="*" element={<div className="h-screen flex items-center justify-center">404 - Not Found</div>} />
  </Routes>
);

export default AppRouter;