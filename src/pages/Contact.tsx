import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

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
      answer: "We're open Monday through Saturday from 8:00 AM to 10:00 PM, and Sunday from 9:00 AM to 8:00 PM. We also offer extended hours during holidays and special events."
    },
    {
      question: "Do you offer home delivery?",
      answer: "Yes! We offer free delivery on orders over $75 within a 10-mile radius. Delivery fees apply for smaller orders or longer distances. You can also schedule your delivery for a convenient time."
    },
    {
      question: "Can I order products via WhatsApp?",
      answer: "Absolutely! You can contact us on WhatsApp for product inquiries, pricing, and orders. We respond quickly and can help you find exactly what you need."
    },
    {
      question: "Do you accept returns?",
      answer: "We stand behind our products 100%. If you're not satisfied with any purchase, bring it back with your receipt within 30 days for a full refund or exchange."
    },
    {
      question: "Do you carry electronics and gadgets?",
      answer: "Yes! We have a comprehensive electronics section with the latest gadgets, accessories, and tech products. Our staff can help you find the perfect device for your needs."
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
    const message = "Hello! I have a question about your products and services. Can you help me?";
    const phoneNumber = "1234567890"; // Replace with actual WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-1">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-100">
              We'd love to hear from you. Contact us for any questions, product inquiries, or feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Store Location</h3>
                    <p className="text-gray-600">
                      123 Main Street<br />
                      Downtown District<br />
                      City, State 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone Number</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-sm text-gray-500 mt-1">Available during store hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email Address</h3>
                    <p className="text-gray-600">info@hageneralstore.com</p>
                    <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Store Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Saturday: 8:00 AM - 10:00 PM</p>
                      <p>Sunday: 9:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Contact Button */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">WhatsApp Support</h3>
                    <p className="text-gray-600 mb-3">Get instant help and product information</p>
                    <button
                      onClick={handleWhatsAppContact}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat on WhatsApp
                    </button>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-gray-200 h-64 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
                  alt="Store location map"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-heading font-bold text-3xl text-neutral-900 mb-8">
                Send us a Message
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="text-sm">We'll get back to you within 24 hours.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our products and services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Visit our store or contact us today to discover our amazing selection of products
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Browse Products
            </a>
            <button
              onClick={handleWhatsAppContact}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-600 transition-colors flex items-center justify-center"
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