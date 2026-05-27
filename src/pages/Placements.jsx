import React from 'react';
import { Award, GraduationCap, Building, ShieldCheck, ArrowRight, Zap, Target, Star } from 'lucide-react';

export default function Placements({ navigate }) {
  const statistics = [
    { label: 'Highest Package', value: '20+ LPA', desc: 'Secured by engineering graduates in premium software divisions.' },
    { label: 'Average Package', value: '4.8 LPA', desc: 'Consistent across major technology disciplines.' },
    { label: 'Placement Rate', value: '92%', desc: 'Admitted students successfully placed inside premium streams.' },
    { label: 'Recruiter Partners', value: '150+ Companies', desc: 'Reputed MNCs conducting regular recruitment drives.' }
  ];

  const highlights = [
    { title: 'Pre-Placement Training', desc: 'Comprehensive coaching starting from Year 1, focusing on Quantitative Aptitude, Logical Reasoning, and Verbal abilities.' },
    { title: 'Coding Bootcamps', desc: 'Specialized Full Stack, Data Structures, and Algorithm training to crack technical interviews of Tier-1 companies.' },
    { title: 'Mock Interviews', desc: 'One-on-one reviews and corporate feedback simulated by industry mentors and HR experts.' },
    { title: 'Soft Skills Training', desc: 'Enhancing student presentation capabilities, group discussions, email etiquettes, and leadership profiles.' }
  ];

  const partners = [
    'Tata Consultancy Services (TCS)', 'Accenture Technologies', 'Cognizant Technology Solutions',
    'Wipro Limited', 'Infosys Technologies', 'Tech Mahindra', 'Mindtree Solutions',
    'Capgemini India', 'Hexaware Technologies', 'Vistara Software', 'TalentSprint Research'
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Page Hero Header */}
      <div className="w-full bg-brand-navy text-white py-16 px-4 sm:px-8 relative overflow-hidden border-b-4 border-brand-gold">
        <div className="absolute inset-0 bg-[#0A1633]/60 z-0"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-brand-gold text-xs sm:text-sm font-bold tracking-widest uppercase">Career Excellence</span>
          <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight mt-3 mb-4">Placement Highlights & Cell</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            We bridge the gap between academic brilliance and professional excellence. Our dedicated placement cell guarantees top career routes.
          </p>
        </div>
      </div>

      {/* 1. Placement Statistics Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl shadow-md p-6 border border-slate-200/60 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="bg-brand-navy/5 p-3 rounded-lg w-fit text-brand-red group-hover:bg-brand-gold/15 transition-colors duration-300 mb-4">
                  <Zap size={22} />
                </div>
                <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest block mb-1">
                  {stat.label}
                </span>
                <h3 className="font-display font-black text-3xl text-brand-navy tracking-tight leading-none mb-3 group-hover:text-brand-red transition-colors duration-200">
                  {stat.value}
                </h3>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-2 border-t border-slate-50 pt-3">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Structured Training Program */}
      <section className="bg-slate-100 border-y border-slate-200 py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex justify-center items-center gap-2 text-brand-red mb-2">
              <Target size={18} className="stroke-[2.5]" />
              <span className="font-sans font-bold text-xs sm:text-sm tracking-widest uppercase">Professional Training Modules</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-brand-navy tracking-tight">
              Structured Placement Readiness
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed mt-2">
              How we train our candidates to stand out in technical assessments, code jams, and HR interview panels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((high, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-slate-200/60 flex gap-5 items-start hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-lg shrink-0">
                  <ShieldCheck size={22} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-bold text-lg text-brand-navy">
                    {high.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {high.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Recruiter partners lists */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 text-center">
        <div className="flex justify-center items-center gap-2 text-brand-red mb-2">
          <Building size={18} className="stroke-[2.5]" />
          <span className="font-sans font-bold text-xs sm:text-sm tracking-widest uppercase">Corporate Networks</span>
        </div>
        <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-brand-navy tracking-tight mb-14">
          Our Featured Recruiter Partners
        </h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {partners.map((part, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200 rounded-xl px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:border-brand-red hover:text-brand-red hover:shadow-md transition-all duration-200"
            >
              {part}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
