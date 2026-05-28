import React from 'react';
import { Megaphone } from 'lucide-react';

export default function NewsTicker({ navigate }) {
  const newsItems = [
    "B.Tech Admissions open for Academic Year 2026-27. Secure your seats in technology divisions today!",
    "Annamacharya University officially recognized as a prestigious State Private University with premium research schools.",
    "Semester-end examinations results declared. Candidates can log in to the Student Portal to check credit marks.",
    "National Level Student Technical Symposium 'Ananta 2026' scheduled on June 12th & 13th. Registrations open."
  ];

  return (
    <div className="w-full bg-slate-100 border-b border-slate-200 py-2.5 px-4 sm:px-8 flex items-center gap-4 relative z-40 select-none">
      {/* Red News Badge with pulsating megaphone */}
      <div className="bg-brand-red text-white text-[10px] sm:text-xs font-black px-3 py-1.5 rounded uppercase tracking-widest flex items-center gap-1.5 shrink-0 shadow-sm border border-brand-red-dark">
        <Megaphone size={12} className="animate-bounce" />
        <span>Latest News</span>
      </div>
      
      {/* Smooth Marquee Area */}
      <div className="overflow-hidden w-full text-slate-700 text-xs sm:text-sm font-semibold">
        <marquee 
          behavior="scroll" 
          direction="left" 
          scrollamount="5" 
          onMouseOver={(e) => e.currentTarget.stop()} 
          onMouseOut={(e) => e.currentTarget.start()}
          className="cursor-pointer"
        >
          {newsItems.map((item, idx) => (
            <span 
              key={idx} 
              onClick={() => navigate('signup')}
              className="mx-10 hover:text-brand-red transition duration-150 inline-block font-sans"
            >
              <span className="text-brand-gold font-bold mr-2">✦</span> {item}
            </span>
          ))}
        </marquee>
      </div>
    </div>
  );
}
