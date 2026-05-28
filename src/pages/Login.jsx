import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';

export default function Login({ navigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
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
              <span className="text-[8px] font-bold text-slate-300 tracking-wider mt-1 uppercase">University · Rajampet</span>
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

        {/* Decorative corner grid */}
        <div className="absolute bottom-6 left-6 w-24 h-24 bg-white/5 rounded-full filter blur-xl"></div>
      </div>

      {/* Right Panel: White portal form */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-between p-6 sm:p-12 lg:p-20 min-h-[60vh] lg:min-h-screen">
        
        {/* Empty header block to align form vertically */}
        <div className="hidden lg:block h-10"></div>

        {/* Form Container */}
        <div className="max-w-md w-full mx-auto my-auto">
          <div className="mb-8">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight leading-tight">
              Welcome Back
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 font-medium">
              Sign in to access your student portal
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-brand-red text-brand-red p-4 rounded text-sm mb-6 font-semibold animate-fade-in-up">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-emerald-50 border-l-4 border-emerald-500 text-emerald-800 p-4 rounded text-sm mb-6 font-semibold animate-fade-in-up">
              ✓ Login Successful! Redirecting to student dashboard...
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Email Field */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-xs sm:text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Mail size={18} />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3 sm:py-3.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-navy/15 focus:border-brand-navy focus:bg-white transition duration-200"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wide">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => alert('Password reset functionality is under maintenance.')}
                  className="text-xs font-bold text-brand-navy hover:text-brand-red transition duration-200"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Lock size={18} />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-12 py-3 sm:py-3.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-navy/15 focus:border-brand-navy focus:bg-white transition duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-brand-navy transition duration-200"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-3.5 sm:py-4 rounded-lg w-full mt-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 uppercase tracking-wider text-sm cursor-pointer"
            >
              Sign In
            </button>
          </form>

          {/* Sign Up Redirect */}
          <div className="text-center mt-6 text-sm font-medium text-slate-500">
            <span>Don't have an account? </span>
            <button 
              onClick={() => navigate('signup')} 
              className="text-brand-navy font-bold hover:text-brand-red hover:underline transition duration-200 cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="w-full text-center mt-8">
          <button 
            onClick={() => navigate('home')} 
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-brand-navy transition duration-200 group cursor-pointer"
          >
            <ArrowLeft size={16} className="transform group-hover:-translate-x-1.5 transition-transform duration-200" />
            <span>Back to Home</span>
          </button>
        </div>

      </div>

    </div>
  );
}
