
import React from 'react';
import { Building2, TrendingUp, Landmark, Globe2 } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Building2 size={40} strokeWidth={1} />,
      title: "Business Setup & Registration",
      desc: "Navigating the complexities of local regulations for seamless establishment and compliance."
    },
    {
      icon: <TrendingUp size={40} strokeWidth={1} />,
      title: "Strategic Growth Planning",
      desc: "Data-driven roadmaps designed to scale your operations and capture dominant market share."
    },
    {
      icon: <Landmark size={40} strokeWidth={1} />,
      title: "Investment & Partnership",
      desc: "High-level advisory on securing capital and brokering strategic alliances with the Nigerian elite."
    },
    {
      icon: <Globe2 size={40} strokeWidth={1} />,
      title: "Market Expansion",
      desc: "Bridging the gap between Osun State and the global marketplace with surgical precision."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <span className="text-[#c9a24a] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Excellence Defined</span>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Comprehensive <span className="gold-text italic">Elite Solutions</span> for Modern Business
          </h2>
        </div>
        <p className="text-white/40 max-w-xs text-sm tracking-widest leading-loose uppercase">
          Providing high-ticket consulting that transforms local ambition into international success.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <div key={idx} className="glass-panel group relative p-10 flex flex-col items-start transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_20px_60px_-15px_rgba(201,162,74,0.15)] rounded-2xl">
            <div className="mb-8 text-[#c9a24a] group-hover:scale-110 transition-transform duration-500">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 serif leading-tight text-white/90">
              {service.title}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              {service.desc}
            </p>
            <div className="mt-auto pt-4 flex items-center gap-2 text-[#c9a24a] text-xs font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Learn More <span>&rarr;</span>
            </div>
            
            {/* Hover Accent */}
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c9a24a] group-hover:w-full transition-all duration-700"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
