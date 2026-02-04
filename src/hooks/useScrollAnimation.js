import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Percentage of element visibility to trigger (0-1)
 * @param {string} options.rootMargin - Margin around the root element
 * @param {boolean} options.triggerOnce - Whether to trigger animation only once
 * @returns {[React.RefObject, boolean]} - Returns ref to attach to element and visibility state
 */
export function useScrollAnimation(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
  } = options;

  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // If triggerOnce is true, disconnect observer after first trigger
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          // If triggerOnce is false, update visibility when element leaves viewport
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    // Cleanup
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [elementRef, isVisible];
}

/**
 * Hook specifically for fade-in-up animation
 * Automatically applies the 'animate-in' class when element becomes visible
 */
export function useFadeInUp(options = {}) {
  const [ref, isVisible] = useScrollAnimation(options);

  useEffect(() => {
    if (isVisible && ref.current) {
      ref.current.classList.add('animate-in');
    }
  }, [isVisible, ref]);

  return ref;
}

/**
 * Hook for stagger animation delays
 * Useful for animating lists of items with sequential delays
 * @param {number} itemCount - Number of items to animate
 * @param {number} delayIncrement - Delay increment in ms between items
 */
export function useStaggerAnimation(itemCount, delayIncrement = 100) {
  const [ref, isVisible] = useScrollAnimation();
  const itemsRef = useRef([]);

  useEffect(() => {
    if (isVisible && itemsRef.current.length > 0) {
      itemsRef.current.forEach((item, index) => {
        if (item) {
          setTimeout(() => {
            item.classList.add('animate-in');
          }, index * delayIncrement);
        }
      });
    }
  }, [isVisible, delayIncrement]);

  return [ref, itemsRef];
}

export default useScrollAnimation;
