import React, { useState } from 'react';

const CategorySection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      image: "/src/assets/Group 48.png",
      title: "Calculated Weather",
      description: "Built Wicket longer admire do barton vanity itself do in it.",
    },
    {
      id: 2,
      image: "/src/assets/Group 51.png",
      title: "Best Flights",
      description: "Engrossed listening. Park gate sell they west hard for the.",
    },
    {
      id: 3,
      image: "/src/assets/Group 50.png",
      title: "Local Events",
      description: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    },
    {
      id: 4,
      image: "/src/assets/Group 49.png",
      title: "Customization",
      description: "We deliver outsourced aviation services for military customers",
    }
  ];

  return (
    <section className="relative py-16 lg:py-24 px-6 lg:px-12 overflow-hidden">
      <div className="container mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-gray-500 text-sm lg:text-base font-semibold uppercase tracking-widest">
            CATEGORY
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#181E4B]">
            We Offer Best Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const isHovered = hoveredCard === service.id;

            return (
              <div
                key={service.id}
                className="relative"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                {/* Hover Decoration UNDER card (only for Best Flights) */}
                {service.id === 2 && isHovered && (
                  <div className="
                    absolute -bottom-10 -left-10 
                    w-28 h-28 
                    bg-gradient-to-br from-red-400 to-orange-500
                    rounded-tl-[80px] rounded-br-[20px]
                    transition-all duration-500
                    z-0
                  " />
                )}

                {/* Card */}
                <div
                  className={`
                    relative z-10
                    bg-white rounded-3xl p-8 text-center h-full
                    transition-all duration-500 ease-out
                    ${isHovered ? 'shadow-2xl -translate-y-3' : 'shadow-md hover:shadow-xl'}
                  `}
                >
                  {/* Image */}
                  <div className="mb-6 flex justify-center">
                    <div
                      className={`
                        flex items-center justify-center
                        w-24 h-24 rounded-2xl
                        transition-all duration-500
                        ${isHovered ? 'scale-110 rotate-3' : 'scale-100'}
                      `}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-26 h-26 object-contain"
                        onError={(e) => {
                          e.target.src =
                            'https://via.placeholder.com/64?text=' +
                            service.title.charAt(0);
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-[#181E4B]">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Border */}
                  <div
                    className={`
                      absolute inset-0 rounded-3xl
                      border-2 border-transparent
                      transition-all duration-500
                      ${isHovered ? 'border-orange-200' : ''}
                    `}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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

export default CategorySection;
