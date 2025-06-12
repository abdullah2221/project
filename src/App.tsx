import React, { Suspense, lazy, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { scrollToTop as optimizedScrollToTop } from './utils/scrollUtils';

// Lazy load components for better performance
const Homepage = lazy(() => import('./pages/Homepage'));
const CategoriesPage = lazy(() => import('./pages/CategoriesPage'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

// Optimized ScrollToTop component with better performance
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  // Memoized scroll function to prevent unnecessary re-creations
  const scrollToTop = useCallback(() => {
    // Only scroll if we're not already at the top
    if (window.scrollY > 0) {
      optimizedScrollToTop('smooth');
    }
  }, []);

  useEffect(() => {
    // Only scroll if we're not already at the top
    if (window.scrollY > 0) {
      scrollToTop();
    }
  }, [pathname, scrollToTop]);

  return null;
};

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-blue-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
      <div className="mt-4 text-center">
        <p className="text-gray-600 font-medium">Loading...</p>
        <p className="text-sm text-gray-500">H.A Super Store</p>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/products" element={<Navigate to="/categories" replace />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;