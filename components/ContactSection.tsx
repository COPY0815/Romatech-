
import React from 'react';
import { Phone, MapPin, Mail, MessageSquare } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
      <div>
        <span className="text-[#c9a24a] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Direct Access</span>
        <h2 className="text-4xl md:text-7xl font-bold mb-10 leading-tight">
          Your Success <br /><span className="gold-text italic">Starts with a Call</span>
        </h2>
        
        <div className="space-y-10">
          <div className="flex items-start gap-6 group">
            <div className="w-14 h-14 glass-panel flex items-center justify-center rounded-xl text-[#c9a24a] group-hover:bg-[#c9a24a] group-hover:text-[#0a0f1f] transition-all duration-500">
              <MapPin />
            </div>
            <div>
              <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-1">Address</p>
              <p className="text-xl font-medium tracking-wide">Kolawole Street, Osogbo 230103,<br />Osun State, Nigeria</p>
            </div>
          </div>

          <div className="flex items-start gap-6 group">
            <div className="w-14 h-14 glass-panel flex items-center justify-center rounded-xl text-[#c9a24a] group-hover:bg-[#c9a24a] group-hover:text-[#0a0f1f] transition-all duration-500">
              <Mail />
            </div>
            <div>
              <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-1">Email</p>
              <p className="text-xl font-medium tracking-wide">hello@romatech.com.ng</p>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-panel p-10 md:p-16 rounded-3xl relative overflow-hidden group">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a24a]/10 blur-[100px] -z-10 transition-all duration-1000 group-hover:bg-[#c9a24a]/20"></div>

        <div className="text-center">
           <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#c9a24a]/10 text-[#c9a24a] mb-8 animate-pulse">
             <Phone size={36} />
           </div>
           <h3 className="text-xl md:text-2xl font-light text-white/60 mb-4 tracking-[0.2em] uppercase">24/7 Hotline</h3>
           
           <a 
            href="tel:+2347030656009" 
            className="block text-4xl md:text-5xl lg:text-6xl font-bold gold-text hover:scale-105 transition-transform duration-500 select-all mb-12"
          >
             +234 703 065 6009
           </a>

           <button className="w-full py-6 rounded-2xl bg-[#c9a24a] text-[#0a0f1f] font-bold tracking-[0.3em] uppercase hover:bg-[#d4af37] transition-all duration-500 flex items-center justify-center gap-4 shadow-[0_20px_40px_rgba(201,162,74,0.2)]">
             <MessageSquare size={20} />
             Start Chat on WhatsApp
           </button>
           
           <p className="mt-8 text-white/30 text-xs tracking-[0.1em] uppercase">
             Strict confidentiality guaranteed for all consultations.
           </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
