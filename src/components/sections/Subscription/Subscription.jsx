import React, { useState } from "react";
import circles from "../../../assets/circles.png";

const Subscription = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) return;
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="relative  flex items-center justify-center bg-white mb-16 overflow-hidden">

      {/* Subscription Card */}
      <div
        className="
        relative w-full max-w-5xl
        bg-gradient-to-br from-[#f7f8fc] to-[#e8ebf7]
        rounded-3xl rounded-tl-[120px]
        px-8 py-16 md:px-16
        shadow-lg
        overflow-hidden
        "
      >
        {/* Move Floating Arrow Button INTO the card (top-right of container) */}
        <div className="absolute top-1 right-1 z-99">
          <button
            className="group relative w-14 h-14
            bg-gradient-to-br from-[#6B7CFF] to-[#5B4FE8]
            rounded-full shadow-2xl
            flex items-center justify-center
            transition-all duration-300
             hover:scale-105"
          >
            <span className="absolute inset-0 rounded-full bg-[#6B7CFF] opacity-20 animate-ping"></span>

            <svg
              className="relative w-6 h-6 text-white rotate-[-40deg]
              transition-transform duration-300 group-hover:translate-x-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
        {/* Decorative Circles */}
        <img
          src={circles}
          alt=""
          className="absolute bottom-0 left-0 w-64 opacity-30"
        />
        <img
          src={circles}
          alt=""
          className="absolute top-0 right-0 w-64 opacity-30 rotate-180"
        />

        {/* Content */}
        <div className="relative z-10 text-center space-y-10">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#5E6282] leading-relaxed">
            Subscribe to get information, latest news and other
            <br className="hidden md:block" />
            interesting offers about Jadoo
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <div className="relative w-full">
<div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
</div>


              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full pl-12 py-4 rounded-xl shadow-md focus:outline-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="px-10 py-4 rounded-xl bg-[#FF7D68]
              text-white font-medium shadow-md
              hover:scale-105 transition"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
