
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Impact from '@/components/Impact';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollAnimation />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Impact />
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
