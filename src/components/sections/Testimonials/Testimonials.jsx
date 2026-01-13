import React, { useState } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80',
      quote: '"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."',
      name: 'Mike taylor',
      location: 'Lahore, Pakistan',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80',
      quote: '"Amazing experience! The travel was smooth and the destinations were breathtaking. Highly recommend their services for anyone looking to explore."',
      name: 'Chris Thomas',
      location: 'CEO of Red Button',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80',
      quote: '"Best trip of my life! Everything was perfectly organized and the customer service was exceptional. Will definitely book again."',
      name: 'James Wilson',
      location: 'London, UK',
    },
  ];

  // Single image containing all logos

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextIndex = (currentSlide + 1) % testimonials.length;

  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Section Header */}
          <div className="space-y-6 fade-in">
            <p className="text-gray-500 font-semibold text-sm uppercase tracking-wider">
              TESTIMONIALS
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#181E4B] leading-tight">
              What People Say<br/>
              About Us.
            </h2>

            {/* Navigation Dots */}
            <div className="flex items-center gap-3 pt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index
                      ? 'w-4 h-4 bg-[#181E4B]'
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Stacked Cards with Navigation */}
          <div className="relative flex flex-col items-end gap-6">
            
            {/* Cards Stack Container */}
            <div className="relative w-full max-w-lg">
              
              {/* Main Active Testimonial Card - Front */}
              <div className="relative z-20 bg-white rounded-xl shadow-2xl p-8 lg:p-10 transition-all duration-500">
                {/* Profile Image - Positioned at top */}
                <div className="absolute -top-8 left-8">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src={testimonials[currentSlide].image} 
                      alt={testimonials[currentSlide].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Quote */}
                <div className="pt-12 space-y-6">
                  <p className="text-gray-600 text-base leading-relaxed">
                    {testimonials[currentSlide].quote}
                  </p>

                  {/* Author Info */}
                  <div>
                    <h4 className="text-lg font-semibold text-[#181E4B]">
                      {testimonials[currentSlide].name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonials[currentSlide].location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Next Card Preview (Below) - Shows name and role only - Behind */}
              <div className="relative -mt-8 pt-12 z-10 w-[95%] mx-auto bg-gray-50 rounded-b-xl shadow-lg p-6 hover:bg-gray-100 transition-all duration-300 cursor-pointer border-t border-gray-200"
                   onClick={nextSlide}
                   style={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}>
                <h4 className="text-base font-semibold text-gray-700 mb-1">
                  {testimonials[nextIndex].name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonials[nextIndex].location}
                </p>
              </div>
            </div>

            {/* Navigation Arrows - Positioned to the right of cards */}
            <div className="absolute top-1/2 -right-16 -translate-y-1/2 flex flex-col gap-4">
              {/* Up Arrow */}
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-[#181E4B] bg-white hover:bg-[#181E4B] text-gray-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"/>
                </svg>
              </button>

              {/* Down Arrow */}
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-[#181E4B] hover:bg-[#0f1531] text-white transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Partner Logos Section - Single Image */}
        <div className="mt-24 fade-in">
          <div className="flex items-center justify-center">
            <img 
              src="/src/assets/logos (1).png" 
              alt="Partner Logos - axon, jetstar, expedia, qantas, alitalia"
              className="w-full max-w-4xl h-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/1000x100/ffffff/cccccc?text=Partner+Logos';
              }}
            />
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
      `}</style>
    </section>
  );
};

export default Testimonials;