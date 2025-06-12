import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, ShoppingCart, Phone, Clock, Star, X, CheckCircle, Package, Truck, CreditCard, Shield, Sparkles, Zap, Moon, Sun, Volume2, VolumeX } from 'lucide-react';
import soundEffects from '../utils/soundEffects';

const WhatsAppButton: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAttention, setShowAttention] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ bottom: '128px', right: '24px' });
  const [isPositioning, setIsPositioning] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('animate-slide-up');
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  // Global dark mode toggle
  const [userTheme, setUserTheme] = useState<'system' | 'dark' | 'light'>('system');

  // Animation variations
  const animationVariations = [
    'animate-slide-up',
    'animate-slide-in-right',
    'animate-slide-in-left',
    'animate-zoom-in',
    'animate-flip-in',
    'animate-bounce-in',
    'animate-fade-in-scale',
    'animate-slide-in-bottom',
    'animate-rotate-in'
  ];

  // Select random animation
  const selectRandomAnimation = () => {
    const randomIndex = Math.floor(Math.random() * animationVariations.length);
    return animationVariations[randomIndex];
  };

  // Auto-show attention animation after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAttention(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Keyboard support for closing popup
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isExpanded) {
        setIsExpanded(false);
        setShowAttention(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExpanded]);

  // Smart positioning logic
  useEffect(() => {
    if (isExpanded && buttonRef.current && popupRef.current) {
      setIsPositioning(true);
      
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const popupRect = popupRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      
      let newBottom = '128px';
      let newRight = '24px';
      
      // For very small screens, use more conservative positioning
      if (windowWidth < 400) {
        newRight = '8px';
        newBottom = '80px';
      } else {
        // Check if popup would be cut off at the bottom
        if (buttonRect.bottom + 400 > windowHeight) { // Estimate popup height
          newBottom = '80px';
        }
        
        // Check if popup would be cut off at the right
        if (buttonRect.right + 320 > windowWidth) { // Estimate popup width
          newRight = '8px';
        }
        
        // Check if popup would be cut off at the left
        if (buttonRect.left - 320 < 0) { // Estimate popup width
          newRight = '8px';
        }
      }
      
      setPopupPosition({ bottom: newBottom, right: newRight });
      
      // Remove positioning state after a short delay
      setTimeout(() => {
        setIsPositioning(false);
      }, 300);
    }
  }, [isExpanded]);

  // Apply theme to <html> root
  useEffect(() => {
    let theme = userTheme;
    if (userTheme === 'system') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
    setIsDarkMode(theme === 'dark');
  }, [userTheme]);

  const handleThemeToggle = () => {
    setUserTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleWhatsAppClick = async (option: string) => {
    const phoneNumber = "923317590842";
    let message = "";
    
    switch (option) {
      case 'order':
        message = "🛒 Hello! I'd like to place an order at H.A Super Store. Please help me with the ordering process and available products.";
        break;
      case 'inquiry':
        message = "💬 Hello! I have some questions about your products at H.A Super Store. Can you help me with pricing and availability?";
        break;
      case 'support':
        message = "🆘 Hello! I need customer support from H.A Super Store. Can you assist me?";
        break;
      default:
        message = "👋 Hello! I'm interested in your products at H.A Super Store. Can you help me?";
    }
    
    if (isSoundEnabled) {
      await soundEffects.playSuccess();
    }
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsExpanded(false);
    setSelectedOption(null);
    setShowAttention(false);
  };

  const handleMainClick = async () => {
    if (!isExpanded) {
      // Select random animation when opening
      setCurrentAnimation(selectRandomAnimation());
      if (isSoundEnabled) {
        await soundEffects.playClick();
      }
    }
    
    setIsExpanded(!isExpanded);
    setShowAttention(false);
    
    // If opening the popup, scroll to ensure it's visible
    if (!isExpanded) {
      setTimeout(() => {
        window.scrollTo({
          top: Math.max(0, window.scrollY - 100),
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  const features = [
    { icon: Truck, text: 'Fast Delivery', color: 'text-blue-500' },
    { icon: CreditCard, text: 'Secure Payment', color: 'text-green-500' },
    { icon: Shield, text: 'Quality Guarantee', color: 'text-purple-500' },
    { icon: Star, text: 'Premium Service', color: 'text-yellow-500' }
  ];

  return (
    <>
      {/* Attention-Grabbing WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Pulsing Ring Animation */}
        <div className={`absolute inset-0 rounded-full bg-green-400 animate-ping ${showAttention ? 'opacity-75' : 'opacity-0'} transition-opacity duration-500`}></div>
        
        {/* Glowing Background */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-600 blur-lg ${showAttention ? 'opacity-50' : 'opacity-0'} transition-opacity duration-500`}></div>
        
        {/* Main Button */}
        <button
          onClick={handleMainClick}
          className={`relative bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white rounded-full p-5 shadow-2xl transition-all duration-300 hover:scale-110 group border-2 ${
            isDarkMode ? 'border-gray-600/30 shadow-green-500/25' : 'border-white/20'
          } ${showAttention ? 'animate-bounce' : ''}`}
          aria-label="Contact H.A Super Store on WhatsApp"
          ref={buttonRef}
        >
          {/* Sparkle Effects */}
          <div className="absolute -top-1 -right-1">
            <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
          </div>
          <div className="absolute -bottom-1 -left-1">
            <Zap className="w-4 h-4 text-yellow-300 animate-pulse" />
          </div>
          
          <MessageCircle className="w-7 h-7 group-hover:animate-bounce" />
          
          {/* Notification Badge */}
          <div className={`absolute -top-3 -right-3 bg-red-500 text-white text-sm rounded-full w-8 h-8 flex items-center justify-center animate-pulse border-2 ${
            isDarkMode ? 'border-gray-700' : 'border-white'
          } shadow-lg`}>
            <span className="text-xs font-bold">!</span>
          </div>
          
          {/* Hover Tooltip */}
          <div className={`absolute bottom-full right-0 mb-3 px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl ${
            isDarkMode ? 'bg-gray-800 text-gray-100 border border-gray-600' : 'bg-gray-900 text-white'
          }`}>
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-4 h-4 text-green-400" />
              <span className="font-semibold">Place Order Now!</span>
            </div>
            <div className={`absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
              isDarkMode ? 'border-t-gray-800' : 'border-t-gray-900'
            }`}></div>
          </div>
        </button>

        {/* Attention Banner */}
        {showAttention && (
          <div className={`absolute bottom-full right-0 mb-4 w-72 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-4 shadow-2xl animate-slide-up border ${
            isDarkMode ? 'border-gray-600' : 'border-green-400'
          }`}>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Ready to Order?</h4>
                <p className="text-green-100 text-xs">Get instant support & special offers!</p>
              </div>
              <button
                onClick={() => setShowAttention(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Expanded Menu */}
      {isExpanded && (
        <div 
          ref={popupRef}
          className={`fixed z-50 w-80 max-w-[90vw] rounded-2xl shadow-2xl border overflow-hidden max-h-[calc(100vh-120px)] overflow-y-auto transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gray-900 border-gray-700 shadow-gray-900/50' 
              : 'bg-white border-gray-100'
          } ${
            isPositioning ? 'opacity-50 scale-95' : `opacity-100 scale-100 ${currentAnimation}`
          }`}
          style={{
            bottom: popupPosition.bottom,
            right: popupPosition.right
          }}
        >
          {/* Loading indicator */}
          {isPositioning && (
            <div className={`absolute inset-0 backdrop-blur-sm flex items-center justify-center z-10 ${
              isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'
            }`}>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Positioning...</span>
              </div>
            </div>
          )}

          {/* Header with Enhanced Design */}
          <div className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white p-4 sm:p-5 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-2 right-2 w-20 h-20 bg-white rounded-full"></div>
              <div className="absolute bottom-2 left-2 w-16 h-16 bg-white rounded-full"></div>
            </div>
            
            <div className="relative flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl">H.A Super Store</h3>
                  <p className="text-green-100 text-xs sm:text-sm flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    <span>24/7 Live Support</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-white/80 hover:text-white transition-colors hover:scale-110 bg-white/10 hover:bg-white/20 rounded-full p-1"
                aria-label="Close WhatsApp popup"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={handleThemeToggle}
              className={`ml-2 p-1 rounded-full border transition-colors duration-200 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-yellow-300 hover:bg-gray-700' : 'bg-white border-gray-200 text-yellow-500 hover:bg-gray-100'}`}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Features with Enhanced Design */}
          <div className={`p-3 sm:p-4 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-gray-800/50 to-gray-700/50' 
              : 'bg-gradient-to-r from-green-50 to-emerald-50/50'
          }`}>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {features.map((feature, index) => (
                <div key={index} className={`flex items-center space-x-2 text-xs rounded-lg p-2 border ${
                  isDarkMode 
                    ? 'bg-gray-800/60 border-gray-600 text-gray-200' 
                    : 'bg-white/60 border-gray-100 text-gray-700'
                }`}>
                  <feature.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${feature.color}`} />
                  <span className="font-medium text-xs">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-4 sm:p-5 space-y-3 sm:space-y-4">
            {/* Place Order Button - Enhanced */}
            <button
              onClick={() => handleWhatsAppClick('order')}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2 sm:space-x-3 group relative overflow-hidden"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce" />
              <span>🛒 Place Order Now</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
            </button>

            {/* Quick Actions - Enhanced */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <button
                onClick={() => handleWhatsAppClick('inquiry')}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-1 sm:space-x-2"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Ask Questions</span>
              </button>
              
              <button
                onClick={() => handleWhatsAppClick('support')}
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-1 sm:space-x-2"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Get Support</span>
              </button>
            </div>

            {/* Contact Info - Enhanced */}
            <div className={`rounded-xl p-3 sm:p-4 border ${
              isDarkMode 
                ? 'bg-gradient-to-r from-gray-800/50 to-gray-700/30 border-gray-600' 
                : 'bg-gradient-to-r from-gray-50 to-blue-50/30 border-gray-100'
            }`}>
              <div className={`flex items-center space-x-2 text-xs sm:text-sm mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span className="font-semibold">Response Time: Within 20 minutes</span>
              </div>
              <div className={`flex items-center space-x-2 text-xs sm:text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span className="font-semibold">Online Now - Ready to Help!</span>
              </div>
            </div>

            {/* Order Benefits - Enhanced */}
            <div className={`rounded-xl p-3 sm:p-4 border ${
              isDarkMode 
                ? 'bg-gradient-to-r from-gray-800/50 to-gray-700/30 border-gray-600' 
                : 'bg-gradient-to-r from-green-50 to-emerald-50/50 border-green-100'
            }`}>
              <h4 className={`font-bold text-xs sm:text-sm mb-2 sm:mb-3 flex items-center space-x-2 ${
                isDarkMode ? 'text-green-300' : 'text-green-800'
              }`}>
                <Package className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Why Order via WhatsApp?</span>
              </h4>
              <ul className={`text-xs space-y-1 sm:space-y-2 ${
                isDarkMode ? 'text-green-200' : 'text-green-700'
              }`}>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span>Instant order confirmation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span>Real-time tracking updates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span>Personalized recommendations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span>Special WhatsApp-only offers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  );
};

export default WhatsAppButton;