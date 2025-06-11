import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp, MessageCircle, ArrowRight, Sparkles, CheckCircle, Star, Truck } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are your store hours?",
      answer: "We're open Monday through Thursday and Saturday-Sunday from 6:00 AM to 10:00 AM and 2:00 PM to 10:00 PM. On Fridays, we're open from 6:00 AM to 10:00 PM with extended hours. We also offer special hours during holidays and special events."
    },
    {
      question: "Do you offer home delivery?",
      answer: "Yes! We currently offer home delivery in our hometown and in the city of Gojra. Delivery time is within 1 hour, and delivery charges are Rs. 200. We're planning to expand our delivery service to more areas in the future as part of our mission to serve a broader community."
    },
    {
      question: "Can I order products via WhatsApp?",
      answer: "Absolutely! You can contact us on WhatsApp for product inquiries, pricing, and orders. We respond quickly and can help you find exactly what you need."
    },
    {
      question: "Do you accept returns?",
      answer: "Yes, we accept returns with no damage and the product must be unopened. Please bring the product back with your receipt within 30 days for a full refund or exchange."
    },
    {
      question: "Can I special order items?",
      answer: "Yes, we can special order most items for you. Just speak with any team member, and we'll do our best to get what you need within 3-7 business days."
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes! We offer special pricing for bulk purchases and business customers. Contact us for more information about our bulk pricing programs."
    },
    {
      question: "How can I apply for a job?",
      answer: "We're always looking for great team members! You can apply in person at our store, call us, or send your resume to careers@hageneralstore.com."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleWhatsAppContact = () => {
    const message = "Hello! I have a question about your products and services at H.A Super Store. Can you help me?";
    const phoneNumber = "923317590842"; // H.A Super Store WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const contactMethods = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Store",
      value: "Chak No 297 JB, Gojra, Pakistan",
      link: "https://www.google.com/maps/place/H.A+Super+Store/data=!4m2!3m1!1s0x0:0x358b93f9d2b23705?sa=X&ved=1t:2428&ictx=111",
      description: "Come visit us in person",
      color: "from-orange-500 to-orange-600",
      featured: false
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      value: "+92 331 7590842",
      link: "tel:+923317590842",
      description: "Speak with our team directly",
      color: "from-blue-500 to-blue-600",
      featured: false
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      value: "raza7590842@gmail.com",
      link: "mailto:raza7590842@gmail.com",
      description: "Send us a detailed message",
      color: "from-purple-500 to-purple-600",
      featured: false
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "Chat with us instantly",
      link: "https://wa.me/923317590842",
      description: "Quick responses guaranteed",
      color: "from-green-500 to-green-600",
      featured: true
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Home Delivery",
      value: "Rs. 200 within 1 hour",
      link: "#",
      description: "Available in hometown & Gojra",
      color: "from-cyan-500 to-cyan-600",
      featured: false
    }
  ];

  return (
    <div className="pt-1">
      {/* Enhanced Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48 blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-3xl">
              We'd love to hear from you. Contact us for any questions, product inquiries, or feedback. Our team is here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/10 rounded-full -translate-y-48 translate-x-48 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/10 rounded-full translate-y-48 -translate-x-48 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-500/5 to-blue-500/5 rounded-full blur-3xl animate-spin-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl mb-8 group">
              <MessageCircle className="w-12 h-12 text-primary-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
              Multiple Ways to Reach Us
              </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the most convenient way to get in touch with our dedicated team. We're here to help you 24/7.
            </p>
          </div>
          
          {/* Modern Card Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className={`group ${method.featured ? 'lg:col-span-1 md:col-span-2 lg:col-span-1' : ''}`}>
                <div className={`relative rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-100 hover:-translate-y-4 overflow-hidden h-full ${
                  method.featured 
                    ? 'bg-gradient-to-br from-green-500 to-green-600 text-white' 
                    : 'bg-white'
                }`}>
                  {/* Gradient Background on Hover */}
                  {!method.featured && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                  )}
                  
                  {/* Animated Background for Featured */}
                  {method.featured && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                    </>
                  )}
                  
                  {/* Icon Container */}
                  <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl ${
                    method.featured 
                      ? 'bg-white/20 backdrop-blur-sm text-white' 
                      : `bg-gradient-to-r ${method.color} text-white`
                  }`}>
                    {method.icon}
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${
                      method.featured ? 'bg-white' : `bg-gradient-to-r ${method.color}`
                    }`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className={`font-heading font-bold text-xl mb-3 transition-colors ${
                      method.featured ? 'text-white' : 'text-gray-900 group-hover:text-gray-800'
                    }`}>
                      {method.title}
                    </h3>
                    <p className={`mb-4 text-sm leading-relaxed transition-colors ${
                      method.featured ? 'text-green-100' : 'text-gray-600 group-hover:text-gray-700'
                    }`}>
                      {method.description}
                    </p>
                    
                    {/* Contact Value */}
                    <div className="mb-4">
                      {method.link ? (
                        <a 
                          href={method.link}
                          target={method.link.includes('wa.me') || method.link.includes('maps') ? "_blank" : undefined}
                          rel={method.link.includes('wa.me') || method.link.includes('maps') ? "noopener noreferrer" : undefined}
                          className={`inline-flex items-center text-lg font-bold transition-all duration-300 group/link ${
                            method.featured 
                              ? 'bg-white text-green-600 px-6 py-3 rounded-xl hover:scale-105 hover:shadow-xl' 
                              : 'text-gray-900 hover:text-primary-600'
                          }`}
                        >
                          <span className={method.featured ? '' : 'group-hover/link:underline'}>{method.value}</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                        </a>
                      ) : (
                        <p className={`text-lg font-bold ${
                          method.featured ? 'text-white' : 'text-gray-900'
                        }`}>
                          {method.value}
                        </p>
                      )}
                </div>

                    {/* Special Badge for WhatsApp */}
                    {method.title === "WhatsApp" && (
                      <div className="inline-flex items-center px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/30">
                        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                        Instant Response
                      </div>
                    )}
                    
                    {/* Special Badge for Delivery */}
                    {method.title === "Home Delivery" && (
                      <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full border border-blue-200">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        Rs. 200 Only
                      </div>
                    )}
                  </div>
                  
                  {/* Hover Border Effect */}
                  <div className={`absolute inset-0 rounded-3xl border-2 border-transparent transition-colors duration-500 pointer-events-none ${
                    method.featured ? 'group-hover:border-white/30' : 'group-hover:border-primary-200'
                  }`}></div>
                  
                  {/* Floating Particles */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`w-2 h-2 rounded-full animate-ping ${
                      method.featured ? 'bg-white' : 'bg-primary-400'
                    }`}></div>
                  </div>
                  
                  {/* Status Badge for Featured */}
                  {method.featured && (
                    <div className="absolute top-6 right-6 flex items-center px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                      Live
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - Location and Delivery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Location Card */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border border-gray-100 overflow-hidden">
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Icon */}
              <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-lg">
                <MapPin className="w-8 h-8" />
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">Visit Our Store</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">Come visit us in person for the best shopping experience.</p>
                
                <div className="mb-4">
                  <p className="text-gray-900 font-semibold">H.A Super Store</p>
                  <p className="text-gray-600">Chak No 297 JB, Gojra, Pakistan</p>
                </div>

                <a 
                  href="https://www.google.com/maps/place/H.A+Super+Store/data=!4m2!3m1!1s0x0:0x358b93f9d2b23705?sa=X&ved=1t:2428&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors group/link"
                >
                  <span>View on Google Maps</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Delivery Card */}
            <div className="group relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/25 transition-all duration-700 hover:-translate-y-4 overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              
              {/* Icon */}
              <div className="relative flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Truck className="w-10 h-10 text-white" />
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="font-heading font-bold text-2xl text-white mb-3">Home Delivery</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">Fast and reliable delivery service to your doorstep.</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-blue-100">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>1-hour delivery time</span>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Available in hometown & Gojra</span>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Rs. 200 delivery charge</span>
                  </div>
                </div>

                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                  Fast & Reliable
                  </div>
                    </div>
                  </div>
                </div>

          {/* Additional Info Banner */}
          <div className="mt-20 bg-gradient-to-r from-primary-50 to-blue-50 rounded-3xl p-8 border border-primary-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-blue-500/5"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200/20 rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="relative text-center">
              <h3 className="font-heading font-bold text-3xl text-gray-900 mb-4">
                Need Immediate Assistance?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Our customer support team is available during business hours to provide you with the best possible service. 
                We guarantee quick responses and personalized assistance for all your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold">WhatsApp: Instant Response</span>
                  </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="font-semibold">Phone: Direct Support</span>
                  </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="font-semibold">Email: Detailed Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl mb-4">
                  <MessageCircle className="w-8 h-8 text-primary-600" />
                </div>
                <h2 className="font-heading font-bold text-3xl text-gray-900 mb-4">
                Send us a Message
              </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <div>
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                  <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                    placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white"
                    >
                      <option value="">Select a subject</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Order Status">Order Status</option>
                    <option value="Delivery Question">Delivery Question</option>
                    <option value="Return/Exchange">Return/Exchange</option>
                    <option value="Bulk Order">Bulk Order</option>
                    <option value="General Question">General Question</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Job Application">Job Application</option>
                    </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none bg-white"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Store Information */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="font-heading font-bold text-3xl text-gray-900 mb-6">
                  Store Information
                </h2>
                <p className="text-gray-600 text-lg">
                  Visit our store or contact us through any of these channels
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-900">Store Location</h3>
                      <p className="text-gray-600 mb-3">
                        H.A Super Store<br />
                        Chak No 297 JB<br />
                        Gojra, Pakistan
                      </p>
                      <a 
                        href="https://www.google.com/maps/place/H.A+Super+Store/data=!4m2!3m1!1s0x0:0x358b93f9d2b23705?sa=X&ved=1t:2428&ictx=111"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                      >
                        View on Google Maps
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-900">Phone & WhatsApp</h3>
                      <p className="text-gray-600 mb-3">+92 331 7590842</p>
                      <p className="text-sm text-gray-500">Available during store hours</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-900">Email Address</h3>
                      <p className="text-gray-600 mb-3">raza7590842@gmail.com</p>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-900">Store Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p className="text-sm">Monday - Thursday: 6:00 AM - 10:00 AM, 2:00 PM - 10:00 PM</p>
                        <p className="text-sm font-medium text-orange-600">Friday: 6:00 AM - 10:00 PM (Extended Hours)</p>
                        <p className="text-sm">Saturday - Sunday: 6:00 AM - 10:00 AM, 2:00 PM - 10:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Contact Button */}
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">WhatsApp Support</h3>
                      <p className="text-green-100 mb-4">Get instant help and product information</p>
                      <button
                        onClick={handleWhatsAppContact}
                        className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-green-50 hover:scale-105 shadow-lg"
                      >
                        <MessageCircle className="w-4 h-4 mr-2 inline" />
                        Chat on WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl mb-6">
              <Star className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our products and services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-2xl"
                >
                  <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48 blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
            <Sparkles className="w-8 h-8 text-yellow-300" />
          </div>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Visit our store or contact us today to discover our amazing selection of products. 
            We're here to help you find exactly what you need.
            </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/products"
              className="group inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-50 shadow-lg"
            >
              Browse Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={handleWhatsAppContact}
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-2xl transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Chat
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;