import React from 'react';
import aiImg1 from '../assets/img-ai/1.png';
import aiImg2 from '../assets/img-ai/2.png';
import proctoringIcon from '../assets/img-ai/img-ai-icons/hugeicons_face-id.png';
import brainIcon from '../assets/img-ai/img-ai-icons/mdi_brain.png';
import docIcon from '../assets/img-ai/img-ai-icons/jam_document.png';
import analyticsIcon from '../assets/img-ai/img-ai-icons/material-symbols_analytics-outline-rounded.png';

import { Sparkles, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: proctoringIcon,
    title: 'AI Proctoring',
    description: 'Camera and microphone monitoring keeps online exams honest, without manual supervision.',
    bgColor: '#E8EAFF',
  },
  {
    icon: brainIcon,
    title: 'Adaptive Assessments',
    description: "Tests that adjust to each student's level. Practice modes designed for NEET and JEE formats.",
    bgColor: '#E8EAFF',
  },
  {
    icon: docIcon,
    title: 'Question Bank Management',
    description: 'Build once, reuse across terms. Tag questions by chapter, difficulty, and learning objective.',
    bgColor: '#E8EAFF',
  },
  {
    icon: analyticsIcon,
    title: 'Instant Analytics',
    description: 'After every test, see learning gaps by student, class, subject, and chapter automatically.',
    bgColor: '#E8EAFF',
  },
];

export default function AcademicShowcase() {
  return (
    <section id="academic" className="relative w-full mt-[0px] pt-[24px] pb-[24px] sm:pt-[48px] sm:pb-[48px] px-[16px] sm:px-[48px] bg-[#F8F8FF] overflow-hidden font-['Helvetica',sans-serif] text-left">

      {/* Background Soft Glows */}
      <div className="absolute w-[600px] h-[600px] -right-[160px] top-[40px] rounded-[9999px] pointer-events-none z-0 opacity-40 bg-purple-100 blur-3xl" />
      <div className="absolute w-[500px] h-[500px] -left-[120px] bottom-[40px] rounded-[9999px] pointer-events-none z-0 opacity-30 bg-blue-100 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 max-w-8xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-[32px] lg:gap-[24px] xl:gap-[32px]">

        {/* LEFT COLUMN: Text, 4 Feature Points & Bottom CTA Button */}
        <div className="flex flex-col items-start gap-[24px] w-full max-w-[672px] lg:max-w-none lg:w-[46%] xl:w-[42%] text-left shrink-0">

          {/* Tag Pill Badge */}
          <div className="inline-flex items-center gap-[8px] px-[16px] py-[6px] rounded-[9999px] bg-white border border-[#FF7A00]/50 shadow-2xs">
            <Sparkles className="w-[14px] h-[14px] text-[#FF7A00]" />
            <span className="font-[Helvetica] font-semibold text-[12px] sm:text-[14px] text-[#FF7A00]">
              AI Powered Assessments
            </span>
          </div>

          {/* Heading & Descriptions Wrapper */}
          <div className="flex flex-col gap-[16px] sm:gap-[24px] w-full">
            {/* Heading */}
            <h2 className="font-[Helvetica] font-bold text-[20px] sm:text-[20px] md:text-[24px] lg:text-[24px] xl:text-[24px] text-[#2B3279] tracking-tight leading-tight">
              Examinations <span className="text-[#FF7A00]">Reimagined</span> with AI
            </h2>

            {/* Description Paragraphs */}
            <div className="font-[Helvetica] flex flex-col gap-[12px] font-normal text-[16px] sm:text-[14px] md:text-[16px] text-[#2B3279] leading-relaxed max-w-[672px] lg:max-w-[576px]">
              <p>The exam software you've been patching together can't do this.</p>
              <p>
                Unitoppers brings your entire examination workflow, from question creation to results, under one roof, with AI doing the heavy lifting on integrity and insights.
              </p>
            </div>
          </div>

          {/* 4 Feature Points Stack */}
          <div className="flex flex-col gap-[10px] w-full mt-[4px]">
            {features.map((item, idx) => (
              <div key={idx} className="w-full max-w-[672px] lg:max-w-131 flex items-start gap-[10px] p-[16px] ">
                <div
                  className="w-[60px] h-[60px] bg-slate-200 rounded-[9999px] flex items-center justify-center shrink-0 shadow-2xs mt-[2px]"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-[35px] h-[35px] object-contain pointer-events-none select-none"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="font-[Helvetica] font-bold text-[14px] sm:text-[16px] text-[#2B3279] leading-snug">
                    {item.title}
                  </h4>
                  <p className="font-[Helvetica] font-normal text-[14px] sm:text-[14px] text-[#2B3279] leading-relaxed mt-[4px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Button */}
          <button
            type="button"
            className="font-[Helvetica] mt-[12px] inline-flex items-center gap-[8px] px-[24px] py-[12px] bg-white border border-[#FF7A00] text-[#FF7A00] font-semibold text-[12px] sm:text-[14px] rounded-[9999px] shadow-2xs hover:bg-orange-50 transition-colors cursor-pointer group"
          >
            <span>Explore the Examination Platform</span>
            <ArrowRight className="w-[16px] h-[16px] transition-transform group-hover:translate-x-1" />
          </button>

        </div>

        {/* RIGHT COLUMN: Overlapping AI Proctoring & Analytics UI Mockup Images */}
        <div className="w-full max-w-[672px] lg:max-w-none lg:w-[54%] xl:w-[58%] relative flex flex-col items-center justify-center min-h-88 lg:min-h-96 xl:min-h-112 mt-[24px] lg:mt-[0px] px-[8px] sm:px-[16px] lg:px-[0px]">

          <div className="relative z-20 w-full max-w-[576px] lg:max-w-[448px] xl:max-w-[672px] transform lg:translate-x-3 xl:translate-x-12 lg:-translate-y-4 xl:-translate-y-9 hover:scale-[1.01] transition-transform">
            <img
              src={aiImg1}
              alt="AI Proctoring Live Monitoring"
              className="w-full h-auto object-contain block pointer-events-none select-none drop-shadow-xl"
            />
          </div>

          {/* BOTTOM CARD: Results & Analytics Image (2.png) with rotation */}
          <div
            className="relative z-10 w-full max-w-[672px] lg:max-w-[512px] xl:max-w-[768px] transform lg:-translate-x-3 xl:-translate-x-14 lg:-mt-[80px] xl:-mt-[128px] sm:-mt-[96px] -mt-[64px] hover:scale-[1.01] transition-all rotate-1"
          >
            <img
              src={aiImg2}
              alt="Results & Analytics Dashboard"
              className="w-full h-auto object-contain block pointer-events-none select-none drop-shadow-2xl"
            />
          </div>

        </div>

      </div>

    </section>
  );
}

