import React from 'react';
import { FileText, Scale, Users, ShoppingBag, Truck, CreditCard, Shield, ArrowRight, Sparkles } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';

const TermsOfService: React.FC = () => {
  // Use optimized scroll-to-top hook
  useScrollToTop();

  const sections = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using H.A Super Store services, you agree to these terms",
        "These terms apply to all customers, visitors, and users of our services",
        "We reserve the right to modify these terms at any time",
        "Continued use of our services constitutes acceptance of updated terms",
        "If you disagree with any terms, please discontinue use of our services"
      ]
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Products and Services",
      content: [
        "We offer a wide range of grocery and household products",
        "Product availability is subject to stock and may vary",
        "Prices are subject to change without prior notice",
        "We strive to provide accurate product descriptions and images",
        "Product quality is guaranteed as per our return policy"
      ]
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Delivery and Shipping",
      content: [
        "We offer 1-hour delivery service in hometown and Gojra city",
        "Delivery charges are Rs. 200 per order",
        "Delivery times may vary based on location and availability",
        "We are not responsible for delays due to weather or circumstances beyond our control",
        "Customers must provide accurate delivery addresses and contact information"
      ]
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Payment and Pricing",
      content: [
        "We accept cash on delivery and various payment methods",
        "All prices are in Pakistani Rupees (PKR)",
        "Payment is due at the time of order or delivery",
        "We reserve the right to refuse service to anyone",
        "Prices may vary between in-store and delivery orders"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Returns and Refunds",
      content: [
        "Returns accepted within 30 days of purchase with receipt",
        "Products must be unopened and in original condition",
        "No returns accepted for perishable items",
        "Refunds will be processed according to original payment method",
        "Damaged or defective items will be replaced or refunded"
      ]
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Limitation of Liability",
      content: [
        "Our liability is limited to the purchase price of products",
        "We are not liable for indirect or consequential damages",
        "We do not guarantee uninterrupted service availability",
        "Customers are responsible for proper product storage and use",
        "Force majeure events may affect our ability to fulfill obligations"
      ]
    }
  ];

  const contactInfo = {
    email: "raza7590842@gmail.com",
    phone: "+92 331 7590842",
    address: "H.A Super Store, Chak No 297 JB, Gojra, Pakistan"
  };

  return (
    <div className="pt-1">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48 blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              <FileText className="w-4 h-4 mr-2" />
              Terms & Conditions
            </div>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
              Terms of Service
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-3xl">
              Please read these terms carefully. By using our services, you agree to be bound by these terms and conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl mb-6">
              <Scale className="w-10 h-10 text-primary-600" />
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
              Our Terms of Service
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              These terms and conditions govern your use of H.A Super Store services, including our website, 
              in-store purchases, and delivery services. By using our services, you accept these terms in full.
            </p>
          </div>

          {/* Last Updated */}
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-3xl p-8 mb-16 border border-primary-100">
            <div className="flex items-center justify-center space-x-4">
              <FileText className="w-8 h-8 text-primary-600" />
              <div className="text-center">
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Last Updated</h3>
                <p className="text-gray-600">January 2024</p>
              </div>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 overflow-hidden">
                  {/* Section Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-gray-900 mb-2">{section.title}</h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-3 group/item">
                        <div className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2 group-hover/item:scale-150 transition-transform duration-300"></div>
                        <p className="text-gray-700 leading-relaxed text-lg">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100">
            <h3 className="font-heading font-bold text-2xl text-gray-900 mb-6 text-center">Additional Terms</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg text-gray-900 mb-4">Intellectual Property</h4>
                <p className="text-gray-600 leading-relaxed">
                  All content on our website and marketing materials, including text, graphics, logos, 
                  and images, are the property of H.A Super Store and are protected by copyright laws.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-900 mb-4">Governing Law</h4>
                <p className="text-gray-600 leading-relaxed">
                  These terms are governed by the laws of Pakistan. Any disputes arising from these terms 
                  or our services will be resolved in the courts of Gojra, Pakistan.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="relative">
              <h3 className="font-heading font-bold text-2xl mb-6 text-center">Questions About Terms?</h3>
              <p className="text-primary-100 mb-8 text-center max-w-2xl mx-auto">
                If you have any questions about these Terms of Service or need clarification on any points, 
                please don't hesitate to contact us.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <a href={`mailto:${contactInfo.email}`} className="text-primary-100 hover:text-white transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <a href={`tel:${contactInfo.phone}`} className="text-primary-100 hover:text-white transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Address</h4>
                  <p className="text-primary-100">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
            <Sparkles className="w-8 h-8 text-primary-600" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
            Ready to Shop?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Now that you understand our terms, we invite you to explore our products and experience 
            the quality service that H.A Super Store provides.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/products"
              className="group inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Browse Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/"
              className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 font-bold rounded-2xl hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService; 