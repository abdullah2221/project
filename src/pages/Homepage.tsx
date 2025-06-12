import React, { useState, useEffect, useMemo, useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Star, 
  ShoppingBag, 
  Shield, 
  Heart, 
  Award, 
  Truck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { categories, featuredProducts } from '../data/products';
import { useScrollToTop } from '../hooks/useScrollToTop';

// Type definitions
interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

interface HeroSlide {
  title: string;
  subtitle: string;
  image: string;
  cta: string;
}

// Memoized components for better performance
const FeatureCard = memo(({ feature, index }: { feature: Feature; index: number }) => (
  <div 
    className="group relative text-center p-4 sm:p-6 bg-white/70 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-1000 hover:-translate-y-2 sm:hover:-translate-y-6 border border-white/30 overflow-hidden"
    style={{ animationDelay: `${index * 0.3}s` }}
  >
    {/* Animated background layers */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-indigo-50/40 to-purple-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" style={{ animationDelay: '0.2s' }}></div>
    
    {/* Floating particles with enhanced effects */}
    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-1000"></div>
    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-1000" style={{ animationDelay: '0.5s' }}></div>
    <div className="absolute top-1/2 left-3 sm:left-4 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-1000" style={{ animationDelay: '0.8s' }}></div>

    {/* Enhanced icon container */}
    <div className="relative mb-4 sm:mb-6">
      <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r ${feature.color} text-white rounded-2xl sm:rounded-3xl mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-2xl group-hover:shadow-blue-500/25 relative overflow-hidden`}>
        {/* Multiple glow effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 relative z-10 group-hover:scale-110 transition-transform duration-700" />
        
        {/* Enhanced floating sparkles */}
        <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border border-white shadow-lg animate-pulse"></div>
        <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border border-white shadow-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -top-0.5 -left-0.5 sm:-top-1 sm:-left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-pink-400 to-red-500 rounded-full border border-white shadow-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 border-2 border-blue-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-1000"></div>
      <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-3 h-3 sm:w-4 sm:h-4 border-2 border-indigo-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-1000" style={{ animationDelay: '0.3s' }}></div>
      <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-2 h-2 sm:w-3 sm:h-3 border border-purple-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-1000" style={{ animationDelay: '0.6s' }}></div>
    </div>

    {/* Enhanced content */}
    <div className="relative z-10">
      <h3 className="font-heading font-bold text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-700">
        {feature.title}
      </h3>
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-500 text-sm sm:text-base">
        {feature.description}
      </p>
      
      {/* Animated underline */}
      <div className="mt-3 sm:mt-4 flex justify-center">
        <div className="w-0 group-hover:w-16 sm:group-hover:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-1000 transform group-hover:scale-x-110"></div>
      </div>
    </div>

    {/* Hover effect overlay */}
    <div className="absolute inset-0 bg-gradient-to-y from-blue-500/8 via-indigo-500/8 to-purple-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-2xl sm:rounded-3xl"></div>
    
    {/* Border glow effect */}
    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl"></div>
  </div>
));

const HeroSlide = memo(({ slide, isActive }: { slide: HeroSlide; isActive: boolean }) => (
  <div
    className={`absolute inset-0 transition-all duration-1000 ${
      isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
    }`}
  >
    <div
      className="absolute inset-0 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      {/* Subtle dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 sm:bg-black/30" />
    </div>
    <div className="relative h-full flex items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl sm:max-w-5xl">
        <h1 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 leading-tight drop-shadow-lg">
          {slide.title}
        </h1>
        <p className="text-base sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 lg:mb-10 text-white/95 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          {slide.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Link
            to="/categories"
            className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 font-bold rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-50 shadow-lg text-sm sm:text-base"
          >
            {slide.cta}
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-bold rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105 backdrop-blur-sm text-sm sm:text-base"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  </div>
));

const Homepage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [stats, setStats] = useState({
    customers: 0,
    products: 0,
    years: 0,
    satisfaction: 0,
  });

  // Memoize static data to prevent unnecessary re-renders
  const features = useMemo(() => [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "1-hour delivery in hometown and Gojra city with real-time tracking",
      color: "from-green-600 via-emerald-600 to-teal-600"
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% protected transactions with multiple payment options",
      color: "from-blue-600 via-indigo-600 to-purple-600"
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "30-day returns and quality assurance on all products",
      color: "from-purple-600 via-pink-600 to-red-600"
    },
    {
      icon: Heart,
      title: "Premium Service",
      description: "24/7 customer support with personalized assistance",
      color: "from-orange-600 via-red-600 to-pink-600"
    }
  ], []);

  const heroSlides = useMemo(() => [
    {
      title: "Welcome to HA Super Store",
      subtitle: "Your one-stop destination for groceries, household essentials, and daily necessities - quality products at competitive prices",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop",
      cta: "Shop Now"
    },
    {
      title: "Quality Products at Best Prices",
      subtitle: "Discover thousands of carefully selected products with competitive pricing and unmatched quality at HA Super Store",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1920&h=1080&fit=crop",
      cta: "Explore Products"
    },
    {
      title: "Your Trusted Super Store",
      subtitle: "3+ years of serving our community with reliability, quality, and exceptional customer service at H.A Super Store",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop",
      cta: "Learn More"
    }
  ], []);

  // Optimize event handlers with useCallback
  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Auto-slide hero carousel with optimized interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Scroll to top when component mounts
  useScrollToTop();

  // Animate stats counter with optimized timing
  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        customers: 1000,
        products: 1000,
        years: 3,
        satisfaction: 99,
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-1 bg-white">
      {/* Hero Section - Mobile First */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <HeroSlide key={index} slide={slide} isActive={index === currentSlide} />
        ))}
        
        {/* Hero Navigation Dots */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white/70 rotate-90" />
        </div>
      </section>

      {/* Quick Stats Banner - Mobile Optimized */}
      <section className="py-4 sm:py-6 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">{stats.customers.toLocaleString()}+</div>
              <div className="text-blue-200 text-xs sm:text-sm">Happy Customers</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">{stats.products.toLocaleString()}+</div>
              <div className="text-blue-200 text-xs sm:text-sm">Products</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">{stats.years}+</div>
              <div className="text-blue-200 text-xs sm:text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">{stats.satisfaction}%</div>
              <div className="text-blue-200 text-xs sm:text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Mobile First */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
        {/* Advanced animated background elements */}
        <div className="absolute inset-0">
          {/* Floating geometric shapes */}
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-16 sm:bottom-32 left-1/4 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-r from-indigo-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-20 sm:w-28 h-20 sm:h-28 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4.5s' }}></div>
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-ping opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced header section */}
          <div className="text-center mb-8 sm:mb-12">
            {/* Animated badge */}
            <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-4 bg-white/60 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg border border-white/20">
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
              <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-wider">Why Choose Us</span>
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Main heading with advanced effects */}
            <div className="relative mb-4 sm:mb-6">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-900 mb-3 sm:mb-4 leading-tight">
                Why Choose{' '}
                <span className="relative">
                  <span className="text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text animate-pulse">
                    HA Super Store
                  </span>
                  {/* Animated underline */}
                  <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full transform scale-x-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </span>
                ?
            </h2>
              
              {/* Floating sparkles around the heading */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping opacity-60"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${i % 2 === 0 ? '10%' : '80%'}`,
                    animationDelay: `${i * 0.5}s`
                  }}
                ></div>
              ))}
            </div>

            {/* Enhanced description */}
            <div className="relative">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed mb-4 sm:mb-6 font-medium">
                We're committed to providing you with the best shopping experience with{' '}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text font-bold">quality</span>,{' '}
                <span className="text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text font-bold">convenience</span>, and{' '}
                <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text font-bold">care</span> at HA Super Store
              </p>
              
              {/* Decorative elements */}
              <div className="flex items-center justify-center space-x-4 sm:space-x-6">
                <div className="flex space-x-1 sm:space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
                <span className="text-gray-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">Excellence in Every Detail</span>
                <div className="flex space-x-1 sm:space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced feature cards - Mobile First Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>

          {/* Additional features showcase */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl px-6 sm:px-10 py-4 sm:py-6 shadow-2xl border border-white/30">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full animate-ping"></div>
                </div>
                <span className="text-gray-800 font-bold text-sm sm:text-lg">24/7 Customer Support</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-gray-300 to-transparent"></div>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute inset-0 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <span className="text-gray-800 font-bold text-sm sm:text-lg">Secure Payments</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-gray-300 to-transparent"></div>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute inset-0 w-3 h-3 sm:w-4 sm:h-4 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                </div>
                <span className="text-gray-800 font-bold text-sm sm:text-lg">Quality Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - Mobile First */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-white via-indigo-50/50 to-blue-50/30 relative overflow-hidden">
        {/* Advanced animated background elements */}
        <div className="absolute inset-0">
          {/* Floating geometric shapes */}
          <div className="absolute top-16 sm:top-32 left-4 sm:left-8 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 sm:bottom-40 right-6 sm:right-12 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-28 sm:w-36 h-28 sm:h-36 bg-gradient-to-r from-pink-400/8 to-red-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(124, 58, 237, 0.4) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          {/* Floating particles */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-ping opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced header section */}
          <div className="text-center mb-8 sm:mb-12">
            {/* Animated badge */}
            <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-4 bg-white/60 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg border border-white/20">
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
              <span className="text-purple-600 font-bold text-xs sm:text-sm uppercase tracking-wider">Explore Our Range</span>
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Main heading with advanced effects */}
            <div className="relative mb-4 sm:mb-6">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-900 mb-3 sm:mb-4 leading-tight">
                Shop by{' '}
                <span className="relative">
                  <span className="text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text animate-pulse">
                    Category
                  </span>
                  {/* Animated underline */}
                  <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full transform scale-x-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </span>
            </h2>
              
              {/* Floating sparkles around the heading */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping opacity-60"
                  style={{
                    left: `${15 + i * 12}%`,
                    top: `${i % 2 === 0 ? '15%' : '85%'}`,
                    animationDelay: `${i * 0.4}s`
                  }}
                ></div>
              ))}
            </div>

            {/* Enhanced description */}
            <div className="relative">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed mb-4 sm:mb-6 font-medium">
                Explore our diverse range of products, thoughtfully organized to make your shopping experience{' '}
                <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text font-bold">seamless</span> and{' '}
                <span className="text-transparent bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text font-bold">enjoyable</span> at HA Super Store.
              </p>
              
              {/* Decorative elements */}
              <div className="flex items-center justify-center space-x-4 sm:space-x-6">
                <div className="flex space-x-1 sm:space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
                <span className="text-gray-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">Your Daily Essentials</span>
                <div className="flex space-x-1 sm:space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Redesigned category cards - Mobile First Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to="/categories"
                className="group relative flex flex-col items-center justify-end h-64 sm:h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl transform transition-all duration-700 hover:scale-105 hover:shadow-2xl border border-white/30 backdrop-blur-md" 
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Background image with enhanced overlay */}
                  <img
                    src={category.image}
                    alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-opacity duration-700 group-hover:opacity-90`}></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-40 transition-opacity duration-700`}></div>

                {/* Floating particles on image hover */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(5)].map((_, particleIndex) => (
                    <div
                      key={particleIndex}
                      className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-60 animate-sparkle"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 0.8}s`,
                        animationDuration: `${1 + Math.random() * 0.5}s`
                      }}
                    ></div>
                  ))}
                </div>

                {/* Content area - glass morphism effect with responsive height */}
                <div className="relative z-10 p-4 sm:p-6 text-white text-center w-full h-40 sm:h-48 lg:h-52 flex flex-col justify-end transform transition-all duration-700 group-hover:translate-y-0 group-hover:px-6 sm:group-hover:px-8">
                  <div className="relative inline-flex items-center justify-center p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm mb-2 sm:mb-3 border border-white/30 transition-all duration-700 group-hover:scale-110 group-hover:bg-white/30">
                    <span className="text-2xl sm:text-3xl leading-none transition-transform duration-700 group-hover:scale-110">{category.icon}</span>
                    <div className="absolute inset-0 text-2xl sm:text-3xl opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-700">{category.icon}</div>
                  </div>
                  
                  <h3 className="font-heading font-bold text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-2 leading-tight drop-shadow-md text-white transition-all duration-700 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center">
                    {category.name}
                  </h3>
                  <p className="text-xs sm:text-sm opacity-90 leading-relaxed transition-opacity duration-700 group-hover:opacity-100 mb-2 sm:mb-3 flex-grow flex items-center justify-center">
                    {category.description}
                  </p>
                  
                  <div className="relative w-full flex justify-center">
                    <div className="absolute -bottom-1 sm:-bottom-2 w-0 h-0.5 sm:h-1 bg-gradient-to-r from-white/70 to-transparent rounded-full transition-all duration-700 group-hover:w-full group-hover:scale-x-105"></div>
                  </div>

                  <Link
                    to="/categories"
                    className="mt-1 sm:mt-2 inline-flex items-center px-3 sm:px-5 py-1.5 sm:py-2.5 bg-white text-gray-900 font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100 opacity-0 group-hover:opacity-100 transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0 text-xs sm:text-sm"
                  >
                    View Products
                    <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Border glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl"></div>
              </Link>
            ))}
          </div>

          {/* Enhanced CTA section */}
          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/categories"
              className="inline-flex items-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-bold rounded-xl sm:rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden group transform hover:-translate-y-1 text-sm sm:text-base lg:text-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10">Explore 20+ Categories</span>
              <ArrowRight className="ml-2 sm:ml-3 lg:ml-4 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 relative z-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gradient-to-br from-slate-50/50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
        {/* Advanced animated background elements */}
        <div className="absolute inset-0">
          {/* Floating geometric shapes */}
          <div className="absolute top-10 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-10 w-36 h-36 bg-gradient-to-r from-purple-400/8 to-blue-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.2) 1px, transparent 0)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          
          {/* Floating particles */}
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-ping opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2.5 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced header section */}
          <div className="text-center mb-12">
            {/* Animated badge */}
            <div className="inline-flex items-center space-x-3 mb-4 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20">
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
              <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">Our Best Sellers</span>
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Main heading with advanced effects */}
            <div className="relative mb-6">
              <h2 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-gray-900 mb-4 leading-tight">
                Featured <span className="relative">
                  <span className="text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text animate-pulse">Products</span>
                  {/* Animated underline */}
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full transform scale-x-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </span>
            </h2>
              
              {/* Floating sparkles around the heading */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-ping opacity-60"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${i % 2 === 0 ? '10%' : '80%'}`,
                    animationDelay: `${i * 0.5}s`
                  }}
                ></div>
              ))}
            </div>

            {/* Enhanced description */}
            <div className="relative">
              <p className="text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-6 font-medium">
                Discover our most popular and trending grocery items, carefully selected for <span className="text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text font-bold">quality</span> and <span className="text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text font-bold">value</span>
              </p>
              
              {/* Decorative elements */}
              <div className="flex items-center justify-center space-x-6">
                <div className="flex space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
                <span className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Handpicked for You</span>
                <div className="flex space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced product cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="group relative bg-white/70 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-1000 overflow-hidden border border-white/30 transform hover:-translate-y-6"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Animated background layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-indigo-50/40 to-purple-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" style={{ animationDelay: '0.2s' }}></div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-1000"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-1000" style={{ animationDelay: '0.5s' }}></div>

                <div className="relative overflow-hidden">
                  {/* Enhanced image container */}
                  <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    
                    {/* Gradient overlays and badge */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    
                    <div className="absolute top-6 right-6">
                      <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-md px-4 py-2 rounded-full font-bold shadow-lg">
                      {product.badge}
                    </span>
                  </div>
                    <div className="absolute top-6 left-6">
                      <span className="bg-blue-500 text-white text-md px-3 py-1.5 rounded-full font-bold shadow-lg">
                      FEATURED
                    </span>
                    </div>

                    {/* Floating sparkles on image */}
                    <div className="absolute top-4 left-4 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-1000"></div>
                    <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-1000" style={{ animationDelay: '0.3s' }}></div>
                  </div>

                  {/* Product content with enhanced animations */}
                  <div className="p-6 flex flex-col h-48 relative z-10">
                    <h3 className="font-heading font-bold text-lg mb-2 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-700 min-h-[3.5rem] flex items-start leading-tight">
                    {product.name}
                  </h3>
                    <div className="flex items-center justify-between mb-3 flex-grow">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                        <span className="text-sm text-gray-700 ml-1 font-bold">{product.rating}</span>
                      </div>
                  </div>
                  <div className="mt-auto">
                    <Link
                      to="/categories"
                        className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold rounded-lg transition-all duration-500 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden group text-sm"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <ShoppingBag className="w-4 h-4 mr-2 relative z-10" />
                        <span className="relative z-10">View Details</span>
                        <ArrowRight className="ml-2 w-4 h-4 relative z-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                    </div>
                  </div>
                </div>

                {/* Enhanced hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-indigo-500/8 to-purple-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-3xl"></div>
                
                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl"></div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA to view all products */}
          <div className="text-center mt-12">
            <Link
              to="/categories"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden group transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 text-xl">View All Products</span>
              <ArrowRight className="ml-4 w-6 h-6 relative z-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
              {[...Array(5)].map((_, i) => (
                <Sparkles
                  key={i}
                  className="absolute text-yellow-300 animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.1}s`,
                    opacity: 0,
                    animationName: 'sparkle-appear',
                    animationDuration: '1s',
                    animationFillMode: 'forwards',
                    animationIterationCount: 'infinite',
                    animationTimingFunction: 'ease-out'
                  }}
                />
              ))}
              <style>
                {`
                @keyframes sparkle-appear {
                  0% { opacity: 0; transform: scale(0); }
                  50% { opacity: 1; transform: scale(1); }
                  100% { opacity: 0; transform: scale(0); }
                }
                `}
              </style>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;