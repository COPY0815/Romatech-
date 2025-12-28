
import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 px-6 border-t border-[#c9a24a]/20 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          <div className="flex flex-col items-center md:items-start gap-4">
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 bg-[#c9a24a] flex items-center justify-center rounded-sm rotate-45">
                 <span className="text-[#0a0f1f] font-bold text-sm -rotate-45">R</span>
               </div>
               <span className="serif text-2xl font-bold uppercase tracking-widest">Romatech</span>
             </div>
             <p className="text-white/40 text-sm tracking-widest uppercase">The Pinnacle of Business Excellence</p>
          </div>

          <div className="flex gap-10">
            <a href="#" className="text-white/40 hover:text-[#c9a24a] transition-colors"><Instagram size={24} /></a>
            <a href="#" className="text-white/40 hover:text-[#c9a24a] transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="text-white/40 hover:text-[#c9a24a] transition-colors"><Twitter size={24} /></a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left border-y border-[#c9a24a]/10 py-12 mb-12">
          <div>
            <h4 className="text-[#c9a24a] text-xs font-bold tracking-[0.4em] uppercase mb-6">Expertise</h4>
            <ul className="space-y-3 text-white/50 text-sm tracking-widest uppercase">
              <li>Growth Strategy</li>
              <li>Market Research</li>
              <li>Investment Advisory</li>
              <li>Corporate Liaison</li>
            </ul>
          </div>
          <div>
             <h4 className="text-[#c9a24a] text-xs font-bold tracking-[0.4em] uppercase mb-6">Navigation</h4>
             <ul className="space-y-3 text-white/50 text-sm tracking-widest uppercase">
               <li>Home</li>
               <li>Services</li>
               <li>About Us</li>
               <li>Client Portal</li>
             </ul>
          </div>
          <div>
            <h4 className="text-[#c9a24a] text-xs font-bold tracking-[0.4em] uppercase mb-6">Connect</h4>
            <p className="text-white/50 text-sm tracking-widest uppercase mb-4">+234 703 065 6009</p>
            <p className="text-white/50 text-sm tracking-widest uppercase">Kolawole Street, Osogbo</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.5em] uppercase text-white/20 gap-4">
          <p>&copy; {new Date().getFullYear()} Romatech Business Solutions. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
