export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  badge: string;
  description: string;
  available: boolean;
  price?: string;
  originalPrice?: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  description: string;
  icon: string;
  color: string;
  whatsappMessage: string;
  contactInfo: {
    phone: string;
    whatsapp: string;
    businessHours: string;
    location: string;
  };
  popularItems: string[];
  services: string[];
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Staple Foods",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&h=300&fit=crop",
    description: "Rice, lentils, pasta & cooking essentials",
    icon: "🌾",
    color: "from-amber-500 to-orange-600",
    whatsappMessage: "Hi! I'm interested in staple foods like rice, lentils, pasta, and cooking essentials. Can you tell me about your current stock and prices?",
    contactInfo: {
      phone: "+92 331 7590842",
      whatsapp: "+92 331 7590842",
      businessHours: "Mon-Thu, Sat-Sun: 6 AM-10 AM and 2 PM-10 PM; Friday: 6 AM-10 PM",
      location: "Chak No 297 JB, Gojra, Pakistan"
    },
    popularItems: [
      "Basmati Rice",
      "Red Lentils",
      "Spaghetti Pasta",
      "Olive Oil",
      "Mixed Spices",
      "Whole Wheat Flour"
    ],
    services: [
      "Bulk orders available",
      "Home delivery",
      "Quality guarantee",
      "Fresh stock daily"
    ]
  },
  {
    id: 2,
    name: "Beverages",
    image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500&h=300&fit=crop",
    description: "Water, juices, tea & soft drinks",
    icon: "🥤",
    color: "from-blue-500 to-cyan-600",
    whatsappMessage: "Hi! I need beverages including water, juices, tea, and soft drinks. What brands do you have in stock?",
    contactInfo: {
      phone: "+92 331 7590842",
      whatsapp: "+92 331 7590842",
      businessHours: "Mon-Thu, Sat-Sun: 6 AM-10 AM and 2 PM-10 PM; Friday: 6 AM-10 PM",
      location: "Chak No 297 JB, Gojra, Pakistan"
    },
    popularItems: [
      "Mineral Water",
      "Fresh Orange Juice",
      "Green Tea",
      "Cola Soft Drinks",
      "Energy Drinks",
      "Fresh Milk"
    ],
    services: [
      "Cold beverages available",
      "Bulk pack discounts",
      "Party supplies",
      "Regular delivery"
    ]
  },
  {
    id: 3,
    name: "Snacks & Namkeen",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=500&h=300&fit=crop",
    description: "Traditional snacks & packaged treats",
    icon: "🍿",
    color: "from-yellow-500 to-orange-500",
    whatsappMessage: "Hi! I'm interested in snacks and namkeen. Can you tell me about your available options and prices?",
    contactInfo: {
      phone: "+92 331 7590842",
      whatsapp: "+92 331 7590842",
      businessHours: "Mon-Thu, Sat-Sun: 6 AM-10 AM and 2 PM-10 PM; Friday: 6 AM-10 PM",
      location: "Chak No 297 JB, Gojra, Pakistan"
    },
    popularItems: [
      "Mixed Namkeen",
      "Potato Chips",
      "Roasted Peanuts",
      "Assorted Biscuits"
    ],
    services: [
      "Fresh snacks daily",
      "Party packs",
      "Special discounts",
      "Home delivery"
    ]
  },
  {
    id: 4,
    name: "Dairy & Eggs",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=500&h=300&fit=crop",
    description: "Milk, cheese, yogurt & eggs",
    icon: "🥛",
    color: "from-white to-gray-100",
    whatsappMessage: "Hi! I'm interested in dairy and eggs. Can you tell me about your available products and prices?",
    contactInfo: {
      phone: "+92 331 7590842",
      whatsapp: "+92 331 7590842",
      businessHours: "Mon-Thu, Sat-Sun: 6 AM-10 AM and 2 PM-10 PM; Friday: 6 AM-10 PM",
      location: "Chak No 297 JB, Gojra, Pakistan"
    },
    popularItems: [
      "Fresh Milk",
      "Cheddar Cheese",
      "Fresh Eggs",
      "Natural Yogurt"
    ],
    services: [
      "Daily fresh stock",
      "Quality guarantee",
      "Bulk orders",
      "Home delivery"
    ]
  },
  {
    id: 5,
    name: "Household & Cleaning",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=300&fit=crop",
    description: "Cleaning supplies & household essentials",
    icon: "🧽",
    color: "from-indigo-500 to-purple-600",
    whatsappMessage: "Hi! I need household and cleaning supplies. Can you tell me about your available products and offers?",
    contactInfo: {
      phone: "+92 331 7590842",
      whatsapp: "+92 331 7590842",
      businessHours: "Mon-Thu, Sat-Sun: 6 AM-10 AM and 2 PM-10 PM; Friday: 6 AM-10 PM",
      location: "Chak No 297 JB, Gojra, Pakistan"
    },
    popularItems: [
      "Laundry Detergent",
      "Dish Soap",
      "Toilet Paper",
      "Paper Towels",
      "Broom & Dustpan"
    ],
    services: [
      "Bulk packs",
      "Special offers",
      "Home delivery",
      "Quality guarantee"
    ]
  },
  {
    id: 6,
    name: "Personal Care & Health",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&h=300&fit=crop",
    description: "Hygiene products & health essentials",
    icon: "🧴",
    color: "from-green-500 to-emerald-600",
    whatsappMessage: "Hi! I'm interested in personal care and health products. Can you tell me about your available items and prices?",
    contactInfo: {
      phone: "+92 331 7590842",
      whatsapp: "+92 331 7590842",
      businessHours: "Mon-Thu, Sat-Sun: 6 AM-10 AM and 2 PM-10 PM; Friday: 6 AM-10 PM",
      location: "Chak No 297 JB, Gojra, Pakistan"
    },
    popularItems: [
      "Anti-Dandruff Shampoo",
      "Body Wash",
      "Hand Soap",
      "Toothpaste",
      "Face Cream"
    ],
    services: [
      "Quality brands",
      "Bulk discounts",
      "Home delivery",
      "Special offers"
    ]
  }
];

export const products: Product[] = [
  // Staple Foods
  {
    id: 1,
    name: "Basmati Rice",
    category: "Staple Foods",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 156,
    badge: "Premium",
    description: "Premium quality basmati rice, perfect for biryani and pulao dishes.",
    available: true,
    price: "PKR 120/kg",
    originalPrice: "PKR 150/kg"
  },
  {
    id: 2,
    name: "Red Lentils",
    category: "Staple Foods",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 89,
    badge: "Organic",
    description: "Organic red lentils, rich in protein and essential nutrients.",
    available: true,
    price: "PKR 80/kg",
    originalPrice: "PKR 100/kg"
  },
  {
    id: 3,
    name: "Spaghetti Pasta",
    category: "Staple Foods",
    image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 67,
    badge: "Best Value",
    description: "Classic spaghetti pasta, perfect for Italian dishes.",
    available: false,
    price: "PKR 60/pack",
    originalPrice: "PKR 75/pack"
  },
  {
    id: 4,
    name: "Olive Oil Extra Virgin",
    category: "Staple Foods",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 234,
    badge: "Premium",
    description: "Extra virgin olive oil, cold-pressed for maximum flavor and health benefits.",
    available: true,
    price: "PKR 450/liter",
    originalPrice: "PKR 550/liter"
  },
  {
    id: 5,
    name: "Mixed Spices Pack",
    category: "Staple Foods",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 123,
    badge: "Popular",
    description: "Assorted spices including turmeric, cumin, coriander, and garam masala.",
    available: true,
    price: "PKR 200/pack",
    originalPrice: "PKR 250/pack"
  },
  {
    id: 6,
    name: "Whole Wheat Flour",
    category: "Staple Foods",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 78,
    badge: "Healthy",
    description: "Nutritious whole wheat flour for healthy baking and cooking.",
    available: false,
    price: "PKR 90/kg",
    originalPrice: "PKR 110/kg"
  },

  // Beverages
  {
    id: 7,
    name: "Mineral Water (12 Pack)",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 145,
    badge: "Best Seller",
    description: "Pure mineral water, essential for daily hydration.",
    available: true,
    price: "PKR 120/pack",
    originalPrice: "PKR 150/pack"
  },
  {
    id: 8,
    name: "Fresh Orange Juice",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop",
    rating: 4.4,
    reviews: 92,
    badge: "Fresh",
    description: "Freshly squeezed orange juice, rich in vitamin C.",
    available: true,
    price: "PKR 180/liter",
    originalPrice: "PKR 220/liter"
  },
  {
    id: 9,
    name: "Cola Soft Drink (6 Pack)",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&h=300&fit=crop",
    rating: 4.3,
    reviews: 167,
    badge: "Popular",
    description: "Classic cola soft drink, perfect for parties and gatherings.",
    available: false,
    price: "PKR 150/pack",
    originalPrice: "PKR 180/pack"
  },
  {
    id: 10,
    name: "Green Tea Bags (50 Pack)",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 89,
    badge: "Healthy",
    description: "Antioxidant-rich green tea, great for health and wellness.",
    available: true,
    price: "PKR 250/pack",
    originalPrice: "PKR 300/pack"
  },

  // Snacks & Namkeen
  {
    id: 11,
    name: "Mixed Namkeen",
    category: "Snacks & Namkeen",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 134,
    badge: "Traditional",
    description: "Traditional mixed namkeen with peanuts, sev, and spices.",
    available: true,
    price: "PKR 80/500g",
    originalPrice: "PKR 100/500g"
  },
  {
    id: 12,
    name: "Potato Chips Classic",
    category: "Snacks & Namkeen",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 256,
    badge: "Classic",
    description: "Crispy potato chips with classic salted flavor.",
    available: true,
    price: "PKR 50/pack",
    originalPrice: "PKR 60/pack"
  },
  {
    id: 13,
    name: "Roasted Peanuts",
    category: "Snacks & Namkeen",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 98,
    badge: "Protein Rich",
    description: "Roasted and salted peanuts, high in protein and healthy fats.",
    available: false,
    price: "PKR 120/kg",
    originalPrice: "PKR 140/kg"
  },
  {
    id: 14,
    name: "Assorted Biscuits",
    category: "Snacks & Namkeen",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop",
    rating: 4.4,
    reviews: 112,
    badge: "Assorted",
    description: "Assorted biscuits pack with various flavors and textures.",
    available: true,
    price: "PKR 100/pack",
    originalPrice: "PKR 120/pack"
  },

  // Dairy
  {
    id: 15,
    name: "Fresh Milk Full Cream",
    category: "Dairy & Eggs",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 189,
    badge: "Fresh",
    description: "Fresh full cream milk, rich in calcium and essential nutrients.",
    available: true,
    price: "PKR 60/liter",
    originalPrice: "PKR 70/liter"
  },
  {
    id: 16,
    name: "Cheddar Cheese Block",
    category: "Dairy & Eggs",
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 76,
    badge: "Premium",
    description: "Aged cheddar cheese, perfect for sandwiches and cooking.",
    available: false,
    price: "PKR 400/250g",
    originalPrice: "PKR 450/250g"
  },
  {
    id: 17,
    name: "Fresh Eggs (Dozen)",
    category: "Dairy & Eggs",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 145,
    badge: "Farm Fresh",
    description: "Farm fresh eggs, rich in protein and essential vitamins.",
    available: true,
    price: "PKR 180/dozen",
    originalPrice: "PKR 200/dozen"
  },
  {
    id: 18,
    name: "Natural Yogurt",
    category: "Dairy & Eggs",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 67,
    badge: "Probiotic",
    description: "Natural yogurt with live cultures, great for digestive health.",
    available: true,
    price: "PKR 120/500g",
    originalPrice: "PKR 140/500g"
  },

  // Household & Cleaning
  {
    id: 19,
    name: "Laundry Detergent",
    category: "Household & Cleaning",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 123,
    badge: "Power Clean",
    description: "Powerful liquid laundry detergent for deep cleaning clothes.",
    available: true,
    price: "PKR 350/bottle",
    originalPrice: "PKR 400/bottle"
  },
  {
    id: 20,
    name: "Lemon Dish Soap",
    category: "Household & Cleaning",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 89,
    badge: "Fresh Scent",
    description: "Lemon-scented dish soap for clean and fresh dishes.",
    available: true,
    price: "PKR 120/bottle",
    originalPrice: "PKR 140/bottle"
  },
  {
    id: 21,
    name: "Toilet Paper (12 Pack)",
    category: "Household & Cleaning",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    rating: 4.4,
    reviews: 167,
    badge: "Essential",
    description: "Soft and strong toilet paper, essential household item.",
    available: false,
    price: "PKR 200/pack",
    originalPrice: "PKR 240/pack"
  },
  {
    id: 22,
    name: "Paper Towels (6 Pack)",
    category: "Household & Cleaning",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 98,
    badge: "Absorbent",
    description: "Highly absorbent paper towels for kitchen and cleaning use.",
    available: true,
    price: "PKR 150/pack",
    originalPrice: "PKR 180/pack"
  },
  {
    id: 23,
    name: "Broom & Dustpan Set",
    category: "Household & Cleaning",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 56,
    badge: "Complete Set",
    description: "Complete broom and dustpan set for effective cleaning.",
    available: true,
    price: "PKR 250/set",
    originalPrice: "PKR 300/set"
  },

  // Personal Care & Health
  {
    id: 24,
    name: "Anti-Dandruff Shampoo",
    category: "Personal Care & Health",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 134,
    badge: "Anti-Dandruff",
    description: "Anti-dandruff shampoo for healthy scalp and hair.",
    available: true,
    price: "PKR 280/bottle",
    originalPrice: "PKR 320/bottle"
  },
  {
    id: 25,
    name: "Lavender Body Wash",
    category: "Personal Care & Health",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 87,
    badge: "Relaxing",
    description: "Lavender-scented body wash for a relaxing shower experience.",
    available: false,
    price: "PKR 220/bottle",
    originalPrice: "PKR 250/bottle"
  },
  {
    id: 26,
    name: "Hand Soap Refill",
    category: "Personal Care & Health",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&h=300&fit=crop",
    rating: 4.4,
    reviews: 112,
    badge: "Refill",
    description: "Hand soap refill for maintaining hygiene and cleanliness.",
    available: true,
    price: "PKR 150/refill",
    originalPrice: "PKR 180/refill"
  },
  {
    id: 27,
    name: "Fresh Mint Toothpaste",
    category: "Personal Care & Health",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 189,
    badge: "Fresh Breath",
    description: "Fresh mint toothpaste for clean teeth and fresh breath.",
    available: true,
    price: "PKR 120/tube",
    originalPrice: "PKR 140/tube"
  },
  {
    id: 28,
    name: "Moisturizing Face Cream",
    category: "Personal Care & Health",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 76,
    badge: "Moisturizing",
    description: "Deep moisturizing face cream for all skin types.",
    available: true,
    price: "PKR 350/tube",
    originalPrice: "PKR 400/tube"
  },

  // Stationery
  {
    id: 29,
    name: "A4 Notebooks (5 Pack)",
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 67,
    badge: "Multi-Pack",
    description: "A4 size notebooks with lined pages, perfect for school and office.",
    available: true,
    price: "PKR 200/pack",
    originalPrice: "PKR 250/pack"
  },
  {
    id: 30,
    name: "Blue Pens (10 Pack)",
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=400&h=300&fit=crop",
    rating: 4.4,
    reviews: 89,
    badge: "Smooth Writing",
    description: "Smooth writing blue pens, ideal for daily use.",
    available: false,
    price: "PKR 80/pack",
    originalPrice: "PKR 100/pack"
  },
  {
    id: 31,
    name: "HB Pencils (12 Pack)",
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 45,
    badge: "HB Grade",
    description: "HB grade pencils, perfect for writing and drawing.",
    available: true,
    price: "PKR 60/pack",
    originalPrice: "PKR 75/pack"
  },
  {
    id: 32,
    name: "Erasers (5 Pack)",
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=400&h=300&fit=crop",
    rating: 4.3,
    reviews: 34,
    badge: "Clean Erase",
    description: "Clean erasing erasers, essential for neat work.",
    available: true,
    price: "PKR 40/pack",
    originalPrice: "PKR 50/pack"
  }
];

// Featured products for homepage (subset of products without prices)
export const featuredProducts = products.slice(0, 4).map(product => ({
  id: product.id,
  name: product.name,
  image: product.image,
  rating: product.rating,
  badge: product.badge
}));

// Helper functions
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getAvailableProducts = (): Product[] => {
  return products.filter(product => product.available);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery)
  );
};

export const getCategories = (): string[] => {
  return [...new Set(products.map(product => product.category))];
}; 