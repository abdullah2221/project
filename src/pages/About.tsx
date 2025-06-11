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

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-neutral-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From a vision in May 2021 to becoming your trusted shopping destination
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 to-primary-400"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="font-heading font-bold text-3xl text-primary-600 mb-3">
                      {milestone.year}
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-neutral-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 text-primary-600 rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Information */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 via-primary-50 to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full translate-y-48 -translate-x-48 blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl mb-6">
              <MessageCircle className="w-10 h-10 text-primary-600" />
            </div>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-neutral-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to help you with all your shopping needs. Reach out to us through any of these channels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2">
                {/* Icon Container */}
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  {info.icon}
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="font-heading font-semibold text-xl mb-3 text-neutral-900">{info.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{info.description}</p>
                  
                  {info.link ? (
                    <a 
                      href={info.link} 
                      className="block text-center text-lg text-primary-600 hover:text-primary-700 font-semibold transition-colors mb-4"
                      target={info.whatsapp ? "_blank" : undefined}
                      rel={info.whatsapp ? "noopener noreferrer" : undefined}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-center text-lg text-gray-700 font-semibold mb-4">{info.value}</p>
                  )}
                  
                  {info.whatsapp && (
                    <div className="flex justify-center">
                      <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 text-sm font-medium rounded-full border border-green-200">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp Available
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary-200 transition-colors duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
          
          {/* Additional Contact CTA */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
              <h3 className="font-heading font-bold text-2xl text-neutral-900 mb-4">
                Need Immediate Assistance?
              </h3>
              <p className="text-gray-600 mb-6">
                Our customer support team is available during business hours to help you with any questions or concerns.
              </p>
              
              {/* Store Location */}
              <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">📍 Store Location</h4>
                <p className="text-gray-600 text-sm mb-2">{locationInfo.address}</p>
                <a 
                  href={locationInfo.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  View on Google Maps →
                </a>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+923317590842"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/923317590842"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-neutral-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The dedicated people who make H.A Super Store special
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="font-heading font-semibold text-xl mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48 blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Numbers that tell our story of growth and customer satisfaction
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">10,000+</div>
              <div className="text-primary-100 text-lg">Happy Customers</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">5,000+</div>
              <div className="text-primary-100 text-lg">Products Available</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">1 Hour</div>
              <div className="text-primary-100 text-lg">Delivery Time</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">99%</div>
              <div className="text-primary-100 text-lg">Customer Satisfaction</div>
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