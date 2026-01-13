import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Home/Navbar/Navbar';

const ServicesPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedItem, setSelectedItem] = useState(null);
  const [serviceType, setServiceType] = useState('destinations');
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 1,
    specialRequests: ''
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [destinationFilter, setDestinationFilter] = useState('');
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Get service type and destination from URL on mount and when location changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type') || 'destinations';
    const destination = params.get('destination') || '';
    
    setServiceType(type);
    setDestinationFilter(destination);
    setVisibleCount(8);

    // Show welcome message if coming from another component
    if (destination) {
      setShowWelcomeMessage(true);
      setTimeout(() => setShowWelcomeMessage(false), 5000);

      // Auto-scroll to the filtered destination
      setTimeout(() => {
        const element = document.getElementById('services-grid');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  }, [location.search]);

  // Data for each service type (keeping your existing data)
  const servicesData = {
    destinations: {
      title: 'Popular Destinations',
      subtitle: 'Explore The World',
      description: 'Discover amazing places around the world with our carefully curated travel packages.',
      items: [
        {
          id: 1,
          name: 'Paris Trip',
          location: 'France',
          image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop&q=80',
          price: 1299,
          duration: '7 Days',
          rating: 4.8,
          description: 'Experience the city of love with its iconic landmarks',
          highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine River Cruise'],
        },
        {
          id: 2,
          name: 'Rome Tour',
          location: 'Italy',
          image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop&q=80',
          price: 1199,
          duration: '6 Days',
          rating: 4.9,
          description: 'Discover ancient history and Italian culture',
          highlights: ['Colosseum', 'Vatican City', 'Trevi Fountain'],
        },
        {
          id: 3,
          name: 'Dubai Package',
          location: 'UAE',
          image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop&q=80',
          price: 1499,
          duration: '5 Days',
          rating: 4.7,
          description: 'Luxury and adventure in the desert oasis',
          highlights: ['Burj Khalifa', 'Desert Safari', 'Palm Jumeirah'],
        },
        {
          id: 4,
          name: 'Tokyo Adventure',
          location: 'Japan',
          image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop&q=80',
          price: 1599,
          duration: '8 Days',
          rating: 4.9,
          description: 'Modern meets traditional in the land of the rising sun',
          highlights: ['Mount Fuji', 'Cherry Blossoms', 'Tokyo Tower'],
        },
        {
          id: 5,
          name: 'Santorini Escape',
          location: 'Greece',
          image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&h=400&fit=crop&q=80',
          price: 1399,
          duration: '6 Days',
          rating: 4.8,
          description: 'White-washed villages and stunning sunsets',
          highlights: ['Blue Domes', 'Caldera Views', 'Wine Tasting'],
        },
        {
          id: 6,
          name: 'Bali Paradise',
          location: 'Indonesia',
          image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop&q=80',
          price: 999,
          duration: '7 Days',
          rating: 4.7,
          description: 'Tropical beaches and ancient temples',
          highlights: ['Rice Terraces', 'Beach Clubs', 'Temples'],
        },
        {
          id: 7,
          name: 'New York City',
          location: 'USA',
          image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop&q=80',
          price: 1699,
          duration: '5 Days',
          rating: 4.6,
          description: 'The city that never sleeps awaits you',
          highlights: ['Statue of Liberty', 'Times Square', 'Central Park'],
        },
        {
          id: 8,
          name: 'Maldives Luxury',
          location: 'Maldives',
          image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop&q=80',
          price: 2199,
          duration: '6 Days',
          rating: 5.0,
          description: 'Overwater villas and crystal clear waters',
          highlights: ['Private Islands', 'Snorkeling', 'Spa Resorts'],
        },
        {
          id: 9,
          image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
          name: "Rome, Italy",
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
          bestTime: "Spring",
          description: "Explore the wonders of Rome, Italy"
        },
        {
          id: 10,
          image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80",
          name: "London, UK",
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
          bestTime: "Summer",
          description: "Discover iconic London landmarks"
        },
        {
          id: 11,
          image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
          name: "Full Europe",
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
          bestTime: "Summer",
          description: "Extensive tour across major European destinations"
        },
        {
          id: 12,
          image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
          name: "Paris, France",
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
          bestTime: "Spring",
          description: "Romantic escape to Paris"
        },
        {
          id: 13,
          image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
          name: "Tokyo, Japan",
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
          bestTime: "Spring",
          description: "Experience modern and traditional Tokyo"
        },
        {
          id: 14,
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
          name: "Swiss Alps",
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
          bestTime: "Winter",
          description: "Alpine adventures in the Swiss Alps"
        }
      ],
    },
    hotels: {
      title: 'Luxury Hotels',
      subtitle: 'Stay in Comfort',
      description: 'Experience world-class hospitality in our handpicked selection of luxury hotels.',
      items: [
        {
          id: 1,
          name: 'Grand Hyatt Paris',
          location: 'Paris, France',
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&q=80',
          price: 299,
          duration: 'Per Night',
          rating: 4.9,
          description: 'Luxury 5-star hotel in the heart of Paris',
          highlights: ['Spa & Wellness', 'Rooftop Bar', 'Michelin Restaurant'],
        },
        {
          id: 2,
          name: 'Burj Al Arab',
          location: 'Dubai, UAE',
          image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop&q=80',
          price: 899,
          duration: 'Per Night',
          rating: 5.0,
          description: 'The worlds most luxurious hotel',
          highlights: ['Private Beach', 'Butler Service', 'Helicopter Pad'],
        },
        {
          id: 3,
          name: 'Atlantis The Palm',
          location: 'Dubai, UAE',
          image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop&q=80',
          price: 459,
          duration: 'Per Night',
          rating: 4.8,
          description: 'Iconic resort on Palm Jumeirah',
          highlights: ['Water Park', 'Aquarium', 'Multiple Pools'],
        },
        {
          id: 4,
          name: 'Ritz Carlton Tokyo',
          location: 'Tokyo, Japan',
          image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop&q=80',
          price: 399,
          duration: 'Per Night',
          rating: 4.9,
          description: 'Luxury in the sky with stunning city views',
          highlights: ['Sky High', 'Japanese Cuisine', 'Spa'],
        },
        {
          id: 5,
          name: 'Santorini Secret',
          location: 'Santorini, Greece',
          image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop&q=80',
          price: 349,
          duration: 'Per Night',
          rating: 4.8,
          description: 'Cave hotel with caldera views',
          highlights: ['Infinity Pool', 'Sunset Views', 'Private Terrace'],
        },
        {
          id: 6,
          name: 'Four Seasons Bali',
          location: 'Bali, Indonesia',
          image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop&q=80',
          price: 279,
          duration: 'Per Night',
          rating: 4.7,
          description: 'Tropical paradise with ocean views',
          highlights: ['Beach Access', 'Spa', 'Yoga Classes'],
        },
        {
          id: 7,
          name: 'The Plaza New York',
          location: 'New York, USA',
          image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop&q=80',
          price: 599,
          duration: 'Per Night',
          rating: 4.9,
          description: 'Historic luxury in Manhattan',
          highlights: ['Central Park View', 'Fine Dining', 'Concierge'],
        },
        {
          id: 8,
          name: 'Soneva Jani Maldives',
          location: 'Maldives',
          image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=400&fit=crop&q=80',
          price: 1299,
          duration: 'Per Night',
          rating: 5.0,
          description: 'Ultimate overwater luxury',
          highlights: ['Water Slide', 'Private Pool', 'Observatory'],
        },
      ],
    },
    flights: {
      title: 'Flight Deals',
      subtitle: 'Fly with Comfort',
      description: 'Find the best flight deals to your dream destinations with our trusted airline partners.',
      items: [
        {
          id: 1,
          name: 'Paris Direct',
          location: 'New York → Paris',
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&q=80',
          price: 599,
          duration: '8h 30m',
          rating: 4.8,
          description: 'Direct flight with premium airlines',
          highlights: ['Direct Flight', 'In-flight WiFi', 'Meals Included'],
        },
        {
          id: 2,
          name: 'Tokyo Express',
          location: 'Los Angeles → Tokyo',
          image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=600&h=400&fit=crop&q=80',
          price: 749,
          duration: '11h 15m',
          rating: 4.9,
          description: 'Non-stop flight to Japan',
          highlights: ['Business Class', 'Lounge Access', 'Priority Boarding'],
        },
        {
          id: 3,
          name: 'Dubai Non-Stop',
          location: 'London → Dubai',
          image: 'https://images.unsplash.com/photo-1583551662725-3f33e2f1b9fe?w=600&h=400&fit=crop&q=80',
          price: 499,
          duration: '7h 0m',
          rating: 4.7,
          description: 'Premium economy to Dubai',
          highlights: ['Entertainment', 'Extra Legroom', 'Snacks'],
        },
        {
          id: 4,
          name: 'Rome Getaway',
          location: 'Paris → Rome',
          image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop&q=80',
          price: 199,
          duration: '2h 15m',
          rating: 4.6,
          description: 'Quick European hop',
          highlights: ['Short Flight', 'Frequent Departures', 'Affordable'],
        },
        {
          id: 5,
          name: 'Santorini Summer',
          location: 'Athens → Santorini',
          image: 'https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=600&h=400&fit=crop&q=80',
          price: 129,
          duration: '45m',
          rating: 4.5,
          description: 'Island hopping made easy',
          highlights: ['Scenic Views', 'Daily Flights', 'Small Aircraft'],
        },
        {
          id: 6,
          name: 'Bali Adventure',
          location: 'Singapore → Bali',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&q=80',
          price: 179,
          duration: '2h 30m',
          rating: 4.7,
          description: 'Tropical destination direct',
          highlights: ['Multiple Airlines', 'Flexible Dates', 'Good Value'],
        },
        {
          id: 7,
          name: 'New York Special',
          location: 'Miami → New York',
          image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop&q=80',
          price: 149,
          duration: '3h 10m',
          rating: 4.6,
          description: 'East Coast connection',
          highlights: ['Multiple Times', 'Quick Trip', 'City Views'],
        },
        {
          id: 8,
          name: 'Maldives Paradise',
          location: 'Dubai → Maldives',
          image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?w=600&h=400&fit=crop&q=80',
          price: 399,
          duration: '4h 20m',
          rating: 4.8,
          description: 'Gateway to paradise',
          highlights: ['Seaplane Connection', 'Luxury Airlines', 'Ocean Views'],
        },
      ],
    },
    bookings: {
      title: 'Complete Packages',
      subtitle: 'All-Inclusive Deals',
      description: 'Book complete travel packages with flights, hotels, and activities all included.',
      items: [
        {
          id: 1,
          name: 'Paris Complete',
          location: 'France',
          image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop&q=80',
          price: 2499,
          duration: '7 Days',
          rating: 4.9,
          description: 'Flight + Hotel + Tours included',
          highlights: ['Round-trip Flight', '5-Star Hotel', 'City Tours'],
        },
        {
          id: 2,
          name: 'Dubai All-In',
          location: 'UAE',
          image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop&q=80',
          price: 2799,
          duration: '5 Days',
          rating: 4.8,
          description: 'Complete luxury package',
          highlights: ['Business Class', 'Burj Khalifa', 'Desert Safari'],
        },
        {
          id: 3,
          name: 'Tokyo Total',
          location: 'Japan',
          image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop&q=80',
          price: 3199,
          duration: '8 Days',
          rating: 5.0,
          description: 'Ultimate Japan experience',
          highlights: ['JR Pass', 'Ryokan Stay', 'Mt. Fuji Tour'],
        },
        {
          id: 4,
          name: 'Rome & Venice',
          location: 'Italy',
          image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop&q=80',
          price: 2299,
          duration: '6 Days',
          rating: 4.7,
          description: 'Two cities, one package',
          highlights: ['Train Transfers', 'Museums', 'Food Tours'],
        },
        {
          id: 5,
          name: 'Greek Islands',
          location: 'Greece',
          image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&h=400&fit=crop&q=80',
          price: 2599,
          duration: '10 Days',
          rating: 4.9,
          description: 'Island hopping adventure',
          highlights: ['Ferry Passes', 'Multiple Islands', 'Beach Resorts'],
        },
        {
          id: 6,
          name: 'Bali Bliss',
          location: 'Indonesia',
          image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop&q=80',
          price: 1899,
          duration: '7 Days',
          rating: 4.6,
          description: 'Relaxation and adventure',
          highlights: ['Villa Stay', 'Spa Treatments', 'Cooking Class'],
        },
        {
          id: 7,
          name: 'NYC Experience',
          location: 'USA',
          image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop&q=80',
          price: 2199,
          duration: '5 Days',
          rating: 4.8,
          description: 'Big Apple essentials',
          highlights: ['Broadway Show', 'Empire State', 'Food Tour'],
        },
        {
          id: 8,
          name: 'Maldives Dream',
          location: 'Maldives',
          image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop&q=80',
          price: 4999,
          duration: '6 Days',
          rating: 5.0,
          description: 'Ultimate luxury escape',
          highlights: ['Seaplane Transfer', 'Overwater Villa', 'All Meals'],
        },
      ],
    },
  };

  const currentService = servicesData[serviceType];
  
  // Filter items based on destination parameter
  let filteredItems = currentService.items;
  if (destinationFilter) {
    filteredItems = currentService.items.filter(item => 
      item.name.toLowerCase().includes(destinationFilter.toLowerCase()) ||
      item.location.toLowerCase().includes(destinationFilter.toLowerCase())
    );
  }
  
  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, currentService.items.length));
  };

  const handleViewDetails = (item) => {
    setSelectedItem(item);
    setShowBookingForm(false);
    setBookingSuccess(false);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setShowBookingForm(false);
    setBookingSuccess(false);
    setBookingData({
      name: '',
      email: '',
      phone: '',
      date: '',
      guests: 1,
      specialRequests: ''
    });
  };

  const handleBookNow = () => {
    setShowBookingForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', {
      service: selectedItem,
      ...bookingData
    });

    // Show success message
    setBookingSuccess(true);
    
    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      closeModal();
    }, 3000);
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#181E4B] to-[#0F1535] text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF7A00] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-[#FF7A00] font-semibold text-lg mb-3 tracking-wide">
            {currentService.subtitle}
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            {currentService.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            {currentService.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#FF7A00]">{currentService.items.length}+</p>
              <p className="text-gray-300 mt-1">Options</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#FF7A00]">10K+</p>
              <p className="text-gray-300 mt-1">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#FF7A00]">4.8</p>
              <p className="text-gray-300 mt-1">Average Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Message Banner */}
      {showWelcomeMessage && destinationFilter && (
        <div className="max-w-7xl mx-auto px-6 -mt-8 mb-8 relative z-20">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-2xl shadow-2xl animate-slideDown">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg">Great Choice!</p>
                  <p className="text-sm text-white/90">
                    Showing results for: <span className="font-semibold">"{destinationFilter}"</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setDestinationFilter('');
                  setShowWelcomeMessage(false);
                  navigate(`/services?type=${serviceType}`);
                }}
                className="text-white hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
              >
                Clear Filter
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Active Filter Display */}
      {destinationFilter && !showWelcomeMessage && (
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <div className="flex items-center justify-between bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
              </svg>
              <p className="text-gray-700">
                Filtered by: <span className="font-bold text-blue-700">"{destinationFilter}"</span>
                <span className="ml-2 text-sm text-gray-500">({filteredItems.length} results)</span>
              </p>
            </div>
            <button
              onClick={() => {
                setDestinationFilter('');
                navigate(`/services?type=${serviceType}`);
              }}
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
            >
              Clear
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Services Grid */}
      <div id="services-grid" className="max-w-7xl mx-auto px-6 py-16">
        {filteredItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No Results Found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any {serviceType} matching "{destinationFilter}"
            </p>
            <button
              onClick={() => {
                setDestinationFilter('');
                navigate(`/services?type=${serviceType}`);
              }}
              className="bg-gradient-to-r from-[#181E4B] to-[#006380] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              View All {currentService.title}
            </button>
          </div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleItems.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform ${
                hoveredCard === item.id ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="font-semibold text-gray-800">{item.rating}</span>
                </div>
                <div className="absolute top-4 left-4 bg-[#FF7A00] text-white px-3 py-1.5 rounded-full text-sm font-medium">
                  {item.duration}
                </div>
              </div>

              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.highlights.slice(0, 2).map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-50 text-[#181E4B] px-2 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-[#181E4B] mb-1">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
                  <span>📍</span>
                  {item.location}
                </p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold text-[#FF7A00]">
                      ${item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => handleViewDetails(item)}
                    className="bg-[#181E4B] hover:bg-[#FF7A00] text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        )}{hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              className="bg-gradient-to-r from-[#181E4B] to-[#0F1535] hover:from-[#FF7A00] hover:to-[#ff8c1a] text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {!showBookingForm ? (
              // Details View
              <>
                <div className="relative h-80">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-white hover:bg-gray-100 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    ×
                  </button>
                  <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <span className="text-yellow-500 text-xl">★</span>
                    <span className="font-bold text-gray-800">{selectedItem.rating}</span>
                  </div>
                </div>

                <div className="p-8">
                  <h2 className="text-3xl font-bold text-[#181E4B] mb-2">
                    {selectedItem.name}
                  </h2>
                  <p className="text-gray-600 mb-4 flex items-center gap-2 text-lg">
                    <span>📍</span>
                    {selectedItem.location}
                  </p>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {selectedItem.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-[#181E4B] mb-4">Highlights</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {selectedItem.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg"
                        >
                          <span className="text-[#FF7A00] text-xl">✓</span>
                          <span className="text-gray-700 font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl mb-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Price</p>
                      <p className="text-4xl font-bold text-[#FF7A00]">
                        ${selectedItem.price}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">{selectedItem.duration}</p>
                    </div>
                    <button
                      onClick={handleBookNow}
                      className="bg-gradient-to-r from-[#181E4B] to-[#0F1535] hover:from-[#FF7A00] hover:to-[#ff8c1a] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </>
            ) : (
              // Booking Form View
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-[#181E4B]">Complete Your Booking</h2>
                  <button
                    onClick={closeModal}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-200"
                  >
                    ×
                  </button>
                </div>

                {!bookingSuccess ? (
                  <form onSubmit={handleSubmitBooking} className="space-y-5">
                    <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-4 rounded-xl mb-6">
                      <p className="text-sm text-gray-600 mb-1">You're booking:</p>
                      <p className="text-xl font-bold text-[#181E4B]">{selectedItem.name}</p>
                      <p className="text-2xl font-bold text-[#FF7A00] mt-2">${selectedItem.price}</p>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={bookingData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={bookingData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={bookingData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Travel Date *
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={bookingData.date}
                          onChange={handleInputChange}
                          required
                          min={getTomorrowDate()}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Number of Guests *
                        </label>
                        <input
                          type="number"
                          name="guests"
                          value={bookingData.guests}
                          onChange={handleInputChange}
                          required
                          min="1"
                          max="20"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        name="specialRequests"
                        value={bookingData.specialRequests}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Any special requirements or preferences..."
                      />
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setShowBookingForm(false)}
                        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-[#181E4B] to-[#0F1535] hover:from-[#FF7A00] hover:to-[#ff8c1a] text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      >
                        Confirm Booking
                      </button>
                    </div>
                  </form>
                ) : (
                  // Success Message
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-[#181E4B] mb-4">Booking Confirmed!</h3>
                    <p className="text-gray-600 text-lg mb-2">Thank you for your booking, {bookingData.name}!</p>
                    <p className="text-gray-500">A confirmation email has been sent to {bookingData.email}</p>
                    <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl">
                      <p className="text-sm text-gray-600 mb-1">Booking Reference</p>
                      <p className="text-2xl font-bold text-[#FF7A00]">
                        #{Math.random().toString(36).substr(2, 9).toUpperCase()}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;