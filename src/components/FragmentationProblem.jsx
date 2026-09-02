import React from 'react';
import layer1Logo from '../assets/Layer_1 (1).png';
import mainLogo from '../assets/main-icon/Layer_1.png';

// Right side feature icons
import fragIcon1 from '../assets/frag-problem/SVG.png';
import fragIcon2 from '../assets/frag-problem/SVG (1).png';
import fragIcon3 from '../assets/frag-problem/SVG (2).png';
import fragIcon4 from '../assets/frag-problem/SVG (3).png';
import gLinesImg from '../assets/frag-problem/g-lines.png';

// Left side pain point icons from src/assets/buy-familiar
import tallyImg from '../assets/tally.png';
import whatsappIcon from '../assets/buy-familiar/selfhst_whatsapp.png';
import formsIcon from '../assets/buy-familiar/simple-icons_googleforms.png';
import sheetsIcon from '../assets/buy-familiar/selfhst_google-sheets.png';
import registersIcon from '../assets/buy-familiar/vaadin_records.png';
import lmsIcon from '../assets/buy-familiar/fluent_hat-graduation-28-filled (2).png';
import examsIcon from '../assets/buy-familiar/material-symbols_computer.png';
import reconciliationIcon from '../assets/buy-familiar/SVG (4).png';

const painPoints = [
  {
    icon: tallyImg,
    label: 'Tally for accounting',
    imgStyle: 'w-[28px] h-[16px] object-contain',
    bgColor: '#E6F4EA',
    borderColor: '#CEEAD6',
  },
  {
    icon: whatsappIcon,
    label: 'WhatsApp for parent communication',
    imgStyle: 'w-[20px] h-[20px] object-contain',
    bgColor: '#DCF8C6',
    borderColor: '#BBE6A3',
  },
  {
    icon: formsIcon,
    label: 'Google Forms for admissions',
    imgStyle: 'w-[20px] h-[20px] object-contain',
    bgColor: '#F3E8FF',
    borderColor: '#E9D5FF',
  },
  {
    icon: sheetsIcon,
    label: 'Excel sheets for attendance & reports',
    imgStyle: 'w-[20px] h-[20px] object-contain',
    bgColor: '#E0F2FE',
    borderColor: '#BAE6FD',
  },
  {
    icon: registersIcon,
    label: 'Paper registers for student records',
    imgStyle: 'w-[20px] h-[20px] object-contain',
    bgColor: '#FEF3C7',
    borderColor: '#FDE68A',
  },
  {
    icon: lmsIcon,
    label: 'A separate LMS for digital learning',
    imgStyle: 'w-[20px] h-[20px] object-contain',
    bgColor: '#EEF2FF',
    borderColor: '#E0E7FF',
  },
  {
    icon: examsIcon,
    label: 'A separate platform for online exams',
    imgStyle: 'w-[20px] h-[20px] object-contain',
    bgColor: '#FFE4E6',
    borderColor: '#FECDD3',
  },
  {
    icon: reconciliationIcon,
    label: 'Manual reconciliation every month',
    imgStyle: 'w-[20px] h-[20px] object-contain',
    bgColor: '#FFEDD5',
    borderColor: '#FED7AA',
  },
];

export default function FragmentationProblem() {
  return (
    <section className="relative w-full h-auto mt-[0px] pt-[24px] pb-[24px] sm:pt-[40px] sm:pb-[48px] px-[16px] sm:px-[48px] bg-[#F8F8FF] overflow-hidden font-['Helvetica',sans-serif]">

      {/* Background Soft Glows */}
      <div className="absolute w-[384px] h-[384px] -right-[80px] top-[80px] rounded-[9999px] pointer-events-none z-0 opacity-60 bg-blue-100 blur-3xl" />
      <div className="absolute w-[384px] h-[384px] -left-[80px] top-[40px] rounded-[9999px] pointer-events-none z-0 opacity-60 bg-orange-100 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col items-center gap-[16px] sm:gap-[24px]">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-[16px] max-w-[768px]">
          <h2 className="font-[Helvetica] text-[20px] font-bold sm:text-[24px] lg:text-[24px] text-[#2B3279] tracking-tight leading-relaxed">
            Your institution doesn't have a software problem.{' '}
            <span className="text-[#FF7A00]">It has a fragmentation problem.</span>
          </h2>
          <p className="font-[Helvetica] text-[16px] sm:text-[16px] text-slate-500">
            Your institution probably runs all of these - separately.
          </p>
        </div>

        {/* Content Layout: 3 Columns (Left Pills | Middle SVG Connection Arcs | Right Feature Box) */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-[24px] lg:gap-[16px] xl:gap-[0px] mt-[16px]">

          {/* Left Column — 8 Software Pain Points */}
          <div className="flex flex-col gap-[12px] w-full max-w-[448px] lg:max-w-none lg:w-[46%] xl:w-[380px] shrink-0 z-10">
            {painPoints.map((item, index) => (
              <div
                key={index}
                className="flex items-center pl-[8px] pr-[24px] py-[10px] gap-[12px] w-full bg-white rounded-[9999px] border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-all cursor-default group"
              >
                {/* Icon Container with Custom Circle Background */}
                <div
                  className="w-[36px] h-[36px] rounded-[9999px] flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    className={`${item.imgStyle} pointer-events-none select-none`}
                  />
                </div>

                {/* Label */}
                <span className="font-[Helvetica] font-sm text-[16px] sm:text-[14px] text-[#2B3279]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Center Connected Lines Image & Logo Arc Badge (Visible on XL desktop screens 1280px+) */}
          <div className="hidden xl:flex flex-col items-center justify-center w-[264px] h-[576px] relative shrink-0 -mx-[24px]">
            <img
              src={gLinesImg}
              alt="Connected lines"
              className="absolute inset-y-[16px] inset-x-[0px] w-full h-[calc(100%-32px)] object-fill pointer-events-none select-none opacity-90"
            />

            {/* Central White Circular Badge */}
            <div className="ml-[240px] w-[72px] h-[72px] rounded-[9999px] bg-white shadow-xl border border-slate-100 flex items-center justify-center z-20 transition-transform hover:scale-105">
              <img src={mainLogo} alt="Unitoppers" className="w-[40px] h-[40px] object-contain pointer-events-none select-none" />
            </div>
          </div>

          {/* Right Column — Unitoppers Platform Showcase Card */}
          <div className="flex flex-col items-center gap-[16px] w-full max-w-[448px] lg:max-w-none lg:w-[50%] xl:w-[420px] shrink-0 relative z-10">

            {/* Orange Header Pill Banner with White Logo Image */}
            <div className="w-full bg-[#FF7A00] py-[14px] px-[24px] rounded-[16px] shadow-md flex items-center justify-center">
              <img src={layer1Logo} alt="UNITOPPERS" className="h-[28px] w-auto object-contain pointer-events-none select-none" />
            </div>

            {/* White Feature Box */}
            <div className="-ml-[4px] relative w-full bg-white rounded-[24px] p-[24px] sm:p-[28px] shadow-[0_10px_35px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-[24px]">

              {/* Feature 1: One login */}
              <div className="flex items-center gap-[16px]">
                <div className="w-[40px] h-[40px] rounded-[12px] bg-purple-50 flex items-center justify-center shrink-0">
                  <img src={fragIcon1} alt="One login" className="w-[20px] h-[20px] object-contain pointer-events-none select-none" />
                </div>
                <div className="font-[Helvetica] text-[14px] sm:text-[16px] text-[#2B3279]">
                  <span className="font-[Helvetica] font-bold text-purple-600">One login</span> for every stakeholder
                </div>
              </div>

              {/* Feature 2: One database */}
              <div className="flex items-center gap-[16px]">
                <div className="w-[40px] h-[40px] rounded-[12px] bg-orange-50 flex items-center justify-center shrink-0">
                  <img src={fragIcon2} alt="One database" className="w-[20px] h-[20px] object-contain pointer-events-none select-none" />
                </div>
                <div className="font-[Helvetica] text-[14px] sm:text-[16px] text-[#2B3279]">
                  <span className="font-[Helvetica] font-bold text-[#FF7A00]">One database</span> across every department
                </div>
              </div>

              {/* Feature 3: One platform */}
              <div className="flex items-center gap-[16px]">
                <div className="w-[40px] h-[40px] rounded-[12px] bg-indigo-50 flex items-center justify-center shrink-0">
                  <img src={fragIcon3} alt="One platform" className="w-[20px] h-[20px] object-contain pointer-events-none select-none" />
                </div>
                <div className="font-[Helvetica] text-[14px] sm:text-[16px] text-[#2B3279]">
                  <span className="font-[Helvetica] font-bold text-indigo-600">One platform</span> for every operation
                </div>
              </div>

              {/* Feature 4: One source of truth */}
              <div className="flex items-center gap-[16px]">
                <div className="w-[40px] h-[40px] rounded-[12px] bg-amber-50 flex items-center justify-center shrink-0">
                  <img src={fragIcon4} alt="One source of truth" className="w-[20px] h-[20px] object-contain pointer-events-none select-none" />
                </div>
                <div className="font-[Helvetica] text-[14px] sm:text-[16px] text-[#2B3279]">
                  <span className="font-[Helvetica] font-bold text-amber-500">One source of truth</span> — always
                </div>
              </div>

              {/* Overlapping Floating Circle Badge on Right Edge */}
              {/* <div className="absolute -right-[8px] sm:-right-[16px] xl:-right-[32px] top-1/2 -translate-y-1/2 w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] xl:w-[72px] xl:h-[72px] rounded-[9999px] bg-white border border-slate-100 shadow-xl flex items-center justify-center p-[8px] z-20 transition-transform hover:scale-105">
                <img src={mainLogo} alt="Unitoppers" className="ml-[4px] w-[40px] h-[32px] sm:w-[48px] sm:h-[40px] object-contain pointer-events-none select-none" />
              </div> */}

            </div>

          </div>

        </div>

        {/* Bottom Stack Banner Pill */}
        <div className="mt-[16px] flex items-center justify-center px-[24px] py-[10px] bg-white border border-[#FF7A00]/50 rounded-[9999px] shadow-xs gap-[8px] text-center max-w-full">
          <img src={mainLogo} alt="Unitoppers" className="w-[20px] h-[20px] object-contain pointer-events-none select-none shrink-0" />
          <span className="font-[Helvetica] font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] text-[#1E255E]">
            Unitoppers doesn't add to your stack.{' '}
            <span className="font-[Helvetica] font-bold text-[#FF7A00]">It is the Stack</span>
          </span>
        </div>

      </div>
    </section>
  );
}

