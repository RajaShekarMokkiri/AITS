import React, { useState } from 'react';
import { Mail, Phone, User, GraduationCap, Menu, X, ArrowRight } from 'lucide-react';

export default function Header({ currentRoute, navigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', route: 'home' },
    { label: 'About Us', route: 'about' },
    { label: 'Programs', route: 'programs' },
    { label: 'Placements', route: 'placements' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleNavClick = (route) => {
    navigate(route);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      {/* Red Announcement / Top Bar */}
      <div className="w-full bg-brand-red text-white text-xs sm:text-sm py-2 px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-2 border-b border-brand-red-dark">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a href="mailto:info@annamacharyauniversity.edu.in" className="flex items-center gap-2 hover:text-brand-gold transition duration-200">
            <Mail size={14} className="text-white" />
            <span>info@annamacharyauniversity.edu.in</span>
          </a>
          <a href="tel:+919281416210" className="flex items-center gap-2 hover:text-brand-gold transition duration-200">
            <Phone size={14} className="text-white" />
            <span>+91 9281 416 210</span>
          </a>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 border-t md:border-t-0 pt-2 md:pt-0 w-full md:w-auto justify-center md:justify-end border-white/20">
          <button 
            onClick={() => navigate('login')} 
            className={`flex items-center gap-1.5 hover:text-brand-gold transition duration-200 font-medium ${
              currentRoute === 'login' ? 'text-brand-gold' : 'text-white'
            }`}
          >
            <User size={14} />
            <span>Student Login</span>
          </button>
          <span className="text-white/40 hidden sm:inline">|</span>
          <button 
            onClick={() => navigate('placements')} 
            className="flex items-center gap-1.5 hover:text-brand-gold transition duration-200 text-white/90"
          >
            <GraduationCap size={14} />
            <span>Alumni</span>
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4.5 flex justify-between items-center">
        {/* Crest Logo Shield and Text */}
        <div className="flex items-center gap-4 cursor-pointer shrink-0" onClick={() => navigate('home')}>
          {/* Official Logo Crest for Annamacharya University */}
          <img src="/logo.png" className="w-12 h-12 sm:w-14 sm:h-14 object-contain shrink-0" alt="Annamacharya University Logo" />
          
          <div className="flex flex-col gap-0.5 justify-center">
            <span className="font-display text-base sm:text-xl font-black text-brand-navy tracking-tight leading-tight uppercase">Annamacharya University</span>
            <span className="text-[7.5px] sm:text-[9px] font-sans font-semibold text-brand-red tracking-wide leading-tight">Estd. under Andhra Pradesh Private Universities (Establishment and Regulation) Act, 2016</span>
            <span className="text-[7px] sm:text-[8px] font-sans font-bold text-brand-gold tracking-wider leading-none uppercase">(University listed in UGC as per section 2(f) of the UGC Act, 1956)</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 mx-6">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`font-sans font-semibold text-sm sm:text-base tracking-wide transition duration-200 relative py-1 cursor-pointer ${
                  isActive ? 'text-brand-red' : 'text-brand-navy hover:text-brand-red'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-red rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block shrink-0">
          <button
            onClick={() => navigate('signup')}
            className="font-display bg-brand-gold hover:bg-brand-gold-hover text-brand-navy-dark font-extrabold text-sm sm:text-base px-7 py-3 rounded shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer"
          >
            <span>Apply Now</span>
            <ArrowRight size={17} strokeWidth={2.5} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-brand-navy hover:text-brand-red p-2 transition duration-200 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl py-6 px-6 animate-fade-in-up">
          <nav className="flex flex-col gap-4 mb-6">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`text-left font-sans font-semibold text-base py-2 transition duration-200 border-b border-slate-50 ${
                    isActive ? 'text-brand-red pl-2 border-l-2 border-brand-red' : 'text-brand-navy hover:text-brand-red'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleNavClick('signup')}
              className="w-full text-center font-display bg-brand-gold hover:bg-brand-gold-hover text-brand-navy-dark font-extrabold py-3 rounded shadow-md transition-all duration-300"
            >
              Apply Now
            </button>
            <button
              onClick={() => handleNavClick('login')}
              className="w-full text-center font-sans border border-brand-navy text-brand-navy hover:bg-slate-50 font-bold py-3 rounded transition-all duration-200"
            >
              Student Portal Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
