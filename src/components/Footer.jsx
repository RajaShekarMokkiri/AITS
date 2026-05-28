import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';

export default function Footer({ navigate }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-navy-dark text-white pt-16 pb-8 border-t-4 border-brand-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Branding & Address */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('home')}>
            {/* Official Logo Crest for Annamacharya University */}
            <img src="/logo.png" className="w-10 h-10 object-contain shrink-0" alt="Annamacharya University Logo" />
            <div className="flex flex-col">
              <span className="font-display text-lg font-black text-white tracking-tight leading-none">Annamacharya</span>
              <span className="text-[9px] font-bold text-slate-300 tracking-wider mt-1 uppercase">University</span>
            </div>
          </div>
          
          <p className="text-slate-300 text-sm leading-relaxed mt-2">
            Discover Annamacharya University's commitment to excellence in education, research, and innovation. Empowering minds and shaping futures today.
          </p>
          
          <div className="flex flex-col gap-3 text-slate-300 text-sm mt-3">
            <div className="flex items-start gap-2.5">
              <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
              <span>New Boyanapalli, Rajampet, Annamayya Dist., Andhra Pradesh - 516126</span>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Navigation */}
        <div>
          <h3 className="font-display font-bold text-lg text-white mb-6 border-l-3 border-brand-gold pl-3">Quick Links</h3>
          <ul className="flex flex-col gap-3.5 text-sm text-slate-300">
            {['Home', 'About Us', 'Programs', 'Placements', 'Contact'].map((link) => {
              const route = link === 'About Us' ? 'about' : link.toLowerCase();
              return (
                <li key={link}>
                  <button 
                    onClick={() => navigate(route)} 
                    className="flex items-center gap-1.5 hover:text-brand-gold transition duration-200 cursor-pointer group text-left"
                  >
                    <ArrowRight size={14} className="text-brand-gold opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    <span>{link}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Column 3: Portals & Legal */}
        <div>
          <h3 className="font-display font-bold text-lg text-white mb-6 border-l-3 border-brand-gold pl-3">Portals & Legal</h3>
          <ul className="flex flex-col gap-3.5 text-sm text-slate-300">
            {[
              { label: 'Student Portal Login', route: 'login' },
              { label: 'Create Account / Sign Up', route: 'signup' },
              { label: 'Admissions Desk', route: 'signup' },
              { label: 'Terms & Conditions', route: 'terms' },
              { label: 'Privacy Policy', route: 'privacy' }
            ].map((link, idx) => (
              <li key={idx}>
                <button 
                  onClick={() => navigate(link.route)} 
                  className="flex items-center gap-1.5 hover:text-brand-gold transition duration-200 cursor-pointer group text-left"
                >
                  <ArrowRight size={14} className="text-brand-gold opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact & Socials */}
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="font-display font-bold text-lg text-white mb-6 border-l-3 border-brand-gold pl-3">Inquiries</h3>
            <div className="flex flex-col gap-3.5 text-sm text-slate-300">
              <a href="mailto:info@annamacharyauniversity.edu.in" className="flex items-center gap-2.5 hover:text-brand-gold transition duration-200">
                <Mail size={16} className="text-brand-gold" />
                <span>info@annamacharyauniversity.edu.in</span>
              </a>
              <a href="tel:+919281416210" className="flex items-center gap-2.5 hover:text-brand-gold transition duration-200">
                <Phone size={16} className="text-brand-gold" />
                <span>+91 9281 416 210</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-sans font-bold text-sm text-white mb-3 tracking-wider uppercase">Connect With Us</h4>
            <div className="flex items-center gap-3">
              {[
                { icon: <Facebook size={18} />, href: 'https://facebook.com' },
                { icon: <Twitter size={18} />, href: 'https://twitter.com' },
                { icon: <Instagram size={18} />, href: 'https://instagram.com' },
                { icon: <Linkedin size={18} />, href: 'https://linkedin.com' },
                { icon: <Youtube size={18} />, href: 'https://youtube.com' }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-navy border border-slate-700 p-2 rounded hover:bg-brand-gold hover:text-brand-navy-dark transition duration-300 hover:border-brand-gold"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-slate-400">
        <div>
          <span>© {currentYear} Annamacharya University. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={() => navigate('terms')} className="hover:text-brand-gold transition duration-200 cursor-pointer">Terms</button>
          <button onClick={() => navigate('privacy')} className="hover:text-brand-gold transition duration-200 cursor-pointer">Privacy</button>
          <span>Established by Govt. of Andhra Pradesh</span>
        </div>
      </div>
    </footer>
  );
}
