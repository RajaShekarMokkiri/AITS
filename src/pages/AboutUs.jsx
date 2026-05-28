import React from 'react';
import { Target, Compass, Eye, ShieldCheck, Award, HeartHandshake } from 'lucide-react';

export default function AboutUs({ navigate }) {
  const leadership = [
    { name: 'Sri C. Gangi Reddy', role: 'Hon\'ble Founder & Chairman', desc: 'A visionary educationalist whose lifelong commitment to academic access led to the foundation of the Annamacharya Educational Trust.' },
    { name: 'Sri C. Yella Reddy', role: 'Vice Chairman', desc: 'Providing active organizational stewardship and strategic planning to raise Annamacharya University to global standards of operational efficiency.' },
    { name: 'Dr. C. Nadhamuni Reddy', role: 'Principal, Ph.D.', desc: 'An eminent researcher and academic administrator who has spearheaded the institution\'s autonomous breakthroughs and NAAC A accreditation.' }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      
      {/* Page Hero Header */}
      <div className="w-full bg-brand-navy text-white py-16 px-4 sm:px-8 relative overflow-hidden border-b-4 border-brand-gold">
        <div className="absolute inset-0 bg-[#0A1633]/60 z-0"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-brand-gold text-xs sm:text-sm font-bold tracking-widest uppercase">Legacy of Excellence</span>
          <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight mt-3 mb-4">About Our Institute</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Discover the legacy, governing vision, and academic breakthroughs that define Annamacharya University.
          </p>
        </div>
      </div>

      {/* 1. Legacy & History */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 text-brand-red">
            <Award size={18} className="stroke-[2.5]" />
            <span className="font-sans font-bold text-xs sm:text-sm tracking-widest uppercase">University Legacy</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-brand-navy tracking-tight leading-tight">
            Nurturing Professionals Since 1998
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Annamacharya University (established by the pioneering Annamacharya Educational Trust) has been a leading light of higher education in Andhra Pradesh. Founded with a vision to deliver world-class learning experiences, the trust has built premium campuses that empower students with cutting-edge expertise and high moral standards.
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Following its transition to a prestigious State Private University, Annamacharya University structures its education across specialized Schools of Study, combining advanced technological fields, sciences, management, pharmacy, law, and agricultural programs.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-slate-100 flex flex-col gap-8">
          <h3 className="font-display font-bold text-xl text-brand-navy border-b border-slate-100 pb-4">Recognitions & Standards</h3>
          <div className="flex flex-col gap-5">
            {[
              { title: 'State Private University Status', desc: 'Officially recognized by the Government of Andhra Pradesh to award undergraduate, postgraduate, and research degrees.' },
              { title: 'Advanced Multidisciplinary Syllabi', desc: 'Fully modernized course curricula designed in cooperation with top industry giants like Accenture, TalentSprint, and TCS.' },
              { title: 'Premium Research Hub', desc: 'Equipped with state-of-the-art specialized R&D laboratories, digital classrooms, and extensive library systems.' }
            ].map((acc, idx) => (
              <div key={idx} className="flex gap-4">
                <ShieldCheck className="text-brand-gold shrink-0 mt-1" size={20} />
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-sm sm:text-base text-brand-navy">{acc.title}</span>
                  <span className="text-xs sm:text-sm text-slate-500 mt-1">{acc.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Vision & Mission Cards */}
      <section className="bg-slate-100 py-20 px-4 sm:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-slate-200/60 flex flex-col gap-5">
            <div className="bg-brand-navy/5 p-4 rounded-xl w-fit text-brand-red">
              <Eye size={28} />
            </div>
            <h3 className="font-display font-black text-2xl text-brand-navy">Our Vision</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We strive to emerge as a premier centre for technical education, producing professionally competent engineers with solid ethical foundations, research capabilities, and entrepreneurial qualities to meet local and global challenges.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-slate-200/60 flex flex-col gap-5">
            <div className="bg-brand-navy/5 p-4 rounded-xl w-fit text-brand-red">
              <Compass size={28} />
            </div>
            <h3 className="font-display font-black text-2xl text-brand-navy">Our Mission</h3>
            <div className="text-slate-600 text-sm sm:text-base leading-relaxed flex flex-col gap-3">
              <p>
                We seek to fulfill our vision through a structured educational model:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5 text-slate-500">
                <li>Providing state-of-the-art infrastructure, equipment, and teaching methodologies.</li>
                <li>Fostering close industry-institute collaborations to upgrade student skills.</li>
                <li>Instilling value-added leadership qualities and solid professional ethics.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Leadership Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20">
        <div className="text-center mb-14">
          <div className="flex justify-center items-center gap-2 text-brand-red mb-2">
            <HeartHandshake size={18} className="stroke-[2.5]" />
            <span className="font-sans font-bold text-xs sm:text-sm tracking-widest uppercase">Institutional Governing Body</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-brand-navy tracking-tight">
            Our Governing Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((leader, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-slate-200/60 flex flex-col items-center text-center hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
            >
              {/* Leader Avatar Placeholder */}
              <div className="w-20 h-20 bg-brand-navy/5 text-brand-navy rounded-full flex items-center justify-center font-display font-bold text-2xl border-2 border-brand-gold/40 mb-6">
                {leader.name.split(' ').slice(-2).map(n => n[0]).join('')}
              </div>
              <h3 className="font-display font-black text-lg sm:text-xl text-brand-navy">
                {leader.name}
              </h3>
              <span className="text-xs sm:text-sm font-extrabold text-brand-red uppercase tracking-wider mt-1 mb-4">
                {leader.role}
              </span>
              <p className="text-slate-500 text-sm leading-relaxed">
                {leader.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
