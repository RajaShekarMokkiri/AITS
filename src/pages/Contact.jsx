import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from 'lucide-react';

export default function Contact({ navigate }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('CSE');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!name || !email || !phone || !message) {
      setError('Please fill in all required fields.');
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

    setSuccess(true);
    setName('');
    setEmail('');
    setPhone('');
    setCourse('CSE');
    setMessage('');
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Page Hero Header */}
      <div className="w-full bg-brand-navy text-white py-16 px-4 sm:px-8 relative overflow-hidden border-b-4 border-brand-gold">
        <div className="absolute inset-0 bg-[#0A1633]/60 z-0"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-brand-gold text-xs sm:text-sm font-bold tracking-widest uppercase">Support & Admission Desk</span>
          <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight mt-3 mb-4">Contact Admissions Team</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Have questions about registrations, courses, or fee schedules? Get in touch with our counselors for immediate guidance.
          </p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Contact details */}
        <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
          <div className="flex flex-col gap-6">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-navy tracking-tight">
              Admissions Office
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We look forward to answering your inquiries. Feel free to contact our administrative support desks during working hours (9:00 AM – 5:00 PM).
            </p>

            <div className="flex flex-col gap-5 mt-4">
              {[
                { icon: <MapPin size={20} />, label: 'Postal Address', value: 'Venkatapuram, Karakambadi Road, Renigunta, Tirupati, Andhra Pradesh - 517520' },
                { icon: <Phone size={20} />, label: 'Inquiry Helpline', value: '+91 9281 416 210' },
                { icon: <Mail size={20} />, label: 'Admissions Inquiries', value: 'admissions@aits-tpt.edu.in' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="bg-brand-navy/5 text-brand-red p-2.5 rounded-lg shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">{item.label}</span>
                    <span className="text-sm font-semibold text-slate-700 mt-1">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Map Mockup */}
          <div className="bg-brand-navy-dark text-white rounded-2xl p-6 shadow-xl border border-slate-800 relative overflow-hidden flex flex-col gap-4 mt-8 lg:mt-0">
            <h3 className="font-display font-bold text-base text-brand-gold">Campus Location</h3>
            <div className="w-full h-40 bg-slate-800 rounded-lg flex items-center justify-center relative overflow-hidden">
              {/* Artistic Grid Background */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:16px_16px]"></div>
              <div className="relative z-10 text-center flex flex-col items-center p-4">
                <MapPin className="text-brand-red mb-2 animate-bounce" size={28} />
                <span className="text-xs font-bold text-white uppercase tracking-wider">AITS TIRUPATI CAMPUS</span>
                <span className="text-[10px] text-slate-400 mt-1">Venkatapuram, Renigunta Bypass Road</span>
              </div>
            </div>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs font-extrabold text-brand-gold uppercase tracking-widest text-center hover:underline cursor-pointer"
            >
              Open inside Google Maps
            </a>
          </div>

        </div>

        {/* Right Side: Interactive Inquiry Form */}
        <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-slate-100">
          <h3 className="font-display font-extrabold text-2xl text-brand-navy mb-6">
            Inquiry Submission Form
          </h3>

          {error && (
            <div className="bg-red-50 border-l-4 border-brand-red text-brand-red p-4 rounded text-sm mb-6 font-semibold flex items-center gap-2">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="bg-emerald-50 border-l-4 border-emerald-500 text-emerald-800 p-4 rounded text-sm mb-6 font-semibold flex items-center gap-2">
              <CheckCircle size={18} className="text-emerald-600" />
              <span>Your inquiry has been submitted! Our counselors will email/call you shortly.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name Field */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-brand-navy/15 focus:border-brand-navy focus:bg-white transition duration-200"
              />
            </div>

            {/* Email & Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-brand-navy/15 focus:border-brand-navy focus:bg-white transition duration-200"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 92814 16210"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-brand-navy/15 focus:border-brand-navy focus:bg-white transition duration-200"
                />
              </div>
            </div>

            {/* Course Dropdown */}
            <div className="flex flex-col">
              <label htmlFor="course" className="text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
                Course of Interest
              </label>
              <select
                id="course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-brand-navy/15 focus:border-brand-navy focus:bg-white transition duration-200"
              >
                <option value="CSE">B.Tech - Computer Science & Engineering</option>
                <option value="ECE">B.Tech - Electronics & Comm. Engineering</option>
                <option value="EEE">B.Tech - Electrical & Electronics Engineering</option>
                <option value="ME">B.Tech - Mechanical Engineering</option>
                <option value="CE">B.Tech - Civil Engineering</option>
                <option value="MCA">Postgrad - MCA</option>
                <option value="MBA">Postgrad - MBA</option>
              </select>
            </div>

            {/* Message Field */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
                Inquiry Message *
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Write your detailed questions here..."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-brand-navy/15 focus:border-brand-navy focus:bg-white transition duration-200"
              />
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-3.5 rounded-lg w-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 uppercase tracking-wider text-sm flex justify-center items-center gap-2 cursor-pointer"
            >
              <span>Submit Inquiry</span>
              <Send size={16} />
            </button>
          </form>
        </div>

      </section>
    </div>
  );
}
