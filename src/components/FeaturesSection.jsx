import React from 'react';
import oneplace from '../assets/landing-page-bg/oneplace.png';
import mainLogo from '../assets/main-icon/Layer_1.png';
import academicIcon from '../assets/platform/fluent_hat-graduation-28-filled.png';
import erpIcon from '../assets/platform/gcp_administration.png';
import financeIcon from '../assets/platform/streamline-ultimate_accounting-calculator-1-bold.png';
import examIcon from '../assets/platform/Vector.png';
import lmsIcon from '../assets/platform/material-symbols_book-rounded.png';
import analyticsIcon from '../assets/platform/material-symbols_finance.png';

const suites = [
  {
    title: 'Academic Suite',
    description: 'From admissions to alumni manage the complete student lifecycle. Curriculum planning, lesson delivery, attendance, and performance tracking in one connected flow.',
    icon: academicIcon,
    bgColor: '#EFF6FF',
  },
  {
    title: 'ERP & Administration',
    description: 'Replace your manual workflows. Timetables, front office, visitor management, assets, events, smart ID cards, and certificates all automated.',
    icon: erpIcon,
    bgColor: '#F1F5F9',
  },
  {
    title: 'Finance & Accounting',
    description: 'GST ready double entry accounting, fee management, automated invoicing, scholarships, and financial reports built in, not bolted on.',
    icon: financeIcon,
    bgColor: '#F0FDF4',
  },
  {
    title: 'Examination Platform',
    description: 'Build question banks, schedule tests, conduct online exams with AI proctoring, and publish results without touching a third party tool.',
    icon: examIcon,
    bgColor: '#FFF1F2',
  },
  {
    title: 'Learning Management',
    description: 'Digital content, live lectures, self paced learning, assignments, Q&A forums, and homework tracking the classroom, extended online.',
    icon: lmsIcon,
    bgColor: '#FEFCE8',
  },
  {
    title: 'Analytics & Reporting',
    description: 'Real-time dashboards across academics, finance, attendance, and HR. Stop chasing reports. Start making decisions.',
    icon: analyticsIcon,
    bgColor: '#FAF5FF',
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative w-full overflow-hidden font-[Helvetica] mt-[0px] pt-[24px] pb-[24px] sm:pt-[48px] sm:pb-[48px] px-[16px] sm:px-[48px]"
    >
      {/* Background Image Layer with exact Figma specs */}
      <div
        className="absolute top-[-79.5px] left-[-173.5px] w-[1960px] h-[2941px] z-0 pointer-events-none opacity-100 bg-no-repeat bg-top bg-cover"
        style={{ backgroundImage: `url(${oneplace})` }}
      />
      <div className="absolute inset-[0px] z-0 bg-white/30 backdrop-blur-[1px]" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-8xl mx-auto flex flex-col items-center gap-[16px] sm:gap-[24px] lg:gap-[32px]">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-[24px] max-w-[768px] px-[4px]">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-[8px] px-[16px] py-[6px] rounded-[9999px]  border border-[#FF7A00]/50 shadow-2xs">
            <img src={mainLogo} alt="The platform" className="w-[40px] h-[24px] object-contain pointer-events-none select-none" />
            <span className="font-[Helvetica] font-semibold text-[12px] sm:text-[14px] text-[#FF7A00]">
              The platform
            </span>
          </div>

          {/* Heading & Subtitle Wrapper */}
          <div className="flex flex-col gap-[16px] sm:gap-[24px] w-full">
            {/* Heading */}
            <h2 className="font-bold text-[20px] sm:text-[24px] lg:text-[24px] leading-tight text-[#2B3279] gap-[16px] tracking-tight px-[4px] sm:px-[0px]">
              Everything your institution runs in <span className="text-[#FF7A00]">one place.</span>
            </h2>

            {/* Subtitle */}
            <p className="w-full max-w-[672px] font-normal text-[16px] sm:text-[16px] text-slate-600">
              Six fully integrated suites. One shared database. Zero duplication.
            </p>
          </div>
        </div>

        {/* 6 Feature Suites Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] sm:gap-[24px] w-full mt-[8px] justify-items-center">
          {suites.map((suite, index) => (
            <div
              key={index}
              className="w-full max-w-[512px] min-h-30 flex flex-row items-start gap-[14px] sm:gap-[16px] p-[16px] bg-white/90 backdrop-blur-md rounded-[24px] border border-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.13)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 opacity-100 group"
            >
              {/* Icon Box */}
              <div
                className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] lg:w-[72px] lg:h-[72px] rounded-[16px] flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                style={{ backgroundColor: suite.bgColor }}
              >
                <img
                  src={suite.icon}
                  alt={suite.title}
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] object-contain pointer-events-none select-none"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 flex flex-col text-left">
                <h3 className="font-bold text-[16px] sm:text-[18px] text-[#1E255E] leading-snug">
                  {suite.title}
                </h3>
                <p className="w-full font-normal text-[14px] sm:text-[15px] text-[#2B3279] leading-relaxed mt-[4px]">
                  {suite.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
