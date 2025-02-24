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
      className="fixed inset-y-0 right-0 w-full sm:w-80 bg-white dark:bg-gray-900 shadow-2xl z-50"
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Menu</h2>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-lg hover:text-purple-600 dark:hover:text-purple-400"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center space-x-2 w-full py-2 hover:text-purple-600 dark:hover:text-purple-400"
            >
              {darkMode ? (
                <>
                  <Sun className="w-5 h-5" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-5 h-5" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
          <a
            href="#register"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition-colors mt-6"
          >
            Register Now
          </a>
        </nav>
      </div>
    </motion.div>
  );
};

export default MobileMenu;