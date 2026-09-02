import React, { useState } from 'react';
import { 
  FileText, 
  ShieldCheck, 
  CreditCard, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Bus, 
  Lock, 
  Scale, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Calendar, 
  ArrowLeft,
  AlertCircle
} from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../store/slices/uiSlice';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SECTIONS = [
  { id: 'introduction', label: '1. Introduction' },
  { id: 'use-license', label: '2. Use License' },
  { id: 'fee-payments', label: '3. Fees & Payments' },
  { id: 'exams-tests', label: '4. Exams & Tests' },
  { id: 'library-inventory', label: '5. Library & Inventory' },
  { id: 'hrms-staff', label: '6. HRMS & Staff' },
  { id: 'transport-safety', label: '7. Transport' },
  { id: 'data-security', label: '8. Data Privacy' },
  { id: 'governing-law', label: '9. Governing Law' },
  { id: 'contact-us', label: '10. Contact Us' },
];

export default function TermsAndConditions() {
  const dispatch = useDispatch();
  const [activeSection, setActiveSection] = useState('introduction');

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { offset: -90, duration: 1.2 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBackToHome = () => {
    dispatch(setCurrentPage('home'));
    window.location.hash = '';
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#F8F8FF] text-slate-800 font-['Helvetica',sans-serif] selection:bg-orange-100 selection:text-orange-600 relative overflow-x-hidden">
      
      {/* Header */}
      <Header />

      {/* Ambient background glows */}
      <div className="absolute top-[0px] left-1/2 -translate-x-1/2 w-[1200px] h-[450px] bg-linear-to-b from-blue-100/50 via-orange-100/25 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-[-80px] w-[450px] h-[450px] bg-blue-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-2/3 left-[-80px] w-[450px] h-[450px] bg-orange-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* HERO / HEADER SECTION (FULL WIDTH) */}
      <section className="relative w-full pt-[36px] sm:pt-[48px] pb-[20px] px-[16px] sm:px-[32px] lg:px-[48px] max-w-7xl mx-auto text-left">
        
        {/* Breadcrumb Back Button */}
        <button
          onClick={handleBackToHome}
          className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-500 hover:text-[#2B3279] transition-colors mb-4 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {/* Top Badge */}
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-blue-200/80 rounded-full shadow-xs mb-3">
            <FileText className="w-4 h-4 text-blue-600" />
            <span className="text-[12px] font-bold text-blue-700 uppercase tracking-wider">
              Legal Agreement
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-bold text-[28px] sm:text-[38px] lg:text-[44px] text-[#2B3279] tracking-tight leading-tight">
          Terms and Conditions
        </h1>

        {/* Metadata Row */}
        <div className="flex flex-wrap items-center gap-4 mt-3 text-[13px] text-slate-500 font-medium">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>Last Updated: August 2026</span>
          </div>
          <span>•</span>
          <span>Applicable for: All Unitoppers ERP Modules</span>
          <span>•</span>
          <span className="text-emerald-600 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Codeship Institutional Licensing
          </span>
        </div>

        {/* Quick Horizontal Jump Navigation Bar */}
        <div className="mt-6 pt-4 border-t border-slate-200/70 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max pb-2">
            {SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`px-3.5 py-1.5 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all cursor-pointer ${
                  activeSection === sec.id
                    ? 'bg-[#FF7A00] text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {sec.label}
              </button>
            ))}
          </div>
        </div>

      </section>

      {/* FULL WIDTH MAIN CONTENT SECTIONS */}
      <section className="relative w-full max-w-7xl mx-auto px-[16px] sm:px-[32px] lg:px-[48px] pb-[80px] flex flex-col gap-[24px] sm:gap-[28px] text-left">
        
        {/* 1. Introduction */}
        <div id="introduction" className="w-full bg-white rounded-[24px] p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <span className="font-bold text-sm">1</span>
            </div>
            <h2 className="font-bold text-[20px] sm:text-[24px] text-[#2B3279]">
              Introduction
            </h2>
          </div>
          <div className="text-[14px] sm:text-[16px] text-slate-600 leading-relaxed space-y-4">
            <p>
              Welcome to <strong>Unitoppers</strong>. These Terms and Conditions govern your use of our comprehensive Educational ERP System provided by <strong>Codeship</strong>. By accessing or using our platform, you agree to these terms, which apply to all modules including Admissions, Fee Management, Exams, HRMS, and Library Management.
            </p>
          </div>
        </div>

        {/* 2. Use License & Institute Access */}
        <div id="use-license" className="w-full bg-white rounded-[24px] p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FF7A00] shrink-0">
              <span className="font-bold text-sm">2</span>
            </div>
            <h2 className="font-bold text-[20px] sm:text-[24px] text-[#2B3279]">
              Use License & Institute Access
            </h2>
          </div>
          
          <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed mb-5">
            Institutes are granted a non-exclusive, non-transferable license to use the Unitoppers ERP software for their internal management purposes. This license covers:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[#2B3279] font-bold text-[14px]">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span>Admission & Onboarding</span>
              </div>
              <span className="text-[13px] text-slate-500 leading-relaxed">
                Management of student enrollments and records.
              </span>
            </div>

            <div className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[#2B3279] font-bold text-[14px]">
                <BookOpen className="w-4 h-4 text-purple-600" />
                <span>Academic Management</span>
              </div>
              <span className="text-[13px] text-slate-500 leading-relaxed">
                Usage of exam, timetable, and attendance modules.
              </span>
            </div>

            <div className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[#2B3279] font-bold text-[14px]">
                <CreditCard className="w-4 h-4 text-[#FF7A00]" />
                <span>Financials</span>
              </div>
              <span className="text-[13px] text-slate-500 leading-relaxed">
                Processing fees, accounts, and payroll through the platform.
              </span>
            </div>

            <div className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[#2B3279] font-bold text-[14px]">
                <FileText className="w-4 h-4 text-emerald-600" />
                <span>Resources</span>
              </div>
              <span className="text-[13px] text-slate-500 leading-relaxed">
                Management of library, inventory, and assets.
              </span>
            </div>
          </div>

          <div className="mt-5 p-4 bg-amber-50/80 border border-amber-200 rounded-2xl text-[13px] sm:text-[14px] text-amber-800 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>Unauthorized sharing of credentials or sub-licensing the software to third parties is interacting strictly prohibited.</span>
          </div>
        </div>

        {/* 3. Fee Management & Payments */}
        <div id="fee-payments" className="w-full bg-white rounded-[24px] p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
              <span className="font-bold text-sm">3</span>
            </div>
            <h2 className="font-bold text-[20px] sm:text-[24px] text-[#2B3279]">
              Fee Management & Payments
            </h2>
          </div>
          
          <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed mb-5">
            The Fee Collection module facilitates the tracking and payment of student fees. By using this service:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex flex-col gap-2">
              <span className="font-bold text-[15px] text-[#2B3279]">Transactions:</span>
              <span className="text-[13px] text-slate-600 leading-relaxed">
                You acknowledge that online payments are processed by third-party gateways. Unitoppers is not liable for transaction failures caused by banking networks.
              </span>
            </div>

            <div className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex flex-col gap-2">
              <span className="font-bold text-[15px] text-[#2B3279]">Refunds:</span>
              <span className="text-[13px] text-slate-600 leading-relaxed">
                Fee refunds are subject to the specific policy of the respective Educational Institute. Unitoppers does not control institute refund rules.
              </span>
            </div>

            <div className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex flex-col gap-2">
              <span className="font-bold text-[15px] text-[#2B3279]">Records:</span>
              <span className="text-[13px] text-slate-600 leading-relaxed">
                The digital receipts generated are for record-keeping. Institutes are responsible for verifying final reconciliation in the Accounts module.
              </span>
            </div>
          </div>
        </div>

        {/* 4. Exams & Test Management */}
        <div id="exams-tests" className="w-full bg-white rounded-[24px] p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
              <span className="font-bold text-sm">4</span>
            </div>
            <h2 className="font-bold text-[20px] sm:text-[24px] text-[#2B3279]">
              Exams & Test Management
            </h2>
          </div>
          
          <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed mb-5">
            Our Exams and Test Management modules are designed to maintain academic integrity:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex flex-col gap-2">
              <span className="font-bold text-[15px] text-[#2B3279]">Malpractice:</span>
              <span className="text-[13px] text-slate-600 leading-relaxed">
                Any attempt to exploit the system during online exams (e.g., unauthorized browser switching, screen sharing) may result in automatic disqualification.
              </span>
            </div>

            <div className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex flex-col gap-2">
              <span className="font-bold text-[15px] text-[#2B3279]">Data Accuracy:</span>
              <span className="text-[13px] text-slate-600 leading-relaxed">
                While we ensure precision in report generation, institutes must verify marks sheets and chapter-wise reports before final publication.
              </span>
            </div>
          </div>
        </div>

        {/* 5. Library & Inventory Use */}
        <div id="library-inventory" className="w-full bg-white rounded-[24px] p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shrink-0">
              <span className="font-bold text-sm">5</span>
            </div>
            <h2 className="font-bold text-[20px] sm:text-[24px] text-[#2B3279]">
              Library & Inventory Use
            </h2>
          </div>
          
          <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed mb-5">
            For the Library and Inventory modules:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex flex-col gap-2">
              <span className="font-bold text-[15px] text-[#2B3279]">Asset Tracking:</span>
              <span className="text-[13px] text-slate-600 leading-relaxed">
                Institutes are responsible for the physical verification of assets tracked in the system.
              </span>
            </div>

            <div className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex flex-col gap-2">
              <span className="font-bold text-[15px] text-[#2B3279]">Digital Resources:</span>
              <span className="text-[13px] text-slate-600 leading-relaxed">
                Content uploaded to the digital library must respect copyright laws. Unitoppers is not responsible for infringing content uploaded by users.
              </span>
            </div>
          </div>
        </div>

        {/* 6. HRMS & Staff Data */}
        <div id="hrms-staff" className="w-full bg-white rounded-[24px] p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
              <span className="font-bold text-sm">6</span>
            </div>
            <h2 className="font-bold text-[20px] sm:text-[24px] text-[#2B3279]">
              HRMS & Staff Data
            </h2>
          </div>
          
          <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed mb-4">
            The HRMS module handles sensitive staff data including payroll and attendance. Institutes agree to:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 sm:p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-[13px] sm:text-[14px] text-slate-700 font-medium leading-relaxed">
                Maintain strict access controls to staff records.
              </span>
            </div>

            <div className="p-4 sm:p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-[13px] sm:text-[14px] text-slate-700 font-medium leading-relaxed">
                Comply with local labor laws regarding digital attendance and payroll processing.
              </span>
            </div>
          </div>
        </div>

        {/* 7. Transportation & Safety */}
        <div id="transport-safety" className="w-full bg-white rounded-[24px] p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
              <span className="font-bold text-sm">7</span>
            </div>
            <h2 className="font-bold text-[20px] sm:text-[24px] text-[#2B3279]">
              Transportation & Safety
            </h2>
          </div>
          
          <p className="text-[14px] sm:text-[16px] text-slate-600 leading-relaxed">
            The Transportation module provides tracking features. However, real-time tracking is subject to GPS network availability. Unitoppers does not guarantee uninterrupted vehicle tracking services due to external network factors.
          </p>
        </div>

        {/* 8. Data Privacy & Security */}
        <div id="data-security" className="w-full bg-white rounded-[24px] p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
              <span className="font-bold text-sm">8</span>
            </div>
            <h2 className="font-bold text-[20px] sm:text-[24px] text-[#2B3279]">
              Data Privacy & Security
            </h2>
          </div>
          
          <p className="text-[14px] sm:text-[16px] text-slate-600 leading-relaxed">
            We prioritize the security of data across all modules (Admissions, Fees, Exams, etc.). However, institutes are responsible for ensuring that their staff and students maintain strong password hygiene. Unitoppers is not liable for data breaches resulting from compromised user credentials.
          </p>
        </div>

        {/* 9. Governing Law */}
        <div id="governing-law" className="w-full bg-white rounded-[24px] p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <span className="font-bold text-sm">9</span>
            </div>
            <h2 className="font-bold text-[20px] sm:text-[24px] text-[#2B3279]">
              Governing Law
            </h2>
          </div>
          
          <p className="text-[14px] sm:text-[16px] text-slate-600 leading-relaxed">
            These terms are governed by the laws of India. Any disputes arising from the use of the ERP modules shall be subject to the exclusive jurisdiction of the courts in Chennai.
          </p>
        </div>

        {/* 10. Contact Us */}
        <div id="contact-us" className="w-full bg-white rounded-[24px] p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FF7A00] shrink-0">
              <span className="font-bold text-sm">10</span>
            </div>
            <h2 className="font-bold text-[20px] sm:text-[24px] text-[#2B3279]">
              Contact Us
            </h2>
          </div>
          <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed mb-5">
            If you have any questions about these ERP-specific Terms, please contact us:
          </p>

          <div className="p-6 bg-slate-50/90 border border-slate-200 rounded-2xl flex flex-col md:flex-row gap-6 justify-between items-start">
            <div className="flex items-start gap-3.5">
              <MapPin className="w-5 h-5 text-[#FF7A00] shrink-0 mt-0.5" />
              <div className="text-[14px] text-slate-700 leading-relaxed flex flex-col items-start">
                <strong className="text-[#2B3279] text-[16px] block mb-1">Unitoppers</strong>
                <a 
                  href="https://maps.app.goo.gl/meTBDMVegSAcjrcN8" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer"
                >
                  No 1, 1st Floor, Narasimhan St,<br />
                  Jothi Nagar, West Mambalam,<br />
                  Chennai, Tamil Nadu 600033<br />
                  India
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:border-l md:border-slate-200 md:pl-8 w-full md:w-auto">
              <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">Email Address</span>
                <a
                  href="mailto:techsupport@codeship.in"
                  className="text-[15px] sm:text-[16px] font-bold text-[#2B3279] hover:text-[#FF7A00] transition-colors mt-0.5"
                >
                  techsupport@codeship.in
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}
