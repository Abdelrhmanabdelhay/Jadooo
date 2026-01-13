import React, { useState, useEffect } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Plane, MapPin, Globe, Compass, Mountain, Camera, Send, Home, ArrowLeft } from 'lucide-react';

const AuthPages = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [floatingIcons, setFloatingIcons] = useState([]);
  
  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Generate random floating icons
    const icons = [
      { Icon: Plane, delay: 0, duration: 8 },
      { Icon: MapPin, delay: 1, duration: 10 },
      { Icon: Globe, delay: 2, duration: 9 },
      { Icon: Compass, delay: 0.5, duration: 11 },
      { Icon: Mountain, delay: 1.5, duration: 7 },
      { Icon: Camera, delay: 2.5, duration: 12 }
    ];
    setFloatingIcons(icons);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!isLogin && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      }, 2000);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setErrors({});
    setSubmitSuccess(false);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 py-12 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      
      {/* Back to Home Button */}
      <button
        onClick={() => window.location.href = '/'}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-[#006380] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:border-[#006380]"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-semibold">Back to Home</span>
      </button>

      {/* Logo/Brand Link - Top Right */}
      <button
        onClick={() => window.location.href = '/'}
        className="fixed top-6 right-6 z-50 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#181E4B] to-[#006380] hover:from-[#F15A2B] hover:to-[#F0BB1F] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="font-bold">Home</span>
      </button>
      
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Floating Travel Icons */}
      {floatingIcons.map(({ Icon, delay, duration }, idx) => (
        <div
          key={idx}
          className="absolute text-gray-300 opacity-20 pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${duration}s ease-in-out ${delay}s infinite`
          }}
        >
          <Icon className="w-12 h-12" />
        </div>
      ))}

      {/* Main Container */}
      <div className={`relative w-full max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Branding */}
          <div className="hidden lg:block space-y-8 p-12">
            <div className="space-y-6">
              <button
                onClick={() => window.location.href = '/'}
                className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <Send className="w-6 h-6 text-[#F15A2B] group-hover:rotate-12 transition-transform" />
                <span className="text-2xl font-bold bg-gradient-to-r from-[#181E4B] to-[#006380] bg-clip-text text-transparent">
                  Jadoo
                </span>
              </button>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-[#181E4B] leading-tight">
                Your Journey <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F15A2B] to-[#F0BB1F]">
                  Starts Here
                </span>
              </h1>
              
              <p className="text-gray-600 text-lg">
                Discover amazing destinations, create unforgettable memories, and explore the world with ease.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <p className="text-3xl font-bold text-[#F15A2B]">200+</p>
                <p className="text-gray-600 text-sm mt-1">Destinations</p>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <p className="text-3xl font-bold text-[#006380]">50K+</p>
                <p className="text-gray-600 text-sm mt-1">Happy Travelers</p>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <p className="text-3xl font-bold text-[#F0BB1F]">4.9★</p>
                <p className="text-gray-600 text-sm mt-1">Rating</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow-xl border border-blue-100">
              <p className="text-gray-700 italic mb-4">
                "TravelX made our dream vacation a reality. The planning was effortless and the experience was unforgettable!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F15A2B] to-[#F0BB1F] rounded-full flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div>
                  <p className="font-semibold text-gray-800">John Doe</p>
                  <p className="text-sm text-gray-500">Traveled to 12 countries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Auth Form */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#F0BB1F] rounded-full opacity-20 blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#F15A2B] rounded-full opacity-20 blur-2xl animate-pulse"></div>

            {/* Form Card */}
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
              
              {/* Success Message */}
              {submitSuccess && (
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center z-50 animate-fade-in">
                  <div className="text-center text-white space-y-4">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto animate-scale-in">
                      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">
                      {isLogin ? 'Welcome Back!' : 'Account Created!'}
                    </h3>
                    <p>Redirecting you to your dashboard...</p>
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8 space-y-3">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#181E4B]">
                  {isLogin ? 'Welcome Back' : 'Create Account'}
                </h2>
                <p className="text-gray-600">
                  {isLogin 
                    ? 'Sign in to continue your adventure' 
                    : 'Join thousands of happy travelers'}
                </p>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-[#006380] hover:shadow-lg transition-all duration-300 group">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="font-medium text-gray-700 group-hover:text-[#006380] transition-colors">Google</span>
                </button>
                
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-[#006380] hover:shadow-lg transition-all duration-300 group">
                  <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="font-medium text-gray-700 group-hover:text-[#006380] transition-colors">Facebook</span>
                </button>
              </div>

              {/* Divider */}
              <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with email</span>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                
                {/* Name Field (Sign Up Only) */}
                {!isLogin && (
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                    <div className="relative group">
                      <User className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                        focusedField === 'name' ? 'text-[#F15A2B]' : 'text-gray-400'
                      }`} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        onKeyPress={handleKeyPress}
                        placeholder="Enter your full name"
                        className={`w-full pl-12 pr-4 py-3.5 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                          errors.name 
                            ? 'border-red-400 bg-red-50' 
                            : focusedField === 'name'
                            ? 'border-[#F15A2B] bg-orange-50/30 shadow-lg'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <span>⚠</span> {errors.name}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address</label>
                  <div className="relative group">
                    <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                      focusedField === 'email' ? 'text-[#006380]' : 'text-gray-400'
                    }`} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      onKeyPress={handleKeyPress}
                      placeholder="Enter your email"
                      className={`w-full pl-12 pr-4 py-3.5 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                        errors.email 
                          ? 'border-red-400 bg-red-50' 
                          : focusedField === 'email'
                          ? 'border-[#006380] bg-blue-50/30 shadow-lg'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <span>⚠</span> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Password</label>
                  <div className="relative group">
                    <Lock className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                      focusedField === 'password' ? 'text-[#F0BB1F]' : 'text-gray-400'
                    }`} />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField(null)}
                      onKeyPress={handleKeyPress}
                      placeholder="Enter your password"
                      className={`w-full pl-12 pr-12 py-3.5 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                        errors.password 
                          ? 'border-red-400 bg-red-50' 
                          : focusedField === 'password'
                          ? 'border-[#F0BB1F] bg-yellow-50/30 shadow-lg'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <span>⚠</span> {errors.password}
                      </p>
                    )}
                  </div>
                </div>

                {/* Confirm Password Field (Sign Up Only) */}
                {!isLogin && (
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Confirm Password</label>
                    <div className="relative group">
                      <Lock className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                        focusedField === 'confirmPassword' ? 'text-[#F0BB1F]' : 'text-gray-400'
                      }`} />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('confirmPassword')}
                        onBlur={() => setFocusedField(null)}
                        onKeyPress={handleKeyPress}
                        placeholder="Confirm your password"
                        className={`w-full pl-12 pr-12 py-3.5 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                          errors.confirmPassword 
                            ? 'border-red-400 bg-red-50' 
                            : focusedField === 'confirmPassword'
                            ? 'border-[#F0BB1F] bg-yellow-50/30 shadow-lg'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                      {errors.confirmPassword && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <span>⚠</span> {errors.confirmPassword}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Remember Me / Forgot Password */}
                {isLogin && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#006380] focus:ring-[#006380]" />
                      <span className="text-sm text-gray-600 group-hover:text-gray-800">Remember me</span>
                    </label>
                    <button type="button" className="text-sm text-[#006380] hover:text-[#F15A2B] font-semibold transition-colors">
                      Forgot password?
                    </button>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="group relative w-full py-4 bg-gradient-to-r from-[#181E4B] to-[#006380] hover:from-[#F15A2B] hover:to-[#F0BB1F] text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        {isLogin ? 'Sign In' : 'Create Account'}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </button>
              </div>

              {/* Toggle Auth Mode */}
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button
                    type="button"
                    onClick={toggleAuthMode}
                    className="ml-2 text-[#006380] hover:text-[#F15A2B] font-bold transition-colors"
                  >
                    {isLogin ? 'Sign Up' : 'Sign In'}
                  </button>
                </p>
              </div>

              {/* Terms */}
              {!isLogin && (
                <p className="mt-6 text-xs text-center text-gray-500">
                  By signing up, you agree to our{' '}
                  <a href="#" className="text-[#006380] hover:underline">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-[#006380] hover:underline">Privacy Policy</a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 8s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AuthPages;