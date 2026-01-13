import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingSteps = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('booking-steps');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Auto-cycle through steps for demo
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView]);

  const steps = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
        </svg>
      ),
      color: 'bg-gradient-to-br from-[#F0BB1F] to-[#FFA500]',
      title: 'Choose Destination',
      description: 'Explore our curated collection of amazing destinations around the world.',
      action: 'Browse Destinations',
      link: '/services?type=destinations',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
        </svg>
      ),
      color: 'bg-gradient-to-br from-[#F15A2B] to-[#E63946]',
      title: 'Make Payment',
      description: 'Secure payment options with flexible booking and instant confirmation.',
      action: 'View Packages',
      link: '/services?type=bookings',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
        </svg>
      ),
      color: 'bg-gradient-to-br from-[#006380] to-[#003D52]',
      title: 'Reach Airport on Selected Date',
      description: 'Get ready for your adventure with our complete travel guide and support.',
      action: 'Flight Deals',
      link: '/services?type=flights',
    },
  ];

  const handleStepClick = (index) => {
    setActiveStep(index);
    if (!completedSteps.includes(index)) {
      setCompletedSteps([...completedSteps, index]);
    }
  };

  const handleActionClick = (link) => {
    navigate(link);
  };

  const handleCardClick = (destination) => {
    navigate(`/services?type=destinations&destination=${destination}`);
  };

  return (
    <section id="booking-steps" className="relative bg-gradient-to-b from-white to-gray-50 py-16 lg:py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Steps */}
          <div className="space-y-8 fade-in">
            {/* Section Header */}
            <div className="space-y-4">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#F15A2B] to-[#F0BB1F] font-bold text-sm uppercase tracking-wider">
                Easy and Fast
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#181E4B] leading-tight">
                Book Your Next Trip<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006380] to-[#F0BB1F]">
                  In 3 Easy Steps
                </span>
              </h2>
            </div>

            {/* Steps List */}
            <div className="space-y-6 mt-12">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const isCompleted = completedSteps.includes(index);
                
                return (
                  <div 
                    key={index}
                    onClick={() => handleStepClick(index)}
                    className={`
                      relative flex gap-5 items-start group cursor-pointer
                      transition-all duration-500 p-4 rounded-2xl
                      ${isActive ? 'bg-white shadow-xl scale-105' : 'hover:bg-white/50'}
                    `}
                    style={{ 
                      animationDelay: `${index * 0.15}s`,
                      transform: isActive ? 'translateX(10px)' : 'translateX(0)'
                    }}
                  >
                    {/* Connecting Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-9 top-20 w-0.5 h-16 bg-gradient-to-b from-gray-300 to-transparent"></div>
                    )}

                    {/* Icon with Pulse Animation */}
                    <div className={`
                      ${step.color} rounded-2xl p-4 shadow-lg 
                      flex-shrink-0 relative
                      transition-all duration-500
                      ${isActive ? 'scale-110 shadow-2xl' : 'group-hover:scale-105'}
                    `}>
                      {step.icon}
                      
                      {/* Completion Checkmark */}
                      {isCompleted && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                          </svg>
                        </div>
                      )}

                      {/* Active Pulse Ring */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-2xl animate-ping opacity-75" 
                             style={{ background: 'inherit' }}></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className={`
                          font-bold text-lg transition-colors duration-300
                          ${isActive ? 'text-[#181E4B]' : 'text-gray-600'}
                        `}>
                          {step.title}
                        </h3>
                        <span className="text-xs font-bold text-gray-400">
                          Step {index + 1}
                        </span>
                      </div>
                      
                      <p className={`
                        text-sm leading-relaxed transition-all duration-300
                        ${isActive ? 'text-gray-700' : 'text-gray-500'}
                      `}>
                        {step.description}
                      </p>

                      {/* Action Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleActionClick(step.link);
                        }}
                        className={`
                          mt-3 px-4 py-2 rounded-lg font-medium text-sm
                          transition-all duration-300
                          ${isActive 
                            ? 'bg-gradient-to-r from-[#181E4B] to-[#006380] text-white shadow-md hover:shadow-lg' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }
                        `}
                      >
                        {step.action} →
                      </button>
                    </div>

                    {/* Progress Bar */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F0BB1F] via-[#F15A2B] to-[#006380] rounded-full"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Trip Cards */}
          <div className="relative fade-in min-h-[600px]" style={{ isolation: 'isolate' }}>
            
            {/* Decorative Blue Glow */}
            <div className="absolute -top-12 right-0 w-[400px] h-[400px] rounded-full opacity-40 z-0" 
                 style={{ 
                   background: 'radial-gradient(circle, #59B1E6 0%, transparent 70%)',
                   filter: 'blur(60px)',
                   animation: 'pulse 4s ease-in-out infinite'
                 }}>
            </div>
            
            {/* Main Trip Card */}
            <div className="relative z-20 bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md ml-auto hover:shadow-3xl transition-all duration-500 group transform hover:-translate-y-2">
              {/* Trip Image */}
              <div className="relative overflow-hidden h-72 cursor-pointer" onClick={() => handleCardClick('greece')}>
                <img 
                  src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=500&h=300&fit=crop&q=80" 
                  alt="Trip to Greece"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#F0BB1F] to-[#FF7A00] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Hot Deal 🔥
                </div>

                {/* View Details Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                  <button className="bg-white text-[#181E4B] px-6 py-3 rounded-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#181E4B] mb-1">
                      Trip To Greece
                    </h3>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-sm text-gray-500 ml-1">(4.8)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold text-[#F15A2B]">$1,299</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-xl">
                  <svg className="w-5 h-5 text-[#F0BB1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span>14-29 June</span>
                  <span className="text-gray-300">|</span>
                  <svg className="w-5 h-5 text-[#006380]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                  <span>by Robbin Joseph</span>
                </div>

                {/* Interactive Icons */}
                <div className="flex items-center gap-3 pt-2">
                  <button 
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gray-50 hover:bg-blue-50 rounded-xl transition-colors group/btn"
                    title="Building Info"
                  >
                    <svg className="w-5 h-5 text-gray-600 group-hover/btn:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                    <span className="text-sm font-medium text-gray-600 group-hover/btn:text-blue-600">Hotels</span>
                  </button>
                  
                  <button 
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gray-50 hover:bg-orange-50 rounded-xl transition-colors group/btn"
                    title="Flight Info"
                  >
                    <svg className="w-5 h-5 text-gray-600 group-hover/btn:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                    <span className="text-sm font-medium text-gray-600 group-hover/btn:text-orange-600">Flights</span>
                  </button>
                  
                  <button 
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gray-50 hover:bg-green-50 rounded-xl transition-colors group/btn"
                    title="Location"
                  >
                    <svg className="w-5 h-5 text-gray-600 group-hover/btn:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span className="text-sm font-medium text-gray-600 group-hover/btn:text-green-600">Location</span>
                  </button>
                </div>

                {/* Bottom Info */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white"></div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 font-medium ml-1">24 people going</span>
                  </div>
                  
                  <button className="group/heart">
                    <svg className="w-7 h-7 text-gray-300 group-hover/heart:text-red-500 transition-colors group-hover/heart:scale-125 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Secondary Ongoing Trip Card */}
            <div className="absolute bottom-12 right-0 lg:-right-24 z-30 bg-white rounded-2xl shadow-2xl p-5 max-w-xs hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer group/ongoing"
                 onClick={() => handleCardClick('rome')}>
              <div className="flex items-start gap-4">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=100&h=100&fit=crop&q=80" 
                    alt="Trip to Rome"
                    className="w-16 h-16 rounded-2xl object-cover shadow-md ring-2 ring-purple-200"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-2 py-0.5 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs font-bold rounded-full">
                      Ongoing
                    </span>
                    <span className="text-xs text-gray-400">In Progress</span>
                  </div>
                  
                  <h4 className="text-base font-bold text-[#181E4B] group-hover/ongoing:text-purple-600 transition-colors">
                    Trip to Rome
                  </h4>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-purple-700">40% completed</span>
                      <span className="text-gray-500">3 of 7 days</span>
                    </div>
                    <div className="relative w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                        style={{ width: '40%' }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.8s ease-in;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
};

export default BookingSteps;