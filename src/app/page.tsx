'use client';
import React from 'react';
import '@/app/globals.css';
import { marcellus, karla } from './fonts';
import HeroSection from './components/sections/HeroSection';
import WhoAreWeSection from './components/sections/WhoAreWeSection';
import ServicesSection from './components/sections/ServicesSection';

export default function Page() {
  return (
    <div
      className={`${marcellus.variable} ${karla.variable} font-sans overflow-x-hidden`}
    >
      <HeroSection />
      <WhoAreWeSection />
      <ServicesSection />
    </div>
  );
}
