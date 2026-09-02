import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  ShieldCheck, 
  ArrowRight, 
  Calendar
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DemoModal from '../components/DemoModal';

// Form Icons
import nameIcon from '../assets/demo-section-icons/fluent-color_people-32.png';
import uniIcon from '../assets/demo-section-icons/hugeicons_university.png';
import locationIcon from '../assets/demo-section-icons/boxicons_location-filled.png';
import mailIcon from '../assets/demo-section-icons/material-symbols_mail.png';

const INQUIRY_TYPES = [
  'General Inquiry',
  'Product Demo & Walkthrough',
  'Pricing & Institutional Licensing',
  'Migration from Legacy Software',
  'Multi-Campus ERP Setup',
  'Partnership & Integration',
];

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

export default function Contactus() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    institution: '',
    city: '',
    inquiryType: 'Product Demo & Walkthrough',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cities, setCities] = useState(POPULAR_CITIES);
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [showCitySuggestions, setShowCitySuggestions] = useState(false);
  const [countryCodes, setCountryCodes] = useState([]);

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
        console.error('Failed to fetch cities from API:', error);
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
    setFormData((prev) => ({ ...prev, city }));
    setCitySuggestions([]);
    setShowCitySuggestions(false);
    if (errors.city) {
      setErrors((prev) => ({ ...prev, city: undefined }));
    }
  };

  const validateField = (name, value) => {
    const val = (value || '').trim();
    switch (name) {
      case 'name':
        if (!val) return 'Your name is required';
        if (val.length < 2) return 'Name must be at least 2 characters';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!val) return 'Email address is required';
        if (!emailRegex.test(val)) return 'Enter a valid email address';
        break;
      case 'phone':
        const phoneRegex = /^\d{7,15}$/;
        if (!val) return 'Phone number is required';
        if (!phoneRegex.test(val)) return 'Enter a valid phone number (7-15 digits)';
        break;
      case 'institution':
        if (!val) return 'Institution name is required';
        break;
      case 'city':
        if (!val) return 'City is required';
        break;
      case 'message':
        if (!val) return 'Please enter a brief message';
        break;
      default:
        break;
    }
    return undefined;
  };

  const handleInputChange = (e) => {
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
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const err = validateField(e.target.name, e.target.value);
    if (err) {
      setErrors((prev) => ({ ...prev, [e.target.name]: err }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    ['name', 'email', 'phone', 'institution', 'city', 'message'].forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      countryCode: '+91',
      phone: '',
      institution: '',
      city: '',
      inquiryType: 'Product Demo & Walkthrough',
      message: '',
    });
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <div className="min-h-screen w-full bg-[#F8F8FF] text-slate-800 font-['Helvetica',sans-serif] selection:bg-orange-100 selection:text-orange-600 relative overflow-x-hidden">
      
      {/* Header */}
      <Header />

      {/* Radial ambient background glows */}
      <div className="absolute top-[0px] left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-linear-to-b from-blue-100/60 via-orange-100/30 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-[-100px] w-[450px] h-[450px] bg-orange-200/25 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-1/2 right-[-100px] w-[450px] h-[450px] bg-blue-200/25 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />

      {/* SECTION 1: HERO / INTRO SECTION */}
      <section className="relative w-full pt-[40px] sm:pt-[56px] pb-[32px] sm:pb-[48px] px-[16px] sm:px-[32px] lg:px-[48px] max-w-6xl mx-auto text-center">
        
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-[8px] px-[16px] py-[6px] bg-white/90 backdrop-blur-xs border border-[#FF7A00]/40 rounded-full shadow-xs mb-[18px]">
          <Sparkles className="w-[14px] h-[14px] text-[#FF7A00]" />
          <span className="font-semibold text-[12px] sm:text-[13px] text-[#FF7A00] uppercase tracking-wider">
            Connect With Unitoppers
          </span>
        </div>

        {/* Main Bold Headline */}
        <h1 className="font-bold text-[28px] sm:text-[40px] lg:text-[48px] leading-[115%] text-[#2B3279] tracking-tight max-w-[840px] mx-auto">
          Let's start a <span className="text-[#FF7A00]">conversation</span>
        </h1>

        {/* Subtitle */}
        <p className="font-medium text-[15px] sm:text-[17px] lg:text-[18px] text-[#2B3279]/85 leading-relaxed max-w-[760px] mx-auto mt-[14px]">
          Have questions about Unitoppers? We're here to help you revolutionize your educational institution management
        </p>

        {/* Key Highlight Badges */}
        <div className="flex flex-wrap items-center justify-center gap-[12px] sm:gap-[20px] mt-[24px]">
          <div className="inline-flex items-center gap-[8px] px-[14px] py-[6px] bg-white border border-slate-200 rounded-full text-[12px] sm:text-[13px] text-slate-700 font-medium shadow-xs">
            <Clock className="w-[14px] h-[14px] text-[#FF7A00]" />
            <span>&lt; 15 Mins Response Time</span>
          </div>
          <div className="inline-flex items-center gap-[8px] px-[14px] py-[6px] bg-white border border-slate-200 rounded-full text-[12px] sm:text-[13px] text-slate-700 font-medium shadow-xs">
            <Building2 className="w-[14px] h-[14px] text-blue-600" />
            <span>500+ Institutions Unified</span>
          </div>
          <div className="inline-flex items-center gap-[8px] px-[14px] py-[6px] bg-white border border-slate-200 rounded-full text-[12px] sm:text-[13px] text-slate-700 font-medium shadow-xs">
            <ShieldCheck className="w-[14px] h-[14px] text-emerald-600" />
            <span>Dedicated Campus Onboarding</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTACT CARDS & INTERACTIVE FORM */}
      <section className="relative w-full max-w-7xl mx-auto px-[16px] sm:px-[32px] lg:px-[48px] pb-[64px] sm:pb-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] items-start">
          
          {/* LEFT COLUMN: Contact Details & Value Props (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-[20px] text-left">
            
            {/* Quick Contact Info Card */}
            <div className="bg-white rounded-[24px] p-[24px] sm:p-[28px] border border-slate-200 shadow-sm flex flex-col gap-[20px]">
              <h2 className="font-bold text-[18px] sm:text-[20px] text-[#2B3279]">
                Direct Contact Channels
              </h2>

              {/* Channel 1: Call Us */}
              <div className="flex items-start gap-[14px]">
                <div className="w-[42px] h-[42px] rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 text-[#FF7A00]">
                  <Phone className="w-[18px] h-[18px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">Call Us</span>
                  <a href="tel:+919342488917" className="text-[15px] font-bold text-[#2B3279] hover:text-[#FF7A00] transition-colors">
                    (+91) 93424 88917
                  </a>
                  <span className="text-[12px] text-slate-500">Mon-Sat from 10am to 6:30pm</span>
                </div>
              </div>

              {/* Channel 2: Visit Us */}
              <div className="flex items-start gap-[14px]">
                <div className="w-[42px] h-[42px] rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
                  <MapPin className="w-[18px] h-[18px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">Visit Us</span>
                  <p className="text-[13px] font-medium text-[#2B3279] leading-relaxed">
                    No 1, 1st Floor, Narasimhan St,<br />
                    Jothi Nagar, West Mambalam,<br />
                    Chennai, Tamil Nadu 600033
                  </p>
                </div>
              </div>

              {/* Channel 3: Email Support */}
              <div className="flex items-start gap-[14px]">
                <div className="w-[42px] h-[42px] rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-blue-600">
                  <Mail className="w-[18px] h-[18px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">Email Support</span>
                  <span className="text-[12px] text-slate-500 mb-0.5">For general enquiries & support</span>
                  <a href="mailto:techsupport@codeship.in" className="text-[14px] font-bold text-[#2B3279] hover:text-[#FF7A00] transition-colors">
                    techsupport@codeship.in
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Demo Booking Banner */}
            <div className="bg-linear-to-br from-[#2B3279] to-[#1C1E46] text-white rounded-[24px] p-[24px] sm:p-[28px] shadow-lg flex flex-col gap-[14px] relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-orange-500/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full w-fit backdrop-blur-xs border border-white/15">
                <Calendar className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-[11px] font-bold tracking-wide uppercase text-orange-300">Live Walkthrough</span>
              </div>

              <h3 className="font-bold text-[18px] sm:text-[20px] leading-snug">
                Want a personalized walkthrough for your institution?
              </h3>
              <p className="text-[13px] text-slate-300 leading-relaxed">
                Schedule a 30-minute 1-on-1 session tailored to your school's academics, fees, exams, and workflows.
              </p>
              
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="mt-[4px] w-full py-[12px] bg-[#FF7A00] hover:bg-orange-600 text-white font-bold text-[14px] rounded-xl shadow-md transition-all hover:scale-[1.01] flex items-center justify-center gap-[8px] cursor-pointer"
              >
                <span>Book a Free Live Demo</span>
                <ArrowRight className="w-[16px] h-[16px]" />
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-[28px] p-[24px] sm:p-[36px] border border-slate-200 shadow-xl text-left">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-[16px]">
                <div>
                  <h2 className="font-bold text-[20px] sm:text-[24px] text-[#2B3279] tracking-tight">
                    Send Us a Message
                  </h2>
                  <p className="text-[13px] sm:text-[14px] text-slate-500 mt-[4px]">
                    Fill out the details below and our education tech specialists will reach out shortly.
                  </p>
                </div>

                {/* Grid: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                  {/* Your Name */}
                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[13px] font-bold text-[#2B3279]">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <img
                        src={nameIcon}
                        alt="Name"
                        className="w-4 h-4 object-contain absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-80"
                      />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Dr. Rajesh Kumar"
                        className={`w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border ${
                          errors.name ? 'border-red-500 bg-red-50/50' : 'border-slate-200 focus:border-[#FF7A00] focus:bg-white'
                        } rounded-xl text-[13px] sm:text-[14px] text-slate-800 focus:outline-none transition-colors`}
                      />
                    </div>
                    {errors.name && <span className="text-red-500 text-[11px] font-medium ml-1">{errors.name}</span>}
                  </div>

                  {/* Work Email */}
                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[13px] font-bold text-[#2B3279]">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <img
                        src={mailIcon}
                        alt="Email"
                        className="w-4 h-4 object-contain absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-80"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="principal@school.edu"
                        className={`w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border ${
                          errors.email ? 'border-red-500 bg-red-50/50' : 'border-slate-200 focus:border-[#FF7A00] focus:bg-white'
                        } rounded-xl text-[13px] sm:text-[14px] text-slate-800 focus:outline-none transition-colors`}
                      />
                    </div>
                    {errors.email && <span className="text-red-500 text-[11px] font-medium ml-1">{errors.email}</span>}
                  </div>
                </div>

                {/* Grid: Phone & Institution Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                  {/* Phone Number */}
                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[13px] font-bold text-[#2B3279]">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex">
                      <select
                        name="countryCode"
                        value={formData.countryCode || '+91'}
                        onChange={handleInputChange}
                        className="w-[110px] pl-[12px] pr-[8px] py-2.5 bg-slate-50 border border-slate-200 border-r-0 rounded-l-xl text-[13px] sm:text-[14px] text-slate-800 focus:outline-none focus:border-[#FF7A00] transition-colors"
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
                        {/* <img
                          src={phoneIcon}
                          alt="Phone"
                          className="w-4 h-4 object-contain absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-80"
                        /> */}
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="Mobile Number"
                          maxLength={15}
                          className={`w-full pl-3.5 pr-3.5 py-2.5 bg-slate-50 border ${
                            errors.phone ? 'border-red-500 bg-red-50/50' : 'border-slate-200 focus:border-[#FF7A00] focus:bg-white'
                          } rounded-r-xl border-l-0 text-[13px] sm:text-[14px] text-slate-800 focus:outline-none transition-colors`}
                        />
                      </div>
                    </div>
                    {errors.phone && <span className="text-red-500 text-[11px] font-medium ml-1">{errors.phone}</span>}
                  </div>

                  {/* Institution Name */}
                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[13px] font-bold text-[#2B3279]">
                      Institution Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <img
                        src={uniIcon}
                        alt="Institution"
                        className="w-4 h-4 object-contain absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-80"
                      />
                      <input
                        type="text"
                        name="institution"
                        value={formData.institution}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="St. Xavier's International School"
                        className={`w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border ${
                          errors.institution ? 'border-red-500 bg-red-50/50' : 'border-slate-200 focus:border-[#FF7A00] focus:bg-white'
                        } rounded-xl text-[13px] sm:text-[14px] text-slate-800 focus:outline-none transition-colors`}
                      />
                    </div>
                    {errors.institution && <span className="text-red-500 text-[11px] font-medium ml-1">{errors.institution}</span>}
                  </div>
                </div>

                {/* Grid: City & Inquiry Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                  {/* City */}
                  <div 
                    className="flex flex-col gap-[6px] relative"
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget)) {
                        setShowCitySuggestions(false);
                      }
                    }}
                  >
                    <label className="text-[13px] font-bold text-[#2B3279]">
                      City / State <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <img
                        src={locationIcon}
                        alt="Location"
                        className="w-4 h-4 object-contain absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-80"
                      />
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
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
                        placeholder="Bengaluru, Karnataka"
                        className={`w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border ${
                          errors.city ? 'border-red-500 bg-red-50/50' : 'border-slate-200 focus:border-[#FF7A00] focus:bg-white'
                        } rounded-xl text-[13px] sm:text-[14px] text-slate-800 focus:outline-none transition-colors`}
                        autoComplete="off"
                      />
                    </div>
                    {showCitySuggestions && citySuggestions.length > 0 && (
                      <div 
                        className="absolute left-[0px] right-[0px] top-[calc(100%+4px)] z-50 max-h-[180px] overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-lg scrollbar-thin scrollbar-thumb-slate-300 py-1.5 flex flex-col"
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
                            className="w-full text-left px-4 py-2 hover:bg-slate-50 text-[13px] sm:text-[14px] text-slate-700 font-medium transition-colors cursor-pointer"
                          >
                            {city}
                          </button>
                        ))}
                      </div>
                    )}
                    {errors.city && <span className="text-red-500 text-[11px] font-medium ml-1">{errors.city}</span>}
                  </div>

                  {/* Inquiry Topic */}
                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[13px] font-bold text-[#2B3279]">
                      Topic of Interest
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-[#FF7A00] focus:bg-white rounded-xl text-[13px] sm:text-[14px] text-slate-800 focus:outline-none transition-colors cursor-pointer"
                    >
                      {INQUIRY_TYPES.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-[6px]">
                  <label className="text-[13px] font-bold text-[#2B3279]">
                    How can we help your institution? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Tell us about your campus requirements, current software stack, or specific challenges..."
                    className={`w-full p-3.5 bg-slate-50 border ${
                      errors.message ? 'border-red-500 bg-red-50/50' : 'border-slate-200 focus:border-[#FF7A00] focus:bg-white'
                    } rounded-xl text-[13px] sm:text-[14px] text-slate-800 focus:outline-none transition-colors resize-none`}
                  />
                  {errors.message && <span className="text-red-500 text-[11px] font-medium ml-1">{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 mt-2 bg-linear-to-r from-[#FF7A00] to-[#F6881F] hover:from-[#e56d00] hover:to-[#df7914] text-white font-bold text-[15px] rounded-xl shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>

                <p className="text-[11px] text-center text-slate-400 font-medium">
                  🔒 We respect your privacy. No spam or third-party sharing.
                </p>
              </form>
            ) : (
              /* Success Submission State */
              <div className="flex flex-col items-center text-center gap-4 py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 animate-bounce">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-extrabold text-[22px] sm:text-[24px] text-[#2B3279]">
                  Message Successfully Sent!
                </h3>
                <p className="text-[14px] text-slate-600 max-w-[440px] leading-relaxed">
                  Thank you, <strong className="text-[#2B3279]">{formData.name}</strong>. Our institutional implementation specialist will review your inquiry for <strong className="text-[#2B3279]">{formData.institution}</strong> and respond within 15 minutes.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-4 px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-[13px] rounded-xl transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Reusable Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

    </div>
  );
}
