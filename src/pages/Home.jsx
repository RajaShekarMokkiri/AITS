import React from 'react';
import { Award, Users, Building, ShieldCheck, ArrowRight, CheckCircle2, ChevronRight, Zap, Target, Star } from 'lucide-react';

export default function Home({ navigate }) {
  const stats = [
    { label: 'Academic Legacy', value: '25+ Years', icon: <Award className="text-brand-gold" size={24} /> },
    { label: 'Successful Placements', value: '10,000+', icon: <Users className="text-brand-gold" size={24} /> },
    { label: 'Top Recruiter Partners', value: '150+', icon: <Building className="text-brand-gold" size={24} /> },
    { label: 'Highest Package offered', value: '20+ LPA', icon: <Zap className="text-brand-gold" size={24} /> },
  ];

  const featuredPrograms = [
    { name: 'B.Tech Computer Science & Engineering', duration: '4 Years', code: 'CSE', desc: 'Focus on Artificial Intelligence, Machine Learning, Data Analytics, and Full Stack Development.' },
    { name: 'B.Tech Electronics & Comm. Engineering', duration: '4 Years', code: 'ECE', desc: 'Embedded systems, VLSI Design, IoT, and high-frequency communication protocols.' },
    { name: 'Master of Computer Applications', duration: '2 Years', code: 'MCA', desc: 'Advanced software design, database administration, web architectures, and mobile app design.' },
  ];

  return (
    <div className="w-full bg-slate-50 overflow-hidden">
      
      {/* 1. Stunning Hero Section */}
      <section 
        className="w-full min-h-[75vh] lg:min-h-[85vh] relative bg-cover bg-center flex items-center pt-24 pb-20 px-4 sm:px-8 lg:px-16"
        style={{
          backgroundImage: 'url(/college_campus_hero.png)',
          backgroundAttachment: 'scroll',
        }}
      >
        {/* Dark Navy Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark/95 via-brand-navy/70 to-transparent z-0"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl text-white">
          {/* Admissions Open Banner */}
          <div className="bg-brand-gold text-brand-navy-dark px-4 py-1.5 rounded font-display font-extrabold text-xs uppercase tracking-widest w-fit mb-5 shadow-lg animate-pulse">
            Admissions Open 2026-27
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-none mb-4">
            BTech in <br className="hidden sm:inline" />
            <span className="text-brand-gold">Computer Science</span>
          </h1>

          <h2 className="font-display font-bold text-lg sm:text-2xl text-slate-200 uppercase tracking-widest mb-6">
            AEDP – Apprenticeship Embedded Degree Program
          </h2>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mb-10">
            Four-Year Multidisciplinary UG Course | 2 Years Institution + 2 Years Industry. Powered by TalentSprint (Part of Accenture). Gain practical skills on advanced frameworks while earning a degree.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate('signup')}
              className="font-display bg-brand-gold hover:bg-brand-gold-hover text-brand-navy-dark font-black px-8 py-4 rounded shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 text-base cursor-pointer"
            >
              <span>Apply Now</span>
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
            
            <button
              onClick={() => navigate('programs')}
              className="font-sans border-2 border-white/80 hover:border-brand-gold hover:bg-white/10 text-white font-bold px-8 py-4 rounded transition-all duration-300 flex items-center gap-1.5 text-base cursor-pointer"
            >
              <span>Know More</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Decorative bottom angle block */}
        <div className="absolute bottom-0 right-0 left-0 h-10 bg-slate-50 clip-path-slant hidden lg:block"></div>
      </section>

      {/* 2. Floating Statistics Panel */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 -mt-10">
        <div className="bg-white rounded-2xl shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 border border-slate-100">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 hover:shadow-md group border border-transparent hover:border-slate-100"
            >
              <div className="bg-brand-navy/5 p-3 rounded-lg group-hover:bg-brand-gold/15 transition-colors duration-300">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl text-brand-navy tracking-tight leading-none group-hover:text-brand-red transition-colors duration-200">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Legacy & Accreditation Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Branding Description */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex items-center gap-2 text-brand-red">
            <Target size={18} className="stroke-[2.5]" />
            <span className="font-sans font-bold text-sm tracking-widest uppercase">Shaping Global Leaders</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight leading-tight">
            Annamacharya Institute of <br className="hidden sm:inline" />
            Technology & Sciences, Tirupati
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Annamacharya Institute of Technology & Sciences, Tirupati (AITS-TPT) was established in the year 2007 by the Annamacharya Educational Trust. Located in a scenic atmosphere near Venkatapuram on Karakambadi Road, the institute is an Autonomous college affiliated to JNTUA, Anantapur, approved by AICTE, and accredited with <strong>NAAC 'A' Grade</strong>.
          </p>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We are dedicated to providing state-of-the-art engineering instruction, advanced digital classrooms, state-of-the-art specialized R&D research laboratories, and global placements opportunities. Our focus is to align academic syllabi with dynamic industry requirements to empower students to build future-ready careers.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {[
              'UGC Autonomous Institution status',
              'Accredited by NAAC with \'A\' Grade',
              'NBA Accredited Academic Departments',
              'Comprehensive Placement Coaching cells',
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <CheckCircle2 size={18} className="text-brand-red shrink-0" />
                <span className="text-sm font-semibold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Crest & Key Certifications */}
        <div className="lg:col-span-5 bg-brand-navy-dark text-white rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center">
          {/* Subtle circle overlays */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full filter blur-xl"></div>
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-brand-red/10 rounded-full filter blur-xl"></div>

          {/* Official Logo Crest for AITS */}
          <img src="/logo.png" className="w-24 h-24 mb-6 relative z-10 object-contain bg-white rounded-full p-1 border-2 border-brand-gold/40 shrink-0" alt="AITS Logo" />

          <span className="font-display font-extrabold text-brand-gold text-sm tracking-widest uppercase mb-1">AITS TIRUPATI</span>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight leading-tight mb-4">
            Autonomous Education for Tomorrow
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            Approved by AICTE, permanent affiliation to JNTUA, and officially recognized under 2(f) and 12(B) UGC act. Dedicated to academic brilliance.
          </p>
          <button 
            onClick={() => navigate('about')} 
            className="font-display text-xs font-bold uppercase tracking-wider bg-brand-gold hover:bg-brand-gold-hover text-brand-navy-dark px-6 py-3 rounded shadow transition-all duration-300 cursor-pointer"
          >
            Explore Legacy
          </button>
        </div>

      </section>

      {/* 4. Programs Section (Academics Overview) */}
      <section className="bg-slate-100 py-20 px-4 sm:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <div className="flex items-center gap-2 text-brand-red mb-2">
                <ShieldCheck size={18} className="stroke-[2.5]" />
                <span className="font-sans font-bold text-xs sm:text-sm tracking-widest uppercase">Academic Disciplines</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight">
                Programs Offered
              </h2>
            </div>
            <button 
              onClick={() => navigate('programs')} 
              className="inline-flex items-center gap-1 text-sm font-bold text-brand-navy hover:text-brand-red transition duration-200 group cursor-pointer"
            >
              <span>View All Programs</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPrograms.map((prog, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl shadow-md p-6 sm:p-8 flex flex-col justify-between border border-slate-200/60 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-extrabold bg-brand-navy/5 text-brand-navy px-3 py-1 rounded-full uppercase tracking-wider">
                      {prog.duration} Course
                    </span>
                    <span className="text-xs font-black text-brand-red uppercase tracking-widest">
                      {prog.code}
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-brand-navy mb-3 group-hover:text-brand-red transition-colors duration-200">
                    {prog.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {prog.desc}
                  </p>
                </div>
                <button
                  onClick={() => navigate('programs')}
                  className="font-sans font-bold text-sm text-brand-navy group-hover:text-brand-red transition duration-200 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Curriculum & Intake</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4.5. Testimonials Section */}
      <section className="bg-slate-100 border-t border-slate-200 py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          <div className="text-center">
            <div className="flex justify-center items-center gap-2 text-brand-red mb-2">
              <Star className="text-brand-gold fill-brand-gold animate-bounce" size={16} />
              <span className="font-sans font-bold text-xs sm:text-sm tracking-widest uppercase">Student Success Stories</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-brand-navy tracking-tight">
              What Our Students & Alumni Say
            </h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mt-3">
              Hear directly from our graduates who successfully transitioned from AITS Tirupati's academic curriculum to industry leadership roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "A. Harshitha",
                role: "Software Engineer at Accenture",
                stream: "B.Tech CSE (AEDP), 2025",
                package: "12.5 LPA",
                avatar: "AH",
                quote: "The Apprenticeship Embedded Degree Program (AEDP) at AITS was a game changer. Spending 2 years inside corporate projects at Accenture gave me real-world development skills that standard classes couldn't match."
              },
              {
                name: "K. Mohan Krishna",
                role: "Associate Engineer at TCS",
                stream: "B.Tech ECE, 2024",
                package: "8.5 LPA",
                avatar: "KM",
                quote: "The technical laboratories at Annamacharya Institute are top-tier. Instructors guided me closely on embedded system designs, and the Pre-Placement Cell trained me to crack the TCS interview on my very first try."
              },
              {
                name: "P. Sneha Latha",
                role: "Data Analyst at Cognizant",
                stream: "MCA, 2024",
                package: "9.2 LPA",
                avatar: "PS",
                quote: "The autonomous curriculum of AITS is constantly updated with new tech stacks. Focusing on advanced databases and cloud analytics allowed me to secure a placement before even completing my postgraduate studies."
              }
            ].map((testi, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-slate-200/60 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4 text-brand-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-brand-gold" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic mb-6">
                    "{testi.quote}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 border-t border-slate-100 pt-4 mt-auto">
                  <div className="w-12 h-12 bg-brand-navy/5 text-brand-navy rounded-full flex items-center justify-center font-display font-bold text-base shrink-0 border border-brand-gold/30">
                    {testi.avatar}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-display font-extrabold text-brand-navy leading-none">{testi.name}</span>
                    <span className="text-[11px] font-semibold text-slate-400 mt-1">{testi.stream}</span>
                    <span className="text-[11px] font-bold text-brand-red uppercase tracking-wider mt-0.5">{testi.role} · {testi.package}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Placement Highlight Banner */}
      <section className="bg-brand-navy text-white py-20 px-4 sm:px-8 relative overflow-hidden">
        {/* Slanted lines backdrop */}
        <div className="absolute inset-0 bg-[#0C193C]/80 z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 flex flex-col gap-4">
            <span className="text-brand-gold text-xs sm:text-sm font-bold tracking-widest uppercase">Launch Your Career</span>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight leading-tight">
              AITS Tirupati Placements Hub
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed mt-2">
              Our graduates are employed at the world's most innovative institutions and tech giants. We offer extensive training modules starting in the first semester to ensure candidates acquire strong technical expertise and interview readiness.
            </p>
            
            {/* Recruiters Logos representation */}
            <div className="flex flex-wrap gap-6 items-center mt-6">
              {['TCS', 'Accenture', 'Cognizant', 'Wipro', 'Infosys', 'Tech Mahindra'].map((rec, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-2 rounded text-xs sm:text-sm font-black tracking-widest text-slate-300">
                  {rec}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 w-full max-w-sm flex flex-col gap-6 shadow-2xl">
              <h3 className="font-display font-extrabold text-xl text-brand-gold text-center">
                Placement Insights
              </h3>
              
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-xs sm:text-sm text-slate-300">Highest Package</span>
                  <span className="font-display font-black text-lg sm:text-xl text-white">20.0 LPA</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-xs sm:text-sm text-slate-300">Average Salary</span>
                  <span className="font-display font-black text-lg sm:text-xl text-white">4.8 LPA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-slate-300">Admissions Seats Filled</span>
                  <span className="font-display font-black text-lg sm:text-xl text-white">92%</span>
                </div>
              </div>

              <button
                onClick={() => navigate('placements')}
                className="w-full text-center font-display bg-brand-gold hover:bg-brand-gold-hover text-brand-navy-dark font-extrabold py-3.5 rounded shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm"
              >
                Explore Placements
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. High-Impact CTA Panel */}
      <section className="bg-slate-50 py-24 text-center px-4 sm:px-8 border-t border-slate-200">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          <h2 className="font-display font-black text-3xl sm:text-5xl text-brand-navy tracking-tight leading-tight">
            Your Future Starts Here
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Secure your admissions seats in premium technology divisions under the autonomous curriculum of AITS Tirupati today. Admissions for 2026-27 are filling fast.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => navigate('signup')}
              className="font-display bg-brand-gold hover:bg-brand-gold-hover text-brand-navy-dark font-black px-8 py-3.5 rounded shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>Apply Online</span>
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
            <button
              onClick={() => navigate('contact')}
              className="font-sans border border-slate-300 hover:border-brand-navy text-slate-700 hover:text-brand-navy hover:bg-slate-100 font-bold px-8 py-3.5 rounded transition duration-200 cursor-pointer"
            >
              Contact Support
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
