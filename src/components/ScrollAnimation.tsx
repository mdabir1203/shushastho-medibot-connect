
import React, { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.9) {
          element.classList.add('animated');
        }
      });
    };
    
    // Initial check
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Add resize event listener to handle different screen sizes
    window.addEventListener('resize', animateOnScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
      window.removeEventListener('resize', animateOnScroll);
    };
  }, []);
  
  return null;
};

export default ScrollAnimation;
