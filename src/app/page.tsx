'use client';
import React from 'react';
import '@/app/globals.css';
import { marcellus, karla } from './fonts';
import HeroSection from './components/sections/HeroSection';

export default function Page() {
  return (
    <div
      className={`${marcellus.variable} ${karla.variable} font-sans overflow-x-hidden`}
    >
      <HeroSection />
    </div>
  );
}
