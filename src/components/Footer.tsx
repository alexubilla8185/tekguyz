import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Sun, Palmtree, Mail, Phone, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                <Code className="h-8 w-8 text-orange-500" />
                <Sun className="h-6 w-6 text-yellow-500" />
                <Palmtree className="h-6 w-6 text-green-500" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">TEKGUYZ</span>
            </Link>
            
            <p className="text-gray-300 mb-8 max-w-lg leading-relaxed">
              Your trusted tech partner, delivering cutting-edge DevOps solutions, 
              custom software development, and expert consulting to accelerate your business growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <a 
                  href="mailto:info@tekguyz.com" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                >
                  info@tekguyz.com
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <a 
                  href="tel:+13058575258" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                >
                  +1 (305) 857-5258
                </a>
              </div>
            </div>
          </div>

          {/* Social Media & Navigation */}
          <div className="flex flex-col justify-between">
            {/* Navigation Links */}
            <div className="mb-8">
              <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/" 
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    Services
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/company/tekguyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-orange-500 hover:to-pink-500 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="h-6 w-6 text-white" />
                </a>
                <a 
                  href="https://instagram.com/tekguyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-pink-500 hover:to-purple-500 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="h-6 w-6 text-white" />
                </a>
                <a 
                  href="https://facebook.com/tekguyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-blue-500 hover:to-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 TEKGUYZ. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;