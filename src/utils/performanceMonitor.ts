/**
 * Performance monitoring utilities for tracking scroll and navigation performance
 */

interface PerformanceMetrics {
  scrollToTopTime: number;
  navigationTime: number;
  memoryUsage?: number;
  timestamp: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics[] = [];
  private maxMetrics = 100; // Keep only last 100 metrics

  /**
   * Measure scroll to top performance
   */
  measureScrollToTop = (callback: () => void): void => {
    const startTime = performance.now();
    
    callback();
    
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    this.addMetric({
      scrollToTopTime: duration,
      navigationTime: 0,
      timestamp: Date.now()
    });
  };

  /**
   * Measure navigation performance
   */
  measureNavigation = (callback: () => void): void => {
    const startTime = performance.now();
    
    callback();
    
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    this.addMetric({
      scrollToTopTime: 0,
      navigationTime: duration,
      timestamp: Date.now()
    });
  };

  /**
   * Add metric to the collection
   */
  private addMetric = (metric: PerformanceMetrics): void => {
    this.metrics.push(metric);
    
    // Keep only the last maxMetrics
    if (this.metrics.length > this.maxMetrics) {
      this.metrics = this.metrics.slice(-this.maxMetrics);
    }
  };

  /**
   * Get average scroll to top time
   */
  getAverageScrollTime = (): number => {
    if (this.metrics.length === 0) return 0;
    
    const scrollTimes = this.metrics
      .filter(m => m.scrollToTopTime > 0)
      .map(m => m.scrollToTopTime);
    
    if (scrollTimes.length === 0) return 0;
    
    return scrollTimes.reduce((sum, time) => sum + time, 0) / scrollTimes.length;
  };

  /**
   * Get average navigation time
   */
  getAverageNavigationTime = (): number => {
    if (this.metrics.length === 0) return 0;
    
    const navigationTimes = this.metrics
      .filter(m => m.navigationTime > 0)
      .map(m => m.navigationTime);
    
    if (navigationTimes.length === 0) return 0;
    
    return navigationTimes.reduce((sum, time) => sum + time, 0) / navigationTimes.length;
  };

  /**
   * Get performance report
   */
  getPerformanceReport = (): {
    averageScrollTime: number;
    averageNavigationTime: number;
    totalMetrics: number;
    lastMetricTime: number;
  } => {
    return {
      averageScrollTime: this.getAverageScrollTime(),
      averageNavigationTime: this.getAverageNavigationTime(),
      totalMetrics: this.metrics.length,
      lastMetricTime: this.metrics.length > 0 ? this.metrics[this.metrics.length - 1].timestamp : 0
    };
  };

  /**
   * Clear all metrics
   */
  clearMetrics = (): void => {
    this.metrics = [];
  };
}

// Create singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Export individual functions for convenience
export const measureScrollToTop = performanceMonitor.measureScrollToTop;
export const measureNavigation = performanceMonitor.measureNavigation;
export const getPerformanceReport = performanceMonitor.getPerformanceReport; 