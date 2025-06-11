import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
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
  Heart
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
    { icon: Truck, text: 'Free Shipping', subtext: 'On orders over $50' },
    { icon: Shield, text: 'Secure Payment', subtext: '100% protected' },
    { icon: Award, text: 'Quality Guarantee', subtext: '30-day returns' },
    { icon: Star, text: 'Premium Service', subtext: '24/7 support' }
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Company Info */}
            <div>
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
                Serving our community with quality products and exceptional service since 1999.
              </p>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Instagram, href: '#', label: 'Instagram' }
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.href} 
                    className="w-8 h-8 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 hover:from-blue-600/30 hover:to-indigo-600/30 rounded-lg flex items-center justify-center transition-all duration-300 group hover:scale-110"
                  >
                    <social.icon className="w-4 h-4 text-gray-300 group-hover:text-blue-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-base mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Products', path: '/products' },
                  { name: 'About Us', path: '/about' },
                  { name: 'Contact', path: '/contact' },
                  { name: 'Privacy Policy', path: '/privacy' },
                  { name: 'Terms of Service', path: '/terms' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center space-x-2 group text-sm"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Categories */}
            <div>
              <h4 className="font-bold text-base mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Categories
              </h4>
              <ul className="space-y-2">
                {[
                  'Staple Foods',
                  'Beverages', 
                  'Snacks & Namkeen',
                  'Dairy',
                  'Household & Cleaning',
                  'Personal Care & Health'
                ].map((category) => (
                  <li key={category}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center space-x-2 group text-sm"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span>{category}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-base mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Get in Touch
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 group">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg flex items-center justify-center group-hover:from-blue-600/30 group-hover:to-indigo-600/30 transition-all duration-300">
                    <MapPin className="w-3 h-3 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs">
                      123 Main Street<br />
                      Downtown District<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg flex items-center justify-center group-hover:from-blue-600/30 group-hover:to-indigo-600/30 transition-all duration-300">
                    <Phone className="w-3 h-3 text-blue-400" />
                  </div>
                  <p className="text-gray-300 text-xs">(555) 123-4567</p>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg flex items-center justify-center group-hover:from-blue-600/30 group-hover:to-indigo-600/30 transition-all duration-300">
                    <Mail className="w-3 h-3 text-blue-400" />
                  </div>
                  <p className="text-gray-300 text-xs">info@hasuperstore.com</p>
                </div>
              </div>
              
              {/* Store Hours */}
              <div className="mt-4">
                <h5 className="font-semibold text-white mb-2 flex items-center space-x-2 text-sm">
                  <Clock className="w-3 h-3 text-blue-400" />
                  <span>Store Hours</span>
                </h5>
                <div className="text-xs text-gray-300 space-y-1">
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>

              {/* WhatsApp Contact */}
              <div className="mt-4">
                <h5 className="font-semibold text-white mb-2 flex items-center space-x-2 text-sm">
                  <MessageCircle className="w-3 h-3 text-green-400" />
                  <span>WhatsApp Support</span>
                </h5>
                <p className="text-xs text-gray-300 mb-2">Get instant help and product information</p>
                <a
                  href="https://wa.me/1234567890"
                  className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-all duration-300 group text-xs"
                >
                  <span>Chat with us on WhatsApp</span>
                  <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;