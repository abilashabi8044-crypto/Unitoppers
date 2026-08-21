import React from 'react';
import { useDispatch } from 'react-redux';
import { triggerDemoScroll, setCurrentPage } from '../store/slices/uiSlice';
import mainLogo from '../assets/main-icon/Layer_1.png';
import { LogIn, ArrowRight } from 'lucide-react';

export default function Header() {
  const dispatch = useDispatch();

  const handleDemoClick = () => {
    dispatch(setCurrentPage('home'));
    window.location.hash = '';
    setTimeout(() => {
      dispatch(triggerDemoScroll());
    }, 50);
  };

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    dispatch(setCurrentPage('home'));
    window.location.hash = '';
    scrollToTop();
  };

  return (
    <header className="bg-[#FFFFFF] xl:bg-transparent sticky top-[0px] left-[0px] right-[0px] w-full max-w-[1280px] mx-auto px-[16px] sm:px-[24px] lg:px-[32px] pt-[12px] sm:pt-[16px] pb-[8px] z-50 transition-all">
      <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm rounded-[9999px] px-[10px] sm:px-[24px] py-[8px] sm:py-[14px] flex flex-nowrap items-center justify-between gap-[6px] sm:gap-[12px] transition-all hover:shadow-md">
        {/* Logo */}
        <div onClick={handleLogoClick} className="flex items-center gap-[6px] sm:gap-[10px] cursor-pointer shrink-0">
          <img
            src={mainLogo}
            alt="Unitoppers"
            className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] md:w-[36px] md:h-[36px] object-contain pointer-events-none select-none"
          />
          <span className="font-[Helvetica] font-semibold text-[14px] sm:text-[20px] md:text-[24px] tracking-tight text-[#2B3279]">
            UNITOPPERS
          </span>
        </div>

        {/* Nav Buttons */}
        <div className="flex items-center gap-[4px] sm:gap-[12px] md:gap-[16px] shrink-0">
          {/* Login Button */}
          <button
            className="font-[Helvetica] flex items-center gap-[4px] sm:gap-[6px] text-slate-600 hover:text-slate-900 font-semibold text-[11px] sm:text-[14px] transition-colors py-[4px] px-[8px] sm:py-[6px] sm:px-[14px] rounded-[9999px] hover:bg-slate-100/60 cursor-pointer"
          >
            <span>Login</span>
            <LogIn className="w-[12px] h-[12px] sm:w-[16px] sm:h-[16px]" />
          </button>

          {/* Book a Free Demo Button */}
          <button
            onClick={handleDemoClick}
            className="font-[Helvetica] bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-[11px] sm:text-[14px] px-[10px] sm:px-[20px] py-[6px] sm:py-[10px] rounded-[9999px] shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-[1.02] flex items-center gap-[4px] sm:gap-[8px] group cursor-pointer whitespace-nowrap"
          >
            <span className=" font-[Helvetica] hidden min-[360px]:inline">Book a Free demo</span>
            <span className=" font-[Helvetica] inline min-[360px]:hidden">Book Demo</span>
            <div className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px] rounded-[9999px] bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform shrink-0">
              <ArrowRight className="w-[10px] h-[10px] sm:w-[14px] sm:h-[14px] text-white" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

