import React, { useState, useMemo } from 'react';
import { Search, Grid, List, Star, MessageCircle, Eye, X } from 'lucide-react';
import { products, getCategories } from '../data/products';

const ProductCatalog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [showQuickView, setShowQuickView] = useState<number | null>(null);
  const itemsPerPage = 12;

  const categories = ['All', ...getCategories()];

  const filteredProducts = useMemo(() => {
    const filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleWhatsAppContact = (product: typeof products[0]) => {
    const message = `Hello! I'm interested in the ${product.name}. Can you tell me more about pricing in PKR and availability?`;
    const phoneNumber = "1234567890"; // Replace with actual WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const QuickViewModal = ({ product }: { product: typeof products[0] }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-bold text-2xl text-gray-900 mb-2">{product.name}</h3>
              <div className="flex items-center space-x-3">
                <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-sm px-3 py-1 rounded-full font-semibold">
                  {product.badge}
                </span>
              </div>
            </div>
            <button
              onClick={() => setShowQuickView(null)}
              className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
                </div>
                <span className="text-sm text-gray-600 ml-3 font-semibold">{product.rating} ({product.reviews} reviews)</span>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Product Description</h4>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => handleWhatsAppContact(product)}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center text-sm shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact for Pricing & Order
                </button>
                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    💬 Contact us for pricing and bulk orders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-1 bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl mb-4">Grocery Store</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Your one-stop shop for all grocery essentials - from fresh produce to household items
          </p>
        </div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search groceries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
                {categories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
              ))}
            </select>

                  {/* Sort */}
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="name">Sort by Name</option>
                      <option value="rating">Sort by Rating</option>
                    </select>
                  
                  {/* View Mode */}
                  <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                className={`p-3 ${viewMode === 'grid' ? 'bg-primary-500 text-white' : 'bg-white text-gray-600'}`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                className={`p-3 ${viewMode === 'list' ? 'bg-primary-500 text-white' : 'bg-white text-gray-600'}`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {paginatedProducts.length} of {filteredProducts.length} products
          </p>
            </div>

            {/* Products Grid/List */}
            {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {paginatedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100 flex flex-col h-full">
                <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                  <div className="absolute top-3 right-3">
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg">
                        {product.badge}
                      </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <button
                          onClick={() => setShowQuickView(product.id)}
                      className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-lg"
                        >
                      <Eye className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                            i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      <span className="text-xs text-gray-600 ml-1">({product.reviews})</span>
                        </div>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 min-h-[3rem]">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {product.description}
                  </p>
                  <div className="mt-auto">
                    <button
                      onClick={() => handleWhatsAppContact(product)}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center text-sm hover:shadow-lg transform hover:scale-105"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contact via WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
              </div>
            ) : (
          <div className="space-y-4">
                {paginatedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
                <div className="flex items-center space-x-6">
                      <img
                        src={product.image}
                        alt={product.name}
                    className="w-24 h-24 object-cover rounded-xl shadow-md flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                            {product.badge}
                          </span>
                        </div>
                        <h3 className="font-bold text-xl text-gray-900 mb-2 truncate">{product.name}</h3>
                        <div className="flex items-center mb-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                  i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                          </div>
                          <span className="text-sm text-gray-600 ml-2">{product.rating} ({product.reviews} reviews)</span>
                        </div>
                        <p className="text-gray-600 line-clamp-2">{product.description}</p>
                          </div>
                          <div className="text-right flex-shrink-0 ml-4">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setShowQuickView(product.id)}
                            className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:border-blue-300 hover:text-blue-600 text-sm font-medium whitespace-nowrap"
                          >
                            Quick View
                          </button>
                          <button
                            onClick={() => handleWhatsAppContact(product)}
                            className="px-3 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg transition-all duration-300 flex items-center text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105 whitespace-nowrap"
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            WhatsApp
                            </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Previous
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === i + 1
                        ? 'bg-primary-500 text-white'
                        : 'border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
          </div>
        )}
        </div>

        {/* Quick View Modal */}
        {showQuickView && (
        <QuickViewModal product={products.find(p => p.id === showQuickView)!} />
        )}
    </div>
  );
};

export default ProductCatalog;