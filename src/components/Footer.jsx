import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { triggerDemoScroll } from '../store/slices/uiSlice';
import footerLogo from '../assets/footer-icons/footer-logo.png';
import { User, Mail, Link as LinkIcon, FileText, Send, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Footer() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleDemoClick = () => {
    dispatch(triggerDemoScroll());
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Please enter your name and email.');
      return;
    }
    setError('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setName('');
    setEmail('');
  };

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-white font-['Helvetica',sans-serif] text-left border-t border-slate-100 overflow-hidden">

      {/* Top White Section */}
      <div className="relative w-full">
        {/* Subtle Orange Radial Blur */}
        <div className="absolute w-[400px] h-[400px] right-0 top-0 rounded-[9999px] pointer-events-none z-0 bg-orange-100/50 blur-[80px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute w-[400px] h-[400px] left-0 top-0 rounded-[9999px] pointer-events-none z-0 bg-blue-500/10 blur-[80px] -translate-y-1/2 -translate-x-1/4" />

        <div className="relative z-10 max-w-8xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-[24px] px-[16px] py-[24px] sm:px-[48px] sm:py-[48px]">

          {/* Col 1: Brand (4 cols) */}
          <div className="relative z-10 md:col-span-2 md:row-span-2 lg:col-span-4 lg:row-span-1 flex flex-col items-start md:border-r border-slate-200/60 pr-[0px] md:pr-[32px] shrink-0">
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="flex items-center cursor-pointer text-left focus:outline-none group mb-[16px]"
              aria-label="Unitoppers Home"
            >
              <img src={footerLogo} alt="Unitoppers" className="h-[40px] w-auto object-contain " />
            </button>

            {/* Tagline */}
            <div className="flex flex-col gap-[4px] font-[Helvetica] font-bold text-[18px] text-[#1F2937] leading-tight mb-[12px]">
              <span>One Platform.</span>
              <span>Every Department.</span>
              <span className="text-[#FF7A00]">Zero Chaos.</span>
            </div>

            <p className="font-[Helvetica] text-[#2B3279] text-[14px] leading-relaxed max-w-[280px] mb-[16px]">
              Unitoppers brings your teams, tools, and workflows together in one unified platform — so you can focus on what truly matters.
            </p>

            {/* Social Links */}
            {/* <div className="flex items-center gap-[12px]">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-[40px] h-[40px] rounded-[12px] border border-slate-200 flex items-center justify-center transition-all hover:border-[#0077b5] hover:shadow-sm text-slate-500 hover:text-[#0077b5]">
                <img src={linkedin} alt="LinkedIn" className="w-[20px] h-[20px] object-contain" />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="w-[40px] h-[40px] rounded-[12px] border border-slate-200 flex items-center justify-center transition-all hover:border-black hover:shadow-sm text-slate-500 hover:text-black">
                <img src={twitter} alt="X" className="w-[18px] h-[18px] object-contain" />
              </a>
            </div> */}
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="relative z-10 md:col-span-1 lg:col-span-3 flex flex-col items-start lg:border-r border-slate-200/60 md:pl-[32px] lg:pl-[24px] pr-[0px] lg:pr-[24px]">
            <div className="w-[48px] h-[48px] rounded-[9999px] bg-blue-50 flex items-center justify-center mb-[12px]">
              <LinkIcon className="w-[20px] h-[20px] text-blue-600" />
            </div>
            <h4 className="font-[Helvetica] font-bold text-[16px] text-[#1C1E46] mb-[12px] lg:text-left">Quick Links</h4>
            <ul className="font-[Helvetica] flex flex-col gap-[12px]">
              {['Book a Demo', 'Contact Us'].map((text) => (
                <li key={text}>
                  <button onClick={handleDemoClick} className="flex items-center gap-[12px] text-[14px] text-slate-500 hover:text-blue-600 transition-colors group cursor-pointer">
                    <ChevronRight className="w-[14px] h-[14px] text-blue-600 group-hover:translate-x-1 transition-transform" />
                    {text}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources (2 cols) */}
          <div className="relative z-10 md:col-span-1 lg:col-span-2 flex flex-col items-start lg:border-r border-slate-200/60 md:pl-[12px] lg:pl-[24px] pr-[0px] lg:pr-[24px]">
            <div className="w-[48px] h-[48px] rounded-[9999px] bg-orange-50 flex items-center justify-center mb-[12px]">
              <FileText className="w-[20px] h-[20px] text-orange-500" />
            </div>
            <h4 className="font-[Helvetica] font-bold text-[16px] text-[#1C1E46] mb-[12px] lg:text-left">Resources</h4>
            <ul className="font-[Helvetica] flex flex-col gap-[12px]">
              {['Privacy Policy', 'Terms of Use'].map((text) => (
                <li key={text}>
                  <button onClick={handleDemoClick} className="flex items-center gap-[12px] text-[14px] text-slate-500 hover:text-[#FF7A00] transition-colors group cursor-pointer">
                    <ChevronRight className="w-[14px] h-[14px] text-[#FF7A00] group-hover:translate-x-1 transition-transform" />
                    {text}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Stay Updated (3 cols) */}
          <div className="relative z-10 md:col-span-2 lg:col-span-3 flex flex-col items-start md:pl-[32px] lg:pl-[24px]">
            <div className="w-[48px] h-[48px] rounded-[9999px] bg-green-50 flex items-center justify-center mb-[12px]">
              <Mail className="w-[20px] h-[20px] text-green-500" />
            </div>
            <h4 className="font-[Helvetica] font-bold text-[16px] text-[#1C1E46] mb-[8px] text-left">Stay Updated</h4>
            <p className="font-[Helvetica] text-[13px] text-slate-500 leading-relaxed mb-[16px] text-left max-w-none">
              Subscribe to our newsletter and get the latest updates, insights, and product news.
            </p>

            {submitted ? (
              <div className="p-[12px] font-[Helvetica] bg-emerald-50 border border-emerald-200 rounded-[12px] text-emerald-700 text-[12px] font-semibold text-center w-full max-w-none">
                Thank you! We'll stay in touch.
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-[12px] w-full max-w-none">
                <div className="relative">
                  <User className="w-[16px] h-[16px] text-slate-400 absolute left-[16px] top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value); setError(''); }}
                    placeholder="Your name"
                    className="w-full pl-[44px] pr-[16px] py-[12px] bg-white border border-slate-200 rounded-[12px] text-[13px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#FF7A00] shadow-sm transition-colors"
                  />
                </div>
                <div className="relative">
                  <Mail className="w-[16px] h-[16px] text-slate-400 absolute left-[16px] top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(''); }}
                    placeholder="Enter your email address"
                    className="w-full pl-[44px] pr-[16px] py-[12px] bg-white border border-slate-200 rounded-[12px] text-[13px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#FF7A00] shadow-sm transition-colors"
                  />
                </div>
                {error && (
                  <div className="font-[Helvetica] text-[12px] text-red-500 font-semibold px-[4px]">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  className=" font-[Helvetica] flex items-center justify-center gap-[8px] w-full py-[12px] mt-[4px] bg-[#FF7A00] hover:bg-orange-600 text-white font-semibold text-[14px] rounded-[12px] transition-colors shadow-sm shadow-orange-500/20 cursor-pointer"
                >
                  <Send className="w-[16px] h-[16px]" />
                  Subscribe Now
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Dark Blue Section */}
      <div className="w-full bg-[#1C1E46] px-[16px] sm:px-[48px]">
        <div className="max-w-8xl mx-auto w-full py-[16px] flex flex-col md:flex-row items-center justify-between gap-[16px]">
          {/* Trust text */}
          <div className="flex items-center gap-[16px]">
            <div className="w-[40px] h-[40px] rounded-[9999px] bg-blue-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-[20px] h-[20px] text-blue-300" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-[Helvetica] text-white font-semibold text-[14px]">Trusted by teams. Built for scale.</span>
              <span className="font-[Helvetica] text-slate-400 text-[13px]">Secure. Reliable. Always.</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="font-[Helvetica] text-slate-400 text-[13px] text-center md:text-right">
            © {new Date().getFullYear()} Codeship Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
