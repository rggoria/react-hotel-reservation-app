import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Menu, X, Sun, Moon, ArrowRight, MessageSquare } from "lucide-react";

import { hotel } from "../../../data/hotel";

type Theme = "light" | "dark";

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
};

function getInitialTheme(): Theme {
  try {
    return localStorage.getItem("hotel-theme") === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

// Keep this component outside Navbar.
function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="btn btn-ghost btn-square"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon size={20} aria-hidden="true" />
      ) : (
        <Sun size={20} aria-hidden="true" />
      )}
    </button>
  );
}

const links = [
  { label: "Home", href: "/#home" },
  { label: "Rooms", href: "/#rooms" },
  { label: "Amenities", href: "/#amenities" },
  { label: "Food & Dining", href: "/#food" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Apply theme.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    try {
      localStorage.setItem("hotel-theme", theme);
    } catch {
      // Ignore storage errors.
    }
  }, [theme]);

  // Close mobile menu on desktop resize.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-base-300/70 bg-base-100/80 text-base-content shadow-sm backdrop-blur-xl">
      <div className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex-1">
          <Link
            to="/#home"
            aria-label="Hotel home"
            className="text-2xl font-bold tracking-tight text-success"
            onClick={closeMenu}
          >
            hotel<span className="text-warning">.</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 md:flex"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={closeMenu}
              className="rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-base-200 hover:text-success"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden flex-1 items-center justify-end gap-2 md:flex">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />

          <a
            href={`mailto:${hotel.email}`}
            className="btn btn-success btn-sm sm:btn-md"
          >
            <MessageSquare size={17} aria-hidden="true" />
            Send an Enquiry
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />

          <button
            type="button"
            className="btn btn-ghost btn-square"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
      >
        <div className="overflow-hidden">
          <nav
            aria-label="Mobile navigation"
            className="border-t border-base-300 bg-base-100/90 px-4 py-4 backdrop-blur-xl sm:px-6"
          >
            <ul className="menu w-full items-center gap-1 p-0">
              {links.map((link) => (
                <li key={link.href} className="w-full">
                  <Link
                    to={link.href}
                    onClick={closeMenu}
                    className="justify-center text-center font-medium transition-colors hover:text-success"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {/* Mobile enquiry */}
              <li className="mt-2 w-full border-t border-base-300 pt-3">
                <a
                  href={`mailto:${hotel.email}`}
                  className="justify-center text-center font-semibold text-success"
                  onClick={closeMenu}
                >
                  <MessageSquare size={17} aria-hidden="true" />
                  Send an Enquiry
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
