
import React from 'react';
import { ShieldCheck, MapPin, Clock, Users } from 'lucide-react';

const TrustBar: React.FC = () => {
  const items = [
    { icon: <Users size={20} />, label: "100+ Businesses Supported" },
    { icon: <MapPin size={20} />, label: "Osun State Specialist" },
    { icon: <Clock size={20} />, label: "24/7 Availability" },
    { icon: <ShieldCheck size={20} />, label: "Confidential & Discreet" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="glass-panel grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#c9a24a]/20 rounded-xl overflow-hidden py-4 shadow-2xl">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center p-6 gap-3 group">
            <div className="text-[#c9a24a] transition-transform duration-500 group-hover:scale-110">
              {item.icon}
            </div>
            <span className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-white/70 text-center">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
