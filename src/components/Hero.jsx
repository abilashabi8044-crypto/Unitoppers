import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import arrow from '../assets/hero/arrow-right.png';
import play from '../assets/hero/Group.png';
import shield from '../assets/hero/shield.png';
import heroMobileImg from '../assets/hero/herobg- mobile .png';
import demoVideo from '../assets/hero/demo-video/unitooppers-demo.mp4';
import { X, Play, Pause, RotateCcw, RotateCw, Volume2, VolumeX } from 'lucide-react';
import DemoModal from './DemoModal';

export default function Hero() {
  // Video Modal State
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isVideoClosing, setIsVideoClosing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  // Booking Demo Modal State
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoClosing(false);
    setIsVideoOpen(true);
    setIsPlaying(true);
    setCurrentTime(0);
  };

  const closeVideoModal = () => {
    setIsVideoClosing(true);
    setTimeout(() => {
      setIsVideoOpen(false);
      setIsVideoClosing(false);
    }, 250);
  };

  // Scroll Lock & Esc listener for video modal
  useEffect(() => {
    if (isVideoOpen) {
      if (window.lenis) window.lenis.stop();
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          closeVideoModal();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        if (window.lenis) window.lenis.start();
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isVideoOpen]);

  // Video Controls
  const togglePlay = (e) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const skipSeconds = (seconds, e) => {
    e?.stopPropagation();
    if (videoRef.current) {
      const newTime = Math.max(
        0,
        Math.min(videoRef.current.duration || 0, videoRef.current.currentTime + seconds)
      );
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleSeek = (e) => {
    e.stopPropagation();
    const newTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleMute = (e) => {
    e?.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const formatTime = (secs) => {
    if (isNaN(secs)) return '0:00';
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
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

        {/* Headline & Subtitle Wrapper */}
        <div className="flex flex-col gap-[16px] sm:gap-[24px] w-full items-center">
          <h1 className="font-[Helvetica] font-semibold 2xl:-mt-1.5 text-[24px] min-[375px]:text-[20px] min-[400px]:text-[24px] sm:text-[24px] md:text-[30px] lg:text-[36px] xl:text-[2rem] 2xl:text-[2.25rem] p-[8px] leading-[118%] xl:leading-[115%] text-[#2B3279] tracking-tight max-w-[576px] sm:max-w-[672px] md:max-w-[768px] lg:max-w-[896px] xl:max-w-[896px] 2xl:max-w-[1024px]">
            <span>Your School Runs on 10 Different Software. </span><br className="hidden sm:block" />
            <span className="text-[#FF7A00]">It Shouldn't.</span>
          </h1>

          {/* Subtitle */}
          <p className="font-[Helvetica] text-[16px] sm:text-[14px] md:text-[16px] lg:text-[16px] lg:max-w-[672px] xl:text-[13px] xl:max-w-[672px] 2xl:text-[15px] leading-relaxed text-[#2B3279] w-full max-w-[1024px] 2xl:max-w-[768px] mx-auto">
            Unitoppers replaces your fragmented stack of tools with one AI-powered platform, covering academics, finance, examinations, communication, HR, and more. One login. One database. Every department.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row items-center justify-center gap-[8px] sm:gap-[12px] mt-[2px] pb-[12px] sm:mt-[4px] xl:mt-[0px] xl:pb-[4px] w-full max-w-[448px] sm:max-w-none mx-auto">
          {/* Primary Orange Button: Opens "Book a Free demo" Popup Modal */}
          <button
            onClick={() => setIsDemoModalOpen(true)}
            className="font-[Helvetica] flex-1 sm:flex-none flex items-center justify-center gap-[6px] sm:gap-[8px] px-[14px] sm:px-[20px] md:px-[24px] xl:px-[16px] 2xl:px-[24px] py-[8px] sm:py-[10px] md:py-[12px] xl:py-[6px] 2xl:py-[10px] bg-[#FF7A00] hover:bg-orange-600 text-white font-semibold text-[11px] sm:text-[12px] md:text-[14px] xl:text-[11px] 2xl:text-[13px] rounded-[9999px] transition-all shadow-lg shadow-orange-500/25 hover:scale-[1.02] cursor-pointer group whitespace-nowrap"
          >
            <span>Book a Free demo</span>
            <img src={arrow} alt="" className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[20px] md:h-[20px] xl:w-[14px] xl:h-[14px] 2xl:w-[18px] 2xl:h-[18px] transition-transform group-hover:translate-x-1" />
          </button>

          {/* Secondary Outlined Button: Opens Video Popup Modal */}
          <button
            onClick={openVideoModal}
            className="font-[Helvetica] flex-1 sm:flex-none flex items-center justify-center gap-[6px] sm:gap-[8px] px-[14px] sm:px-[20px] md:px-[24px] xl:px-[16px] 2xl:px-[24px] py-[8px] sm:py-[10px] md:py-[12px] xl:py-[6px] 2xl:py-[10px] border border-[#1E255E]/30 hover:border-[#1E255E] text-[#2B3279] font-semibold text-[11px] sm:text-[12px] md:text-[14px] xl:text-[11px] 2xl:text-[13px] rounded-[9999px] transition-all shadow-2xs hover:bg-slate-50 cursor-pointer group whitespace-nowrap"
          >
            <span>See How it works</span>
            <div className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] rounded-[9999px] flex items-center justify-center group-hover:scale-110 transition-transform">
              <img src={play} alt="" className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] xl:w-[14px] xl:h-[14px]" />
            </div>
          </button>
        </div>

        {/* Trust Badge */}
        <div className="flex flex-row pt-[0px] items-center justify-center gap-[6px] sm:gap-[8px] mt-[0px] sm:-mt-[4px] md:-mt-[8px] xl:-mt-[12px] 2xl:-mt-[4px] text-[#2B3279] text-[12px] sm:text-[12px] md:text-[14px] xl:text-[11px] 2xl:text-[12px] w-full max-w-[512px] xl:max-w-[448px] 2xl:max-w-[448px] mx-auto">
          <img src={shield} alt="" className="-mt-[10px] w-[32px] h-[30px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px] xl:w-[28px] xl:h-[28px] 2xl:w-[32px] 2xl:h-[32px] shrink-0" />
          <span className="font-[Helvetica] text-center sm:text-left max-w-[320px] sm:max-w-[384px] md:max-w-[448px] xl:max-w-[320px] 2xl:max-w-[384px]">
            Trusted by private schools, government institutions, and coaching centers <span className="text-[#FF7A00] font-semibold">across India.</span>
          </span>
        </div>
      </div>

      {/* MOBILE & TABLET HERO IMAGE */}
      <div className="block xl:hidden w-full max-w-full mx-auto mt-[8px] sm:mt-[12px] md:mt-[16px] px-[0px] z-20">
        <div className="relative w-full flex justify-center">
          <img
            src={heroMobileImg}
            alt="Unitoppers Platform"
            className="w-full h-auto object-contain block pointer-events-none select-none"
          />
        </div>
      </div>

      {/* 1. BOOK A FREE DEMO POPUP MODAL */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      {/* 2. VIDEO POPUP MODAL - MODERN SLEEK CINEMATIC PLAYER */}
      {isVideoOpen && typeof document !== 'undefined' && createPortal(
        <div
          className={`fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md ${
            isVideoClosing ? 'modal-backdrop-exit' : 'modal-backdrop-enter'
          }`}
          onClick={closeVideoModal}
          role="dialog"
          aria-modal="true"
          aria-label="Product Demo Video"
        >
          {/* Modal Container with Ambient Glow */}
          <div
            className={`relative w-full max-w-[420px] md:max-w-[440px] h-[82vh] max-h-[720px] min-h-[500px] bg-[#0c1021] border border-white/15 rounded-[24px] sm:rounded-[28px] shadow-[0_25px_60px_rgba(0,0,0,0.7),0_0_50px_rgba(255,122,0,0.15)] overflow-hidden flex flex-col ${
              isVideoClosing ? 'modal-card-exit' : 'modal-card-enter'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Background Glow Behind Player */}
            <div className="absolute -inset-4 bg-linear-to-tr from-[#FF7A00]/20 via-indigo-500/10 to-[#2B3279]/30 rounded-[32px] blur-2xl pointer-events-none -z-10" />

            {/* Top Modern Header Bar */}
            <div className="relative z-30 px-4 py-3 bg-[#0c1021]/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
              {/* Brand Title with Pulse Indicator */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse" />
                <span className="text-[13px] font-bold text-white tracking-wide">
                  Unitoppers <span className="text-[#FF7A00] font-medium text-[12px]">• Product Tour</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    closeVideoModal();
                    setIsDemoModalOpen(true);
                  }}
                  className="hidden sm:inline-flex items-center gap-1 px-3 py-1 bg-[#FF7A00] hover:bg-orange-600 text-white rounded-full text-[11px] font-semibold transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Book Demo</span>
                </button>

                <button
                  onClick={closeVideoModal}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer hover:rotate-90"
                  aria-label="Close video modal"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Main Video Viewport */}
            <div
              className="relative flex-1 w-full bg-black overflow-hidden flex items-center justify-center cursor-pointer group"
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                src={demoVideo}
                autoPlay
                playsInline
                className="w-full h-full object-contain bg-black select-none pointer-events-none"
                onTimeUpdate={() => {
                  if (videoRef.current) setCurrentTime(videoRef.current.currentTime);
                }}
                onLoadedMetadata={() => {
                  if (videoRef.current) setDuration(videoRef.current.duration);
                }}
                onEnded={() => setIsPlaying(false)}
              >
                Your browser does not support the video tag.
              </video>

              {/* Play / Pause Centered Overlay when paused */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-xs transition-all pointer-events-none">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FF7A00] text-white flex items-center justify-center shadow-xl shadow-orange-500/40 transform transition-transform group-hover:scale-110">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-white" />
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Glassmorphic Player Controls */}
            <div
              className="relative z-30 px-4 py-3 bg-[#0c1021]/95 backdrop-blur-md border-t border-white/10 flex flex-col gap-2.5"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Timeline Scrubber */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-white/80 shrink-0 select-none">
                  {formatTime(currentTime)}
                </span>
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  step="0.1"
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#FF7A00] hover:h-1.5 transition-all"
                />
                <span className="text-[11px] font-mono text-white/60 shrink-0 select-none">
                  {formatTime(duration)}
                </span>
              </div>

              {/* Controls Bar */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {/* Rewind 10s */}
                  <button
                    onClick={(e) => skipSeconds(-10, e)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
                    title="Rewind 10 seconds"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  {/* Play / Pause */}
                  <button
                    onClick={togglePlay}
                    className="p-2 rounded-full bg-[#FF7A00] hover:bg-orange-600 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-md shadow-orange-500/30"
                    title={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 fill-white" />
                    ) : (
                      <Play className="w-4 h-4 fill-white ml-0.5" />
                    )}
                  </button>

                  {/* Fast Forward 10s */}
                  <button
                    onClick={(e) => skipSeconds(10, e)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
                    title="Skip forward 10 seconds"
                  >
                    <RotateCw className="w-4 h-4" />
                  </button>

                  {/* Mute / Unmute */}
                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
                    title={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Quick CTA inside controls */}
                <button
                  onClick={() => {
                    closeVideoModal();
                    setIsDemoModalOpen(true);
                  }}
                  className="sm:hidden px-3 py-1.5 bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-[11px] rounded-full transition-all shadow-md active:scale-95 whitespace-nowrap cursor-pointer"
                >
                  Book Demo
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
