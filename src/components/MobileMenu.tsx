import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, X } from 'lucide-react';

interface MobileMenuProps {
  setMobileMenuOpen: (open: boolean) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ setMobileMenuOpen, darkMode, setDarkMode }) => {
  const menuItems = [
    { href: '#about', label: 'About' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#themes', label: 'Themes' },
    { href: '#speakers', label: 'Speakers' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="fixed inset-y-0 right-0 w-[250px] bg-white dark:bg-gray-900 shadow-2xl z-50 overflow-y-auto"
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base hover:text-purple-600 dark:hover:text-purple-400"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center space-x-2 w-full py-2 hover:text-purple-600 dark:hover:text-purple-400"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <>
                  <Sun className="w-4 h-4" />
                  <span className="text-sm">Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4" />
                  <span className="text-sm">Dark Mode</span>
                </>
              )}
            </button>
          </div>
          <a
            href="#register"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center bg-purple-600 text-white py-2 rounded-full text-sm hover:bg-purple-700 transition-colors mt-4"
          >
            Register Now
          </a>
        </nav>
      </div>
    </motion.div>
  );
};

export default MobileMenu;