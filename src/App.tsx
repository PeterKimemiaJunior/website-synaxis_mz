import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ProductModules from './components/ProductModules';
import WhoWeWorkWith from './components/WhoWeWorkWith';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf8ff] text-[#1b1b24] selection:bg-[#3525cd]/10 selection:text-[#3525cd]">
      {/* Top Header Navigation */}
      <Navbar 
        onContactClick={() => {
          scrollToSection('cta');
        }}
      />

      {/* Main Core Layout */}
      <main>
        {/* Render HERO Section */}
        <Hero 
          onGetStartedClick={() => scrollToSection('cta')} 
          onExploreClick={() => {
            scrollToSection('solucoes');
          }}
        />

        {/* Render Trust Logo Bar */}
        <TrustBar />

        {/* Problems/Challenges Diagnostic section */}
        <ProblemSection />

        {/* Solution Pillars (Aceleração, Arquitectura, Web de Elite) */}
        <SolutionSection />

        {/* Product Modules */}
        <ProductModules />

        {/* Who We Work With (Com Quem Trabalhamos) */}
        <WhoWeWorkWith />

        {/* Form Interactive Contact Block */}
        <CTA />
      </main>

      {/* Structured Portuguese Compliant Footer */}
      <Footer />
    </div>
  );
}
