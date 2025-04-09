
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
import MedicineAnimation from '@/components/MedicineAnimation';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollAnimation />
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-shushastho-700 to-accent-700">
          Revolutionizing Rural Healthcare Delivery
        </h2>
        <MedicineAnimation />
      </div>
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
