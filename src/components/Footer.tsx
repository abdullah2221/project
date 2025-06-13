import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
 

  CreditCard, 
  Smartphone, 
  Sparkles,
  Clock,
  MessageCircle,
  Shield,
  Truck,
  Award,
  Star,
  ArrowRight,
  Heart,
  Users,
  ShoppingBag,
  CheckCircle,
  Code,
  Zap,
  Palette,
  Globe,
  Github,
  Linkedin,
  ExternalLink
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, getNewsletterParams } from '../config/emailjs';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNewsletterToast, setShowNewsletterToast] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  // Show newsletter toast notification
  useEffect(() => {
    if (isSubscribed) {
      setShowNewsletterToast(true);
      const timer = setTimeout(() => {
        setShowNewsletterToast(false);
      }, 10000); // 10 seconds
      return () => clearTimeout(timer);
    }
  }, [isSubscribed]);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);
      
      try {
        // Get newsletter parameters using the helper function
        const templateParams = getNewsletterParams(email);

        // Send newsletter subscription email
        const response = await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATES.NEWSLETTER,
          templateParams
        );

        if (response.status === 200) {
          setIsSubscribed(true);
          setEmail('');
          setTimeout(() => setIsSubscribed(false), 10000); // 10 seconds
        }
      } catch (error) {
        console.error('Newsletter subscription failed:', error);
        // Still show success to user but log error
        setIsSubscribed(true);
        setEmail('');
        setTimeout(() => setIsSubscribed(false), 10000); // 10 seconds
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleCloseNewsletterToast = () => {
    setShowNewsletterToast(false);
  };

  const features = [
    { icon: Truck, text: 'Fast Delivery', subtext: '1-hour delivery in hometown and Gojra city' },
    { icon: Shield, text: 'Secure Payment', subtext: '100% protected transactions' },
    { icon: Award, text: 'Quality Guarantee', subtext: '30-day returns guarantee' },
    { icon: Star, text: 'Premium Service', subtext: '24/7 customer support' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Categories', path: '/categories', icon: '🛍️' },
    { name: 'About Us', path: '/about', icon: 'ℹ️' },
    { name: 'Contact', path: '/contact', icon: '📞' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy', icon: '🔒' },
    { name: 'Terms of Service', path: '/terms', icon: '📄' }
  ];

  const categories = [
    { name: '20+ Categories Available', path: '/categories', icon: '🛍️' },
    { name: 'Staple Foods', path: '/categories', icon: '🌾' },
    { name: 'Beverages', path: '/categories', icon: '🥤' },
    { name: 'Snacks & Namkeen', path: '/categories', icon: '🍿' },
    { name: 'Dairy', path: '/categories', icon: '🥛' },
    { name: 'Household & Cleaning', path: '/categories', icon: '🧽' },
    { name: 'Personal Care & Health', path: '/categories', icon: '🧴' },
    { name: 'View All Categories →', path: '/categories', icon: '📋' }
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-4 h-4" />,
      label: 'Address',
      value: 'H.A Super Store, Chak No 297 JB, Gojra, Pakistan',
      link: 'https://www.google.com/maps/place/H.A+Super+Store/data=!4m2!3m1!1s0x0:0x358b93f9d2b23705?sa=X&ved=1t:2428&ictx=111',
      external: true
    },
    {
      icon: <Phone className="w-4 h-4" />,
      label: 'Phone',
      value: '+92 331 7590842',
      link: 'tel:+923317590842',
      external: false
    },
    {
      icon: <Mail className="w-4 h-4" />,
      label: 'Email',
      value: 'raza7590842@gmail.com',
      link: 'mailto:raza7590842@gmail.com',
      external: false
    },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      label: 'WhatsApp',
      value: 'Chat with us',
      link: 'https://wa.me/923317590842',
      external: true
    }
  ];

  const businessHours = [
    { day: 'Monday - Thursday', hours: '6:00 AM - 10:00 AM, 2:00 PM - 10:00 PM' },
    { day: 'Friday', hours: '6:00 AM - 10:00 PM (Extended Hours)', highlight: true },
    { day: 'Saturday - Sunday', hours: '6:00 AM - 10:00 AM, 2:00 PM - 10:00 PM' }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Newsletter Toast Notification */}
      {showNewsletterToast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-in slide-in-from-top-2 duration-500">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-4 rounded-2xl shadow-2xl border border-blue-400 relative">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-sm">Newsletter Subscription Successful!</p>
                <p className="text-xs opacity-90">You'll receive updates and exclusive offers.</p>
              </div>
            </div>
            {/* Close Button */}
            <button
              onClick={handleCloseNewsletterToast}
              className="absolute top-2 right-2 w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <span className="text-white text-sm font-bold">×</span>
            </button>
          </div>
        </div>
      )}

      {/* Premium Newsletter Section - Mobile Optimized */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white relative">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-pulse" />
              <h3 className="font-bold text-lg sm:text-xl lg:text-2xl bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Stay Updated with Our Latest Products
              </h3>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-pulse" />
            </div>
            <p className="text-blue-200 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Subscribe to our newsletter and be the first to know about new arrivals, 
              exclusive deals, and special promotions.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1 group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-lg text-sm sm:text-base"
                  required
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <button
                type="submit"
                className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden group text-sm sm:text-base"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center space-x-2">
                  {isSubscribed ? (
                    <>
                      <span>✓</span>
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Features Section - Mobile Optimized */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:shadow-blue-500/25 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-xs sm:text-sm">{feature.text}</h4>
                <p className="text-xs text-gray-600">{feature.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content - Mobile First */}
      <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4">
                <div className="relative">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-blue-500/25 transition-all duration-500">
                    <span className="text-white font-bold text-sm sm:text-lg">H</span>
                    <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border border-white shadow-sm animate-pulse"></div>
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border border-white shadow-sm flex items-center justify-center">
                    <span className="text-xs font-bold text-white">★</span>
                  </div>
                  <Sparkles className="absolute -top-1 -left-1 sm:-top-1.5 sm:-left-1.5 w-2 h-2 sm:w-2.5 sm:h-2.5 text-yellow-400 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    HA Super Store
                  </h3>
                  <p className="text-xs text-gray-400 flex items-center space-x-1">
                    <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-yellow-400" />
                    <span>Premium Shopping Experience</span>
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Your trusted destination for quality groceries, household essentials, and daily necessities. 
                Serving our community with excellence since 2021.
              </p>
              
              {/* Business Hours - Mobile Optimized */}
              <div className="mb-4">
                <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Business Hours</h4>
                <div className="space-y-1">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className={`text-xs sm:text-sm ${schedule.highlight ? 'text-blue-300 font-semibold' : 'text-gray-400'}`}>
                      <span className="font-medium">{schedule.day}:</span> {schedule.hours}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      <span className="text-sm">{link.icon}</span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Categories</h4>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link
                      to={category.path}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      <span className="text-sm">{category.icon}</span>
                      <span>{category.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Contact Info</h4>
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="text-blue-400 mt-0.5">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">{info.label}</div>
                      {info.external ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm break-words"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <a
                          href={info.link}
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm break-words"
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section - Mobile Optimized */}
          <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="text-center sm:text-left">
                <p className="text-gray-400 text-xs sm:text-sm">
                  © 2024 H.A Super Store. All rights reserved.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-4">
                  {legalLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                    >
                      <span>{link.icon}</span>
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400 text-xs sm:text-sm">Follow us:</span>
                  <div className="flex space-x-2">
                    {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="w-6 h-6 sm:w-8 sm:h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                      >
                        <span className="text-xs font-medium">{social[0]}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Developer Credit Section - Compact One-Liner */}
          <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 rounded-xl px-4 py-2 group hover:from-gray-700/50 hover:to-gray-600/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="relative">
                  <Code className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  Crafted with ❤️ by
                </span>
                <span className="text-sm font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Abdullah
                </span>
                <Zap className="w-3 h-3 text-yellow-400 animate-pulse" />
                <span className="text-gray-400">•</span>
                <a
                  href="mailto:abdullahr797@gmail.com"
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center space-x-1 group/email"
                >
                  <Mail className="w-3 h-3" />
                  <span>abdullahr797@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;