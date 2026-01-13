import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const navigate = useNavigate();

  const handleFindOutMore = () => {
    // Scroll to services section or navigate to services page
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If services section doesn't exist on current page, navigate to services page
      navigate('/services?type=destinations');
    }
  };

  const handlePlayDemo = () => {
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };

  return (
    <>
      <section className="relative container mx-auto px-6 py-12 lg:px-12 lg:py-20 overflow-hidden">
        
        {/* Background Decorative Shapes */}
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-60 bg-gradient-to-br from-[#FFF4E6] to-[#FFE8CC] -top-24 -right-24 -z-10"></div>
        <div className="absolute w-[300px] h-[300px] rounded-full opacity-60 bg-gradient-to-br from-[#FFE8CC] to-[#FFD6A5] bottom-12 right-24 -z-10"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-6 lg:space-y-8 fade-in">
            
            {/* Subtitle */}
            <p className="text-[#DF6951] font-bold text-sm lg:text-base uppercase tracking-wider">
              Best Destinations around the world
            </p>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-[#181E4B] leading-tight">
              Travel,{" "}
              <span className="relative inline-block">
                <span className="relative z-10">enjoy</span>
                <img
                  src={'/src/assets/underline.png'}
                  alt="underline"
                  className="absolute left-0 -bottom-0 w-full h-[12px] pointer-events-none"
                />
              </span>
              <br />
              and live a new
              <br />
              and full life
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base lg:text-lg max-w-md leading-relaxed">
              Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-4">
              
              {/* Primary Button */}
              <button 
                onClick={handleFindOutMore}
                className="btn-primary bg-[#F1A501] hover:bg-[#FF7A00] text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Find out more
              </button>

              {/* Secondary Button with Play Icon */}
              <button 
                onClick={handlePlayDemo}
                className="btn-secondary flex items-center gap-3 text-gray-700 font-medium group px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-14 h-14 bg-[#DF5C50] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <span className="group-hover:text-[#DF5C50] transition-colors duration-300">Play Demo</span>
              </button>
            </div>
          </div>

          {/* Right Column - Hero Image with Decorations */}
          <div className="relative min-h-[500px] flex items-center justify-center fade-in">
            
            {/* Decorative Airplane 1 (Top Right) */}
            <div className="absolute top-0 right-20 z-10 airplane-1">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path d="M30 10L40 25H50L35 30L40 45L30 40L20 45L25 30L10 25H20L30 10Z" fill="#6B7CFF" opacity="0.8"/>
              </svg>
            </div>

            {/* Decorative Airplane 2 (Bottom Left) */}
            <div className="absolute bottom-10 left-10 z-10 airplane-2">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path d="M25 8L33 20H42L29 25L33 38L25 33L17 38L21 25L8 20H17L25 8Z" fill="#FF7A00" opacity="0.8"/>
              </svg>
            </div>

            {/* Main Hero Image */}
            <div className="relative float-animation z-20">
              <img 
                src="/src/assets/Image.png" 
                alt="Happy female traveler with backpack and suitcase" 
                className="w-full h-auto drop-shadow-2xl max-w-[600px]"
                onError={(e) => {
                  // Fallback placeholder
                  e.target.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=600&fit=crop&q=80';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-fadeIn"
          onClick={closeVideoModal}
        >
          <div 
            className="bg-white rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-[#181E4B]">Travel Experience Demo</h3>
              <button
                onClick={closeVideoModal}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-200 hover:scale-110"
              >
                ×
              </button>
            </div>

            {/* Video Container */}
<div className="relative bg-black" style={{ paddingBottom: '56.25%' }}>
  <iframe
    className="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube.com/embed/pUBbIjDrr8g?autoplay=1"
    title="Travel Demo Video - Solo Trip to Switzerland"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

            {/* Modal Footer */}
            <div className="p-6 bg-gradient-to-r from-blue-50 to-orange-50">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Ready to start your journey?</p>
                  <p className="text-lg font-semibold text-[#181E4B]">Explore our amazing destinations</p>
                </div>
                <button
                  onClick={() => {
                    closeVideoModal();
                    handleFindOutMore();
                  }}
                  className="bg-gradient-to-r from-[#F1A501] to-[#FF7A00] hover:from-[#FF7A00] hover:to-[#F1A501] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl whitespace-nowrap"
                >
                  Explore Destinations
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add animations CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .float-animation {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .airplane-1 {
          animation: fly1 20s linear infinite;
        }

        .airplane-2 {
          animation: fly2 25s linear infinite;
        }

        @keyframes fly1 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(50px, -30px) rotate(15deg);
          }
          50% {
            transform: translate(100px, 0) rotate(0deg);
          }
          75% {
            transform: translate(50px, 30px) rotate(-15deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }

        @keyframes fly2 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(-40px, 40px) rotate(-15deg);
          }
          50% {
            transform: translate(-80px, 0) rotate(0deg);
          }
          75% {
            transform: translate(-40px, -40px) rotate(15deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
      `}</style>
    </>
  );
};

export default Hero;