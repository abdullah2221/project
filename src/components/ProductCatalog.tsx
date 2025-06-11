import React, { useState, useEffect } from 'react';
import { Star, ShoppingCart, Heart, PackageX, AlertCircle } from 'lucide-react';
import { products, getProductsByCategory, getAvailableProducts } from '../data/products';

const ProductCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('name');
  const [showOnlyAvailable, setShowOnlyAvailable] = useState<boolean>(false);
  const [displayedProducts, setDisplayedProducts] = useState(products);

  // Get unique categories for filter
  const categories = ['All', ...Array.from(new Set(products.map(product => product.category)))];

  useEffect(() => {
    let filteredProducts = products;

    // Filter by category
    if (selectedCategory !== 'All') {
      filteredProducts = getProductsByCategory(selectedCategory);
    }

    // Filter by availability
    if (showOnlyAvailable) {
      filteredProducts = filteredProducts.filter(product => product.available);
    }

    // Sort products
    filteredProducts.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          const priceA = parseFloat(a.price?.replace(/[^\d.]/g, '') || '0');
          const priceB = parseFloat(b.price?.replace(/[^\d.]/g, '') || '0');
          return priceA - priceB;
        default:
          return 0;
      }
    });

    setDisplayedProducts(filteredProducts);
  }, [selectedCategory, sortBy, showOnlyAvailable]);

  const handleAddToCart = (productId: number) => {
    // Add to cart functionality would go here
    console.log(`Added product ${productId} to cart`);
  };

  const handleAddToWishlist = (productId: number) => {
    // Add to wishlist functionality would go here
    console.log(`Added product ${productId} to wishlist`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Catalog</h1>
        <p className="text-gray-600">Discover our wide range of quality products</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="name">Name</option>
              <option value="rating">Rating</option>
              <option value="price">Price</option>
            </select>
          </div>

          {/* Availability Filter */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="available"
              checked={showOnlyAvailable}
              onChange={(e) => setShowOnlyAvailable(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="available" className="ml-2 block text-sm text-gray-900">
              Show only available
            </label>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-end">
            <span className="text-sm text-gray-600">
              {displayedProducts.length} products found
            </span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300 overflow-hidden group"
          >
            {/* Product Image */}
            <div className="relative h-48 bg-gray-100 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-2 left-2">
                  <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Wishlist Button */}
              <button
                onClick={() => handleAddToWishlist(product.id)}
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200"
              >
                <Heart className="h-4 w-4 text-gray-600" />
              </button>

              {/* Availability Overlay */}
              {!product.available && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <PackageX className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">Out of Stock</p>
                  </div>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                {product.name}
              </h3>
              
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                {product.description}
              </p>

              {/* Rating */}
              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-1">
                  ({product.reviews})
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  {product.price && (
                    <span className="text-lg font-bold text-gray-900">
                      {product.price}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through ml-2">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => handleAddToCart(product.id)}
                  disabled={!product.available}
                  className={`flex-1 flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    product.available
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.available ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>

              {/* Availability Status */}
              {!product.available && (
                <div className="mt-3 flex items-center text-orange-600 text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  Currently unavailable
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {displayedProducts.length === 0 && (
        <div className="text-center py-12">
          <PackageX className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600">
            Try adjusting your filters or search criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductCatalog; 