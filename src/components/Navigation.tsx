import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Code, Sun, Palmtree } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-orange-50/90 to-pink-50/90 backdrop-blur-md border-b border-orange-200/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo - Back to simplified version with proper spacing */}
          <Link 
            to="/" 
            onClick={handleNavClick} 
            className="flex items-center space-x-2 flex-shrink-0 min-w-0 max-w-[calc(100vw-80px)]"
          >
            <div className="flex items-center space-x-1 flex-shrink-0 min-w-0">
              <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                <Code className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
              </div>
              <div className="p-2 bg-yellow-300/30 rounded-full backdrop-blur-sm">
                <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
              </div>
              <div className="p-2 bg-green-400/30 rounded-full backdrop-blur-sm">
                <Palmtree className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
              </div>
            </div>
            <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent whitespace-nowrap overflow-hidden text-ellipsis">
              TEKGUYZ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-shrink-0">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleNavClick}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-orange-600'
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500"
                    layoutId="underline"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0 ml-2 w-12 flex justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-colors duration-200 w-10 h-10"
              aria-expanded="false"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-orange-200/50 absolute left-0 right-0 top-full z-50"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;