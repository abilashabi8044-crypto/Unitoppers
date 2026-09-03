import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { updateFormField, submitDemoRequest } from '../store/slices/demoSlice';
import arrow from '../assets/hero/arrow-right.png';
import { X, CheckCircle2, Clock, Calendar } from 'lucide-react';

// Form Field Icons
import nameIcon from '../assets/demo-section-icons/fluent-color_people-32.png';
import uniIcon from '../assets/demo-section-icons/hugeicons_university.png';
import locationIcon from '../assets/demo-section-icons/boxicons_location-filled.png';
import phoneIcon from '../assets/demo-section-icons/ic_baseline-phone.png';
import mailIcon from '../assets/demo-section-icons/material-symbols_mail.png';

const SESSION_TIME_OPTIONS = [
  { id: 'morning', label: 'Morning Slot', time: '10:00 AM - 01:00 PM', icon: '☀️' },
  { id: 'afternoon', label: 'Afternoon Slot', time: '02:00 PM - 05:00 PM', icon: '🌤️' },
  { id: 'evening', label: 'Evening Slot', time: '05:00 PM - 08:00 PM', icon: '🌙' },
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

export default function DemoModal({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const [cities, setCities] = useState(POPULAR_CITIES);
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [countryCodes, setCountryCodes] = useState([]);
  const [showCitySuggestions, setShowCitySuggestions] = useState(false);
  const [instSuggestions, setInstSuggestions] = useState([]);
  const [showInstSuggestions, setShowInstSuggestions] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Fetch all Indian cities from public JSON API
  useEffect(() => {
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
  const [demoForm, setDemoForm] = useState({
    name: '',
    institution: '',
    city: '',
    countryCode: '+91',
    phone: '',
    email: '',
    sessionTime: 'Morning Slot (10:00 AM - 01:00 PM)',
    bookingDate: new Date().toISOString().split('T')[0],
  });
  const [formErrors, setFormErrors] = useState({});

  // Reset closing state whenever isOpen changes to true
  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  // Scroll Lock & Esc listener
  useEffect(() => {
    if (isOpen) {
      if (window.lenis) window.lenis.stop();
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          handleClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        if (window.lenis) window.lenis.start();
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 250);
  };

  const validateField = (name, value) => {
    const val = (value || '').trim();
    switch (name) {
      case 'name':
        if (!val) return 'Your name is required';
        if (val.length < 2) return 'Name must be at least 2 characters';
        break;
      case 'institution':
        if (!val) return 'Institution name is required';
        if (val.length < 2) return 'Institution name must be at least 2 characters';
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
        if (!val) return 'Email address is required';
        if (!emailRegex.test(val)) return 'Enter a valid email address';
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

    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    setDemoForm((prev) => ({ ...prev, [name]: value }));

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

    if (name === 'institution') {
      if (value.trim().length > 0) {
        const filtered = POPULAR_INSTITUTIONS.filter((inst) =>
          inst.toLowerCase().includes(value.toLowerCase())
        );
        setInstSuggestions(filtered);
        setShowInstSuggestions(true);
      } else {
        setInstSuggestions([]);
        setShowInstSuggestions(false);
      }
    }
  };

  const handleSelectCity = (city) => {
    setDemoForm((prev) => ({ ...prev, city }));
    setCitySuggestions([]);
    setShowCitySuggestions(false);
    if (formErrors.city) {
      setFormErrors((prev) => ({ ...prev, city: undefined }));
    }
  };

  const handleSelectInst = (institution) => {
    setDemoForm((prev) => ({ ...prev, institution }));
    setInstSuggestions([]);
    setShowInstSuggestions(false);
    if (formErrors.institution) {
      setFormErrors((prev) => ({ ...prev, institution: undefined }));
    }
  };

  const handleBlur = (e) => {
    const error = validateField(e.target.name, e.target.value);
    if (error) {
      setFormErrors((prev) => ({ ...prev, [e.target.name]: error }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    ['name', 'institution', 'city', 'phone', 'email'].forEach((field) => {
      const err = validateField(field, demoForm[field]);
      if (err) newErrors[field] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setFormErrors(newErrors);
      return;
    }

    setFormErrors({});

    // Reset local form
    setDemoForm({
      name: '',
      institution: '',
      city: '',
      phone: '',
      email: '',
      countryCode: '+91',
    });

    // Show toast
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      handleClose(); // Close modal after toast
    }, 3500);

    // Sync with Redux store
    Object.keys(demoForm).forEach((field) => {
      dispatch(updateFormField({ field, value: demoForm[field] }));
    });
    dispatch(submitDemoRequest());
  };

  if (!isOpen || typeof document === 'undefined') return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/80 backdrop-blur-md ${isClosing ? 'modal-backdrop-exit' : 'modal-backdrop-enter'
        }`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Book a Free Demo Form"
    >
      <style>
        {`
          @keyframes modal-backdrop-enter {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes modal-backdrop-exit {
            from { opacity: 1; }
            to { opacity: 0; }
          }
          @keyframes modal-card-enter {
            from { opacity: 0; transform: scale(0.95) translateY(10px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
          @keyframes modal-card-exit {
            from { opacity: 1; transform: scale(1) translateY(0); }
            to { opacity: 0; transform: scale(0.95) translateY(10px); }
          }
          .modal-backdrop-enter { animation: modal-backdrop-enter 0.25s ease-out forwards; }
          .modal-backdrop-exit { animation: modal-backdrop-exit 0.25s ease-in forwards; }
          .modal-card-enter { animation: modal-card-enter 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          .modal-card-exit { animation: modal-card-exit 0.25s cubic-bezier(0.5, 0, 0.8, 0.5) forwards; }
        `}
      </style>
      <div
        data-lenis-prevent
        className={`relative w-full max-w-[540px] bg-white rounded-[24px] sm:rounded-[32px] shadow-2xl border border-slate-200/90 p-3 sm:p-5 max-h-[92vh] overflow-y-auto scrollbar-none flex flex-col text-left font-[Helvetica] ${isClosing ? 'modal-card-exit' : 'modal-card-enter'
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all cursor-pointer hover:rotate-90 shadow-xs"
          aria-label="Close demo form modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

          <form onSubmit={handleFormSubmit} className="flex flex-col gap-1.5 sm:gap-2">
            {/* Modal Title & Header */}
            <div className="pr-8">
              <h2 className="text-[16px] sm:text-[22px] font-bold text-[#2B3279] tracking-tight leading-snug">
                Book a Free Demo Walkthrough
              </h2>
              <p className="text-[12px] sm:text-[13px] text-slate-500 mt-1 hidden sm:block">
                See how Unitoppers replaces 10+ tools and unifies your institution.
              </p>
            </div>

            {/* Field 1: Your Name */}
            <div className="flex flex-col gap-1">
              <label className="text-[12px] sm:text-[13px] font-bold text-[#2B3279]">
                Your Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <img
                  src={nameIcon}
                  alt="Name"
                  className="w-4 h-4 object-contain absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-80"
                />
                <input
                  type="text"
                  name="name"
                  value={demoForm.name}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="e.g. Dr. Rajesh Kumar"
                  className={`w-full pl-10 pr-4 py-1.5 bg-slate-50 border ${formErrors.name ? 'border-red-500 bg-red-50/50' : 'border-slate-200 focus:border-[#FF7A00] focus:bg-white'
                    } rounded-xl text-[13px] sm:text-[14px] text-slate-800 focus:outline-none transition-colors shadow-2xs`}
                />
              </div>
              {formErrors.name && (
                <span className="text-red-500 text-[11px] font-medium ml-1">{formErrors.name}</span>
              )}
            </div>

            {/* Field 2 & 3: Institution Name & City (Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
              {/* Field 2: Institution Name */}
              <div className="flex flex-col gap-1 relative">
                <label className="text-[12px] sm:text-[13px] font-bold text-[#2B3279]">
                  Institution Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <img
                    src={uniIcon}
                    alt="Institution"
                    className="w-4 h-4 object-contain absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-80"
                  />
                  <input
                    type="text"
                    name="institution"
                    value={demoForm.institution}
                    onChange={handleInputChange}
                    onFocus={() => {
                      if (demoForm.institution.trim().length > 0) {
                        const filtered = POPULAR_INSTITUTIONS.filter((inst) =>
                          inst.toLowerCase().includes(demoForm.institution.toLowerCase())
                        );
                        setInstSuggestions(filtered);
                        setShowInstSuggestions(true);
                      }
                    }}
                    onBlur={() => setShowInstSuggestions(false)}
                    placeholder="e.g. St. Xavier's International School"
                    className={`w-full pl-10 pr-4 py-1.5 bg-slate-50 border ${formErrors.institution ? 'border-red-500 bg-red-50/50' : 'border-slate-200 focus:border-[#FF7A00] focus:bg-white'
                      } rounded-xl text-[13px] sm:text-[14px] text-slate-800 focus:outline-none transition-colors shadow-2xs`}
                    autoComplete="off"
                  />
                </div>
                {showInstSuggestions && instSuggestions.length > 0 && (
                  <div className="absolute left-[0px] right-[0px] top-[calc(100%+4px)] z-50 max-h-[180px] overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-lg scrollbar-none py-1.5 flex flex-col">
                    {instSuggestions.slice(0, 10).map((inst) => (
                      <button
                        key={inst}
                        type="button"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          handleSelectInst(inst);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-slate-50 text-[13px] sm:text-[14px] text-slate-700 font-medium transition-colors cursor-pointer"
                      >
                        {inst}
                      </button>
                    ))}
                  </div>
                )}
                {formErrors.institution && (
                  <span className="text-red-500 text-[11px] font-medium ml-1">{formErrors.institution}</span>
                )}
              </div>

              {/* City / State */}
              <div 
                className="flex flex-col gap-1.5 relative"
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setShowCitySuggestions(false);
                  }
                }}
              >
                <label className="text-[13px] sm:text-[14px] font-bold text-[#2B3279] ml-1">
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
                    value={demoForm.city}
                    onChange={handleInputChange}
                    onFocus={() => {
                      if (demoForm.city.trim().length > 0) {
                        const filtered = cities.filter((city) =>
                          city.toLowerCase().includes(demoForm.city.toLowerCase())
                        );
                        setCitySuggestions(filtered);
                        setShowCitySuggestions(true);
                      } else {
                        setCitySuggestions(cities);
                        setShowCitySuggestions(true);
                      }
                    }}
                    placeholder="e.g. Chennai, Mumbai, Bangalore"
                    className={`w-full pl-10 pr-4 py-1.5 bg-slate-50 border ${formErrors.city ? 'border-red-500 bg-red-50/50' : 'border-slate-200 focus:border-[#FF7A00] focus:bg-white'
                      } rounded-xl text-[13px] sm:text-[14px] text-slate-800 focus:outline-none transition-colors shadow-2xs`}
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
                {formErrors.city && (
                  <span className="text-red-500 text-[11px] font-medium ml-1">{formErrors.city}</span>
                )}
              </div>
            </div>

            {/* Field 4 & 5: Phone Number & Email Address (Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
              {/* Phone Number */}
              <div className="flex flex-col gap-1">
                <label className="text-[12px] sm:text-[13px] font-bold text-[#2B3279]">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative flex">
                  <select
                    name="countryCode"
                    value={demoForm.countryCode}
                    onChange={handleInputChange}
                    className="w-[90px] pl-2 pr-1 py-1.5 bg-slate-50 border border-slate-200 border-r-0 rounded-l-xl text-[13px] sm:text-[14px] text-slate-800 focus:outline-none focus:border-[#FF7A00] transition-colors"
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
                      className="w-4 h-4 object-contain absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-80"
                    /> */}
                    <input
                      type="tel"
                      name="phone"
                      value={demoForm.phone}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Enter Mobile Number"
                      maxLength={15}
                      className={`w-full pl-3 pr-3 py-1.5 bg-slate-50 border ${formErrors.phone ? 'border-red-500 bg-red-50/50' : 'border-slate-200 focus:border-[#FF7A00] focus:bg-white'
                        } rounded-r-xl border-l-0 text-[13px] sm:text-[14px] text-slate-800 focus:outline-none transition-colors shadow-2xs`}
                    />
                  </div>
                </div>
                {formErrors.phone && (
                  <span className="text-red-500 text-[11px] font-medium ml-1">{formErrors.phone}</span>
                )}
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-1">
                <label className="text-[12px] sm:text-[13px] font-bold text-[#2B3279]">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <img
                    src={mailIcon}
                    alt="Email"
                    className="w-4 h-4 object-contain absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-80"
                  />
                  <input
                    type="email"
                    name="email"
                    value={demoForm.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="principal@school.edu"
                    className={`w-full pl-10 pr-3 py-1.5 bg-slate-50 border ${formErrors.email ? 'border-red-500 bg-red-50/50' : 'border-slate-200 focus:border-[#FF7A00] focus:bg-white'
                      } rounded-xl text-[13px] sm:text-[14px] text-slate-800 focus:outline-none transition-colors shadow-2xs`}
                  />
                </div>
                {formErrors.email && (
                  <span className="text-red-500 text-[11px] font-medium ml-1">{formErrors.email}</span>
                )}
              </div>
            </div>



            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-linear-to-r from-[#FF7A00] to-[#F6881F] hover:from-[#e56d00] hover:to-[#df7914] text-white font-bold text-[14px] sm:text-[15px] rounded-xl shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Confirm & Book Free Demo</span>
              <img src={arrow} alt="" className="w-4 h-4" />
            </button>

            {/* Trust Guarantee note */}
            <p className="text-[11px] text-center text-slate-400 font-medium -mt-1">
              🔒 100% Free • No obligation • Personalized for your institution
            </p>
              </form>
      </div>

      {/* Toast Notification */}
      <div 
        className={`fixed bottom-[24px] right-[24px] bg-green-500 text-white px-[20px] py-[12px] rounded-[12px] shadow-2xl z-[100] flex items-center gap-[10px] transition-all duration-300 transform ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-[20px] opacity-0 pointer-events-none'}`}
      >
        <CheckCircle2 className="w-[20px] h-[20px] text-white" />
        <span className="font-[Helvetica] font-medium text-[14px]">Demo requested successfully!</span>
      </div>
    </div>,
    document.body
  );
}
