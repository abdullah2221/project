// Performance optimization utilities

// Debounce function to limit function calls
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function to limit function execution rate
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
): IntersectionObserver => {
  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  });
};

// Image preloader for better performance
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Batch DOM updates for better performance
export const batchDOMUpdates = (updates: (() => void)[]): void => {
  if (typeof window !== 'undefined' && window.requestAnimationFrame) {
    window.requestAnimationFrame(() => {
      updates.forEach(update => update());
    });
  } else {
    updates.forEach(update => update());
  }
};

// Memory-efficient event listener
export const addEventListenerWithCleanup = (
  element: EventTarget,
  event: string,
  handler: EventListener,
  options?: AddEventListenerOptions
): (() => void) => {
  element.addEventListener(event, handler, options);
  return () => element.removeEventListener(event, handler, options);
};

// Optimized scroll handler
export const createOptimizedScrollHandler = (
  handler: (scrollTop: number) => void,
  throttleMs: number = 16
) => {
  return throttle((event: Event) => {
    const scrollTop = (event.target as Element)?.scrollTop || window.scrollY;
    handler(scrollTop);
  }, throttleMs);
};

// Resource hints for better loading performance
export const addResourceHints = (urls: string[]): void => {
  if (typeof document === 'undefined') return;
  
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  });
};

// Performance monitoring
export const measurePerformance = <T extends (...args: any[]) => any>(
  name: string,
  fn: T
): T => {
  return ((...args: Parameters<T>) => {
    const start = performance.now();
    const result = fn(...args);
    const end = performance.now();
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`${name} took ${end - start}ms`);
    }
    
    return result;
  }) as T;
};

// Optimized array operations
export const chunkArray = <T>(array: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

// Efficient object cloning
export const shallowClone = <T>(obj: T): T => {
  if (Array.isArray(obj)) {
    return [...obj] as T;
  }
  if (obj && typeof obj === 'object') {
    return { ...obj };
  }
  return obj;
};

// Cache utility for expensive computations
export const createCache = <T extends (...args: any[]) => any>(
  fn: T,
  maxSize: number = 100
) => {
  const cache = new Map<string, ReturnType<T>>();
  
  return ((...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    
    const result = fn(...args);
    
    if (cache.size >= maxSize) {
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
    }
    
    cache.set(key, result);
    return result;
  }) as T;
}; 