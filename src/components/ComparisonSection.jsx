import React from 'react';
import { Building2, GraduationCap, UserCheck, Users, Landmark } from 'lucide-react';
import redSubIcon from '../assets/stakeholder-icons/sub-icons/red.png';
import blueSubIcon from '../assets/stakeholder-icons/sub-icons/blue.png';
import peachSubIcon from '../assets/stakeholder-icons/sub-icons/peach.png';
import greenSubIcon from '../assets/stakeholder-icons/sub-icons/green.png';
import violetSubIcon from '../assets/stakeholder-icons/sub-icons/violet.png';

const stakeholders = [
  {
    role: 'Management',
    titleGradient: 'linear-gradient(180deg, hsl(0, 84%, 60%,1) 0%, hsl(0, 56%, 35%,1) 100%)',
    bgColor: '#FEF2F2',
    iconBgColor: '#FEE2E2',
    iconColor: 'hsl(0, 84%, 48%)',
    topIcon: Building2,
    subIcon: redSubIcon,
    points: [
      { text: 'Manual reports - ', highlight1: 'Real-time institutional dashboard' },
      { text: 'Chasing department heads -', highlight1: 'Centralized visibility' },
      { text: 'Delayed decisions -', highlight1: 'Data-driven governance' },
    ],
  },
  {
    role: 'Teachers',
    titleGradient: 'linear-gradient(180deg, hsl(213, 94%, 68%) 0%, hsl(213, 45%, 40%,1) 100%)',
    bgColor: '#EFF6FF',
    iconBgColor: '#DBEAFE',
    iconColor: 'hsl(217, 91%, 50%)',
    topIcon: GraduationCap,
    subIcon: blueSubIcon,
    points: [
      { text: 'Separate tools for lesson, homework, exam - ', highlight1: 'One unified workflow' },
      { text: 'Manual attendance -', highlight1: 'One-tap digital marking' },
      { text: 'Generic reports -', highlight1: 'Student-level learning analytics' },
    ],
  },
  {
    role: 'Students',
    titleGradient: 'linear-gradient(180deg, hsl(271, 91%, 65%,1) 0%, hsl(271, 49%, 38%,1) 100%)',
    bgColor: '#FAF5FF',
    iconBgColor: '#F3E8FF',
    iconColor: 'hsl(271, 91%, 50%)',
    topIcon: UserCheck,
    subIcon: violetSubIcon,
    points: [
      { text: 'Multiple apps for learning -', highlight1: 'One student portal' },
      { text: 'Fixed-time exams only -', highlight1: 'Practice anywhere, anytime' },
      { text: 'Passive learning -', highlight1: 'Self-paced digital content + live classes' },
    ],
  },
  {
    role: 'Parents',
    titleGradient: 'linear-gradient(180deg, hsl(160, 84%, 39%,1) 0%, hsl(160, 84%, 18%,1) 100%)',
    bgColor: '#F0FDF4',
    iconBgColor: '#DCFCE7',
    iconColor: 'hsl(142, 72%, 36%)',
    topIcon: Users,
    subIcon: greenSubIcon,
    points: [
      { text: 'Calling the school for updates -', highlight1: 'Real-time mobile app' },
      { text: 'Separate fee reminders -', highlight1: 'Integrated fee status + payment' },
      { text: 'No visibility into learning -', highlight1: 'Daily activity feed + performance reports' },
    ],
  },
  {
    role: 'Government Bodies',
    titleGradient: 'linear-gradient(180deg, hsl(38, 92%, 50%,1) 0%, hsl(38, 91%, 29%,1) 100%)',
    bgColor: '#FEFCE8',
    iconBgColor: '#FEF9C3',
    iconColor: 'hsl(38, 92%, 42%)',
    topIcon: Landmark,
    subIcon: peachSubIcon,
    points: [
      { text: 'Fragmented data -', highlight1: 'Centralized governance dashboard' },
      { text: 'Manual compliance reports -', highlight1: 'Automated, standardized reporting' },
      { text: 'Slow administrative decisions -', highlight1: 'Real-time district-wide visibility' },
    ],
  },
];

export default function ComparisonSection() {
  return (
    <section className="relative w-full h-auto mt-[0px] pt-[24px] pb-[24px] sm:pt-[48px] sm:pb-[48px] px-[16px] sm:px-[48px] bg-[#F8F8FF] overflow-hidden font-['Helvetica',sans-serif]">

      {/* Background Soft Glows */}
      <div className="absolute w-[500px] h-[400px] -left-[128px] top-1/4 rounded-[9999px] pointer-events-none z-0 opacity-40 bg-blue-200 blur-3xl" />
      <div className="absolute w-[500px] h-[400px] -right-[128px] bottom-[40px] rounded-[9999px] pointer-events-none z-0 opacity-40 bg-orange-200 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col items-center gap-[16px] sm:gap-[24px] lg:gap-[32px]">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-[24px] max-w-[1024px] px-[4px]">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-[8px] px-[16px] py-[8px] rounded-[9999px] bg-white border border-[#FF7A00]/50 shadow-2xs">
            <span className="font-[Helvetica] font-medium text-[12px] sm:text-[14px] text-[#FF7A00]">
              Built for Every Stakeholder
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-[Helvetica] font-semibold text-[20px] sm:text-[20px] lg:text-[24px] gap-[16px] text-[#2B3279] tracking-tight">
            Not just for the admin office. For <span className="text-[#FF7A00]">everyone</span> who runs the institution.
          </h2>

          {/* Subtitle */}
          <div className="font-[Helvetica] font-medium text-[12px] sm:text-[16px] text-[#2B3279] space-y-1">
            <p className="whitespace-nowrap sm:whitespace-normal">Unitoppers is designed for every role, from the chairman to the parent.</p>
            <p className="whitespace-nowrap sm:whitespace-normal">Each stakeholder gets exactly what they need, nothing they don't.</p>
          </div>
        </div>

        {/* 5 Stakeholder Cards (Touch Slider on Mobile & Tablet up to 1024px+, Grid on Desktop) */}
        <div className="w-full mt-[8px] overflow-x-auto pb-[16px] pt-[4px] snap-x snap-mandatory scroll-smooth scrollbar-none">
          <div
            className="flex gap-[16px] sm:gap-[24px] xl:gap-[32px] w-max min-w-full items-stretch px-[16px] xl:px-[32px]"
            style={{ justifyContent: 'safe center' }}
          >
            {stakeholders.map((item, index) => (
              <div
                key={index}
                className="snap-center shrink-0 w-[78vw] sm:w-[320px] md:w-[340px] xl:w-[288px] h-full flex flex-col items-center p-[16px] bg-white rounded-[24px] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.13)] xl:hover:shadow-xl transition-all duration-300 xl:hover:-translate-y-1 group"
              >
                {/* Top Round Icon Container */}
                <div
                  className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] rounded-[9999px] flex items-center justify-center mb-[12px] transition-transform group-hover:scale-105"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <item.topIcon
                    className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] shrink-0"
                    style={{ color: item.iconColor }}
                  />
                </div>

                {/* Role Title */}
                <h3
                  className="font-[Helvetica] font-bold text-[16px] sm:text-[18px] mb-[8px] text-center bg-clip-text text-transparent"
                  style={{ backgroundImage: item.titleGradient }}
                >
                  {item.role}
                </h3>

                {/* Sub-label */}
                <span className="font-[Helvetica] text-[12px] sm:text-[14px] font-lg text-[#0f2b7e] mb-[8px] text-left w-full">
                  What They Replace:
                </span>

                {/* Points List */}
                <div className="flex flex-col gap-[12px] sm:gap-[16px] w-full text-left">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-[10px] sm:gap-[12px] text-[12px] sm:text-[12px] leading-snug">
                      {/* Icon Circle with sub-icon */}
                      <div
                        className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] rounded-[8px] shrink-0 flex items-center justify-center mt-[2px] p-[4px]"
                        style={{ backgroundColor: item.iconBgColor }}
                      >
                        {typeof item.subIcon === 'string' ? (
                          <img
                            src={item.subIcon}
                            alt="Sub Icon"
                            className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] object-contain shrink-0 pointer-events-none select-none"
                          />
                        ) : (
                          <item.subIcon
                            className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] shrink-0"
                            style={{ color: item.iconColor }}
                          />
                        )}
                      </div>

                      {/* Text */}
                      <div className="text-slate-600">
                        <span className="font-normal font-[Helvetica]">{pt.text}</span>
                        <span className="font-semibold text-[12px] text-slate-900 font-[Helvetica]">{pt.highlight}</span>
                        <span className="font-semibold text-[12px] text-[#1a3481] font-[Helvetica]">{pt.highlight1}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
