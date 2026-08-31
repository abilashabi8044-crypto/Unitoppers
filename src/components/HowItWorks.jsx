import React from 'react';
import onboardIcon from '../assets/how-its-works/duo-icons_dashboard.png';
import configureIcon from '../assets/how-its-works/tabler_settings-filled.png';
import trainIcon from '../assets/how-its-works/oui_training.png';
import goLiveIcon from '../assets/how-its-works/ion_rocket1 .png';
import shield from '../assets/how-its-works/shield.png';
import headphone from '../assets/how-its-works/ix_support.png';

const steps = [
  {
    step: '01',
    title: 'Onboard',
    description: "We map your institution's structure, departments, and existing workflows. Your data, your way.",
    icon: onboardIcon,
  },
  {
    step: '02',
    title: 'Configure',
    description: 'Roles, permissions, fee structures, academic calendars, set up to match how your institution actually works.',
    icon: configureIcon,
  },
  {
    step: '03',
    title: 'Train',
    description: 'Every stakeholder from the chairman to the teacher, gets role-specific onboarding. No one gets left behind.',
    icon: trainIcon,
  },
  {
    step: '04',
    title: 'Go Live',
    description: 'Your institution goes live on Unitoppers. We stay on until everything runs smoothly.',
    icon: goLiveIcon,
  },
];

export default function HowItWorks() {
  return (
    <section id="howitworks" className="relative w-full mt-[0px] pt-[24px] pb-[24px] sm:pt-[48px] sm:pb-[48px] px-[16px] sm:px-[48px] bg-[#F8F8FF] overflow-hidden font-['Helvetica',sans-serif]">
      {/* Background Soft Glows */}
      <div className="absolute w-[240px] h-[240px] -left-[160px] top-[96px] rounded-[9999px] pointer-events-none z-0 opacity-30 bg-blue-700 blur-3xl" />
      <div className="absolute w-[288px] h-[288px] -right-[64px] bottom-[40px] rounded-[9999px] pointer-events-none z-0 opacity-30 bg-orange-200 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col items-center gap-[16px] sm:gap-[24px] lg:gap-[32px]">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-[24px] max-w-[768px] px-[4px]">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-[8px] px-[16px] py-[6px] rounded-[9999px] bg-white border border-[#FF7A00]/70 shadow-2xs">
            <img src={goLiveIcon} alt="Rocket" className="w-[20px] h-[20px] object-contain pointer-events-none select-none" />
            <span className="font-[Helvetica] font-semibold text-[12px] sm:text-[14px] text-[#FF7A00]">
              Getting Started
            </span>
          </div>

          {/* Heading & Subtitle Wrapper */}
          <div className="flex flex-col gap-[16px] sm:gap-[24px] w-full">
            {/* Heading */}
            <h2 className="font-[helvetica] font-semibold text-[20px] sm:text-[24px] lg:text-[24px] xl:text-[24px] text-[#2B3279] tracking-tight leading-tight">
              You don't add Unitoppers. You <span className="text-[#FF7A00]">replace everything else.</span>
            </h2>

            {/* Subtitle */}
            <div className="font-[Helvetica] font-medium text-[0.95rem] sm:text-[16px] text-[#2B3279] space-y-1">
              <p>
                Switching feels daunting. <span className="font-bold text-[#1f2a7c]">It isn't.</span> Our implementation team has done
              </p>
              <p>this for hundreds of institutions, and we handle the heavy lifting.</p>
            </div>
          </div>
        </div>

        {/* 4 Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[12px] sm:gap-[20px] w-full max-w-[1280px] mt-[4px]">
          {steps.map((item, index) => (
            <div
              key={index}
              className="w-full h-full flex flex-col items-center text-center p-[16px] sm:p-[20px] sm:pb-[16px] lg:p-[24px] lg:pb-[16px] xl:p-[28px] xl:pb-[16px] bg-white rounded-[24px] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.13)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative"
            >
              {/* Step Number Top-Left Badge */}
              <div className="absolute top-[16px] left-[16px] px-[10px] py-[2px] bg-orange-50 text-[#FF7A00] font-bold text-[12px] rounded-[9999px] border border-orange-200/50">
                {item.step}
              </div>

              {/* Center Circle Icon Container */}
              <div className="w-[56px] h-[56px] sm:w-[80px] sm:h-[80px] rounded-[9999px] bg-linear-to-br from-amber-100/70 via-orange-100/60 to-orange-50/50 flex items-center justify-center mb-[12px] mt-[20px] transition-transform group-hover:scale-105 shadow-2xs">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[28px] h-[28px] sm:w-[40px] sm:h-[40px] object-contain pointer-events-none select-none"
                />
              </div>

              {/* Title */}
              <h3 className="font-[Helvetica] font-bold text-[1rem] sm:text-[18px] text-[#2B3279] mb-[6px] leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-[helvetica] text-[0.9rem] sm:text-[14px] text-[#2B3279] leading-relaxed max-w-[320px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner Pill */}
        <div className="w-full max-w-[512px] lg:max-w-[576px] mt-[8px] flex flex-row items-center justify-center gap-[10px] sm:gap-[16px] px-[16px] py-[12px] sm:py-[10px] border border-[#FF7A00]/70 rounded-[16px] sm:rounded-[9999px] shadow-sm bg-white/95">
          {/* Left Shield Badge Icon */}
          <img src={shield} alt="Shield" className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] object-contain shrink-0 pointer-events-none select-none" />

          {/* Text Stack (2 lines) */}
          <div className="flex flex-col text-left justify-center leading-snug min-w-0 flex-1 sm:flex-initial">
            <div className="font-[Helvetica] font-bold text-[12px] sm:text-[14px] md:text-[16px] text-[#2B3279] tracking-tight">
              Most institutions are fully operational within <span className="text-[#FF7A00] font-extrabold">4-6 weeks.</span>
            </div>
            <div className="font-[Helvetica] font-medium text-[11px] sm:text-[12px] text-[#2B3279] mt-[2px]">
              Ongoing support included.
            </div>
          </div>

          {/* Right Headset Icon */}
          <img src={headphone} alt="Support" className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] object-contain shrink-0 pointer-events-none select-none" />
        </div>
      </div>
    </section>
  );
}
