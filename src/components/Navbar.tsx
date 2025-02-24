import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Sun, Moon, Menu } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, mobileMenuOpen, setMobileMenuOpen }) => {
  const [activeSection, setActiveSection] = useState('');
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex-shrink-0">
            <span className="text-base sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Make-a-Thon 6.0
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-6 flex items-center space-x-4 sm:space-x-6">
              {['about', 'timeline', 'themes', 'speakers', 'faq'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`text-sm capitalize transition-colors ${
                    activeSection === section
                      ? 'text-purple-600 dark:text-purple-400'
                      : 'hover:text-purple-600 dark:hover:text-purple-400'
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <motion.div
                      layoutId="activeSection"
                      className="h-0.5 bg-purple-600 dark:bg-purple-400 mt-0.5"
                    />
                  )}
                </a>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <a
                href="#register"
                className="bg-purple-600 text-white px-4 py-1.5 text-sm rounded-full hover:bg-purple-700 transition-colors"
              >
                Register Now
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;