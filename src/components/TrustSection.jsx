import React, { useState, useEffect } from 'react';
import partnershipIcon from '../assets/partners-logo/mdi_partnership.png';
import eduLogo from '../assets/partners-logo/edu.png';
import ymcaLogo from '../assets/partners-logo/ymca.png';
import kendriyaLogo from '../assets/partners-logo/kendriya.png';
import chnLogo from '../assets/partners-logo/chn.png';
import leadLogo from '../assets/partners-logo/lead.png';
import velLogo from '../assets/partners-logo/vel.png';

const partnerLogos = [
  { id: 1, src: eduLogo, alt: 'Edu Home Connect' },
  { id: 2, src: ymcaLogo, alt: 'YMCA' },
  { id: 3, src: kendriyaLogo, alt: 'Kendriya Vidyalaya Sangathan' },
  { id: 4, src: chnLogo, alt: 'Chennai Public School' },
  { id: 5, src: leadLogo, alt: 'LEAD Tuition Academy' },
  { id: 6, src: velLogo, alt: 'Vel Tech Rangarajan Dr. Sagunthala R&D Institute' },
];

// Duplicated 6 sets of logos for an endless seamless loop
const marqueeLogos = [
  ...partnerLogos,
  ...partnerLogos,
  ...partnerLogos,
  ...partnerLogos,
  ...partnerLogos,
  ...partnerLogos,
];

export default function TrustSection() {
  const [index, setIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    },2000);

    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    // When we reach the end of 2 full loops (12 cards), reset to index 0 seamlessly
    if (index >= partnerLogos.length * 2) {
      setTransitionEnabled(false);
      setIndex(0);
      setTimeout(() => {
        setTransitionEnabled(true);
      }, 20);
    }
  };

  return (
    <section className="relative w-full h-auto mt-[0px] pt-[24px] pb-[24px] sm:pt-[48px] sm:pb-[48px] px-[16px] sm:px-[48px] bg-[#F8F8FF] overflow-hidden font-['Helvetica',sans-serif]">
      {/* Responsive Step Calculation */}
      <style>{`
        :root {
          --card-step: 12rem;
        }
        @media (min-width: 640px) {
          :root {
            --card-step: 14.5rem;
          }
        }
      `}</style>

      {/* Container */}
      <div className="max-w-8xl mx-auto flex flex-col items-start gap-[16px] sm:gap-[24px] text-left relative z-10">
        
        {/* Header Section (Left Aligned) */}
        <div className="flex flex-col items-start text-left gap-[12px]">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-[8px] px-[16px] py-[4px] rounded-[9999px] bg-white border border-[#FF7A00]/50 shadow-2xs">
            <img
              src={partnershipIcon}
              alt="Partnership"
              className="w-[14px] h-[14px] object-contain pointer-events-none select-none"
            />
            <span className="font-[Helvetica] font-medium text-[12px] sm:text-[14px] text-[#FF7A00]">
              Our Partners
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-[Helvetica] font-bold text-[20px] sm:text-[20px] lg:text-[24px] text-[#2B3279] tracking-tight">
            Who we <span className="text-[#FF7A00]">work </span>with
          </h2>

          {/* Subtitle */}
          <p className="font-[Helvetica] font-medium text-[12px] sm:text-[14px] text-[#2B3279]">
            Explore the latest trends in educational management software.
          </p>
        </div>

        {/* Endless Infinite Right-to-Left Slider Track */}
        <div className="w-full overflow-hidden relative mt-[8px]">
          {/* Gradient Masks for smooth entrance & exit */}
          <div className="absolute left-[0px] top-[0px] bottom-[0px] w-[48px] sm:w-[80px] bg-linear-to-r from-[#F8F8FF] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-[0px] top-[0px] bottom-[0px] w-[48px] sm:w-[80px] bg-linear-to-l from-[#F8F8FF] to-transparent z-10 pointer-events-none" />

          {/* Stepped Flex Track */}
          <div 
            className={`flex gap-[16px] sm:gap-[24px] w-max py-[8px] ${
              transitionEnabled ? 'transition-transform duration-700 ease-in-out' : ''
            }`}
            style={{ transform: `translateX(calc(-${index} * var(--card-step)))` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {marqueeLogos.map((partner, idx) => (
              <div
                key={`${partner.id}-${idx}`}
                className="flex items-center justify-center p-[12px] sm:p-[16px] bg-[#ebeff8] backdrop-blur-xs rounded-[16px] border border-slate-100/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-[96px] sm:h-[112px] w-[176px] sm:w-[208px] shrink-0"
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="max-h-14 sm:max-h-16 max-w-full object-contain pointer-events-none select-none"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
