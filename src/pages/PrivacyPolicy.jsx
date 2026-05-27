import React from 'react';
import { Eye, Shield, Lock, Share2 } from 'lucide-react';

export default function PrivacyPolicy({ navigate }) {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Page Hero Header */}
      <div className="w-full bg-brand-navy text-white py-16 px-4 sm:px-8 relative overflow-hidden border-b-4 border-brand-gold">
        <div className="absolute inset-0 bg-[#0A1633]/60 z-0"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-brand-gold text-xs sm:text-sm font-bold tracking-widest uppercase">Information Security</span>
          <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight mt-3 mb-4">Privacy Policy</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Your trust is our priority. We are committed to safeguarding all personal and academic records submitted to the admissions portal.
          </p>
        </div>
      </div>

      {/* Main Document Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-12 border border-slate-100 flex flex-col gap-10">
          
          {/* Section 1: Data We Collect */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-brand-navy">
              <Eye size={22} className="text-brand-gold" />
              <h2 className="font-display font-bold text-xl sm:text-2xl">1. Information We Collect</h2>
            </div>
            <div className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8 flex flex-col gap-2">
              <p>
                To provide a seamless application workflow, we collect specific personal credentials during student registration, which include:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5 text-slate-500">
                <li>Full name, date of birth, gender, and contact addresses.</li>
                <li>Email address and cellular phone numbers for immediate system communications.</li>
                <li>Academic certificates, scores in entrance exams (EAPCET, ICET, etc.), and merit records.</li>
                <li>Parent/Guardian names and demographic profiles.</li>
              </ul>
            </div>
          </div>

          {/* Section 2: Data Usage */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-brand-navy">
              <Shield size={22} className="text-brand-gold" />
              <h2 className="font-display font-bold text-xl sm:text-2xl">2. How We Utilize Your Data</h2>
            </div>
            <div className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8 flex flex-col gap-2">
              <p>
                All information gathered is handled exclusively for admissions processes, including:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5 text-slate-500">
                <li>Evaluating candidate eligibility and compiling branch-wise merit lists.</li>
                <li>Transmitting portal notifications, alerts, SMS schedules, and WhatsApp reminders regarding fee balances or counseling dates.</li>
                <li>Completing institutional registrations with affiliated university boards (JNTUA).</li>
                <li>Conducting institutional surveys, analytics, and service optimizations.</li>
              </ul>
            </div>
          </div>

          {/* Section 3: Data Security */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-brand-navy">
              <Lock size={22} className="text-brand-gold" />
              <h2 className="font-display font-bold text-xl sm:text-2xl">3. Secure Encryptions & Safeguards</h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
              We employ military-grade Secure Socket Layer (SSL) integrations, database encryptions, and strict access control credentials to protect personal profiles. Unauthorized personnel are strictly barred from viewing or editing candidate databases.
            </p>
          </div>

          {/* Section 4: Third Party Sharing */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-brand-navy">
              <Share2 size={22} className="text-brand-gold" />
              <h2 className="font-display font-bold text-xl sm:text-2xl">4. Third-Party Disclosures & Policy Sharing</h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
              We do NOT sell, lease, or trade user identity records to commercial marketing agencies. Necessary parameters are shared exclusively with standard administrative bodies, including state examination boards (APSCHE), education registries, and standard communication channels (SMS/WhatsApp aggregators) to fulfill counseling requirements.
            </p>
          </div>

          {/* Actions Footer */}
          <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-slate-400 text-xs sm:text-sm">Last updated: May 26, 2026</span>
            <button
              onClick={() => navigate('signup')}
              className="bg-brand-navy hover:bg-brand-navy-light text-white font-bold px-6 py-3 rounded-lg text-sm shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              Back to Registration
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
