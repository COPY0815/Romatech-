
import React from 'react';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Ambience */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(circle_at_50%_50%,#c9a24a10_0%,transparent_70%)]"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>
      
      <div 
        className="z-10 max-w-5xl transition-transform duration-75"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
      >
        <div className="mb-6 inline-block">
          <span className="text-[#c9a24a] text-sm md:text-base font-bold tracking-[0.4em] uppercase opacity-80">
            Premium Nigerian Consulting
          </span>
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#c9a24a] to-transparent mt-2"></div>
        </div>

        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-tight mb-8">
          <span className="block italic text-white/90">Romatech</span>
          <span className="block gold-text -mt-2 md:-mt-6">Business Solutions</span>
        </h1>

        <p className="text-lg md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 tracking-widest font-light leading-relaxed">
          Strategic Business Development &bull; Growth Advisory &bull; High-Impact Consulting
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="group relative px-10 py-5 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(201,162,74,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-[#1a1409] to-black border border-[#c9a24a]/40 rounded-full"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(201,162,74,0.2)_0%,transparent_70%)]"></div>
            <span className="relative z-10 text-[#c9a24a] font-bold tracking-[0.2em] uppercase text-sm">
              Schedule Confidential Consultation
            </span>
          </button>
          
          <div className="flex flex-col items-center md:items-start">
             <span className="text-white/40 text-xs tracking-[0.3em] uppercase mb-1">Based In</span>
             <span className="text-[#c9a24a]/80 text-sm font-bold tracking-widest">OSOGBO, OSUN STATE &bull; 24/7</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#c9a24a] to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
