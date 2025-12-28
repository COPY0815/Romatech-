
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 ${isScrolled ? 'py-4 bg-[#0a0f1f]/90 backdrop-blur-xl border-b border-[#c9a24a]/20' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#c9a24a] to-[#d4af37] flex items-center justify-center rounded-sm rotate-45 transform">
            <span className="text-[#0a0f1f] font-bold text-xl -rotate-45">R</span>
          </div>
          <span className="serif text-xl md:text-2xl font-bold tracking-tighter text-white uppercase ml-3">
            Romatech
          </span>
        </div>

        <div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-[0.2em] uppercase">
          <a href="#" className="hover:text-[#c9a24a] transition-colors">Home</a>
          <a href="#services" className="hover:text-[#c9a24a] transition-colors">Services</a>
          <a href="#about" className="hover:text-[#c9a24a] transition-colors">About</a>
          <a href="#contact" className="px-6 py-2 border border-[#c9a24a]/50 text-[#c9a24a] hover:bg-[#c9a24a] hover:text-[#0a0f1f] transition-all duration-300">
            Consultation
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-[#0a0f1f] z-[70] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className="absolute top-8 right-8 text-white" onClick={() => setIsMenuOpen(false)}>
          <X size={40} />
        </button>
        <a href="#" onClick={() => setIsMenuOpen(false)} className="serif text-3xl">Home</a>
        <a href="#services" onClick={() => setIsMenuOpen(false)} className="serif text-3xl">Services</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="serif text-3xl text-[#c9a24a]">Consultation</a>
        <div className="mt-8">
           <a href="tel:+2347030656009" className="flex items-center gap-3 text-xl text-[#c9a24a]">
              <Phone size={24} />
              +234 703 065 6009
           </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
