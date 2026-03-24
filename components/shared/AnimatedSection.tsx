'use client';

import { useRef, useEffect, useState, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  /** Délai avant le démarrage de l'animation (ms) */
  delay?: number;
  /** Sens de l'animation */
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

// Composant qui anime ses enfants lorsqu'ils entrent dans le viewport
export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Styles de transformation initiale selon la direction
  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(32px)';
      case 'down': return 'translateY(-32px)';
      case 'left': return 'translateX(32px)';
      case 'right': return 'translateX(-32px)';
      case 'fade': return 'none';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getInitialTransform(),
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
