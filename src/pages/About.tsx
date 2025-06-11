import React from 'react';
import { Users, Award, Heart, Leaf, Clock, MapPin, Store, Zap, Shield } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Hassan Ali",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
      description: "With over 20 years in retail, Hassan founded H.A General Store with a vision to create a one-stop shop for all customer needs."
    },
    {
      name: "Sarah Johnson",
      role: "Store Manager",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
      description: "Sarah ensures our daily operations run smoothly and maintains our high standards of customer service and product quality."
    },
    {
      name: "Mike Chen",
      role: "Electronics Specialist",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
      description: "Mike is our tech expert, helping customers find the perfect electronics and gadgets for their needs."
    },
    {
      name: "Emily Davis",
      role: "Customer Relations",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
      description: "Emily is dedicated to ensuring every customer has an exceptional shopping experience with personalized service."
    }
  ];

  const milestones = [
    { year: "1999", event: "H.A General Store founded with a small convenience store" },
    { year: "2005", event: "Expanded to our current location with full general store inventory" },
    { year: "2010", event: "Introduced electronics and home goods sections" },
    { year: "2015", event: "Launched home delivery and WhatsApp ordering service" },
    { year: "2020", event: "Became the largest general store in the region" },
    { year: "2024", event: "Serving over 15,000 happy customers with 8,000+ products" }
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
      description: "Quick response times, fast delivery, and efficient service to make your shopping experience seamless."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Support",
      description: "Our knowledgeable staff is here to help you find exactly what you need with expert advice."
    }
  ];

  return (
    <div className="pt-1">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              Our Story
            </h1>
            <p className="text-xl sm:text-2xl text-primary-100 leading-relaxed">
              Serving our community with quality products and exceptional service since 1999. 
              We're your one-stop destination for everything you need.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              At H.A General Store, our mission is to provide our community with a comprehensive 
              selection of quality products at competitive prices. We believe that everyone deserves 
              access to reliable products and excellent service, and we're committed to being your 
              trusted partner for all your shopping needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <Store className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">One-Stop Shop</h3>
                <p className="text-gray-600">Everything you need in one convenient location</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <Heart className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">Customer Focused</h3>
                <p className="text-gray-600">Your satisfaction is our top priority</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <Award className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">Quality Products</h3>
                <p className="text-gray-600">Carefully selected products that meet our high standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From a small convenience store to your trusted general store
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="font-heading font-bold text-2xl text-primary-500 mb-2">
                      {milestone.year}
                    </div>
                    <p className="text-gray-600">{milestone.event}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-md"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-500 rounded-full mb-4 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  {value.icon}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The dedicated people who make H.A General Store special
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-primary-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15,000+</div>
              <div className="text-primary-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">8,000+</div>
              <div className="text-primary-100">Products Available</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
              <div className="text-primary-100">Years of Service</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">99%</div>
              <div className="text-primary-100">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-900 mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Visit our store today and discover why we're the trusted choice for all your shopping needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors"
            >
              Browse Products
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border-2 border-primary-500 text-primary-500 font-semibold rounded-xl hover:bg-primary-500 hover:text-white transition-colors"
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