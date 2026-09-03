import React from 'react';
import { useDispatch } from 'react-redux';
import { triggerDemoScroll } from '../store/slices/uiSlice';
import ascase from '../assets/landing-page-bg/ascase.png';
import tnstats from '../assets/landing-page-bg/tnstats.png';
import pieIcon from '../assets/ascase/fluent-color_data-pie-24.png';
import analyticsIcon from '../assets/ascase/ion_analytics-sharp.png';
import shieldIcon from '../assets/ascase/mdi_shield-check.png';
import govIcon from '../assets/ascase/mingcute_government-fill (1).png';
import { ArrowRight } from 'lucide-react';

export default function AnalyticsShowcase() {
  const dispatch = useDispatch();

  const handleDemoClick = () => {
    dispatch(triggerDemoScroll());
  };
  return (
    <section
      id="analyticsshowcase"
      className="relative w-full min-h-fit mt-[0px] pt-[24px] pb-[24px] sm:pt-[48px] sm:pb-[48px] px-[16px] sm:px-[48px] overflow-hidden font-['Helvetica',sans-serif] bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${ascase})`, backgroundPosition: 'center -20px' }}
    >

      {/* Absolute Background Image Layer */}
      <img
        src={ascase}
        alt="Analytics Showcase Background"
        className="absolute inset-[0px] w-full h-full z-0 pointer-events-none select-none object-cover object-top scale-105 -translate-y-8 origin-top"
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-8xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-[24px] lg:gap-[32px]">

        {/* LEFT COLUMN: Text, Highlights & CTA */}
        <div className="flex flex-col items-start gap-[16px] sm:gap-[24px] w-full lg:w-[48%] text-left shrink-0">

          {/* Tag Pill Badge */}
          <div className="inline-flex items-center gap-[8px] px-[14px] py-[6px] sm:px-[16px] sm:py-[8px] rounded-[9999px] bg-white backdrop-blur-xs border border-[#FF7A00]/50 shadow-2xs">
            <img src={govIcon} alt="Gov" className="w-[20px] h-[28px] object-contain pointer-events-none select-none" />
            <span className="font-[Helvetica] font-semibold text-[12px] sm:text-[14px] text-[#FF7A00]">
              For Government Institutions
            </span>
          </div>

          {/* Heading & Descriptions Wrapper */}
          <div className="flex flex-col gap-[16px] sm:gap-[24px] w-full">
            {/* Heading */}
            <h2 className="font-[Helvetica] font-bold text-[20px] sm:text-[24px] lg:text-[24px] gap-[24px] text-[#2B3279] tracking-tight leading-tight">
              One dashboard replacing six departmental <span className="text-[#FF7A00]">reports.</span>
            </h2>

            {/* Descriptions */}
            <div className="w-full max-w-[576px] xl:w-[920px] flex flex-col gap-[16px] font-[Helvetica] font-normal text-[16px] sm:text-[14px] lg:text-[16px] text-[#2B3279] leading-relaxed">
              <p>
                Unitoppers is built for the scale and compliance needs of government schools and educational bodies, aligned with India's digital governance initiatives.
              </p>
              <p>
                From student attendance to teacher performance, fee collection to infrastructure tracking, Unitoppers gives state education departments a single, real-time window into every institution under their purview.
              </p>
            </div>
          </div>

          {/* 3 Bullet Point Cards (vertical stack) */}
          <div className="flex flex-col gap-[16px] sm:gap-[20px] w-full mt-[4px]">

            {/* Item 1 */}
            <div className="flex items-center gap-[14px] sm:gap-[16px]">
              <div className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] lg:w-[56px] lg:h-[56px] rounded-[9999px] bg-orange-50/80 border border-orange-100 flex items-center justify-center shrink-0 shadow-2xs">
                <img
                  src={pieIcon}
                  alt="Standardized reporting"
                  className="w-[20px] h-[20px] sm:w-[28px] sm:h-[28px] object-contain pointer-events-none select-none"
                />
              </div>
              <div className="flex-1 min-w-0 flex items-center">
                <p className="font-[Helvetica] font-bold text-[16px] sm:text-[16px] lg:text-[16px] text-[#2B3279] leading-relaxed">
                  Standardized reporting across all institutions no more chasing data from individual schools
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-[14px] sm:gap-[16px]">
              <div className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] lg:w-[56px] lg:h-[56px] rounded-[9999px] bg-orange-50/80 border border-orange-100 flex items-center justify-center shrink-0 shadow-2xs">
                <img
                  src={analyticsIcon}
                  alt="Real-time visibility"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] object-contain pointer-events-none select-none"
                />
              </div>
              <div className="flex-1 min-w-0 flex items-center">
                <p className="font-[Helvetica] font-bold text-[16px] sm:text-[16px] lg:text-[16px] text-[#2B3279] leading-relaxed">
                  Real-time visibility into student performance, attendance, and operational health
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-[14px] sm:gap-[16px]">
              <div className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] lg:w-[56px] lg:h-[56px] rounded-[9999px] bg-orange-50/80 border border-orange-100 flex items-center justify-center shrink-0 shadow-2xs">
                <img
                  src={shieldIcon}
                  alt="AI-powered governance"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] object-contain pointer-events-none select-none"
                />
              </div>
              <div className="flex-1 min-w-0 flex items-center">
                <p className="font-[Helvetica] font-bold text-[16px] sm:text-[16px] lg:text-[16px] text-[#2B3279] leading-relaxed">
                  AI-powered governance tools that reduce manual auditing and intervention
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Button */}
          <button
            onClick={handleDemoClick}
            className="font-[Helvetica] mt-[8px] inline-flex items-center gap-[8px] px-[20px] py-[14px] sm:px-[24px] sm:py-[16px] bg-white border border-[#FF7A00] text-[#FF7A00] font-semibold text-[12px] sm:text-[14px] rounded-[9999px] shadow-2xs hover:bg-orange-50 transition-colors cursor-pointer group"
          >
            <img src={govIcon} alt="Gov" className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] object-contain pointer-events-none select-none" />
            <span>Request a Government Demo</span>
            <ArrowRight className="w-[16px] h-[16px] transition-transform group-hover:translate-x-1" />
          </button>

        </div>

        {/* RIGHT COLUMN: Government Education Dashboard Image (tnstats.png) */}
        <div className="w-full lg:w-[50%] relative flex flex-col items-center justify-center mt-[24px] lg:mt-[0px]">
          <div className="w-full max-w-[672px] rounded-[16px] overflow-hidden shadow-2xl">
            <img
              src={tnstats}
              alt="Government Education Dashboard - Tamil Nadu"
              className="w-full h-auto object-contain block pointer-events-none select-none"
            />
          </div>
        </div>

      </div>

    </section>
  );
}
