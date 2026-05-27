import React from 'react';
import { ShieldCheck, BookOpen, Clock, AlertCircle } from 'lucide-react';

export default function TermsAndConditions({ navigate }) {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Page Hero Header */}
      <div className="w-full bg-brand-navy text-white py-16 px-4 sm:px-8 relative overflow-hidden border-b-4 border-brand-gold">
        <div className="absolute inset-0 bg-[#0A1633]/60 z-0"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-brand-gold text-xs sm:text-sm font-bold tracking-widest uppercase">Policies & Regulations</span>
          <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight mt-3 mb-4">Terms & Conditions</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Please read these terms carefully before applying. These guidelines define the administrative and academic contract for student enrollment.
          </p>
        </div>
      </div>

      {/* Main Document Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-12 border border-slate-100 flex flex-col gap-10">
          
          {/* Introductory Alert */}
          <div className="bg-slate-50 border-l-4 border-brand-gold p-5 rounded-r-xl flex items-start gap-4">
            <AlertCircle className="text-brand-gold shrink-0 mt-0.5" size={20} />
            <div className="text-slate-600 text-sm leading-relaxed">
              <strong>Important Notice:</strong> By submitting an application, registering on this portal, or completing fee payments, you declare that you have read, understood, and agreed to be bound by these institutional terms.
            </div>
          </div>

          {/* Section 1: Admissions eligibility */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-brand-navy">
              <ShieldCheck size={22} className="text-brand-gold" />
              <h2 className="font-display font-bold text-xl sm:text-2xl">1. Eligibility Criteria & Verification</h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
              All applications for B.Tech (undergraduate), MBA, and MCA (postgraduate) must meet the minimum academic standards established by the JNTU Anantapur and Andhra Pradesh State Council of Higher Education (APSCHE). Candidates must submit genuine transcripts. Submission of falsified documentation will result in immediate cancellation of candidature with no refund of fees.
            </p>
          </div>

          {/* Section 2: Fee Structure */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-brand-navy">
              <Clock size={22} className="text-brand-gold" />
              <h2 className="font-display font-bold text-xl sm:text-2xl">2. Payments, Deposits, & Refunds</h2>
            </div>
            <div className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8 flex flex-col gap-3">
              <p>
                Tuition fees and university deposits must be completed within designated deadlines to secure admissions seats. Delays may lead to forfeiture of admission.
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2 text-slate-500">
                <li>Admissions registration fees are strictly non-refundable.</li>
                <li>Refund requests for tuition deposits will be processed in accordance with the standard AICTE/UGC institutional directives.</li>
                <li>Hostel, dining hall, and transportation fees once paid are non-refundable upon commencement of the academic term.</li>
              </ul>
            </div>
          </div>

          {/* Section 3: Student Conduct */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-brand-navy">
              <BookOpen size={22} className="text-brand-gold" />
              <h2 className="font-display font-bold text-xl sm:text-2xl">3. Campus Discipline & Ragging Policies</h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
              Annamacharya Institute enforces a strictly zero-tolerance policy against any form of ragging or harassment on or off-campus. Violations of disciplinary frameworks will result in severe penalizing measures, including immediate suspension or rustication, and filing of official police reports under Andhra Pradesh anti-ragging penal provisions.
            </p>
          </div>

          {/* Section 4: Privacy & Communications */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-brand-navy">
              <AlertCircle size={22} className="text-brand-gold" />
              <h2 className="font-display font-bold text-xl sm:text-2xl">4. Communications Authorization</h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
              By checking the consent box during registration, you explicitly authorize the admissions committee and institutional partners of Annamacharya Institute of Technology & Sciences, Tirupati to contact you via Email, SMS, WhatsApp, RCS, or telephonic voice calls regarding admission reminders, newsletters, fee deadlines, or marketing materials.
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
