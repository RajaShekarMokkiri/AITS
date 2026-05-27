import React from 'react';
import { BookOpen, GraduationCap, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';

export default function Programs({ navigate }) {
  const ugPrograms = [
    {
      name: 'B.Tech in Computer Science & Engineering',
      code: 'CSE',
      seats: 180,
      duration: '4 Years',
      eligibility: '10+2 with Physics, Chemistry, and Mathematics (and valid EAPCET rank)',
      specs: ['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Cloud Computing']
    },
    {
      name: 'B.Tech in Electronics & Communication Engineering',
      code: 'ECE',
      seats: 120,
      duration: '4 Years',
      eligibility: '10+2 with Physics, Chemistry, and Mathematics (and valid EAPCET rank)',
      specs: ['VLSI System Design', 'Embedded Systems', 'Signal Processing', 'Internet of Things']
    },
    {
      name: 'B.Tech in Electrical & Electronics Engineering',
      code: 'EEE',
      seats: 60,
      duration: '4 Years',
      eligibility: '10+2 with Physics, Chemistry, and Mathematics (and valid EAPCET rank)',
      specs: ['Power Systems', 'Renewable Energy Source', 'Electrical Vehicles', 'Control Systems']
    },
    {
      name: 'B.Tech in Mechanical Engineering',
      code: 'ME',
      seats: 60,
      duration: '4 Years',
      eligibility: '10+2 with Physics, Chemistry, and Mathematics',
      specs: ['Computer Aided Design (CAD)', 'Thermal Engineering', 'Robotics & Automation', 'Fluid Mechanics']
    },
    {
      name: 'B.Tech in Civil Engineering',
      code: 'CE',
      seats: 60,
      duration: '4 Years',
      eligibility: '10+2 with Physics, Chemistry, and Mathematics',
      specs: ['Structural Engineering', 'Environmental Engineering', 'Geotechnical Eng.', 'Transportation Eng.']
    }
  ];

  const pgPrograms = [
    {
      name: 'Master of Computer Applications',
      code: 'MCA',
      seats: 120,
      duration: '2 Years',
      eligibility: 'Graduation in BCA/B.Sc/B.Com/B.A with Mathematics at 10+2 or Graduate Level (and ICET rank)',
      specs: ['Advanced Web Technologies', 'Android & iOS App Design', 'Database Administration', 'Information Security']
    },
    {
      name: 'Master of Business Administration',
      code: 'MBA',
      seats: 180,
      duration: '2 Years',
      eligibility: 'Any recognized Bachelor\'s Degree of minimum 3 years duration (and ICET rank)',
      specs: ['Financial Management', 'Human Resource Management', 'Marketing Management', 'Systems Management']
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Page Hero Header */}
      <div className="w-full bg-brand-navy text-white py-16 px-4 sm:px-8 relative overflow-hidden border-b-4 border-brand-gold">
        <div className="absolute inset-0 bg-[#0A1633]/60 z-0"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-brand-gold text-xs sm:text-sm font-bold tracking-widest uppercase">Academic Disciplines</span>
          <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight mt-3 mb-4">Undergraduate & Postgrad Programs</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Explore our curriculum directories. We offer premium technology and management programs designed to equip students for global challenges.
          </p>
        </div>
      </div>

      {/* UG Programs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20">
        <div className="flex items-center gap-3 mb-10 border-b border-slate-200 pb-4">
          <BookOpen className="text-brand-red" size={26} />
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-navy">
            Undergraduate Courses (B.Tech Programs)
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {ugPrograms.map((prog, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-slate-200/60 flex flex-col lg:flex-row justify-between gap-8 hover:shadow-xl hover:border-slate-300/40 transition-all duration-300 group"
            >
              <div className="flex flex-col gap-4 max-w-3xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-brand-red/10 text-brand-red text-xs font-bold px-3 py-1 rounded">
                    B.Tech
                  </span>
                  <span className="text-slate-400 text-sm font-bold">|</span>
                  <span className="text-xs sm:text-sm font-extrabold text-brand-navy uppercase tracking-wider">
                    Branch Code: {prog.code}
                  </span>
                  <span className="text-slate-400 text-sm font-bold">|</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-500">
                    Intake: {prog.seats} Seats
                  </span>
                </div>

                <h3 className="font-display font-black text-xl sm:text-2xl text-brand-navy group-hover:text-brand-red transition-colors duration-200">
                  {prog.name}
                </h3>

                <div className="text-sm text-slate-600 leading-relaxed">
                  <strong>Eligibility:</strong> {prog.eligibility}
                </div>

                {/* Specializations focus */}
                <div className="flex flex-wrap gap-2.5 mt-2">
                  {prog.specs.map((spec, sidx) => (
                    <span key={sidx} className="bg-slate-50 border border-slate-200 text-slate-600 text-xs px-3 py-1.5 rounded-md font-medium flex items-center gap-1.5">
                      <CheckCircle size={12} className="text-emerald-500" />
                      <span>{spec}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center sm:items-start lg:items-end shrink-0 gap-3 border-t lg:border-t-0 pt-6 lg:pt-0 border-slate-100">
                <div className="text-left lg:text-right flex flex-col">
                  <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Duration</span>
                  <span className="font-display font-black text-xl text-brand-navy">{prog.duration}</span>
                </div>
                <button
                  onClick={() => navigate('signup')}
                  className="bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-sm px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-1.5 cursor-pointer mt-2"
                >
                  <span>Apply Course</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PG Programs */}
      <section className="bg-slate-100 border-t border-slate-200 py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10 border-b border-slate-200 pb-4">
            <GraduationCap className="text-brand-red" size={28} />
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-navy">
              Postgraduate Programs (MBA & MCA)
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {pgPrograms.map((prog, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-slate-200/60 flex flex-col lg:flex-row justify-between gap-8 hover:shadow-xl hover:border-slate-300/40 transition-all duration-300 group"
              >
                <div className="flex flex-col gap-4 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-brand-gold/25 text-brand-navy-dark text-xs font-bold px-3 py-1 rounded">
                      Postgrad (PG)
                    </span>
                    <span className="text-slate-400 text-sm font-bold">|</span>
                    <span className="text-xs sm:text-sm font-extrabold text-brand-navy uppercase tracking-wider">
                      Branch Code: {prog.code}
                    </span>
                    <span className="text-slate-400 text-sm font-bold">|</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-500">
                      Intake: {prog.seats} Seats
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl sm:text-2xl text-brand-navy group-hover:text-brand-red transition-colors duration-200">
                    {prog.name}
                  </h3>

                  <div className="text-sm text-slate-600 leading-relaxed">
                    <strong>Eligibility:</strong> {prog.eligibility}
                  </div>

                  {/* Specializations focus */}
                  <div className="flex flex-wrap gap-2.5 mt-2">
                    {prog.specs.map((spec, sidx) => (
                      <span key={sidx} className="bg-slate-50 border border-slate-200 text-slate-600 text-xs px-3 py-1.5 rounded-md font-medium flex items-center gap-1.5">
                        <CheckCircle size={12} className="text-emerald-500" />
                        <span>{spec}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center sm:items-start lg:items-end shrink-0 gap-3 border-t lg:border-t-0 pt-6 lg:pt-0 border-slate-100">
                  <div className="text-left lg:text-right flex flex-col">
                    <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Duration</span>
                    <span className="font-display font-black text-xl text-brand-navy">{prog.duration}</span>
                  </div>
                  <button
                    onClick={() => navigate('signup')}
                    className="bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-sm px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-1.5 cursor-pointer mt-2"
                  >
                    <span>Apply Course</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
