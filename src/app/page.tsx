'use client';
import React from 'react';
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

export default function Page() {
  return (
    <div
      className={`${marcellus.variable} ${karla.variable} font-sans overflow-x-hidden`}
    >
      <Navbar />
      <HeroSection />
      <WhoAreWeSection />
      <ServicesSection />
      <OurTeamSection />
      <OurClientsSection />
      <OurSpaceSection />
      <PartnersSection />
      <FormSection />
      <FooterSection />
    </div>
  );
}
