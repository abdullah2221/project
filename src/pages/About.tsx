import React from 'react';
import { Users, Award, Heart, Clock, Store, Zap, Shield, Mail, Phone, MessageCircle, Calendar, Star, Truck, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Hassan Ali",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "With over 20 years in retail, Hassan founded H.A Super Store with a vision to create a one-stop shop for all customer needs."
    },
    {
      name: "Fatima Zahra",
      role: "Store Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
      description: "Fatima ensures our daily operations run smoothly and maintains our high standards of customer service and product quality."
    },
    {
      name: "Muhammad Raza",
      role: "Customer Relations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Muhammad is dedicated to ensuring every customer has an exceptional shopping experience with personalized service."
    },
    {
      name: "Aisha Bibi",
      role: "Quality Control",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Aisha oversees product quality and ensures all items meet our high standards before reaching our customers."
    }
  ];

  const milestones = [
    { year: "May 2021", event: "H.A Super Store founded with a vision to serve the community" },
    { year: "2022", event: "Expanded product range and introduced modern retail solutions" },
    { year: "2023", event: "Launched WhatsApp ordering service and home delivery" },
    { year: "2024", event: "Became the trusted choice for quality products and exceptional service" }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer First",
      description: "We're more than a store - we're your trusted partner, providing personalized service and quality products."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Every product is carefully selected and tested to meet our high standards of quality and reliability."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Service",
      description: "1-hour delivery in hometown and Gojra city, with plans to expand to more areas in the future."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Support",
      description: "Our knowledgeable staff is here to help you find exactly what you need with expert advice."
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone & WhatsApp",
      value: "+92 331 7590842",
      link: "tel:+923317590842",
      whatsapp: true,
      description: "Call us directly or chat on WhatsApp for instant support"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      value: "raza7590842@gmail.com",
      link: "mailto:raza7590842@gmail.com",
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      value: "Mon-Thu, Sat-Sun: 6 AM-10 AM, 2 PM-10 PM",
      description: "Friday: 6 AM-10 PM (Extended Hours)"
    }
  ];

  const locationInfo = {
    address: "H.A Super Store, Chak No 297 JB, Gojra, Pakistan",
    mapsLink: "https://www.google.com/maps/place/H.A+Super+Store/data=!4m2!3m1!1s0x0:0x358b93f9d2b23705?sa=X&ved=1t:2428&ictx=111"
  };

  return (
    <div className="pt-1">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden">
        {/* Professional Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        
        {/* Neutral Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-800/80 to-gray-900/85" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-black/10" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-gray-500/5 to-slate-500/5 rounded-full blur-3xl animate-spin-slow"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute top-40 right-40 w-24 h-24 border border-white/20 rotate-45"></div>
          <div className="absolute bottom-40 left-40 w-20 h-20 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 border border-white/20 rotate-45"></div>
        </div>
        
        {/* Main Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <Calendar className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              <span>Serving Since May 2021</span>
              <Sparkles className="w-4 h-4 ml-2 text-yellow-300 animate-pulse" />
            </div>
            
            {/* Main Heading */}
            <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-6 leading-tight">
              Our Story
              <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-200 mt-4 font-medium">
                H.A Super Store
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed mb-10 max-w-4xl mx-auto">
              From humble beginnings in May 2021, H.A Super Store has grown into your trusted partner for quality products and exceptional service. 
              We're committed to making your shopping experience seamless and enjoyable.
            </p>
            
            {/* Feature Cards */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="flex items-center bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <Star className="w-5 h-5 text-yellow-300 mr-3 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-base font-semibold">10,000+</div>
                  <div className="text-xs text-gray-300">Happy Customers</div>
                </div>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <Truck className="w-5 h-5 text-green-300 mr-3 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-base font-semibold">1 Hour</div>
                  <div className="text-xs text-gray-300">Delivery</div>
                </div>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <Award className="w-5 h-5 text-blue-300 mr-3 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-base font-semibold">Quality</div>
                  <div className="text-xs text-gray-300">Guaranteed</div>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/categories"
                className="group inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-50 shadow-lg"
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-2xl transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl mb-8 group">
              <Store className="w-10 h-10 text-primary-600" />
            </div>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-neutral-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
              At H.A Super Store, our mission is to provide our community with a comprehensive 
              selection of quality products at competitive prices. We believe that everyone deserves 
              access to reliable products and excellent service, and we're committed to being your 
              trusted partner for all your shopping needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Store className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">One-Stop Shop</h3>
                <p className="text-gray-600">Everything you need in one convenient location</p>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">Customer Focused</h3>
                <p className="text-gray-600">Your satisfaction is our top priority</p>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">Quality Products</h3>
                <p className="text-gray-600">Carefully selected products that meet our high standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey - Mobile First Timeline */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-neutral-50 to-primary-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-r from-primary-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-56 sm:h-56 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-indigo-200/25 to-purple-200/25 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-4 bg-white/60 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg border border-white/20">
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
              <span className="text-primary-600 font-bold text-xs sm:text-sm uppercase tracking-wider">Our Story</span>
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-4 sm:mb-6 leading-tight">
              Our Journey
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
              From a vision in May 2021 to becoming your trusted shopping destination
            </p>
          </div>

          {/* Mobile-First Timeline */}
          <div className="relative">
            {/* Timeline Line - Hidden on mobile, visible on larger screens */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 via-primary-400 to-primary-600"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  {/* Mobile Layout (Single Column) */}
                  <div className="lg:hidden">
                    <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2 overflow-hidden">
                      {/* Timeline Dot */}
                      <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full shadow-lg mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="text-center">
                        <div className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-primary-600 mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-500">
                          {milestone.year}
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                          {milestone.event}
                        </p>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-primary-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
                      <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500" style={{ animationDelay: '0.3s' }}></div>
                    </div>
                  </div>

                  {/* Desktop Layout (Alternating Sides) */}
                  <div className="hidden lg:flex items-center">
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-4 overflow-hidden">
                        {/* Timeline Dot */}
                        <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full shadow-lg mb-6 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} group-hover:scale-110 transition-transform duration-300`}>
                          <Calendar className="w-8 h-8 text-white" />
                        </div>
                        
                        {/* Content */}
                        <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                          <div className="font-heading font-bold text-3xl lg:text-4xl text-primary-600 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-500">
                            {milestone.year}
                          </div>
                          <p className="text-gray-700 text-lg lg:text-xl leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                            {milestone.event}
                          </p>
                        </div>

                        {/* Decorative Elements */}
                        <div className={`absolute top-6 ${index % 2 === 0 ? 'right-6' : 'left-6'} w-3 h-3 bg-gradient-to-r from-primary-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500`}></div>
                        <div className={`absolute bottom-6 ${index % 2 === 0 ? 'left-6' : 'right-6'} w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500`} style={{ animationDelay: '0.3s' }}></div>
                      </div>
                    </div>

                    {/* Center Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full border-4 border-white shadow-xl group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline End Cap */}
            <div className="hidden lg:flex justify-center mt-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white animate-pulse" />
              </div>
            </div>
          </div>

          {/* Journey Summary */}
          <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/30 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full animate-pulse"></div>
                <span className="text-primary-600 font-semibold text-sm sm:text-base">Our Commitment</span>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-neutral-900 mb-4">
                Continuing to Serve Our Community
              </h3>
              
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                As we continue our journey, we remain committed to providing the highest quality products, 
                exceptional customer service, and innovative solutions to meet your evolving needs.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm sm:text-base font-medium text-gray-700">Quality Products</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm sm:text-base font-medium text-gray-700">Fast Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm sm:text-base font-medium text-gray-700">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Mobile First */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-r from-primary-100/30 to-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 sm:w-56 sm:h-56 bg-gradient-to-r from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-4 bg-primary-50/60 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg border border-primary-100/20">
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
              <span className="text-primary-600 font-bold text-xs sm:text-sm uppercase tracking-wider">Core Values</span>
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-4 sm:mb-6 leading-tight">
              Our Values
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do
            </p>
          </div>

          {/* Values Grid - Mobile First */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:-translate-y-2 overflow-hidden">
                  {/* Icon Container */}
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-100 to-primary-200 text-primary-600 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-primary-500/25">
                    {value.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-heading font-semibold text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 text-neutral-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-500">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-primary-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500" style={{ animationDelay: '0.3s' }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Values Summary */}
          <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-primary-100/30 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full animate-pulse"></div>
                <span className="text-primary-600 font-semibold text-sm sm:text-base">Our Promise</span>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-neutral-900 mb-4">
                Building Trust Through Excellence
              </h3>
              
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                These values are not just words to us - they're the foundation of every decision we make 
                and every interaction we have with our customers.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-sm sm:text-base font-medium text-gray-700">Excellence</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-red-500 fill-current" />
                  <span className="text-sm sm:text-base font-medium text-gray-700">Care</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-sm sm:text-base font-medium text-gray-700">Trust</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Information - Mobile First */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-neutral-50 via-primary-50 to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-primary-200/20 rounded-full -translate-y-24 sm:-translate-y-48 translate-x-24 sm:translate-x-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-blue-200/20 rounded-full translate-y-24 sm:translate-y-48 -translate-x-24 sm:-translate-x-48 blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl sm:rounded-3xl mb-6">
              <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600" />
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-4 sm:mb-6 leading-tight">
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
              We're here to help you with all your shopping needs. Reach out to us through any of these channels.
            </p>
          </div>
          
          {/* Contact Cards - Mobile First Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2 overflow-hidden">
                {/* Icon Container */}
                <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  {info.icon}
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="font-heading font-semibold text-lg sm:text-xl mb-3 text-neutral-900">{info.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">{info.description}</p>
                  
                  {info.link ? (
                    <a 
                      href={info.link} 
                      className="block text-center text-base sm:text-lg text-primary-600 hover:text-primary-700 font-semibold transition-colors mb-4"
                      target={info.whatsapp ? "_blank" : undefined}
                      rel={info.whatsapp ? "noopener noreferrer" : undefined}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-center text-base sm:text-lg text-gray-700 font-semibold mb-4">{info.value}</p>
                  )}
                  
                  {info.whatsapp && (
                    <div className="flex justify-center">
                      <span className="inline-flex items-center px-3 sm:px-4 py-2 bg-green-100 text-green-800 text-xs sm:text-sm font-medium rounded-full border border-green-200">
                        <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        WhatsApp Available
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent group-hover:border-primary-200 transition-colors duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
          
          {/* Additional Contact CTA - Mobile Optimized */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 max-w-2xl sm:max-w-3xl mx-auto">
              <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-neutral-900 mb-4">
                Need Immediate Assistance?
              </h3>
              <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                Our customer support team is available during business hours to help you with any questions or concerns.
              </p>
              
              {/* Store Location */}
              <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">📍 Store Location</h4>
                <p className="text-gray-600 text-xs sm:text-sm mb-2">{locationInfo.address}</p>
                <a 
                  href={locationInfo.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 text-xs sm:text-sm font-medium"
                >
                  View on Google Maps →
                </a>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="tel:+923317590842"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/923317590842"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Mobile First */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-r from-primary-100/30 to-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-56 sm:h-56 bg-gradient-to-r from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-4 bg-primary-50/60 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg border border-primary-100/20">
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
              <span className="text-primary-600 font-bold text-xs sm:text-sm uppercase tracking-wider">Our Team</span>
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-4 sm:mb-6 leading-tight">
              Meet Our Team
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
              The dedicated people who make H.A Super Store special
            </p>
          </div>

          {/* Team Grid - Mobile First */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-gray-100 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-primary-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500" style={{ animationDelay: '0.3s' }}></div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-heading font-semibold text-lg sm:text-xl lg:text-2xl mb-2 text-neutral-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-500">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-3 sm:mb-4 text-sm sm:text-base">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Team Summary */}
          <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-primary-100/30 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full animate-pulse"></div>
                <span className="text-primary-600 font-semibold text-sm sm:text-base">Our Commitment</span>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-neutral-900 mb-4">
                Dedicated to Your Satisfaction
              </h3>
              
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Our team is committed to providing you with the best shopping experience, 
                ensuring quality products and exceptional service every time.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary-500" />
                  <span className="text-sm sm:text-base font-medium text-gray-700">Expert Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm sm:text-base font-medium text-gray-700">Quality Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="text-sm sm:text-base font-medium text-gray-700">Customer Focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Mobile First */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-white/5 rounded-full -translate-y-24 sm:-translate-y-48 translate-x-24 sm:translate-x-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-white/5 rounded-full translate-y-24 sm:translate-y-48 -translate-x-24 sm:-translate-x-48 blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-4 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg border border-white/20">
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/60 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
              <span className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider">Our Impact</span>
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/60 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight">
              Our Impact
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-primary-100 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
              Numbers that tell our story of growth and customer satisfaction
            </p>
          </div>

          {/* Stats Grid - Mobile First */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 group hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">10,000+</div>
              <div className="text-primary-100 text-sm sm:text-base lg:text-lg">Happy Customers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 group hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">5,000+</div>
              <div className="text-primary-100 text-sm sm:text-base lg:text-lg">Products Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 group hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">1 Hour</div>
              <div className="text-primary-100 text-sm sm:text-base lg:text-lg">Delivery Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 group hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">99%</div>
              <div className="text-primary-100 text-sm sm:text-base lg:text-lg">Customer Satisfaction</div>
            </div>
          </div>

          {/* Stats Summary */}
          <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/60 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold text-sm sm:text-base">Our Promise</span>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl mb-4">
                Growing Stronger Every Day
              </h3>
              
              <p className="text-primary-100 text-base sm:text-lg leading-relaxed mb-6">
                These numbers represent our commitment to excellence and the trust our customers place in us. 
                We're proud of our growth and excited about our future.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-300 fill-current" />
                  <span className="text-sm sm:text-base font-medium text-primary-100">Excellence</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-red-300 fill-current" />
                  <span className="text-sm sm:text-base font-medium text-primary-100">Care</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-300" />
                  <span className="text-sm sm:text-base font-medium text-primary-100">Trust</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
            <CheckCircle className="w-8 h-8 text-primary-600" />
          </div>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-neutral-900 mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Visit our store today and discover why we're the trusted choice for all your shopping needs. 
            Quality products, exceptional service, and competitive prices await you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/categories"
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Browse Products
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-xl hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;