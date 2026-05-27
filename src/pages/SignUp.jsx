import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Phone, User, ArrowLeft } from 'lucide-react';

export default function SignUp({ navigate }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!firstName || !lastName || !email || !phone || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (phone.length < 10) {
      setError('Please enter a valid phone number.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    if (!agree) {
      setError('You must agree to the Terms & Conditions and Privacy Policy.');
      return;
    }

    setSuccess(true);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50">
      
      {/* Left Panel: Silhouettes + branding */}
      <div 
        className="w-full lg:w-1/2 bg-brand-navy-dark relative flex flex-col justify-center p-8 sm:p-16 lg:p-20 overflow-hidden min-h-[40vh] lg:min-h-screen"
        style={{
          backgroundImage: 'url(/graduates_silhouette.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Navy overlay to match screenshot */}
        <div className="absolute inset-0 bg-[#0A1633]/90 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-xl">
          {/* AITS Crest */}
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 w-fit">
            {/* Official Logo Crest for AITS */}
            <img src="/logo.png" className="w-12 h-12 object-contain bg-white rounded-full p-0.5 shrink-0" alt="AITS Logo" />
            <div className="flex flex-col">
              <span className="font-display text-lg font-black text-white tracking-tight leading-none">Annamacharya</span>
              <span className="text-[8px] font-bold text-slate-300 tracking-wider mt-1 uppercase">Tech & Sciences · Tirupati</span>
            </div>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mt-12 mb-6">
            BTech in Computer Science <br className="hidden sm:inline" />
            <span className="text-brand-gold">(AEDP)</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mb-8">
            Access your student portal, track your application status, and stay connected with the AITS community.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-6 left-6 w-24 h-24 bg-white/5 rounded-full filter blur-xl"></div>
      </div>

      {/* Right Panel: White registration form */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-between p-6 sm:p-12 lg:p-20 min-h-[60vh] lg:min-h-screen">
        
        {/* Alignment spacer */}
        <div className="hidden lg:block h-6"></div>

        {/* Form Container */}
        <div className="max-w-md w-full mx-auto my-auto">
          <div className="mb-6">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-navy tracking-tight leading-tight">
              Create Account
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-semibold">
              Register to get started with your application
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-brand-red text-brand-red p-3.5 rounded text-xs sm:text-sm mb-4 font-semibold animate-fade-in-up">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-emerald-50 border-l-4 border-emerald-500 text-emerald-800 p-3.5 rounded text-xs sm:text-sm mb-4 font-semibold animate-fade-in-up">
              ✓ Account created successfully! Proceeding to admissions dashboard...
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            {/* First and Last Name (Side by Side Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-[11px] sm:text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-navy/15 focus:border-brand-navy focus:bg-white transition duration-200"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName" className="text-[11px] sm:text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-navy/15 focus:border-brand-navy focus:bg-white transition duration-200"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-[11px] sm:text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail size={16} />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-navy/15 focus:border-brand-navy focus:bg-white transition duration-200"
                />
              </div>
            </div>

            {/* Phone Number Field */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-[11px] sm:text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Phone size={16} />
                </div>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 92814 16210"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-navy/15 focus:border-brand-navy focus:bg-white transition duration-200"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col">
              <label htmlFor="password" className="text-[11px] sm:text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock size={16} />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-navy/15 focus:border-brand-navy focus:bg-white transition duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-brand-navy transition duration-200"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="flex items-start gap-2.5 mt-2">
              <input
                id="agree"
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mt-1 h-4 w-4 text-brand-navy focus:ring-brand-navy border-slate-300 rounded shrink-0 cursor-pointer"
              />
              <label htmlFor="agree" className="text-[11px] sm:text-xs text-slate-500 leading-normal font-medium">
                I agree to the{' '}
                <button
                  type="button"
                  onClick={() => navigate('terms')}
                  className="text-brand-gold font-bold hover:underline transition cursor-pointer"
                >
                  Terms & Conditions
                </button>{' '}
                and{' '}
                <button
                  type="button"
                  onClick={() => navigate('privacy')}
                  className="text-brand-gold font-bold hover:underline transition cursor-pointer"
                >
                  Privacy Policy
                </button>
                , and authorize Annamacharya Institute and its partners to contact me via Email, SMS, WhatsApp, RCS, or Voice Call.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-3.5 rounded-lg w-full mt-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 uppercase tracking-wider text-xs sm:text-sm cursor-pointer"
            >
              Create Account
            </button>
          </form>

          {/* Login Redirect */}
          <div className="text-center mt-5 text-xs sm:text-sm font-medium text-slate-500">
            <span>Already have an account? </span>
            <button 
              onClick={() => navigate('login')} 
              className="text-brand-navy font-bold hover:text-brand-red hover:underline transition duration-200 cursor-pointer"
            >
              Sign In
            </button>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="w-full text-center mt-6">
          <button 
            onClick={() => navigate('home')} 
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-400 hover:text-brand-navy transition duration-200 group cursor-pointer"
          >
            <ArrowLeft size={14} className="transform group-hover:-translate-x-1.5 transition-transform duration-200" />
            <span>Back to Home</span>
          </button>
        </div>

      </div>

    </div>
  );
}
