import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from './store/slices/uiSlice';
import Header from './components/Header';
import Hero from './components/Hero';
import SoundFamiliar from './components/SoundFamiliar';
import FragmentationProblem from './components/FragmentationProblem';
import FeaturesSection from './components/FeaturesSection';
import ComparisonSection from './components/ComparisonSection';
import AcademicShowcase from './components/AcademicShowcase';
import AnalyticsShowcase from './components/AnalyticsShowcase';
import TrustSection from './components/TrustSection';
import HowItWorks from './components/HowItWorks';
import DemoSection from './components/DemoSection';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import ScrollToTopButton from './components/ScrollToTopButton';
import Contactus from './Pages/Contactus';
import Privacypolicy from './Pages/Privacypolicy';
import TermsAndConditions from './Pages/Terms&conditions';
import heroDesktopImg from './assets/hero-bg.png';

export default function App() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.ui.currentPage);

  // Sync with window.location.hash for browser navigation and direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#contact' || hash === '#contact-us' || hash === '#contactus') {
        dispatch(setCurrentPage('contact'));
      } else if (hash === '#privacy' || hash === '#privacy-policy' || hash === '#privacypolicy') {
        dispatch(setCurrentPage('privacy'));
      } else if (hash === '#terms' || hash === '#terms-and-conditions' || hash === '#terms&conditions' || hash === '#terms-of-use') {
        dispatch(setCurrentPage('terms'));
      } else {
        dispatch(setCurrentPage('home'));
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [dispatch]);

  // Scroll to top whenever currentPage changes
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [currentPage]);

  // Render Contact Us Page
  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen w-full bg-[#F8F8FF] text-slate-800 selection:bg-orange-100 selection:text-orange-600 relative overflow-x-hidden">
        <SmoothScroll />
        <Contactus />
        <ScrollToTopButton />
      </div>
    );
  }

  // Render Privacy Policy Page
  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen w-full bg-[#F8F8FF] text-slate-800 selection:bg-orange-100 selection:text-orange-600 relative overflow-x-hidden">
        <SmoothScroll />
        <Privacypolicy />
        <ScrollToTopButton />
      </div>
    );
  }

  // Render Terms and Conditions Page
  if (currentPage === 'terms') {
    return (
      <div className="min-h-screen w-full bg-[#F8F8FF] text-slate-800 selection:bg-orange-100 selection:text-orange-600 relative overflow-x-hidden">
        <SmoothScroll />
        <TermsAndConditions />
        <ScrollToTopButton />
      </div>
    );
  }

  // Render Home Landing Page
  return (
    <div className="min-h-screen w-full bg-[#F8F8FF] text-slate-800 selection:bg-orange-100 selection:text-orange-600 relative overflow-x-hidden">
      <SmoothScroll />

      {/* Radial ambient background glows */}
      <div className="absolute top-[0px] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-linear-to-b from-blue-100/50 via-orange-100/30 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-[40px] w-[384px] h-[384px] bg-orange-200/20 rounded-[9999px] blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-1/4 right-[40px] w-[384px] h-[384px] bg-blue-200/20 rounded-[9999px] blur-3xl pointer-events-none -z-10 animate-pulse" />

      <div className="relative isolate overflow-hidden w-full min-h-fit xl:min-h-[56.25vw]">
        {/* Desktop Background Image (Hidden below 1280px) */}
        <picture className="hidden xl:block absolute inset-[0px] w-full h-full pointer-events-none select-none">
          <img
            src={heroDesktopImg}
            alt="Hero background"
            className="w-full h-full object-cover object-top pointer-events-none select-none"
          />
        </picture>
        <div className="absolute inset-[0px] bg-linear-to-b from-white/20 via-white/10 to-transparent pointer-events-none hidden xl:block" />

        {/* TOP NAVIGATION BAR */}
        <Header />

        {/* SECTION 1: HERO SECTION */}
        <main className="max-w-[1280px] mx-auto text-center relative z-10">
          <Hero />
        </main>
      </div>

      {/* SECTION 2: Sound Familiar? (INTEGRATION) */}
      <SoundFamiliar />

      {/* SECTION 3: Fragmentation Problem (PROBLEM) */}
      <FragmentationProblem />

      {/* SECTION 4: Features & Modules Grid */}
      <FeaturesSection />

      {/* SECTION 5: Why Unitoppers / Comparison Grid */}
      <ComparisonSection />

      {/* SECTION 6: Academic & Examinations Showcase */}
      <AcademicShowcase />

      {/* SECTION 7: Analytics & Multi-Campus Showcase */}
      <AnalyticsShowcase />

      {/* SECTION 8: Trust & Institutional Badges */}
      <TrustSection />

      {/* SECTION 9: How It Works & Onboarding */}
      <HowItWorks />

      {/* SECTION 10: Demo Request Lead Form */}
      <DemoSection />

      {/* SECTION 11: Footer */}
      <Footer />
      
      <ScrollToTopButton />
    </div>
  );
}
