import { useEffect } from 'react';

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export function useGsapAnimations() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      
      // Animate glass cards on scroll
      window.gsap.utils.toArray('.glass-card').forEach((card: any) => {
        window.gsap.fromTo(card, 
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Floating animations for hero background elements
      window.gsap.to('.animate-float', {
        y: -20,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });
    }
  }, []);
}
