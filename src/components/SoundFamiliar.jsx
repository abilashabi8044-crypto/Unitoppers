import React from 'react';
import tallyImg from '../assets/frag-problem/tallyy.png';
import whatsappIcon from '../assets/buy-familiar/selfhst_whatsapp.png';
import formsIcon from '../assets/buy-familiar/simple-icons_googleforms.png';
import sheetsIcon from '../assets/buy-familiar/selfhst_google-sheets.png';
import registersIcon from '../assets/buy-familiar/vaadin_records.png';
import lmsIcon from '../assets/buy-familiar/fluent_hat-graduation-28-filled (2).png';
import examsIcon from '../assets/buy-familiar/material-symbols_computer.png';
import smsIcon from '../assets/buy-familiar/material-symbols_sms.png';

const toolCards = [
  {
    name: 'Tally',
    category: 'Accounting',
    bgColor: '#FEFCE8',
    iconImage: tallyImg,
    imgStyle: 'w-[48px] h-[48px] object-contain',
  },
  {
    name: 'Whatsapp',
    category: 'Communication',
    bgColor: '#F0FDF4',
    iconImage: whatsappIcon,
    imgStyle: 'w-[48px] h-[48px] object-contain',
  },
  {
    name: 'Google Forms',
    category: 'Admissions / Feedback',
    bgColor: '#FAF5FF',
    iconImage: formsIcon,
    imgStyle: 'w-[48px] h-[48px] object-contain',
  },
  {
    name: 'Google Sheets',
    category: 'Attendance / Reports',
    bgColor: '#F0FDF4',
    iconImage: sheetsIcon,
    imgStyle: 'w-[48px] h-[48px] object-contain',
  },
  {
    name: 'Paper Registers',
    category: 'Records',
    bgColor: '#FEFCE8',
    iconImage: registersIcon,
    imgStyle: 'w-[48px] h-[48px] object-contain',
  },
  {
    name: 'Separate LMS',
    category: 'Learning',
    bgColor: '#EFF6FF',
    iconImage: lmsIcon,
    imgStyle: 'w-[48px] h-[48px] object-contain',
  },
  {
    name: 'Exam Software',
    category: 'Assessments',
    bgColor: '#FDF4FF',
    iconImage: examsIcon,
    imgStyle: 'w-[48px] h-[48px] object-contain',
  },
  {
    name: 'SMS Tools',
    category: 'Parent alerts',
    bgColor: '#F0F9FF',
    iconImage: smsIcon,
    imgStyle: 'w-[48px] h-[48px] object-contain',
  },
];

export default function SoundFamiliar() {
  return (
    <section className="relative w-full h-auto mt-[0px] pt-[24px] pb-[24px] sm:pt-[48px] sm:pb-[40px] px-[16px] sm:px-[48px] bg-[#F8F8FF] overflow-hidden font-['Helvetica',sans-serif]">
      {/* Container */}
      <div className="flex flex-col items-center gap-[16px] sm:gap-[24px] lg:gap-[32px] max-w-[1280px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-[12px] sm:gap-[16px] max-w-[768px] px-[4px]">
          <h2 className="font-[Helvetica] font-bold text-[20px] sm:text-[24px] text-[#0B133F] tracking-tight">
            Sound familiar?
          </h2>
          <p className="font-[Helvetica] font-normal text-[14px] sm:text-[16px] text-[#2B3279]/80">
            Your institution probably runs all of these - separately.
          </p>
        </div>

        {/* Tool Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-[10px] sm:gap-[16px] w-full mt-[8px] items-stretch">
          {toolCards.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between p-[12px] sm:p-[16px] bg-white rounded-[24px] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 group w-full h-full"
            >
              {/* Icon Box */}
              <div
                className="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] rounded-[12px] flex items-center justify-center p-[8px] mb-[8px] sm:mb-[12px] shadow-4xs group-hover:scale-105 transition-transform shrink-0"
                style={{ background: tool.bgColor }}
              >
                <img
                  src={tool.iconImage}
                  alt={tool.name}
                  loading="lazy"
                  className={`${tool.imgStyle} pointer-events-none select-none`}
                />
              </div>

              {/* Text */}
              <div className="flex flex-col items-center justify-center w-full">
                <span className="font-[Helvetica] font-semibold text-[12px] sm:text-[14px] text-[#2B3279] text-center leading-tight mb-[4px]">
                  {tool.name}
                </span>
                <span className="font-[Helvetica] font-normal text-[10px] sm:text-[12px] text-slate-400 text-center leading-tight break-words max-w-full">
                  {tool.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pill */}
        <div className="box-border flex items-center justify-center px-[16px] sm:px-[24px] py-[14px] bg-white/90 border border-[#F6881F] rounded-[16px] sm:rounded-[9999px] shadow-xs max-w-full sm:max-w-[576px] text-center mt-[8px] hover:shadow-md transition-all">
          <span className="font-[Helvetica] font-bold text-[12px] sm:text-[14px] md:text-[16px] text-[#2B3279] leading-normal">
            That's <span className="font-[Helvetica] font-bold text-[#F6881F]">8 tools. 8 logins.</span> 8 sets of data that never talk to each other.
          </span>
        </div>

      </div>
    </section>
  );
}
