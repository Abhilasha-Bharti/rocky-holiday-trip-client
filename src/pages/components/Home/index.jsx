import React from 'react'
import Hero from '../../../components/sections/Hero';
import PersonalizedTrip from '../../../components/sections/PersonalizedTrip';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layout/Footer';
import LandingPage from '../../../components/sections/LandingPage';


function Home() {
  return (
    <>
<main className="flex flex-col">
      <Hero />
      <LandingPage />
    <PersonalizedTrip />
    <CTA />
    <Footer />
    </main>
    </>
  )
}

export default Home;