'use client';
import React from 'react';
import '@/app/globals.css';
import { dmSans } from './fonts';
import HeroSection from './components/sections/HeroSection';

export default function Page() {
  return (
    <div className={`${dmSans.variable} overflow-x-hidden`}>
      <HeroSection />
    </div>
  );
}
