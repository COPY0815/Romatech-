
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingParticles from './components/FloatingParticles';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-[#c9a24a]/30">
      <div className="fixed inset-0 noise-bg z-50"></div>
      <FloatingParticles />
      
      <Navbar />
      
      <main>
        <Hero scrollY={scrollY} />
        
        <div className="relative z-10 -mt-10 md:-mt-20">
          <TrustBar />
        </div>

        <section id="services" className="py-32 px-4 relative">
          <Services />
        </section>

        <section id="contact" className="py-24 px-4 bg-gradient-to-b from-transparent to-black/40">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
