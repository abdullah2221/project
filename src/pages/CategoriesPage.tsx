import React, { useState } from 'react';
import { categories } from '../data/products';
import { ArrowRight, X, Phone, MapPin, Clock, MessageCircle, Star, Package, Users, Truck, Shield } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';

const CategoriesPage: React.FC = () => {
  const [selected, setSelected] = useState<null | typeof categories[0]>(null);

  // Use optimized scroll-to-top hook
  useScrollToTop();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Modern Hero Section - Mobile First */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-indigo-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-2 mb-4 sm:mb-6 border border-white/20">
              <Package className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">Explore Our Categories</span>
            </div>
            
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 leading-tight">
              Discover Our
              <span className="block text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text">
                Premium Categories
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 sm:mb-8 text-white/90 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
              From fresh groceries to household essentials, explore our carefully curated 20+ categories. 
              Each category is designed to meet your daily needs with quality products and exceptional service.
            </p>
            
            {/* Stats Section - Mobile Optimized */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl sm:max-w-4xl mx-auto mt-8 sm:mt-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-300 mb-1">20+</div>
                <div className="text-xs sm:text-sm text-white/70">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-indigo-300 mb-1">100+</div>
                <div className="text-xs sm:text-sm text-white/70">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-300 mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-white/70">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-pink-300 mb-1">100%</div>
                <div className="text-xs sm:text-sm text-white/70">Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - Mobile First */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 text-gray-900">
              Browse Our Categories
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our 20+ categories to discover popular items, services, and contact us directly for orders
            </p>
          </div>

          {/* Categories Grid - Mobile First Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {categories.map((cat, idx) => (
              <div
                key={cat.name}
                onClick={() => setSelected(cat)}
                className="group relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Category Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Category Icon */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg">
                    <span className="text-xl sm:text-2xl">{cat.icon}</span>
                  </div>
                  
                  {/* Popular Items Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                    {cat.popularItems.length} Items
                  </div>
                </div>

                {/* Category Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="font-heading font-bold text-lg sm:text-xl mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    {cat.description}
                  </p>
                  
                  {/* Popular Items Preview */}
                  <div className="mb-3 sm:mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Popular Items:</h4>
                    <div className="flex flex-wrap gap-1">
                      {cat.popularItems.slice(0, 3).map((item, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
                          {item}
                        </span>
                      ))}
                      {cat.popularItems.length > 3 && (
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs">
                          +{cat.popularItems.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all duration-300">
                      View Details <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </span>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                      <span className="text-xs sm:text-sm font-medium">4.8</span>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Detail Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              className="absolute top-6 right-6 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 text-gray-400 hover:text-gray-700 hover:bg-white transition-all duration-300"
              onClick={() => setSelected(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="relative">
              {/* Modal Header */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                      <span className="text-3xl">{selected.icon}</span>
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-3xl">{selected.name}</h2>
                      <p className="text-white/90">{selected.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Popular Items */}
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-4 text-gray-900 flex items-center gap-2">
                      <Package className="w-5 h-5 text-blue-600" />
                      Popular Items
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {selected.popularItems.map((item, i) => (
                        <div key={i} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="font-medium text-gray-800">{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-4 text-gray-900 flex items-center gap-2">
                      <Star className="w-5 h-5 text-indigo-600" />
                      Our Services
                    </h3>
                    <div className="space-y-3">
                      {selected.services.map((service, i) => (
                        <div key={i} className="flex items-center gap-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100">
                          <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                            <Shield className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-medium text-gray-800">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mt-8 p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl border border-slate-200">
                  <h3 className="font-heading font-bold text-xl mb-4 text-gray-900 flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">{selected.contactInfo.phone}</div>
                        <div className="text-sm text-gray-600">Phone</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-indigo-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Business Hours</div>
                        <div className="text-sm text-gray-600">{selected.contactInfo.businessHours}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Location</div>
                        <div className="text-sm text-gray-600">{selected.contactInfo.location}</div>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Button */}
                  <a
                    href={`https://wa.me/${selected.contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(selected.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full justify-center"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Contact Us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesPage; 