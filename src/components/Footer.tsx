import React, { useState } from 'react';
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
  ShoppingBag
} from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const features = [
    { icon: Truck, text: 'Fast Delivery', subtext: 'Within 1 hour' },
    { icon: Shield, text: 'Secure Payment', subtext: '100% protected' },
    { icon: Award, text: 'Quality Guarantee', subtext: '30-day returns' },
    { icon: Star, text: 'Premium Service', subtext: '24/7 support' }
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
    { name: 'Staple Foods', path: '/categories', icon: '🌾' },
    { name: 'Beverages', path: '/categories', icon: '🥤' },
    { name: 'Snacks & Namkeen', path: '/categories', icon: '🍿' },
    { name: 'Dairy', path: '/categories', icon: '🥛' },
    { name: 'Household & Cleaning', path: '/categories', icon: '🧽' },
    { name: 'Personal Care & Health', path: '/categories', icon: '🧴' }
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
      {/* Premium Newsletter Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white relative">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              <h3 className="font-bold text-2xl bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Stay Updated with Our Latest Products
              </h3>
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            </div>
            <p className="text-blue-200 mb-6 max-w-2xl mx-auto text-base leading-relaxed">
              Subscribe to our newsletter and be the first to know about new arrivals, 
              exclusive deals, and special promotions.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-3">
              <div className="relative flex-1 group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2.5 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-lg"
                  required
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden group"
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
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:shadow-blue-500/25 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">{feature.text}</h4>
                <p className="text-xs text-gray-600">{feature.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-blue-500/25 transition-all duration-500">
                    <span className="text-white font-bold text-lg">H</span>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border border-white shadow-sm animate-pulse"></div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border border-white shadow-sm flex items-center justify-center">
                    <span className="text-xs font-bold text-white">★</span>
                  </div>
                  <Sparkles className="absolute -top-1.5 -left-1.5 w-2.5 h-2.5 text-yellow-400 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-lg bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    HA Super Store
                  </h3>
                  <p className="text-xs text-gray-400 flex items-center space-x-1">
                    <Sparkles className="w-2.5 h-2.5 text-yellow-400" />
                    <span>Your Trusted General Store</span>
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Your trusted one-stop destination for groceries, household essentials, and daily necessities. 
                Serving our community with quality products and exceptional service since May 2021.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-base mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent flex items-center">
                <ArrowRight className="w-4 h-4 mr-2" />
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center space-x-2 group text-sm"
                    >
                      <span className="text-sm">{link.icon}</span>
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-bold text-base mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Legal
              </h4>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center space-x-2 group text-sm"
                    >
                      <span className="text-sm">{link.icon}</span>
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Categories */}
            <div>
              <h4 className="font-bold text-base mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent flex items-center">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Categories
              </h4>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link 
                      to={category.path} 
                      className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center space-x-2 group text-sm"
                    >
                      <span className="text-sm">{category.icon}</span>
                      <span>{category.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-base mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Get in Touch
              </h4>
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg flex items-center justify-center group-hover:from-blue-600/30 group-hover:to-indigo-600/30 transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-300 text-xs">
                        {info.label === 'Address' ? (
                          <>
                            H.A Super Store<br />
                            Chak No 297 JB<br />
                            Gojra, Pakistan
                          </>
                        ) : (
                          info.value
                        )}
                      </p>
                      {info.link && (
                        <a 
                          href={info.link}
                          target={info.external ? "_blank" : undefined}
                          rel={info.external ? "noopener noreferrer" : undefined}
                          className="text-blue-400 hover:text-blue-300 text-xs mt-1 inline-block"
                        >
                          {info.label === 'Address' ? 'View on Maps →' : 
                           info.label === 'WhatsApp' ? 'Chat with us →' : 
                           info.label === 'Phone' ? 'Call now →' : 
                           'Send email →'}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Store Hours */}
              <div className="mt-4">
                <h5 className="font-semibold text-white mb-2 flex items-center space-x-2 text-sm">
                  <Clock className="w-3 h-3 text-blue-400" />
                  <span>Store Hours</span>
                </h5>
                <div className="text-xs text-gray-300 space-y-1">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className={`${schedule.highlight ? 'text-blue-300 font-medium' : ''}`}>
                      <span className="font-medium">{schedule.day}:</span> {schedule.hours}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Payment Methods & Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-3 md:mb-0">
                <span className="text-gray-400 text-xs">We Accept:</span>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded flex items-center justify-center">
                    <CreditCard className="w-4 h-3 text-blue-400" />
                  </div>
                  <div className="w-6 h-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded flex items-center justify-center">
                    <Smartphone className="w-3 h-3 text-blue-400" />
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">JazzCash</span>
                  <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">EasyPaisa</span>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-gray-400 text-xs">
                  © 2024 H.A Super Store. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1 flex items-center justify-center md:justify-end space-x-1">
                  <span>Made with</span>
                  <Heart className="w-2.5 h-2.5 text-red-400 animate-pulse" />
                  <span>for our customers</span>
                </p>
              </div>
            </div>

            {/* Developer Credit Section */}
            <div className="border-t border-gray-800 mt-4 pt-4">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2 group">
                  <div className="relative">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                      <Sparkles className="w-3 h-3 text-white animate-pulse" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border border-white shadow-sm animate-ping"></div>
                  </div>
                  <span className="text-gray-400 text-xs font-medium">Website Created by</span>
                  <div className="relative">
                    <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text font-bold text-sm animate-pulse">
                      Abdullah
                    </span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-3">
                  <a 
                    href="mailto:abdullahr797@gmail.com"
                    className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-all duration-300 group text-xs"
                  >
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded flex items-center justify-center group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all duration-300">
                      <Mail className="w-2.5 h-2.5" />
                    </div>
                    <span className="group-hover:scale-105 transition-transform duration-300">abdullahr797@gmail.com</span>
                    <ArrowRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                </div>

                <div className="mt-2 flex items-center justify-center space-x-1">
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                  <span className="text-gray-500 text-xs mx-2">Professional Web Development</span>
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-1 h-1 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;