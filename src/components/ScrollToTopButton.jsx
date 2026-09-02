import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-[24px] right-[24px] sm:bottom-[74px] sm:right-[32px] w-[40px] h-[40px] sm:w-[38px] sm:h-[38px] bg-gradient-to-tr from-[#FF7A00] to-[#F6881F] hover:from-[#e56d00] hover:to-[#df7914] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 z-[9990] ${
        isVisible ? 'opacity-100 translate-y-0 cursor-pointer' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]" />
    </button>
  );
}
