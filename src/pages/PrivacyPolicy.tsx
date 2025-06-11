import React from 'react';
import { Shield, Lock, Eye, Database, Users, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Information We Collect",
      content: [
        "Personal information (name, email, phone number) when you contact us",
        "Store visit information and purchase history",
        "Communication records when you reach out for support",
        "Device information and usage analytics (anonymized)",
        "Location data when you use our delivery services"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: [
        "To provide and improve our products and services",
        "To process your orders and deliver products",
        "To communicate with you about your orders and inquiries",
        "To send you updates about our store and promotions",
        "To ensure the security and integrity of our services"
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information",
        "We may share information with delivery partners for order fulfillment",
        "We may disclose information if required by law",
        "We use trusted third-party services for payment processing",
        "Your information is protected by strict confidentiality agreements"
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Security",
      content: [
        "We implement industry-standard security measures",
        "Your personal information is encrypted during transmission",
        "We regularly update our security protocols",
        "Access to your data is restricted to authorized personnel only",
        "We conduct regular security audits and assessments"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Your Rights",
      content: [
        "You have the right to access your personal information",
        "You can request correction of inaccurate data",
        "You may request deletion of your personal information",
        "You can opt-out of marketing communications",
        "You have the right to data portability"
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
              <Shield className="w-4 h-4 mr-2" />
              Privacy & Security
            </div>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-3xl">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information at H.A Super Store.
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
              <Lock className="w-10 h-10 text-primary-600" />
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
              Protecting Your Privacy
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              At H.A Super Store, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data.
            </p>
          </div>

          {/* Last Updated */}
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-3xl p-8 mb-16 border border-primary-100">
            <div className="flex items-center justify-center space-x-4">
              <CheckCircle className="w-8 h-8 text-primary-600" />
              <div className="text-center">
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Last Updated</h3>
                <p className="text-gray-600">January 2024</p>
              </div>
            </div>
          </div>

          {/* Policy Sections */}
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
            <h3 className="font-heading font-bold text-2xl text-gray-900 mb-6 text-center">Additional Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg text-gray-900 mb-4">Cookies and Tracking</h4>
                <p className="text-gray-600 leading-relaxed">
                  We use cookies and similar technologies to enhance your browsing experience, 
                  analyze site traffic, and provide personalized content. You can control cookie 
                  settings through your browser preferences.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-900 mb-4">Children's Privacy</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our services are not intended for children under 13 years of age. We do not 
                  knowingly collect personal information from children under 13. If you believe 
                  we have collected such information, please contact us immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="relative">
              <h3 className="font-heading font-bold text-2xl mb-6 text-center">Contact Us About Privacy</h3>
              <p className="text-primary-100 mb-8 text-center max-w-2xl mx-auto">
                If you have any questions about this Privacy Policy or our data practices, 
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
            Trust in Our Commitment
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Your privacy and trust are our top priorities. We're committed to maintaining the highest 
            standards of data protection and security for all our customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="group inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Contact Us
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

export default PrivacyPolicy; 