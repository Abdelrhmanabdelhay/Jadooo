import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Search, Filter, Star, Users, Calendar, MapPin, Heart, TrendingUp } from 'lucide-react';

const TopDestinations = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [likedDestinations, setLikedDestinations] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('top-destinations');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const destinations = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
      location: "Rome, Italy",
      country: "Italy",
      price: 5420,
      duration: "10 Days",
      rating: 4.9,
      reviews: 328,
      category: "cultural",
      trending: true,
      travelers: 156,
      highlights: ["Colosseum", "Vatican", "Trevi Fountain"],
      bestTime: "Spring"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80",
      location: "London, UK",
      country: "United Kingdom",
      price: 4200,
      duration: "12 Days",
      rating: 4.7,
      reviews: 294,
      category: "cultural",
      trending: false,
      travelers: 203,
      highlights: ["Big Ben", "Tower Bridge", "Buckingham Palace"],
      bestTime: "Summer"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
      location: "Full Europe",
      country: "Multiple",
      price: 15000,
      duration: "28 Days",
      rating: 5.0,
      reviews: 512,
      category: "adventure",
      trending: true,
      travelers: 89,
      highlights: ["15 Countries", "Major Cities", "Scenic Routes"],
      bestTime: "Summer"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
      location: "Paris, France",
      country: "France",
      price: 4800,
      duration: "8 Days",
      rating: 4.8,
      reviews: 445,
      category: "romantic",
      trending: true,
      travelers: 234,
      highlights: ["Eiffel Tower", "Louvre", "Seine Cruise"],
      bestTime: "Spring"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
      location: "Tokyo, Japan",
      country: "Japan",
      price: 6200,
      duration: "10 Days",
      rating: 4.9,
      reviews: 389,
      category: "cultural",
      trending: true,
      travelers: 178,
      highlights: ["Mount Fuji", "Temples", "Modern Tokyo"],
      bestTime: "Spring"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
      location: "Swiss Alps",
      country: "Switzerland",
      price: 7800,
      duration: "7 Days",
      rating: 5.0,
      reviews: 276,
      category: "adventure",
      trending: false,
      travelers: 124,
      highlights: ["Mountain Views", "Skiing", "Scenic Trains"],
      bestTime: "Winter"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Destinations', icon: '🌍' },
    { id: 'trending', label: 'Trending', icon: '🔥' },
    { id: 'cultural', label: 'Cultural', icon: '🏛️' },
    { id: 'adventure', label: 'Adventure', icon: '⛰️' },
    { id: 'romantic', label: 'Romantic', icon: '💕' },
  ];

  const handleLike = (id) => {
    setLikedDestinations(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleBookNow = (destination) => {
    navigate(`/services?type=destinations&destination=${destination.location}`);
  };

  const filteredDestinations = destinations.filter(dest => {
    const matchesFilter = selectedFilter === 'all' || 
                         (selectedFilter === 'trending' && dest.trending) ||
                         dest.category === selectedFilter;
    const matchesSearch = dest.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dest.country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="top-destinations" className="relative py-16 lg:py-24 px-6 lg:px-12 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-12 space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#F15A2B] to-[#F0BB1F] text-sm lg:text-base font-bold uppercase tracking-widest">
              Top Selling
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-[#F15A2B] to-[#F0BB1F] rounded-full mx-auto mt-2"></div>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-[#181E4B] leading-tight">
            Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006380] to-[#F0BB1F]">Destinations</span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the most sought-after travel experiences curated by our experts
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className={`max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl shadow-xl p-4 flex flex-col md:flex-row gap-4">
            
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F0BB1F] transition-all"
              />
            </div>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#181E4B] to-[#006380] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>

            {/* Desktop Filters */}
            <div className="hidden md:flex items-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`
                    px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300
                    ${selectedFilter === filter.id
                      ? 'bg-gradient-to-r from-[#181E4B] to-[#006380] text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }
                  `}
                >
                  <span className="mr-1">{filter.icon}</span>
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="md:hidden mt-4 bg-white rounded-2xl shadow-xl p-4 space-y-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => {
                    setSelectedFilter(filter.id);
                    setShowFilters(false);
                  }}
                  className={`
                    w-full px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 text-left
                    ${selectedFilter === filter.id
                      ? 'bg-gradient-to-r from-[#181E4B] to-[#006380] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }
                  `}
                >
                  <span className="mr-2">{filter.icon}</span>
                  {filter.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing <span className="font-bold text-[#181E4B]">{filteredDestinations.length}</span> amazing destinations
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredDestinations.map((destination, index) => {
            const isHovered = hoveredCard === destination.id;
            const isLiked = likedDestinations.includes(destination.id);
            
            return (
              <div
                key={destination.id}
                className="relative group"
                onMouseEnter={() => setHoveredCard(destination.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.15}s both` : 'none'
                }}
              >
                {/* Decorative Silk Element (only for third card) */}
                {destination.id === 3 && (
                  <div className="absolute -bottom-16 -right-12 lg:-bottom-0 lg:-right-[87px] w-32 h-32 lg:w-40 lg:h-40 -z-10 opacity-60 pointer-events-none">
                    <img 
                      src="/src/assets/silk.png" 
                      alt=""
                      className="w-full h-full object-contain animate-float"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}

                {/* Trending Badge */}
                {destination.trending && (
                  <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 animate-pulse">
                    <TrendingUp className="w-3 h-3" />
                    Trending
                  </div>
                )}

                {/* Like Button */}
                <button
                  onClick={() => handleLike(destination.id)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <Heart
                    className={`w-5 h-5 transition-all duration-300 ${
                      isLiked ? 'fill-red-500 text-red-500 scale-110' : 'text-gray-600'
                    }`}
                  />
                </button>

                {/* Card */}
                <div 
                  className={`
                    relative bg-white rounded-3xl overflow-hidden cursor-pointer
                    transition-all duration-500 ease-out
                    ${isHovered ? 'shadow-2xl -translate-y-3 scale-[1.02]' : 'shadow-lg'}
                  `}
                  onClick={() => handleBookNow(destination)}
                >
                  {/* Image */}
                  <div className="relative h-[320px] w-full overflow-hidden">
                    <img 
                      src={destination.image}
                      alt={destination.location}
                      className={`
                        w-full h-full object-cover
                        transition-transform duration-700 ease-out
                        ${isHovered ? 'scale-110' : 'scale-100'}
                      `}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`
                      absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
                      transition-opacity duration-500
                      ${isHovered ? 'opacity-100' : 'opacity-40'}
                    `}></div>

                    {/* Quick Info Overlay */}
                    <div className={`
                      absolute bottom-0 left-0 right-0 p-6 text-white
                      transform transition-all duration-500
                      ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
                    `}>
                      <div className="flex items-center gap-3 text-sm mb-2">
                        {destination.highlights.map((highlight, idx) => (
                          <span key={idx} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                            {highlight}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm opacity-90">Best time: {destination.bestTime}</p>
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-gray-800">{destination.rating}</span>
                      <span className="text-gray-500 text-sm">({destination.reviews})</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Location and Price */}
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-[#F15A2B] transition-colors">
                          {destination.location}
                        </h3>
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{destination.country}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-[#F15A2B]">
                          ${(destination.price / 1000).toFixed(1)}k
                        </p>
                        <p className="text-xs text-gray-500">per person</p>
                      </div>
                    </div>

                    {/* Duration and Travelers */}
                    <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4 text-[#006380]" />
                        <span className="text-sm font-medium">{destination.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4 text-[#F0BB1F]" />
                        <span className="text-sm font-medium">{destination.travelers} going</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookNow(destination);
                      }}
                      className={`
                        w-full py-3 rounded-xl font-semibold text-sm
                        transition-all duration-300
                        ${isHovered
                          ? 'bg-gradient-to-r from-[#181E4B] to-[#006380] text-white shadow-lg scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }
                      `}
                    >
                      <span className="flex items-center justify-center gap-2">
                        Book Now
                        <Send className="w-4 h-4" />
                      </span>
                    </button>
                  </div>

                  {/* Hover Border Effect */}
                  <div 
                    className={`
                      absolute inset-0 rounded-3xl border-2 border-transparent
                      transition-all duration-500 pointer-events-none
                      ${isHovered ? 'border-[#F0BB1F]' : ''}
                    `}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate('/services?type=destinations')}
            className="group bg-gradient-to-r from-[#181E4B] to-[#006380] hover:from-[#F0BB1F] hover:to-[#F15A2B] text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center gap-3">
              Explore All Destinations
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes floatDelayed {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-5deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TopDestinations;