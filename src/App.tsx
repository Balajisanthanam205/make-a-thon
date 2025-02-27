import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Themes from './components/Themes';
import Speakers from './components/Speakers';
import FAQ from './components/FAQ';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import MobileMenu from './components/MobileMenu';
import ThemeAIML from './pages/ThemeAIML'; // Import the new page
import ThemeHealthcare from './pages/ThemeHealthcare';
import ThemeSustainability from './pages/ThemeSustainability';
import ThemeOpenInovation from './pages/ThemeOpenInovation';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`min-h-screen ${darkMode ? 'dark' : ''}`}
          >
            <div className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black min-h-screen transition-colors duration-300">
              <Navbar 
                darkMode={darkMode} 
                setDarkMode={setDarkMode}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
              />
              <AnimatePresence>
                {mobileMenuOpen && (
                  <MobileMenu 
                    setMobileMenuOpen={setMobileMenuOpen}
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                  />
                )}
              </AnimatePresence>
              <main>
                <Routes>
                  <Route path="/" element={
                    <>
                      <Hero />
                      <About />
                      <Timeline />
                      <Themes />
                      <Speakers />
                      <FAQ />
                      <Sponsors />
                    </>
                  } />
                  <Route path="/theme-aiml" element={<ThemeAIML />} />
                  <Route path="/theme-Healthcare" element={<ThemeHealthcare />} />
                  <Route path="/theme-Sustainability" element={<ThemeSustainability />} /> 
                  <Route path="/theme-open" element={<ThemeOpenInovation />} />{/* Add this route */}
                </Routes>
              </main>
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;