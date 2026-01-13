import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🗺️',
      title: 'Calculated Weather',
      description: 'Built Wicket longer admire do barton vanity itself do in it.',
    },
    {
      icon: '✈️',
      title: 'Best Flights',
      description: 'Engrossed listening. Park gate sell they west hard for the.',
    },
    {
      icon: '🎤',
      title: 'Local Events',
      description: 'Barton vanity itself do in it. Preferred to men it engrossed listening.',
    },
    {
      icon: '⚙️',
      title: 'Customization',
      description: 'We deliver outsourced aviation services for military customers.',
    },
  ];

  return (
    <section id="services" className="relative container mx-auto px-6 py-16 lg:px-12 lg:py-24 bg-white">
      
      {/* Section Header */}
      <div className="text-center fade-in mb-16">
        <p className="text-gray-500 font-semibold text-sm uppercase tracking-wider mb-4">
          CATEGORY
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold text-[#181E4B]">
          We Offer Best Services
        </h2>
      </div>

      {/* Services Grid - 4 columns on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {services.map((service, index) => (
          <div 
            key={index}
            className="fade-in bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 cursor-pointer group relative"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Hover effect background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            
            {/* Icon */}
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-bold text-[#181E4B] mb-4">
              {service.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;