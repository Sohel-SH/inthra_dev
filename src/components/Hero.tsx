'use client'

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import bgImage from '@/images/whoweare1.png';

export function Hero() {
  const [heroHeight, setHeroHeight] = useState<number | null>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const headerRef = useRef<HTMLElement | null>(null);

  // Function to update hero height - defined without useCallback initially
  const updateHeroHeightFn = () => {
    // Use window.innerHeight for viewport height
    const windowHeight = window.innerHeight;
    
    // Get header height using the ref
    let currentHeaderHeight = headerHeight;
    
    if (headerRef.current) {
      currentHeaderHeight = headerRef.current.offsetHeight;
      if (currentHeaderHeight !== headerHeight) {
        setHeaderHeight(currentHeaderHeight);
      }
    } else {
      // Fallback to querySelector if ref is not set
      const header = document.querySelector('header');
      if (header) {
        headerRef.current = header as HTMLElement;
        currentHeaderHeight = header.offsetHeight;
        setHeaderHeight(currentHeaderHeight);
      }
    }
    
    setHeroHeight(windowHeight);
  };
  
  // Wrap the function in useCallback to prevent unnecessary re-renders
  const updateHeroHeight = useCallback(updateHeroHeightFn, [headerHeight]);
  
  // Use useLayoutEffect to ensure measurements happen before browser paint
  useLayoutEffect(() => {
    // Try to get header reference
    if (!headerRef.current) {
      headerRef.current = document.querySelector('header');
    }
    
    // Set up ResizeObserver to detect header size changes
    let resizeObserver: ResizeObserver | null = null;
    
    if (headerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        updateHeroHeight();
      });
      
      resizeObserver.observe(headerRef.current);
    }
    
    // Initial calculation with a slight delay to ensure DOM is fully loaded
    const initialTimer = setTimeout(() => {
      updateHeroHeight();
    }, 100);
    
    // Cleanup
    return () => {
      if (resizeObserver && headerRef.current) {
        resizeObserver.unobserve(headerRef.current);
        resizeObserver.disconnect();
      }
      clearTimeout(initialTimer);
    };
  }, [updateHeroHeight]);
  
  // Update hero height when header height changes
  useEffect(() => {
    updateHeroHeight();
  }, [updateHeroHeight]);
  
  // Update hero height on window resize and load
  useEffect(() => {
    // Add event listeners for resize and load events
    window.addEventListener('resize', updateHeroHeight);
    window.addEventListener('load', updateHeroHeight);
    
    // Run updateHeroHeight immediately
    updateHeroHeight();
    
    // Run updateHeroHeight after a short delay to ensure all elements are rendered
    const delayedUpdate = setTimeout(() => {
      updateHeroHeight();
    }, 500);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateHeroHeight);
      window.removeEventListener('load', updateHeroHeight);
      clearTimeout(delayedUpdate);
    };
  }, [updateHeroHeight]);

  return (
    <section
      className="relative flex-1 section-padding bg-gradient-to-br bg-fixed bg-center bg-cover hero-section"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        minHeight: heroHeight ? `${heroHeight}px` : '100vh',
      }}
    >
      <div className="absolute inset-0 bg-black/30 z-0" />
      <div className="relative z-10 container-custom h-full flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up">
            The New Era Of Insider{' '}
            <span className="bg-gradient-to-r from-[#4ade80] via-[#a3ff4e] to-[#cfff81] bg-clip-text text-transparent">
              Threat Detection
            </span>
          </h1>
          <p className="text-m sm:text-l text-white mb-8 max-w-xl mx-auto font-light animate-slide-up">
            Detect insider threats before they strike. Inthra combines AI, Graph Analytics, and custom rules to deliver real-time security insights. Stay ahead. Stay secure.
          </p>
        </div>
      </div>
    </section>
  )
}
