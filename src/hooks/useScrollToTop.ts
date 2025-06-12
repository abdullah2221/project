import { useEffect, useCallback, useRef } from 'react';
import { scrollToTop as optimizedScrollToTop } from '../utils/scrollUtils';

/**
 * Custom hook for optimized scroll-to-top functionality
 * Includes performance optimizations and proper cleanup
 */
export const useScrollToTop = (dependencies: any[] = []) => {
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Memoized scroll function with performance optimizations
  const scrollToTop = useCallback(() => {
    // Prevent multiple simultaneous scroll operations
    if (isScrollingRef.current) {
      return;
    }

    // Only scroll if we're not already at the top
    if (window.scrollY === 0) {
      return;
    }

    isScrollingRef.current = true;

    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Use optimized scroll utility
    optimizedScrollToTop('smooth');

    // Reset scrolling flag after animation completes
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000); // Typical smooth scroll duration
  }, []);

  useEffect(() => {
    scrollToTop();

    // Cleanup function
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      isScrollingRef.current = false;
    };
  }, dependencies);

  return scrollToTop;
}; 