import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Star, 
  ShoppingBag, 
  Shield, 
  Heart, 
  Award, 
  Truck, 
  ArrowRight
} from 'lucide-react';
import { categories, featuredProducts } from '../data/products';

const Homepage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [stats, setStats] = useState({
    customers: 0,
    products: 0,
    years: 0,
    satisfaction: 0,
  });

  const testimonials = [
    {
      name: "Fatima Zahra",
      role: "Home Chef",
      rating: 5,
      comment: "The quality of groceries is exceptional! Fresh produce and competitive prices make this my go-to store. Highly recommended!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Muhammad Ali",
      role: "Restaurant Owner",
      rating: 5,
      comment: "Amazing variety and excellent customer service. The delivery is always on time and products are fresh. Best grocery store!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Aisha Bibi",
      role: "Mother of Four",
      rating: 5,
      comment: "Love the convenience and quality. Everything I need for my family in one place with great prices. Thank you!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const features = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same-day delivery within city limits",
      color: "from-blue-600 via-indigo-600 to-purple-600"
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "100% quality assurance on all products",
      color: "from-blue-600 via-indigo-600 to-purple-600"
    },
    {
      icon: Award,
      title: "Best Prices",
      description: "Competitive prices with regular discounts",
      color: "from-blue-600 via-indigo-600 to-purple-600"
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "24/7 customer support and satisfaction",
      color: "from-blue-600 via-indigo-600 to-purple-600"
    }
  ];

  const heroSlides = [
    {
      title: "Welcome to HA Super Store",
      subtitle: "Your one-stop destination for groceries, household essentials, and daily necessities - quality products at competitive prices",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1920&h=1080&fit=crop",
      cta: "Shop Now",
      gradient: "from-slate-900/80 via-blue-900/70 to-indigo-900/80"
    },
    {
      title: "Quality Products at Best Prices",
      subtitle: "Discover thousands of carefully selected products with competitive pricing and unmatched quality at HA Super Store",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop",
      cta: "Explore Products",
      gradient: "from-slate-900/80 via-blue-900/70 to-indigo-900/80"
    },
    {
      title: "Your Trusted General Store",
      subtitle: "25+ years of serving our community with reliability, quality, and exceptional customer service at HA Super Store",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1920&h=1080&fit=crop",
      cta: "Learn More",
      gradient: "from-slate-900/80 via-blue-900/70 to-indigo-900/80"
    }
  ];

  // Auto-slide hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Animate stats counter
  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        customers: 15000,
        products: 8000,
        years: 25,
        satisfaction: 99,
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-1 bg-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
            </div>
            <div className="relative h-full flex items-center justify-center text-center text-white">
              <div className="max-w-5xl px-4 sm:px-6 lg:px-8">
                <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-7xl mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl mb-10 text-white/95 max-w-3xl mx-auto leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    to="/products"
                    className="group inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-50"
                  >
                    {slide.cta}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-2xl transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Hero Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-white/70 rotate-90" />
        </div>
      </section>

      {/* Quick Stats Banner */}
      <section className="py-8 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">{stats.customers.toLocaleString()}+</div>
              <div className="text-blue-200 text-sm">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">{stats.products.toLocaleString()}+</div>
              <div className="text-blue-200 text-sm">Products</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">{stats.years}+</div>
              <div className="text-blue-200 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">{stats.satisfaction}%</div>
              <div className="text-blue-200 text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
              Why Choose <span className="text-primary-600">HA Super Store</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're committed to providing you with the best shopping experience with quality, convenience, and care at HA Super Store
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${feature.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300`}>
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
              Shop by <span className="text-primary-600">Category</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find everything you need in our comprehensive categories, carefully organized for your convenience at HA Super Store
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                to="/products"
                className="group block bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className="absolute top-4 right-4">
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="font-heading font-bold text-2xl mb-2">{category.name}</h3>
                    <p className="text-lg font-semibold mb-1">{category.count}</p>
                    <p className="text-sm opacity-90">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
              Featured <span className="text-primary-600">Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our most popular and trending grocery items, carefully selected for quality and value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100 flex flex-col h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg">
                      {product.badge}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      FEATURED
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors duration-300 min-h-[3rem]">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2 font-semibold">{product.rating}</span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Link
                      to="/products"
                      className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center text-sm hover:shadow-lg transform hover:scale-105"
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
              What Our <span className="text-primary-600">Customers</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it - hear from our satisfied customers who trust HA Super Store for their daily needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 border-4 border-white shadow-lg"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-lg text-gray-900">{testimonial.name}</h4>
                    <p className="text-primary-600 font-semibold">{testimonial.role}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic text-lg leading-relaxed">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-6">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust HA Super Store for their daily needs. Quality products, competitive prices, and exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/products"
              className="group inline-flex items-center px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-50"
            >
              Start Shopping
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-2xl transition-all duration-300 hover:bg-white hover:text-slate-900 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;