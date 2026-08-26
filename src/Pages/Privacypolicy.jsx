import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  FileText, 
  Server, 
  UserCheck, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Calendar,
  Sparkles,
  ArrowLeft,
  ChevronRight
} from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../store/slices/uiSlice';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SECTIONS = [
  { id: 'introduction', label: '1. Introduction' },
  { id: 'info-we-collect', label: '2. Information We Collect' },
  { id: 'how-we-use', label: '3. How We Use' },
  { id: 'data-security', label: '4. Data Security' },
  { id: 'sharing-info', label: '5. Sharing Data' },
  { id: 'privacy-rights', label: '6. Your Rights' },
  { id: 'contact-us', label: '7. Contact Us' },
];

export default function Privacypolicy() {
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
      <section className="relative w-8xl pt-[36px] sm:pt-[48px] pb-[20px] px-[16px] sm:px-[32px] lg:px-[48px] max-w-7xl mx-auto text-left">
        
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
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span className="text-[12px] font-bold text-blue-700 uppercase tracking-wider">
              Legal & Data Protection
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-bold text-[28px] sm:text-[38px] lg:text-[44px] text-[#2B3279] tracking-tight leading-tight">
          Privacy Policy
        </h1>

        {/* Metadata Row */}
        <div className="flex flex-wrap items-center gap-4 mt-3 text-[13px] text-slate-500 font-medium">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>Last Updated: August 2026</span>
          </div>
          <span>•</span>
          <span>Effective Date: Immediate</span>
          <span>•</span>
          <span className="text-emerald-600 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            DPDP & GDPR Compliant
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
              Welcome to <strong>Unitoppers</strong> ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Educational ERP System website and services.
            </p>
            <div className="p-4 sm:p-5 bg-slate-50 border-l-4 border-[#FF7A00] rounded-r-2xl text-slate-700 font-medium">
              By accessing or using our services, you confirm that you have read, understood, and agree to the collection and use of your information as described in this Privacy Policy.
            </div>
          </div>
        </div>

        {/* 2. Information We Collect */}
        <div id="info-we-collect" className="w-full bg-white rounded-[24px] p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FF7A00] shrink-0">
              <span className="font-bold text-sm">2</span>
            </div>
            <h2 className="font-bold text-[20px] sm:text-[24px] text-[#2B3279]">
              Information We Collect
            </h2>
          </div>

          {/* 2.1 Personal Information */}
          <div>
            <h3 className="font-bold text-[17px] sm:text-[18px] text-[#2B3279] mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A00]" />
              <span>2.1 Personal Information</span>
            </h3>
            <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you register for the services, express an interest in obtaining information about us or our products/services, or otherwise contact us. The personal information that we collect depends on the context of your interactions with us and the choices you make, and may include:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              <div className="p-4 sm:p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex flex-col gap-1.5">
                <span className="font-bold text-[14px] text-[#2B3279]">Name and Contact Data</span>
                <span className="text-[13px] text-slate-500 leading-relaxed">Email address, phone number, physical address</span>
              </div>
              <div className="p-4 sm:p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex flex-col gap-1.5">
                <span className="font-bold text-[14px] text-[#2B3279]">Credentials</span>
                <span className="text-[13px] text-slate-500 leading-relaxed">Passwords, security questions</span>
              </div>
              <div className="p-4 sm:p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex flex-col gap-1.5">
                <span className="font-bold text-[14px] text-[#2B3279]">Educational Data</span>
                <span className="text-[13px] text-slate-500 leading-relaxed">Student IDs, grades, attendance records for educational institutions</span>
              </div>
              <div className="p-4 sm:p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex flex-col gap-1.5">
                <span className="font-bold text-[14px] text-[#2B3279]">Payment Data</span>
                <span className="text-[13px] text-slate-500 leading-relaxed">Credit card numbers, billing addresses - processed securely by our payment processors</span>
              </div>
            </div>
          </div>

          {/* 2.2 Automatically Collected Information */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <h3 className="font-bold text-[17px] sm:text-[18px] text-[#2B3279] mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span>2.2 Automatically Collected Information</span>
            </h3>
            <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed mb-4">
              We automatically collect certain information when you visit, use, or navigate the services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-3">
              {[
                'IP address and browser characteristics',
                'OS and device name',
                'Language preferences',
                'Referring URLs and location data',
                'Information about how and when you use our services'
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-[13px] sm:text-[14px] text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. How We Use Your Information */}
        <div id="how-we-use" className="w-full bg-white rounded-[24px] p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
              <span className="font-bold text-sm">3</span>
            </div>
            <h2 className="font-bold text-[20px] sm:text-[24px] text-[#2B3279]">
              How We Use Your Information
            </h2>
          </div>
          <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed mb-5">
            We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent. We use the information we collect or receive:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'To facilitate account creation and logon process',
              'To send administrative information to you (product changes, service updates)',
              'To fulfill and manage your orders and subscription',
              'To protect our services (fraud monitoring and prevention)',
              'To improve our services and user experience through analytics',
              'To respond to legal requests and prevent harm'
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-[13px] sm:text-[14px] text-slate-700 font-medium leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Data Security */}
        <div id="data-security" className="w-full bg-white rounded-[24px] p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
              <span className="font-bold text-sm">4</span>
            </div>
            <h2 className="font-bold text-[20px] sm:text-[24px] text-[#2B3279]">
              Data Security
            </h2>
          </div>
          <p className="text-[14px] sm:text-[16px] text-slate-600 leading-relaxed">
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
          </p>
        </div>

        {/* 5. Sharing Your Information */}
        <div id="sharing-info" className="w-full bg-white rounded-[24px] p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
              <span className="font-bold text-sm">5</span>
            </div>
            <h2 className="font-bold text-[20px] sm:text-[24px] text-[#2B3279]">
              Sharing Your Information
            </h2>
          </div>
          <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed mb-5">
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the following legal basis:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex flex-col gap-2">
              <span className="font-bold text-[15px] text-[#2B3279]">Consent:</span>
              <span className="text-[13px] text-slate-600 leading-relaxed">
                We may process your data if you have given us specific consent to use your personal information for a specific purpose.
              </span>
            </div>

            <div className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex flex-col gap-2">
              <span className="font-bold text-[15px] text-[#2B3279]">Legitimate Interests:</span>
              <span className="text-[13px] text-slate-600 leading-relaxed">
                We may process your data when it is reasonably necessary to achieve our legitimate business interests.
              </span>
            </div>

            <div className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex flex-col gap-2">
              <span className="font-bold text-[15px] text-[#2B3279]">Performance of a Contract:</span>
              <span className="text-[13px] text-slate-600 leading-relaxed">
                Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.
              </span>
            </div>
          </div>
        </div>

        {/* 6. Your Privacy Rights */}
        <div id="privacy-rights" className="w-full bg-white rounded-[24px] p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shrink-0">
              <span className="font-bold text-sm">6</span>
            </div>
            <h2 className="font-bold text-[20px] sm:text-[24px] text-[#2B3279]">
              Your Privacy Rights
            </h2>
          </div>
          <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed mb-5">
            Depending on your location, you may have certain rights regarding your personal information, including the right to:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {[
              'Request access and obtain a copy of your personal information',
              'Request rectification or erasure',
              'Restrict the processing of your personal information',
              'Data portability'
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex items-start gap-3">
                <UserCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-[13px] text-slate-700 font-medium leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-[13px] sm:text-[14px] text-slate-500 italic mt-3">
            To exercise these rights, please contact us using the contact details provided below.
          </p>
        </div>

        {/* 7. Contact Us */}
        <div id="contact-us" className="w-full bg-white rounded-[24px] p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FF7A00] shrink-0">
              <span className="font-bold text-sm">7</span>
            </div>
            <h2 className="font-bold text-[20px] sm:text-[24px] text-[#2B3279]">
              Contact Us
            </h2>
          </div>
          <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed mb-5">
            If you have questions or comments about this policy, you may email us or contact us by post at:
          </p>

          <div className="p-6 bg-slate-50/90 border border-slate-200 rounded-2xl flex flex-col md:flex-row gap-6 justify-between items-start">
            <div className="flex items-start gap-3.5">
              <MapPin className="w-5 h-5 text-[#FF7A00] shrink-0 mt-0.5" />
              <div className="text-[14px] text-slate-700 leading-relaxed">
                <strong className="text-[#2B3279] text-[16px] block mb-1">Unitoppers</strong>
                No 1, 1st Floor, Narasimhan St,<br />
                Jothi Nagar, West Mambalam,<br />
                Chennai, Tamil Nadu 600033<br />
                India
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
