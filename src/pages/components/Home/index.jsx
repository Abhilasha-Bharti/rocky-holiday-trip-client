import React from 'react'
import Hero from '../../../components/sections/Hero';
import Destinations from '../../../components/sections/Destinations';
import Tours from '../../../components/sections/Tours';
import PersonalizedTrip from '../../../components/sections/PersonalizedTrip';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layout/Footer';


function Home() {
  return (
    <>
<main className="flex flex-col">
      <Hero />
      <Destinations />
      <Tours />
    <PersonalizedTrip />
    <CTA />
    <Footer />
    </main>
    </>
  )
}

export default Home;