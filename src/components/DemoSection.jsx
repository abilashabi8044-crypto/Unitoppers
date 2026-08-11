import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormField, submitDemoRequest, resetDemoForm } from '../store/slices/demoSlice';
import { CheckCircle2 } from 'lucide-react';
import statsImg from '../assets/landing-page-bg/stats.png';

// Import icons from src/assets/demo-section-icons
import nameIcon from '../assets/demo-section-icons/fluent-color_people-32.png';
import uniIcon from '../assets/demo-section-icons/hugeicons_university.png';
import locationIcon from '../assets/demo-section-icons/boxicons_location-filled.png';
import phoneIcon from '../assets/demo-section-icons/ic_baseline-phone.png';
import mailIcon from '../assets/demo-section-icons/material-symbols_mail.png';
import downloadIcon from '../assets/demo-section-icons/download-lg.png';
import shieldIcon from '../assets/demo-section-icons/shieldcheck.png';

export default function DemoSection() {
  const dispatch = useDispatch();
  const { formData, submitted } = useSelector((state) => state.demo);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const val = value.trim();
    switch (name) {
      case 'name':
        if (!val) return 'Name is required';
        if (val.length < 2) return 'Name must be at least 2 characters';
        break;
      case 'institution':
        if (!val) return 'Institution is required';
        if (val.length < 2) return 'Institution must be at least 2 characters';
        break;
      case 'city':
        if (!val) return 'City is required';
        if (val.length < 2) return 'City must be at least 2 characters';
        break;
      case 'phone':
        const phoneRegex = /^[+]?[\d\s-]{10,15}$/;
        if (!val) return 'Phone number is required';
        if (!phoneRegex.test(val)) return 'Enter a valid phone number (10+ digits)';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!val) return 'Email is required';
        if (!emailRegex.test(val)) return 'Enter a valid email address';
        break;
      default:
        break;
    }
    return undefined;
  };

  const handleBlur = (e) => {
    const error = validateField(e.target.name, e.target.value);
    if (error) {
      setErrors(prev => ({ ...prev, [e.target.name]: error }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    const fieldsToValidate = ['name', 'institution', 'city', 'phone', 'email'];
    fieldsToValidate.forEach(key => {
      const error = validateField(key, formData[key] || '');
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    dispatch(submitDemoRequest());
  };

  const handleChange = (e) => {
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: undefined }));
    }
    dispatch(updateFormField({ field: e.target.name, value: e.target.value }));
  };

  return (
    <section id="demo-form" className="relative w-full mt-[0px] pt-[24px] pb-[24px] sm:pt-[48px] sm:pb-[48px] px-[16px] sm:px-[48px] bg-white overflow-hidden font-['Helvetica',sans-serif]">

      {/* Main Container */}
      <div className="relative z-10 max-w-8xl mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-[24px] lg:gap-[32px]">

        {/* LEFT COLUMN: Title, Description & stats.png Image Showcase */}
        <div className="flex flex-col items-start gap-[16px] w-full lg:w-[52%] text-left shrink-0">

          {/* Heading */}
          <h2 className="font-[Helvetica] font-bold text-[20px] sm:text-[24px] lg:text-[24px] text-[#2B3279] tracking-tight leading-tight">
            Shut down the chaos. Run on <span className="text-[#FF7A00]">one platform.</span>
          </h2>

          {/* Subtitle */}
          <p className="font-[Helvetica] font-medium w-full max-w-[576px] text-[14px] sm:text-[16px] text-[#2B3279] leading-relaxed">
            Join the institutions that have already replaced their fragmented stack with Unitoppers. Book a demo and see what your institution looks like on one platform.
          </p>

          {/* Module Collage Image Showcase (stats.png) */}
          <div className="w-full mt-[8px] rounded-[16px] overflow-hidden mx-auto">
            <img
              src={statsImg}
              alt="Unitoppers Modular Platform Collage"
              className="w-full h-auto object-contain block pointer-events-none select-none rounded-[16px]"
            />
          </div>

        </div>

        {/* RIGHT COLUMN: Lead Form Card */}
        <div className="w-full lg:w-[48%] flex justify-center">

          <div className="w-full max-w-[672px] mt-[20px] lg:mt-0 h-full bg-white rounded-[24px] p-[24px] sm:p-[32px] lg:p-[24px] lg:py-[20px] border border-slate-300 shadow-xl text-left flex flex-col justify-center">

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-[16px] lg:gap-[12px]">

                {/* Field 1: Your Name */}
                <div className="flex flex-col gap-[6px] lg:gap-[4px]">
                  <label className="font-[Helvetica] text-[14px] font-bold text-[#2B3279]">Your Name</label>
                  <div className="relative">
                    <img
                      src={nameIcon}
                      alt="Name"
                      className="w-[16px] h-[16px] object-contain absolute left-[14px] top-1/2 -translate-y-1/2 pointer-events-none select-none"
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your name"
                      className={`w-full pl-[40px] pr-[16px] py-[10px] lg:py-[8px] bg-slate-50 border ${errors.name ? 'border-red-500 bg-red-50/50' : 'border-slate-200'} rounded-[12px] text-[12px] sm:text-[14px] text-slate-800 focus:outline-none transition-colors`}
                    />
                  </div>
                  {errors.name && <span className="text-red-500 text-[11px] font-medium -mt-[2px] ml-[4px]">{errors.name}</span>}
                </div>

                {/* Field 2: Institution Name */}
                <div className="flex flex-col gap-[6px] lg:gap-[4px]">
                  <label className="font-[Helvetica] text-[14px] font-bold text-[#2B3279]">Institution Name</label>
                  <div className="relative">
                    <img
                      src={uniIcon}
                      alt="Institution"
                      className="w-[16px] h-[16px] object-contain absolute left-[14px] top-1/2 -translate-y-1/2 pointer-events-none select-none"
                    />
                    <input
                      type="text"
                      name="institution"
                      value={formData.institution}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your institution name"
                      className={`w-full pl-[40px] pr-[16px] py-[10px] lg:py-[8px] bg-slate-50 border ${errors.institution ? 'border-red-500 bg-red-50/50' : 'border-slate-200'} rounded-[12px] text-[12px] sm:text-[14px] text-slate-800 focus:outline-none transition-colors`}
                    />
                  </div>
                  {errors.institution && <span className="text-red-500 text-[11px] font-medium -mt-[2px] ml-[4px]">{errors.institution}</span>}
                </div>

                {/* Field 3: City */}
                <div className="flex flex-col gap-[6px] lg:gap-[4px]">
                  <label className="font-[Helvetica] text-[14px] font-bold text-[#2B3279]">City</label>
                  <div className="relative">
                    <img
                      src={locationIcon}
                      alt="Location"
                      className="w-[16px] h-[16px] object-contain absolute left-[14px] top-1/2 -translate-y-1/2 pointer-events-none select-none"
                    />
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your city"
                      className={`w-full pl-[40px] pr-[16px] py-[10px] lg:py-[8px] bg-slate-50 border ${errors.city ? 'border-red-500 bg-red-50/50' : 'border-slate-200'} rounded-[12px] text-[12px] sm:text-[14px] text-slate-800 focus:outline-none transition-colors`}
                    />
                  </div>
                  {errors.city && <span className="text-red-500 text-[11px] font-medium -mt-[2px] ml-[4px]">{errors.city}</span>}
                </div>

                {/* Field 4: Phone Number */}
                <div className="flex flex-col gap-[6px] lg:gap-[4px]">
                  <label className="font-[Helvetica] text-[14px] font-bold text-[#2B3279]">Phone Number</label>
                  <div className="relative">
                    <img
                      src={phoneIcon}
                      alt="Phone"
                      className="w-[16px] h-[16px] object-contain absolute left-[14px] top-1/2 -translate-y-1/2 pointer-events-none select-none"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your phone number"
                      className={`w-full pl-[40px] pr-[16px] py-[10px] lg:py-[8px] bg-slate-50 border ${errors.phone ? 'border-red-500 bg-red-50/50' : 'border-slate-200'} rounded-[12px] text-[12px] sm:text-[14px] text-slate-800 focus:outline-none transition-colors`}
                    />
                  </div>
                  {errors.phone && <span className="text-red-500 text-[11px] font-medium -mt-[2px] ml-[4px]">{errors.phone}</span>}
                </div>

                {/* Field 5: Email Address */}
                <div className="flex flex-col gap-[6px] lg:gap-[4px]">
                  <label className="font-[Helvetica] text-[14px] font-bold text-[#2B3279]">Email Address</label>
                  <div className="relative">
                    <img
                      src={mailIcon}
                      alt="Email"
                      className="w-[16px] h-[16px] object-contain absolute left-[14px] top-1/2 -translate-y-1/2 pointer-events-none select-none"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your email address"
                      className={`w-full pl-[40px] pr-[16px] py-[10px] lg:py-[8px] bg-slate-50 border ${errors.email ? 'border-red-500 bg-red-50/50' : 'border-slate-200'} rounded-[12px] text-[12px] sm:text-[14px] text-slate-800 focus:outline-none transition-colors`}
                    />
                  </div>
                  {errors.email && <span className="text-red-500 text-[11px] font-medium -mt-[2px] ml-[4px]">{errors.email}</span>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-[14px] lg:py-[10px] mt-[8px] lg:mt-[4px] bg-linear-to-r font-[Helvetica]  from-[#FF7A00] to-[#F6881F] hover:from-[#e56d00] hover:to-[#df7914] text-white font-bold text-[14px] sm:text-[16px] rounded-[9999px] shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.01] cursor-pointer"
                >
                  Book a Free demo
                </button>

                {/* Divider Line with OR badge */}
                <div className="relative my-[16px] lg:my-[12px] flex items-center justify-center">
                  <div className="absolute inset-[0px] flex items-center">
                    <div className="w-full border-t gap-[8px] border-slate-400" />
                  </div>
                  <span className=" font-[Helvetica] relative z-10 w-[32px] h-[32px] text-bold text-[#2B3279] rounded-[9999px] bg-white border border-slate-200 text-[11px] font-bold uppercase flex items-center justify-center shadow-2xs">
                    OR
                  </span>
                </div>

                {/* Booklet Download & Guarantee Notes */}
                <div className="flex flex-col gap-[12px] lg:gap-[8px] text-[12px]">

                  {/* Download item */}
                  <div className="flex items-start gap-[10px]">
                    <div className=" -mt-[12px] w-[32px] h-[32px] rounded-[9999px] bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 ">
                      <img src={downloadIcon} alt="Download" className="mb-[0px] w-[18px] h-[18px] object-contain pointer-events-none select-none" />
                    </div>
                    <div className="font-[Helvetica] text-[#2B3279]">
                      <span>Not ready for a demo? </span>
                      <button type="button" onClick={() => alert('Product booklet download link sent!')} className="font-bold text-[#2B3279] hover:underline cursor-pointer">
                        Download the product booklet
                      </button>
                    </div>
                  </div>

                  {/* Guarantee item */}
                  <div className="flex items-start gap-[10px]">
                    <div className="-mt-[8px] w-[32px] h-[32px] rounded-[9999px] bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 ">
                      <img src={shieldIcon} alt="Guarantee" className="-mb-[0px] w-[22px] h-[22px] object-contain pointer-events-none select-none" />
                    </div>
                    <p className="text-[#2B3279]  font-[Helvetica] leading-relaxed">
                      No commitment. No sales pressure. Just a walkthrough built around your institution's needs.
                    </p>
                  </div>

                </div>

              </form>
            ) : (
              /* Success Submission State */
              <div className="flex flex-col items-center text-center gap-[16px] py-[32px]">
                <div className="w-[64px] h-[64px] rounded-[9999px] bg-emerald-50 text-emerald-500 flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-[40px] h-[40px]" />
                </div>
                <h3 className="font-extrabold text-[20px] text-[#2B3279]">Demo Request Received!</h3>
                <p className="text-[12px] sm:text-[14px] text-[#2B3279] leading-relaxed">
                  Thank you, <span className="font-bold text-[#2B3279]">{formData.name}</span>. Our implementation specialist will contact you shortly to schedule your personalized demo for <span className="font-bold text-[#2B3279]">{formData.institution}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => dispatch(resetDemoForm())}
                  className="mt-[16px] px-[24px] py-[8px] bg-slate-100 text-slate-700 font-semibold text-[12px] rounded-[9999px] hover:bg-slate-200 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            )}

          </div>

        </div>

      </div>

    </section>
  );
}
