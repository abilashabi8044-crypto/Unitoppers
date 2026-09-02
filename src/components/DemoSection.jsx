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
import productBooklet from '../assets/unitoppers booklet.pdf';

const POPULAR_CITIES = [
  'Ahmedabad', 'Agra', 'Ajmer', 'Aligarh', 'Allahabad', 'Amravati', 'Amritsar', 'Asansol', 'Aurangabad',
  'Bangalore', 'Bareilly', 'Bhavnagar', 'Bhilai', 'Bhopal', 'Bhubaneswar', 'Bhiwandi', 'Bikaner',
  'Chennai', 'Chandigarh', 'Coimbatore', 'Cuttack',
  'Delhi', 'Dehradun', 'Dhanbad', 'Durgapur',
  'Faridabad', 'Firozabad',
  'Ghaziabad', 'Gorakhpur', 'Gulbarga', 'Guntur', 'Gurgaon', 'Guwahati', 'Gwalior',
  'Hyderabad', 'Howrah', 'Hubli-Dharwad',
  'Indore', 'Jabalpur', 'Jaipur', 'Jalandhar', 'Jammu', 'Jamnagar', 'Jamshedpur', 'Jhansi', 'Jodhpur',
  'Kolkata', 'Kalyan-Dombivli', 'Kanpur', 'Kochi', 'Kolhapur', 'Kota',
  'Lucknow', 'Ludhiana', 'Loni',
  'Mumbai', 'Madurai', 'Meerut', 'Mira-Bhayandar', 'Moradabad', 'Mysore',
  'Nagpur', 'Nanded', 'Nashik', 'Navi Mumbai', 'Nellore', 'Noida',
  'Patna', 'Pune', 'Pimpri-Chinchwad', 'Pondicherry',
  'Raipur', 'Rajkot', 'Ranchi', 'Rourkela',
  'Surat', 'Saharanpur', 'Salem', 'Solapur', 'Srinagar',
  'Thane', 'Tiruchirappalli', 'Tiruppur',
  'Ujjain',
  'Vadodara', 'Varanasi', 'Vasai-Virar', 'Vijayawada', 'Visakhapatnam',
  'Warangal'
];

export default function DemoSection() {
  const dispatch = useDispatch();
  const { formData, submitted } = useSelector((state) => state.demo);
  const [errors, setErrors] = useState({});
  const [cities, setCities] = useState(POPULAR_CITIES);
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [showCitySuggestions, setShowCitySuggestions] = useState(false);
  const [countryCodes, setCountryCodes] = useState([]);
  const [showToast, setShowToast] = useState(false);

  React.useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities-name-list.json');
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setCities(data);
          }
        }
      } catch (error) {
        console.error('Failed to fetch cities from API, using fallback list:', error);
      }
    };
    fetchCities();

    const fetchCountryCodes = async () => {
      try {
        const response = await fetch('https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/CountryCodes.json');
        if (response.ok) {
          const data = await response.json();
          setCountryCodes(data);
        }
      } catch (error) {
        console.error('Failed to fetch country codes:', error);
      }
    };
    fetchCountryCodes();
  }, []);

  const handleSelectCity = (city) => {
    dispatch(updateFormField({ field: 'city', value: city }));
    setCitySuggestions([]);
    setShowCitySuggestions(false);
    if (errors.city) {
      setErrors(prev => ({ ...prev, city: undefined }));
    }
  };

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
        const phoneRegex = /^\d{7,15}$/;
        if (!val) return 'Phone number is required';
        if (!phoneRegex.test(val)) return 'Enter a valid phone number (7-15 digits)';
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
    dispatch(resetDemoForm());
    
    // Show Toast Notification
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3500);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === 'phone') {
      value = value.replace(/\D/g, '').slice(0, 15);
    }

    if (name === 'city') {
      if (value.trim().length > 0) {
        const filtered = cities.filter((city) =>
          city.toLowerCase().includes(value.toLowerCase())
        );
        setCitySuggestions(filtered);
        setShowCitySuggestions(true);
      } else {
        setCitySuggestions(cities);
        setShowCitySuggestions(true);
      }
    }

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    dispatch(updateFormField({ field: name, value: value }));
  };

  return (
    <section id="demo-form" className="relative w-full mt-[0px] pt-[24px] pb-[24px] sm:pt-[48px] sm:pb-[48px] px-[16px] sm:px-[48px] bg-white overflow-hidden font-['Helvetica',sans-serif]">

      {/* Main Container */}
      <div className="relative z-10 max-w-8xl mx-auto flex flex-col lg:flex-row items-stretch lg:items-stretch justify-between gap-[24px] lg:gap-[32px]">

        {/* LEFT COLUMN: Title, Description & stats.png Image Showcase */}
        <div className="flex flex-col items-start gap-[16px] w-full lg:w-[52%] text-left shrink-0">

          {/* Heading */}
          <h2 className="font-[Helvetica] font-bold text-[20px] sm:text-[24px] lg:text-[24px] text-[#2B3279] tracking-tight leading-tight">
            Shut down the chaos. Run on <span className="text-[#FF7A00]">one platform.</span>
          </h2>

          {/* Subtitle */}
          <p className="font-[Helvetica] font-medium w-full max-w-[576px] text-[16px] sm:text-[16px] text-[#2B3279] leading-relaxed">
            Join the institutions that have already replaced their fragmented stack with Unitoppers. Book a demo and see what your institution looks like on one platform.
          </p>

          {/* Module Collage Image Showcase (stats.png) */}
          <div className="w-full mt-[8px] rounded-[16px] overflow-hidden mx-auto">
            <img
              src={statsImg}
              alt="Unitoppers Modular Platform Collage"
              className="w-full h-auto xl:max-h-full object-contain block pointer-events-none select-none rounded-[16px]"
            />
          </div>

        </div>

        {/* RIGHT COLUMN: Lead Form Card */}
        <div className="w-full lg:w-[48%] flex justify-center lg:self-stretch">

          <div className="w-full max-w-[672px] mt-[20px] lg:mt-0 h-auto lg:h-full bg-white rounded-[24px] p-[24px] sm:p-[32px] lg:p-[28px] xl:p-[32px] border border-slate-300 shadow-xl text-left flex flex-col justify-start lg:justify-center">


              <form onSubmit={handleSubmit} className="flex flex-col gap-[14px] sm:gap-[16px] lg:gap-[14px] xl:gap-[16px]">

                {/* ROW 1: Name & Institution */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-[14px] sm:gap-[16px] lg:gap-[14px] xl:gap-[16px]">
                  {/* Field 1: Your Name */}
                  <div className="flex flex-col gap-[6px]">
                    <label className="font-[Helvetica] text-[13px] sm:text-[14px] font-bold text-[#2B3279]">Your Name</label>
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
                        className={`w-full pl-[40px] pr-[16px] py-[10px] sm:py-[11px] lg:py-[10px] bg-slate-50 border ${errors.name ? 'border-red-500 bg-red-50/50' : 'border-slate-200 focus:border-[#FF7A00] focus:bg-white'} rounded-[12px] text-[12px] sm:text-[14px] text-slate-800 focus:outline-none transition-colors shadow-2xs`}
                      />
                    </div>
                    {errors.name && <span className="text-red-500 text-[11px] font-medium -mt-[2px] ml-[4px]">{errors.name}</span>}
                  </div>

                  {/* Field 2: Institution Name */}
                  <div className="flex flex-col gap-[6px]">
                    <label className="font-[Helvetica] text-[13px] sm:text-[14px] font-bold text-[#2B3279]">Institution Name</label>
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
                        placeholder="Institution name"
                        className={`w-full pl-[40px] pr-[16px] py-[10px] sm:py-[11px] lg:py-[10px] bg-slate-50 border ${errors.institution ? 'border-red-500 bg-red-50/50' : 'border-slate-200 focus:border-[#FF7A00] focus:bg-white'} rounded-[12px] text-[12px] sm:text-[14px] text-slate-800 focus:outline-none transition-colors shadow-2xs`}
                      />
                    </div>
                    {errors.institution && <span className="text-red-500 text-[11px] font-medium -mt-[2px] ml-[4px]">{errors.institution}</span>}
                  </div>
                </div>

                {/* ROW 2: City & Phone */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-[14px] sm:gap-[16px] lg:gap-[14px] xl:gap-[16px]">
                  {/* Field 3: City */}
                  <div
                    className="flex flex-col gap-[6px] relative"
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget)) {
                        setShowCitySuggestions(false);
                      }
                    }}
                  >
                    <label className="font-[Helvetica] text-[13px] sm:text-[14px] font-bold text-[#2B3279]">City / State</label>
                    <div className="relative">
                      <img
                        src={locationIcon}
                        alt="Location"
                        className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] object-contain absolute left-[14px] top-1/2 -translate-y-1/2 pointer-events-none opacity-80"
                      />
                      <input
                        type="text"
                        name="city"
                        value={formData.city || ''}
                        onChange={handleChange}
                        onFocus={() => {
                          if ((formData.city || '').trim().length > 0) {
                            const filtered = cities.filter((city) =>
                              city.toLowerCase().includes(formData.city.toLowerCase())
                            );
                            setCitySuggestions(filtered);
                            setShowCitySuggestions(true);
                          } else {
                            setCitySuggestions(cities);
                            setShowCitySuggestions(true);
                          }
                        }}
                        placeholder="e.g. Mumbai, Chennai"
                        className={`w-full pl-[40px] pr-[16px] py-[10px] sm:py-[11px] lg:py-[10px] bg-slate-50 border ${errors.city ? 'border-red-500 bg-red-50/50' : 'border-slate-200 focus:border-[#FF7A00] focus:bg-white'
                          } rounded-[12px] text-[12px] sm:text-[14px] text-slate-800 focus:outline-none transition-colors`}
                        autoComplete="off"
                      />
                    </div>
                    {showCitySuggestions && citySuggestions.length > 0 && (
                      <div
                        className="absolute left-[0px] right-[0px] top-[calc(100%+4px)] z-50 max-h-[180px] overflow-y-auto bg-white border border-slate-200 rounded-[12px] shadow-lg scrollbar-thin scrollbar-thumb-slate-300 py-[6px] flex flex-col"
                        tabIndex={-1}
                      >
                        {citySuggestions.slice(0, 50).map((city) => (
                          <button
                            key={city}
                            type="button"
                            onMouseDown={(e) => {
                              e.preventDefault();
                              handleSelectCity(city);
                            }}
                            className="w-full text-left px-[16px] py-[8px] hover:bg-slate-50 text-[13px] sm:text-[14px] text-slate-700 font-medium transition-colors cursor-pointer"
                          >
                            {city}
                          </button>
                        ))}
                      </div>
                    )}
                    {errors.city && <span className="text-red-500 text-[11px] font-medium -mt-[2px] ml-[4px]">{errors.city}</span>}
                  </div>

                  {/* Field 4: Phone Number */}
                  <div className="flex flex-col gap-[6px]">
                    <label className="font-[Helvetica] text-[13px] sm:text-[14px] font-bold text-[#2B3279]">Phone Number</label>
                    <div className="relative flex">
                      <select
                        name="countryCode"
                        value={formData.countryCode || '+91'}
                        onChange={handleChange}
                        className="w-[110px] pl-[12px] pr-[8px] py-[10px] sm:py-[11px] lg:py-[10px] bg-slate-50 border border-slate-200 border-r-0 rounded-l-[12px] text-[12px] sm:text-[14px] text-slate-800 focus:outline-none focus:border-[#FF7A00] transition-colors"
                      >
                        {countryCodes.length > 0 ? (
                          countryCodes.map((cc, idx) => (
                            <option key={idx} value={cc.dial_code}>
                              {cc.code} ({cc.dial_code})
                            </option>
                          ))
                        ) : (
                          <option value="+91">IN (+91)</option>
                        )}
                      </select>
                      <div className="relative flex-1">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone || ''}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Mobile Number"
                          maxLength={15}
                          className={`w-full pl-[16px] pr-[16px] py-[10px] sm:py-[11px] lg:py-[10px] bg-slate-50 border ${errors.phone ? 'border-red-500 bg-red-50/50' : 'border-slate-200 focus:border-[#FF7A00] focus:bg-white'} rounded-r-[12px] border-l-0 text-[12px] sm:text-[14px] text-slate-800 focus:outline-none transition-colors shadow-2xs`}
                        />
                      </div>
                    </div>
                    {errors.phone && <span className="text-red-500 text-[11px] font-medium -mt-[2px] ml-[4px]">{errors.phone}</span>}
                  </div>
                </div>

                {/* Field 5: Email Address */}
                <div className="flex flex-col gap-[6px]">
                  <label className="font-[Helvetica] text-[13px] sm:text-[14px] font-bold text-[#2B3279]">Email Address</label>
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
                      className={`w-full pl-[40px] pr-[16px] py-[10px] sm:py-[11px] lg:py-[10px] bg-slate-50 border ${errors.email ? 'border-red-500 bg-red-50/50' : 'border-slate-200 focus:border-[#FF7A00] focus:bg-white'} rounded-[12px] text-[12px] sm:text-[14px] text-slate-800 focus:outline-none transition-colors shadow-2xs`}
                    />
                  </div>
                  {errors.email && <span className="text-red-500 text-[11px] font-medium -mt-[2px] ml-[4px]">{errors.email}</span>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-[12px] sm:py-[14px] lg:py-[12px] mt-[4px] bg-linear-to-r font-[Helvetica] from-[#FF7A00] to-[#F6881F] hover:from-[#e56d00] hover:to-[#df7914] text-white font-bold text-[14px] sm:text-[16px] rounded-[9999px] shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.01] cursor-pointer"
                >
                  Book a Free demo
                </button>

                {/* Divider Line with OR badge */}
                <div className="relative my-[12px] sm:my-[16px] lg:my-[10px] xl:my-[12px] flex items-center justify-center">
                  <div className="absolute inset-[0px] flex items-center">
                    <div className="w-full border-t border-slate-300" />
                  </div>
                  <span className="font-[Helvetica] relative z-10 w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] text-bold text-[#2B3279] rounded-[9999px] bg-white border border-slate-200 text-[10px] sm:text-[11px] font-bold uppercase flex items-center justify-center shadow-2xs">
                    OR
                  </span>
                </div>

                {/* Booklet Download & Guarantee Notes */}
                <div className="flex flex-col gap-[10px] sm:gap-[12px] lg:gap-[8px] xl:gap-[10px] text-[12px]">

                  {/* Download item */}
                  <div className="flex items-center gap-[10px]">
                    <div className="w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] rounded-[9999px] bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <img src={downloadIcon} alt="Download" className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] object-contain pointer-events-none select-none" />
                    </div>
                    <div className="font-[Helvetica] text-[#2B3279]">
                      <span>Not ready for a demo? </span>
                      <a 
                        href={productBooklet} 
                        download="Unitoppers Booklet.pdf" 
                        className="font-bold text-[#2B3279] hover:underline cursor-pointer inline-block"
                      >
                        Download the product booklet
                      </a>
                    </div>
                  </div>

                  {/* Guarantee item */}
                  <div className="flex items-center gap-[10px]">
                    <div className="w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] rounded-[9999px] bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <img src={shieldIcon} alt="Guarantee" className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] object-contain pointer-events-none select-none" />
                    </div>
                    <p className="text-[#2B3279] font-[Helvetica] leading-relaxed text-[11px] sm:text-[12px]">
                      No commitment. No sales pressure. Just a walkthrough built around your institution's needs.
                    </p>
                  </div>

                </div>

              </form>

          </div>

        </div>

      </div>

      {/* Toast Notification */}
      <div 
        className={`fixed bottom-[24px] right-[24px] bg-green-500 text-white px-[20px] py-[12px] rounded-[12px] shadow-2xl z-[100] flex items-center gap-[10px] transition-all duration-300 transform ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-[20px] opacity-0 pointer-events-none'}`}
      >
        <CheckCircle2 className="w-[20px] h-[20px] text-white" />
        <span className="font-[Helvetica] font-medium text-[14px]">Demo requested successfully!</span>
      </div>
    </section>
  );
}
