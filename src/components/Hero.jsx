import React from 'react';
import { useDispatch } from 'react-redux';
import { triggerDemoScroll } from '../store/slices/uiSlice';
import arrow from '../assets/hero/arrow-right.png';
import play from '../assets/hero/Group.png';
import shield from '../assets/hero/shield.png';
import heroMobileImg from '../assets/hero/herobg- mobile .png';

export default function Hero() {
  const dispatch = useDispatch();

  const handleDemoClick = () => {
    dispatch(triggerDemoScroll());
  };

  return (
    <section className="relative w-full pt-[48px] pb-[48px] px-[0px] xl:px-[100px] min-h-fit xl:min-h-[85vh] 2xl:min-h-[90vh] flex flex-col justify-start items-center overflow-hidden bg-[#ffffff] xl:bg-transparent font-[Helvetica]">

      {/* HERO TEXT HEADLINE & CTA */}
      <div className="-mt-[16px] sm:mt-[12px] xl:-mt-[24px] 2xl:mt-[4px] pt-[0px] sm:pt-[12px] lg:pt-[24px] xl:pt-[12px] 2xl:pt-[24px] flex flex-col items-center gap-[10px] sm:gap-[14px] md:gap-[16px] lg:gap-[32px] xl:gap-[20px] 2xl:gap-[24px] w-full max-w-[672px] sm:max-w-[768px] md:max-w-[896px] lg:max-w-[1024px] xl:max-w-[896px] 2xl:max-w-[950px] mx-auto text-center relative z-20 px-[24px] sm:px-[32px] md:px-[48px] xl:px-[0px]">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-[8px] sm:gap-[10px] px-[14px] sm:px-[16px] py-[4px] sm:py-[6px] bg-white/90 backdrop-blur-xs border border-[#FF7A00]/40 rounded-[9999px] shadow-xs">
          <span className="font-[Helvetica] font-semibold text-[12px] sm:text-[12px] md:text-[14px] xl:text-[12px] 2xl:text-[13px] text-[#FF7A00]">
            India's Unified School Operating System
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-[Helvetica] font-semibold 2xl:-mt-1.5 text-[14px] min-[375px]:text-[16px] min-[400px]:text-[18px] sm:text-[24px] md:text-[30px] lg:text-[36px] xl:text-[2rem] 2xl:text-[2.25rem] p-[8px] leading-[118%] xl:leading-[115%] text-[#2B3279] tracking-tight max-w-[576px] sm:max-w-[672px] md:max-w-[768px] lg:max-w-[896px] xl:max-w-[896px] 2xl:max-w-[1024px]">
          <span className="whitespace-nowrap sm:whitespace-normal">Your School Runs on 10 Different Software.</span><br />
          <span className="text-[#FF7A00]">It Shouldn't.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-[Helvetica] text-[12px] -mt-[12px] sm:text-[14px] md:text-[14px] lg:text-[13px] lg:max-w-[672px] xl:text-[13px] xl:max-w-[672px] 2xl:text-[15px] leading-relaxed text-[#2B3279] w-full max-w-[1024px] 2xl:max-w-[768px] mx-auto">
          Unitoppers replaces your fragmented stack of tools with one AI-powered platform, covering academics, finance, examinations, communication, HR, and more. One login. One database. Every department.
        </p>

        {/* CTA Buttons - Single Line on Mobile & Compact on Tablet */}
        <div className="flex flex-row items-center justify-center gap-[8px] sm:gap-[12px] mt-[2px] pb-[12px] sm:mt-[4px] xl:mt-[0px] xl:pb-[4px] w-full max-w-[448px] sm:max-w-none mx-auto">
          {/* Primary Orange Button */}
          <button
            onClick={handleDemoClick}
            className=" font-[Helvetica] flex-1 sm:flex-none flex items-center justify-center gap-[6px] sm:gap-[8px] px-[14px] sm:px-[20px] md:px-[24px] xl:px-[16px] 2xl:px-[24px] py-[8px] sm:py-[10px] md:py-[12px] xl:py-[6px] 2xl:py-[10px] bg-[#FF7A00] hover:bg-orange-600 text-white font-semibold text-[11px] sm:text-[12px] md:text-[14px] xl:text-[11px] 2xl:text-[13px] rounded-[9999px] transition-all shadow-lg shadow-orange-500/25 hover:scale-[1.02] cursor-pointer group whitespace-nowrap"
          >
            <span>Book a Free demo</span>
            <img src={arrow} alt="" className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[20px] md:h-[20px] xl:w-[14px] xl:h-[14px] 2xl:w-[18px] 2xl:h-[18px] transition-transform group-hover:translate-x-1" />
          </button>

          {/* Secondary Outlined Button */}
          <button
            onClick={handleDemoClick}
            className="font-[Helvetica] flex-1 sm:flex-none flex items-center justify-center gap-[6px] sm:gap-[8px] px-[14px] sm:px-[20px] md:px-[24px] xl:px-[16px] 2xl:px-[24px] py-[8px] sm:py-[10px] md:py-[12px] xl:py-[6px] 2xl:py-[10px] border border-[#1E255E]/30 hover:border-[#1E255E] text-[#2B3279] font-semibold text-[11px] sm:text-[12px] md:text-[14px] xl:text-[11px] 2xl:text-[13px] rounded-[9999px] transition-all shadow-2xs hover:bg-slate-50 cursor-pointer group whitespace-nowrap"
          >
            <span>See How it works</span>
            <div className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] rounded-[9999px] flex items-center justify-center group-hover:scale-110 transition-transform">
              <img src={play} alt="" className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] xl:w-[14px] xl:h-[14px]" />
            </div>
          </button>
        </div>

        {/* Trust Badge */}
        <div className="flex flex-row pt-[0px] items-center justify-center gap-[6px] sm:gap-[8px] mt-[0px] sm:-mt-[4px] md:-mt-[8px] xl:-mt-[12px] 2xl:-mt-[4px] text-[#2B3279] text-[10px] sm:text-[12px] md:text-[14px] xl:text-[11px] 2xl:text-[12px] w-full max-w-[512px] xl:max-w-[448px] 2xl:max-w-[448px] mx-auto">
          <img src={shield} alt="" className="-mt-[10px] w-[32px] h-[30px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px] xl:w-[28px] xl:h-[28px] 2xl:w-[32px] 2xl:h-[32px] shrink-0" />
          <span className="font-[Helvetica] text-center sm:text-left max-w-[320px] sm:max-w-[384px] md:max-w-[448px] xl:max-w-[320px] 2xl:max-w-[384px]">
            Trusted by private schools, government institutions, and coaching centers <span className="text-[#FF7A00] font-semibold">across India.</span>
          </span>
        </div>
      </div>

      {/* MOBILE & TABLET HERO IMAGE: Fills full width of the page (< 1280px) */}
      <div className="block xl:hidden w-full max-w-full mx-auto mt-[8px] sm:mt-[12px] md:mt-[16px] px-[0px] z-20">
        <div className="relative w-full flex justify-center">
          <img
            src={heroMobileImg}
            alt="Unitoppers Platform"
            className="w-full h-auto object-contain block pointer-events-none select-none"
          />
        </div>
      </div>
    </section>
  );
}

