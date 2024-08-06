'use client';
import React, { useEffect } from 'react';
import '@/app/globals.css';
import { marcellus, karla } from './fonts';
import HeroSection from './components/sections/HeroSection';
import WhoAreWeSection from './components/sections/WhoAreWeSection';
import ServicesSection from './components/sections/ServicesSection';
import OurTeamSection from './components/sections/OurTeamSection';
import OurClientsSection from './components/sections/OurClientsSections';
import OurSpaceSection from './components/sections/OurSpaceSection';
import PartnersSection from './components/sections/PartnersSection';
import FormSection from './components/sections/FormSection';
import FooterSection from './components/sections/FooterSection';
import Navbar from './components/navbar/Navbar';
import Lenis from 'lenis';
import Link from 'next/link';

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div
      className={`${marcellus.variable} ${karla.variable} font-sans overflow-x-hidden`}
    >
      <Link href="#contenido-principal" className="sr-only focus:not-sr-only">
        Saltar al contenido principal
      </Link>
      <Navbar />
      <main id="contenido-principal">
        <HeroSection />
        <WhoAreWeSection />
        <PartnersSection />
        <ServicesSection />
        <OurTeamSection />
        <OurClientsSection />
        <OurSpaceSection />
        <FormSection />
      </main>
      <FooterSection />
    </div>
  );
}
