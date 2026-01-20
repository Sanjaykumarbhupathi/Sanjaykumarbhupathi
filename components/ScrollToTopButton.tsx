'use client';
import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
<button
  onClick={scrollToTop}
  className="fixed bottom-6 left-6 z-50 bg-gray-200 text-white p-3 rounded-full shadow-lg dark:bg-gray-700 dark:text-gray-900  transition"
  aria-label="Scroll to top"
>
  <ChevronUp className="w-5 h-5" />
</button>

    )
  );
};

export default ScrollToTopButton;
