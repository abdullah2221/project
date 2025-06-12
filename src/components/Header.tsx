import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
 
  Search, 
  MessageCircle, 
  ChevronDown,
  Star,
  Award,
  Shield,
  Truck,
  Home,
  Package,
  Info,
  Mail,
  Sparkles,
  PackageX,
  AlertCircle
} from 'lucide-react';
import { searchProducts } from '../data/products';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Array<{id: number, name: string, category: string, available: boolean}>>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [headerHeights, setHeaderHeights] = useState({ topBar: 0, header: 56 });
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);
    };

    // Calculate header heights based on screen size
    const calculateHeaderHeights = () => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      const isDesktop = window.innerWidth >= 1024;
      
      let topBarHeight = 0;
      let headerHeight = 56;
      
      if (isMobile) {
        topBarHeight = 28;
        headerHeight = 56;
      } else if (isTablet) {
        topBarHeight = 24;
        headerHeight = 64;
      } else if (isDesktop) {
        topBarHeight = 32;
        headerHeight = 64;
      }
      
      setHeaderHeights({ topBar: topBarHeight, header: headerHeight });
    };

    calculateHeaderHeights();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateHeaderHeights);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateHeaderHeights);
    };
  }, []);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.search-container')) {
        setShowSearchResults(false);
      }
    };

    if (showSearchResults) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSearchResults]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  const handleDropdownEnter = (itemName: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(itemName);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
    setDropdownTimeout(timeout);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    if (value.trim().length > 0) {
      const filtered = searchProducts(value);
      setSearchResults(filtered);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
      setShowSearchResults(false);
      setIsSearchOpen(false);
    }
  };

  const handleProductClick = (product: {id: number, name: string, category: string, available: boolean}) => {
    navigate(`/products?search=${encodeURIComponent(product.name)}`);
    setSearchTerm('');
    setShowSearchResults(false);
    setIsSearchOpen(false);
  };

  const navItems = [
    { 
      name: 'Home', 
      path: '/',
      icon: Home
    },
    { 
      name: 'Categories', 
      path: '/categories',
      icon: Package,
      dropdown: [
        { name: 'Staple Foods', icon: '🌾', path: '/categories?category=staple-foods' },
        { name: 'Beverages', icon: '🥤', path: '/categories?category=beverages' },
        { name: 'Snacks & Namkeen', icon: '🍿', path: '/categories?category=snacks' },
        { name: 'Dairy & Eggs', icon: '🥛', path: '/categories?category=dairy' },
        { name: 'Household & Cleaning', icon: '🧽', path: '/categories?category=household' },
        { name: 'Personal Care & Health', icon: '🧴', path: '/categories?category=personal-care' }
      ]
    },
    { 
      name: 'About', 
      path: '/about',
      icon: Info
    },
    { 
      name: 'Contact', 
      path: '/contact',
      icon: Mail
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  const features = [
    { icon: Truck, text: 'Fast Delivery', subtext: '1-hour delivery in hometown and Gojra city' },
    { icon: Shield, text: 'Secure Payment', subtext: '100% protected transactions' },
    { icon: Award, text: 'Quality Guarantee', subtext: '30-day returns guarantee' },
    { icon: Star, text: 'Premium Service', subtext: '24/7 customer support' }
  ];

  return (
    <>
      {/* Main Header - Fixed at Top */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 header-container">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Enhanced Logo - Optimized for 1040x731 and other screen sizes */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0 header-logo">
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-blue-500/25 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                  <span className="text-white font-bold text-sm sm:text-lg">H</span>
                  <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border border-white shadow-lg animate-pulse"></div>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border border-white shadow-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-white">★</span>
                </div>
                <Sparkles className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-2 h-2 sm:w-3 sm:h-3 text-yellow-400 animate-pulse" />
              </div>
              <div className="hidden sm:block min-w-0">
                <h1 className="font-bold text-lg sm:text-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300 truncate header-logo-text">
                  H.A Super Store
                </h1>
                <p className="text-xs text-gray-600 font-medium flex items-center space-x-1 truncate header-logo-subtitle">
                  <Sparkles className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                  <span className="truncate">Premium Shopping Experience</span>
                </p>
              </div>
            </Link>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-shrink-0 header-nav">
              {navItems.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 xl:space-x-3 px-3 xl:px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 relative overflow-hidden ${
                      isActive(item.path)
                        ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-md border border-blue-200'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50'
                    }`}
                  >
                    <div className="relative">
                      <item.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                      <div className="absolute -inset-1 bg-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    </div>
                    <span className="relative z-10">{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    )}
                    
                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </Link>
                  
                  {/* Enhanced Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div 
                      className="absolute top-full left-0 mt-0 w-52 z-50"
                      onMouseEnter={() => handleDropdownEnter(item.name)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 p-3 animate-slide-down">
                        <div className="grid grid-cols-1 gap-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-center space-x-3 px-3 py-2.5 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 group"
                            >
                              <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                                {dropdownItem.icon}
                              </span>
                              <span className="font-semibold text-gray-700 group-hover:text-blue-600 text-sm">
                                {dropdownItem.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions - Mobile Optimized */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              {/* Desktop Search Bar - Hidden on mobile */}
              <div className="hidden md:flex relative group search-container header-search">
                <form onSubmit={handleSearchSubmit} className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-blue-500 transition-colors duration-300" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search products..."
                    className="w-48 lg:w-64 xl:w-72 pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-300 group-hover:bg-white group-hover:border-gray-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </form>
                
                {/* Search Results Dropdown */}
                {showSearchResults && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 max-h-80 overflow-y-auto z-50">
                    <div className="p-3">
                      <div className="text-xs font-semibold text-gray-500 mb-2 px-2">
                        Search Results ({searchResults.length})
                      </div>
                      {searchResults.map((product) => (
                        <div
                          key={product.id}
                          onClick={() => handleProductClick(product)}
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 cursor-pointer group"
                        >
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {product.name}
                            </div>
                            <div className="text-xs text-gray-500">{product.category}</div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {product.available ? (
                              <div className="flex items-center space-x-1 text-green-600">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-xs font-medium">In Stock</span>
                              </div>
                            ) : (
                              <div className="flex items-center space-x-1 text-red-600">
                                <PackageX className="w-4 h-4" />
                                <span className="text-xs font-medium">Out of Stock</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* No Results Message */}
                {showSearchResults && searchResults.length === 0 && searchTerm.trim().length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 z-50">
                    <div className="p-6 text-center">
                      <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <h3 className="font-semibold text-gray-900 mb-2">No Products Found</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Sorry, we couldn't find any products matching "{searchTerm}"
                      </p>
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-3">
                        <p className="text-xs text-gray-600">
                          💡 Try searching with different keywords or browse our categories
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all duration-300 group"
              >
                <Search className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              </button>

              {/* Contact Button - Hidden on mobile, shown in menu */}
              <Link
                to="/contact"
                className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <MessageCircle className="w-4 h-4 relative z-10" />
                <span className="relative z-10 hidden sm:inline">Contact</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all duration-300 group"
              >
                {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar - Slides down when active */}
        {isSearchOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg animate-slide-down">
            <div className="px-3 py-4">
              <div className="relative search-container">
                <form onSubmit={handleSearchSubmit}>
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search for products, categories, or brands..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-300"
                    autoFocus
                  />
                </form>
                
                {/* Mobile Search Results */}
                {showSearchResults && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 max-h-60 overflow-y-auto z-50">
                    <div className="p-3">
                      <div className="text-xs font-semibold text-gray-500 mb-2 px-2">
                        Search Results ({searchResults.length})
                      </div>
                      {searchResults.map((product) => (
                        <div
                          key={product.id}
                          onClick={() => handleProductClick(product)}
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 cursor-pointer group"
                        >
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {product.name}
                            </div>
                            <div className="text-xs text-gray-500">{product.category}</div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {product.available ? (
                              <div className="flex items-center space-x-1 text-green-600">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-xs font-medium">In Stock</span>
                              </div>
                            ) : (
                              <div className="flex items-center space-x-1 text-red-600">
                                <PackageX className="w-4 h-4" />
                                <span className="text-xs font-medium">Out of Stock</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mobile No Results Message */}
                {showSearchResults && searchResults.length === 0 && searchTerm.trim().length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 z-50">
                    <div className="p-4 text-center">
                      <AlertCircle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm">No Products Found</h3>
                      <p className="text-xs text-gray-600 mb-3">
                        Sorry, we couldn't find any products matching "{searchTerm}"
                      </p>
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-2">
                        <p className="text-xs text-gray-600">
                          💡 Try searching with different keywords
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu - Enhanced for better UX */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-2xl animate-slide-down max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-3 py-4 space-y-3">
              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        isActive(item.path)
                          ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 border border-blue-200 shadow-sm'
                          : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50/30 hover:text-blue-600'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm">{item.name}</span>
                    </Link>
                    
                    {/* Mobile Dropdown for Categories */}
                    {item.dropdown && (
                      <div className="ml-7 mt-2 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200"
                          >
                            <span className="text-lg">{dropdownItem.icon}</span>
                            <span className="text-sm">{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Contact */}
              <div className="pt-3 border-t border-gray-100">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Contact Us</span>
                </Link>
              </div>

              {/* Mobile Features */}
              <div className="pt-3 border-t border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span>Why Choose Us?</span>
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50/30 p-3 rounded-xl border border-gray-100">
                      <div className="flex items-center space-x-2">
                        <feature.icon className="w-4 h-4 text-blue-600" />
                        <div>
                          <p className="text-xs font-semibold text-gray-900">{feature.text}</p>
                          <p className="text-xs text-gray-500">{feature.subtext}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Simple Spacer for Header */}
      <div 
        className="w-full" 
        style={{ 
          height: `${headerHeights.header}px`
        }}
      ></div>
    </>
  );
};

export default Header; 