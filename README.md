# HA Super Store - React Grocery App

A modern, responsive grocery store application built with React and TypeScript.

## 🚀 Features

- **Centralized Data Management**: All products and categories are stored in a single external file
- **Real-time Search**: Functional search with dropdown results and availability status
- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **Category Filtering**: Easy navigation through different product categories
- **Product Catalog**: Comprehensive product listing with filtering and sorting
- **WhatsApp Integration**: Direct contact for pricing and orders
- **Localized Content**: Pakistani Rupee (PKR) currency and local product names

## 📁 Project Structure

```
src/
├── data/
│   └── products.ts          # Centralized products and categories data
├── components/
│   ├── Header.tsx          # Navigation with search functionality
│   ├── Footer.tsx          # Site footer with contact info
│   ├── ProductCatalog.tsx  # Product listing component
│   └── WhatsAppButton.tsx  # WhatsApp contact button
├── pages/
│   ├── Homepage.tsx        # Landing page with featured products
│   └── ProductCatalog.tsx  # Full product catalog page
└── App.tsx                 # Main application component
```

## 📊 Data Management

### External Data File: `src/data/products.ts`

All products and categories are centralized in a single file for easy management:

#### Benefits:
- **Single Source of Truth**: All product data in one place
- **Easy Updates**: Modify products without touching component code
- **Type Safety**: TypeScript interfaces ensure data consistency
- **Reusable**: Import data in any component that needs it
- **Maintainable**: Clear structure with helper functions

#### Key Features:
- **Product Interface**: Structured product data with all necessary fields
- **Category Interface**: Organized category information with styling
- **Helper Functions**: 
  - `getProductsByCategory()` - Filter products by category
  - `getAvailableProducts()` - Get only available products
  - `searchProducts()` - Search across name, category, and description
  - `getCategories()` - Get unique category list

#### Example Usage:

```typescript
import { products, searchProducts, getProductsByCategory } from '../data/products';

// Get all products
const allProducts = products;

// Search products
const searchResults = searchProducts('rice');

// Get products by category
const stapleFoods = getProductsByCategory('Staple Foods');

// Get available products only
const availableProducts = products.filter(p => p.available);
```

## 🛍️ Product Categories

1. **Fresh Produce** - Fruits, vegetables & herbs
2. **Staple Foods** - Rice, lentils, pasta & oils
3. **Beverages** - Water, juices & soft drinks
4. **Snacks & Treats** - Traditional snacks & treats
5. **Dairy & Eggs** - Fresh milk, cheese & eggs
6. **Household Care** - Cleaning & household essentials

## 💰 Pricing & Currency

- All prices displayed in **Pakistani Rupee (PKR)**
- Competitive pricing with regular discounts
- Bulk order pricing available via WhatsApp contact

## 📱 Contact & Support

- **WhatsApp**: Direct product inquiries and orders
- **Phone**: Customer support hotline
- **Email**: General inquiries and feedback
- **Address**: Physical store location

## 🛠️ Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
npm install
npm start
```

### Building for Production
```bash
npm run build
```

## 🔧 Customization

### Adding New Products
1. Open `src/data/products.ts`
2. Add new product to the `products` array
3. Follow the existing structure and TypeScript interface
4. Save and the changes will be reflected across all components

### Modifying Categories
1. Update the `categories` array in `src/data/products.ts`
2. Add corresponding products with the new category name
3. Components will automatically update to show the new category

### Changing Currency
1. Update price fields in `src/data/products.ts`
2. Modify currency display in components as needed

## 🎨 Design System

- **Primary Colors**: Blue gradient theme
- **Typography**: Modern, readable fonts
- **Icons**: Lucide React icons
- **Responsive**: Mobile-first design approach
- **Animations**: Smooth transitions and hover effects

## 📄 License

This project is for educational and demonstration purposes.

---

**HA Super Store** - Your trusted grocery partner in Pakistan 🇵🇰 