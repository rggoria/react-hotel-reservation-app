import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    // Check the initial scroll position.
    handleScroll();

    // Listen for scrolling without blocking the browser's scroll handling.
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Remove the listener when the component unmounts.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <a
      href="#home"
      className="btn btn-success btn-circle btn-lg fixed right-5 bottom-5 z-50 shadow-lg transition-all duration-300 hover:-translate-y-1 sm:right-8 sm:bottom-8"
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp size={22} aria-hidden="true" />
    </a>
  );
}

export default BackToTop;
