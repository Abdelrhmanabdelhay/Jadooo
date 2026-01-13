import React from 'react';
import Navbar from '../../components/Home/Navbar/Navbar.jsx';
import Hero from '../../components/sections/Hero/Hero';
import CategorySection from '../../components/sections/Category/Category.jsx';
import TopDestinations from '../../components/sections/TopDestinations/TopDestinations.jsx';
import BookingSteps from '../../components/sections/BookingSteps/BookingSteps.jsx';
import Testimonials from '../../components/sections/Testimonials/Testimonials.jsx';
import Subscription from '../../components/sections/Subscription/Subscription.jsx';
import Footer from '../../components/Home/Navbar/Footer/Footer.jsx';
const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <CategorySection />
      <TopDestinations />
      <BookingSteps />
      <Testimonials />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Home;