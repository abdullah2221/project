import { measureScrollToTop } from './performanceMonitor';

/**
 * Optimized scroll utilities for better performance
 */

// Throttle function to limit scroll event frequency
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): T => {
  let inThrottle: boolean;
  return ((...args: any[]) => {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  }) as T;
};

// Debounce function to delay scroll events
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): T => {
  let timeoutId: NodeJS.Timeout;
  return ((...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  }) as T;
};

// Optimized scroll to top function with performance monitoring
export const scrollToTop = (behavior: ScrollBehavior = 'smooth'): void => {
  // Check if already at top
  if (window.scrollY === 0) {
    return;
  }

  // Measure performance
  measureScrollToTop(() => {
    // Use requestAnimationFrame for better performance
    requestAnimationFrame(() => {
      try {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior
        });
      } catch (error) {
        // Fallback for browsers that don't support smooth scrolling
        window.scrollTo(0, 0);
      }
    });
  });
};

// Optimized scroll to element function
export const scrollToElement = (
  element: HTMLElement | null,
  offset: number = 0,
  behavior: ScrollBehavior = 'smooth'
): void => {
  if (!element) return;

  requestAnimationFrame(() => {
    try {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior
      });
    } catch (error) {
      // Fallback
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo(0, offsetPosition);
    }
  });
};

// Check if element is in viewport
export const isInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Get current scroll position
export const getScrollPosition = (): { x: number; y: number } => ({
  x: window.pageXOffset || document.documentElement.scrollLeft,
  y: window.pageYOffset || document.documentElement.scrollTop
});

// Check if scrolled to bottom
export const isScrolledToBottom = (threshold: number = 100): boolean => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const documentHeight = document.documentElement.scrollHeight;
  
  return scrollTop + windowHeight >= documentHeight - threshold;
}; 